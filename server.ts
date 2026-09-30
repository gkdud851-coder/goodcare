import fs from "fs";
import path from "path";
import express from "express";
import { renderRoute } from "./src/entry-server";

const isProd = process.env.NODE_ENV === "production";
const PORT = 3000;

async function createServer() {
  const app = express();

  if (!isProd) {
    // Development mode: use Vite dev middleware
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });

    app.use(vite.middlewares);

    // Serve HTML with SSR in development
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        const indexHtmlPath = path.resolve(process.cwd(), "index.html");
        let template = fs.readFileSync(indexHtmlPath, "utf-8");
        template = await vite.transformIndexHtml(url, template);

        const result = renderRoute(url);

        // Inject dynamic metadata
        let html = template
          .replace(/<title>.*?<\/title>/i, `<title>${result.title}</title>`)
          .replace(
            /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta name="description" content="${result.description.replace(/"/g, "&quot;")}" />`
          )
          .replace(
            /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta property="og:title" content="${result.title.replace(/"/g, "&quot;")}" />`
          )
          .replace(
            /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta property="og:description" content="${result.description.replace(/"/g, "&quot;")}" />`
          );

        if (html.includes('<link rel="canonical"')) {
          html = html.replace(
            /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
            `<link rel="canonical" href="${result.canonical}" />`
          );
        } else {
          html = html.replace(
            "</head>",
            `  <link rel="canonical" href="${result.canonical}" />\n  </head>`
          );
        }

        // Inject server-rendered DOM into #root
        html = html.replace('<div id="root"></div>', `<div id="root">${result.html}</div>`);

        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    // Production mode: Serve pre-rendered static files first
    const distPath = path.resolve(process.cwd(), "dist");

    // Static asset serving (e.g. assets, images)
    app.use(express.static(distPath, { index: false }));

    // SSR fallback for any route
    app.use("*", (req, res) => {
      const url = req.originalUrl.split("?")[0].replace(/\/+$/, "") || "/";
      
      // Look for pre-rendered SSG file
      let ssgFile = path.join(distPath, url === "/" ? "index.html" : `${url.replace(/^\//, "")}/index.html`);
      
      if (fs.existsSync(ssgFile)) {
        res.sendFile(ssgFile);
        return;
      }

      // If not pre-rendered, render on the fly with SSR
      try {
        const template = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");
        const result = renderRoute(req.originalUrl);

        let html = template
          .replace(/<title>.*?<\/title>/i, `<title>${result.title}</title>`)
          .replace(
            /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta name="description" content="${result.description.replace(/"/g, "&quot;")}" />`
          )
          .replace(
            /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta property="og:title" content="${result.title.replace(/"/g, "&quot;")}" />`
          )
          .replace(
            /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
            `<meta property="og:description" content="${result.description.replace(/"/g, "&quot;")}" />`
          );

        html = html.replace('<div id="root"></div>', `<div id="root">${result.html}</div>`);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (err) {
        res.sendFile(path.join(distPath, "index.html"));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT} in ${isProd ? "production" : "development"} mode with SSR/SSG.`);
  });
}

createServer();

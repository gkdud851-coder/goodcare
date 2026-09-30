import fs from "fs";
import path from "path";
import { COLUMNS_DATA } from "../src/data/columnsData";
import { renderRoute } from "../src/entry-server";

// Routes to statically generate
const routes: string[] = [
  "/",
  "/columns",
  "/consulting",
  ...COLUMNS_DATA.map((col) => col.path), // /column/1, /column/2, ...
  ...COLUMNS_DATA.map((col) => `/${col.id}`), // /step1, /step2, ... (fallback aliases)
];

const distDir = path.resolve(process.cwd(), "dist");
const templatePath = path.resolve(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found! Run `vite build` first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, "utf-8");

for (const route of routes) {
  const result = renderRoute(route);

  // Replace title, meta description, og tags, and #root
  let html = template;

  // Replace Title
  html = html.replace(
    /<title>.*?<\/title>/i,
    `<title>${result.title}</title>`
  );

  // Replace Meta Description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta name="description" content="${result.description.replace(/"/g, "&quot;")}" />`
  );

  // Replace Open Graph Title & Description
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:title" content="${result.title.replace(/"/g, "&quot;")}" />`
  );

  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
    `<meta property="og:description" content="${result.description.replace(/"/g, "&quot;")}" />`
  );

  // Add canonical tag if missing, or update
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

  // Inject rendered HTML into #root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${result.html}</div>`
  );

  // Determine output path
  let outFilePath = "";
  if (route === "/") {
    outFilePath = path.join(distDir, "index.html");
  } else {
    const routeFolder = path.join(distDir, route.replace(/^\//, ""));
    fs.mkdirSync(routeFolder, { recursive: true });
    outFilePath = path.join(routeFolder, "index.html");
  }

  fs.writeFileSync(outFilePath, html, "utf-8");
  console.log(`[SSG] Generated static HTML for: ${route} -> ${path.relative(process.cwd(), outFilePath)}`);
}

console.log("SSG pre-render completed successfully!");

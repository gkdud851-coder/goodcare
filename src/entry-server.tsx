import { renderToString } from "react-dom/server";
import App from "./App";
import { COLUMNS_DATA, ColumnMeta } from "./data/columnsData";

export interface RenderResult {
  html: string;
  title: string;
  description: string;
  canonical: string;
}

export function renderRoute(urlPath: string): RenderResult {
  const cleanPath = urlPath.replace(/\/+$/, "") || "/";
  let appHtml = "";
  let title = "굿케어 주간보호센터 요양원 창업 가이드 | 일생일대 30분 무료 컨설팅 및 창업칼럼";
  let description = '"복지도 사업이다!" 방문요양, 주간보호, 요양원 등 장기요양기관은 정부에서 위탁받아 운영하는 복지사업입니다. 따라서 일반적인 사업의 목표인 \'수익 극대화\'뿐 아니라 \'수익 지키기\'까지 잘 해야 합니다. 1,400기관의 선택, 굿케어가 가장 잘하는 것! 장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.';
  let canonical = "https://goodcarestart.com/";

  if (cleanPath === "/" || cleanPath === "") {
    appHtml = renderToString(<App initialPath="/" />);
    canonical = "https://goodcarestart.com/";
  } else if (cleanPath === "/columns" || cleanPath === "/column") {
    title = "창업 칼럼 목록 | 굿케어 주간보호센터 & 요양원 창업 가이드";
    description = "주간보호센터 및 요양원 창업의 13단계 실전 노하우! 자격증, 무경력, 양도양수, 정부지원금, 노유자시설, 9인 요양원 수익 분석까지 총망라.";
    canonical = "https://goodcarestart.com/columns";
    appHtml = renderToString(<App initialPath="/columns" />);
  } else if (cleanPath === "/consulting") {
    title = "일생일대 30분 무료 창업 컨설팅 안내 | 굿케어";
    description = "1,400개 장기요양기관 경영지원 노하우를 담은 1:1 맞춤형 30분 무료 창업 컨설팅. 주간보호센터·요양원 인허가 및 수익성 검증을 무료로 받아보세요.";
    canonical = "https://goodcarestart.com/consulting";
    appHtml = renderToString(<App initialPath="/consulting" />);
  } else {
    // Check if column page e.g. /column/1 or /step1
    let col: ColumnMeta | undefined;
    if (cleanPath.startsWith("/column/")) {
      const slug = cleanPath.replace("/column/", "");
      col = COLUMNS_DATA.find((c) => c.slug === slug || c.id === slug);
    } else {
      const slug = cleanPath.replace("/", "");
      col = COLUMNS_DATA.find((c) => c.slug === slug || c.id === slug || c.aliases.includes(slug));
    }

    if (col) {
      title = col.pageTitle;
      description = col.description;
      canonical = `https://goodcarestart.com${col.path}`;
      appHtml = renderToString(<App initialPath={col.path} />);
    } else {
      appHtml = renderToString(<App initialPath="/" />);
    }
  }

  return {
    html: appHtml,
    title,
    description,
    canonical,
  };
}

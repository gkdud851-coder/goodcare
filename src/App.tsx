import { useState, useRef, useEffect } from "react";
import { Phone, List, X, BookOpen, ChevronRight, Youtube, Sparkles, Home } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Intro from "./components/Intro";
import { Logo } from "./components/Common";
import Consulting from "./components/Consulting";
import ColumnsList from "./components/ColumnsList";
import { Step1, Step2, Step3, Step4, Step5 } from "./components/ColumnsPart1";
import { Step6, Step7, Step8, Step9, Step10 } from "./components/ColumnsPart2";
import { Step11, Step12, Step13 } from "./components/ColumnsPart3";
import { Step14, Step15 } from "./components/ColumnsPart4";
import { COLUMNS_DATA, ColumnMeta, getColumnByIdOrSlug, DEFAULT_METADATA, CONSULTING_SURVEY_URL } from "./data/columnsData";

export type CurrentView = 
  | { type: "intro" }
  | { type: "columns-list" }
  | { type: "consulting" }
  | { type: "column"; meta: ColumnMeta };

function parsePath(pathname: string, search: string): CurrentView {
  // 1. Check query param for backward compatibility (e.g. ?step=step1 or ?step=1)
  const params = new URLSearchParams(search);
  const stepParam = params.get("step");
  if (stepParam) {
    const found = getColumnByIdOrSlug(stepParam);
    if (found) return { type: "column", meta: found };
    if (stepParam === "consulting") return { type: "consulting" };
    if (stepParam === "columns") return { type: "columns-list" };
    if (stepParam === "step-intro" || stepParam === "intro") return { type: "intro" };
  }

  // 2. Clean pathname
  const clean = pathname.replace(/\/+$/, "") || "/";

  if (clean === "/" || clean === "") {
    return { type: "intro" };
  }
  if (clean === "/columns" || clean === "/column") {
    return { type: "columns-list" };
  }
  if (clean === "/consulting") {
    return { type: "consulting" };
  }
  if (clean.startsWith("/column/")) {
    const slug = clean.replace("/column/", "");
    const found = getColumnByIdOrSlug(slug);
    if (found) {
      return { type: "column", meta: found };
    }
  }

  // Check alias like /step1
  const directMatch = getColumnByIdOrSlug(clean.replace("/", ""));
  if (directMatch) {
    return { type: "column", meta: directMatch };
  }

  return { type: "intro" };
}

export default function App({ initialPath = "/" }: { initialPath?: string }) {
  // Determine initial view from window.location if in browser, or initialPath for SSR
  const [currentView, setCurrentView] = useState<CurrentView>(() => {
    if (typeof window !== "undefined") {
      return parsePath(window.location.pathname, window.location.search);
    }
    return parsePath(initialPath, "");
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // Browser navigation popstate support
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(parsePath(window.location.pathname, window.location.search));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync document head & title dynamically on client navigation
  useEffect(() => {
    let title = DEFAULT_METADATA.title;
    let description = DEFAULT_METADATA.description;
    let canonical = "https://goodcarestart.com";

    if (currentView.type === "intro") {
      title = DEFAULT_METADATA.title;
      description = DEFAULT_METADATA.description;
      canonical = "https://goodcarestart.com/";
    } else if (currentView.type === "columns-list") {
      title = "창업 칼럼 목록 | 굿케어 주간보호센터 & 요양원 창업 가이드";
      description = "주간보호센터 및 요양원 창업의 12단계 실전 노하우! 자격증, 무경력, 양도양수, 정부지원금, 노유자시설, 9인 요양원 수익 분석까지 총망라.";
      canonical = "https://goodcarestart.com/columns";
    } else if (currentView.type === "consulting") {
      title = "일생일대 30분 무료 창업 컨설팅 안내 | 굿케어";
      description = "1,400개 장기요양기관 경영지원 노하우를 담은 1:1 맞춤형 30분 무료 창업 컨설팅. 주간보호센터·요양원 인허가 및 수익성 검증을 무료로 받아보세요.";
      canonical = "https://goodcarestart.com/consulting";
    } else if (currentView.type === "column") {
      title = currentView.meta.pageTitle;
      description = currentView.meta.description;
      canonical = `https://goodcarestart.com${currentView.meta.path}`;
    }

    document.title = title;

    // meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // og:title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    // og:description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonical);
  }, [currentView]);

  // Scroll listener for progress bar
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const totalScroll = scrollHeight - clientHeight;
      if (totalScroll <= 0) {
        setScrollPercent(0);
      } else {
        const percentage = (scrollTop / totalScroll) * 100;
        setScrollPercent(percentage);
      }
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  // Navigation handler
  const navigateTo = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
      setCurrentView(parsePath(path, ""));
      setIsModalOpen(false);

      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const handleSelectColumn = (col: ColumnMeta) => {
    if (col.isYouTube && col.youtubeUrl) {
      if (typeof window !== "undefined") {
        window.open(col.youtubeUrl, "_blank", "noopener,noreferrer");
      }
      navigateTo(col.path);
      return;
    }
    navigateTo(col.path);
  };

  // Render current content component
  const renderCurrentContent = () => {
    switch (currentView.type) {
      case "intro":
        return <Intro onStart={() => navigateTo("/column/1")} />;
      case "columns-list":
        return <ColumnsList onSelectColumn={handleSelectColumn} />;
      case "consulting":
        return <Consulting onNavigate={navigateTo} />;
      case "column":
        switch (currentView.meta.stepNumber) {
          case 1:
            return <Step1 />;
          case 2:
            return <Step2 />;
          case 3:
            return <Step3 />;
          case 4:
            return <Step4 />;
          case 5:
            return <Step5 />;
          case 6:
            return <Step6 />;
          case 7:
            return <Step7 />;
          case 8:
            return <Step8 />;
          case 9:
            return <Step9 />;
          case 10:
            return <Step10 />;
          case 11:
            return <Step11 />;
          case 12:
            return <Step12 />;
          case 13:
            return <Step13 />;
          case 14:
            return <Step14 />;
          case 15:
            return <Step15 />;
          default:
            return <Step1 />;
        }
    }
  };

  const activeColumnStepNumber = currentView.type === "column" ? currentView.meta.stepNumber : null;

  return (
    <div className="w-full min-h-screen bg-slate-50 flex font-sans overflow-x-hidden text-slate-800">
      
      {/* ────────────────── 1. 왼쪽 고정 영역 (PC 전용 사이드바 & 검색로봇 수집 내비게이션) ────────────────── */}
      <aside className="hidden lg:flex w-[40%] xl:w-[35%] h-screen fixed left-0 top-0 flex-col bg-white border-r border-slate-200 p-8 xl:p-10 overflow-y-auto select-none">
        
        {/* 상단 로고 & 홈 링크 */}
        <div className="flex items-center justify-between mb-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="flex items-center gap-2.5 group"
          >
            <Logo className="w-10 h-10" containerClassName="p-1 bg-blue-100 rounded-full text-blue-600 shadow-sm flex items-center justify-center shrink-0 border border-blue-200 group-hover:scale-105 transition-transform" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">굿케어</span>
          </a>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            1,400+ 기관 파트너
          </span>
        </div>

        {/* 메인 헤더 및 전화상담 정보 */}
        <div className="mb-6">
          <h2 className="text-2xl font-black text-slate-900 leading-tight tracking-tight mb-2">
            굿케어 창업칼럼
          </h2>
          <p className="text-xs text-slate-500 mb-3 font-medium">
            주간보호센터 · 요양원 인허가 및 수익성 실전 가이드
          </p>
          <a
            href="tel:1522-3133"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-extrabold px-4 py-2.5 rounded-xl border border-blue-100 transition-colors text-base"
          >
            <Phone className="w-4 h-4 fill-blue-600/10" />
            1522-3133 (내선 1번)
          </a>
        </div>

        {/* 주요 핵심 페이지 바로가기 (인트로, 칼럼 전체목록, 30분 무료컨설팅) */}
        <div className="mb-5 flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-1.5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition ${
                currentView.type === "intro"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>메인 소개</span>
            </a>

            <a
              href="/columns"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/columns");
              }}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition ${
                currentView.type === "columns-list"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>칼럼 목록</span>
            </a>

            <a
              href={CONSULTING_SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100 hover:border-indigo-300 shadow-xs group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
              <span>무료 컨설팅</span>
            </a>
          </div>
        </div>

        {/* 📢 굿케어 공식 SNS & 채널 바로가기 */}
        <div className="mb-5 flex flex-col gap-2">
          <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mb-0.5">
            📢 굿케어 공식 채널 바로가기
          </p>
          <div className="grid grid-cols-3 gap-2">
            <a
              href="https://blog.naver.com/goodcarecom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/50 text-emerald-800 rounded-xl transition-all text-xs font-bold shadow-xs"
            >
              <div className="w-4 h-4 rounded-md bg-emerald-500 font-black text-[10px] text-white flex items-center justify-center shrink-0">N</div>
              <span className="truncate">공식 블로그</span>
            </a>
            
            <a
              href="https://cafe.naver.com/goodcarepartners"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 bg-green-50 hover:bg-green-100 border border-green-100/50 text-green-800 rounded-xl transition-all text-xs font-bold shadow-xs"
            >
              <div className="w-4 h-4 rounded-md bg-green-600 font-black text-[10px] text-white flex items-center justify-center shrink-0">C</div>
              <span className="truncate">공식 카페</span>
            </a>

            <a
              href="https://www.youtube.com/@goodcare1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 p-2 bg-red-50 hover:bg-red-100 border border-red-100/50 text-red-800 rounded-xl transition-all text-xs font-bold shadow-xs"
            >
              <Youtube className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="truncate">공식 유튜브</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mb-2">
          <span className="text-xs font-bold text-slate-400">창업 칼럼 목차 (총 15편)</span>
          <a
            href="/columns"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/columns");
            }}
            className="text-xs text-blue-600 font-bold hover:underline"
          >
            전체보기 →
          </a>
        </div>

        {/* 스크롤 가능한 본문 목차 리스트 */}
        <nav aria-label="칼럼 목차 네비게이션" className="flex-1 pr-1">
          <ul className="flex flex-col gap-1.5">
            {COLUMNS_DATA.map((col) => {
              const isActive = activeColumnStepNumber === col.stepNumber;
              return (
                <li key={col.id}>
                  <a
                    href={col.isYouTube ? (col.youtubeUrl || "https://www.youtube.com/@goodcare1") : col.path}
                    target={col.isYouTube ? "_blank" : undefined}
                    rel={col.isYouTube ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (col.isYouTube) {
                        handleSelectColumn(col);
                      } else {
                        e.preventDefault();
                        handleSelectColumn(col);
                      }
                    }}
                    className={`w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold transition-all border duration-150 text-[13.5px] leading-snug ${
                      isActive
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10"
                        : "bg-slate-50/80 text-slate-700 border-transparent hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-1">
                      <span className={`text-[11px] px-1.5 py-0.5 rounded font-black shrink-0 ${
                        isActive ? "bg-white/20 text-white" : col.isYouTube ? "bg-red-100 text-red-700" : "bg-slate-200 text-slate-700"
                      }`}>
                        {col.stepNumber}
                      </span>
                      <span className="truncate">{col.shortTitle}</span>
                    </div>
                    {col.isYouTube ? (
                      <div className="flex items-center gap-1 text-[11px] font-extrabold text-red-600 shrink-0">
                        <Youtube className="w-3.5 h-3.5" />
                        <span>영상</span>
                      </div>
                    ) : (
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-white" : "text-slate-400"}`} />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ────────────────── 2. 오른쪽 폰 시뮬레이터 뷰포트 ────────────────── */}
      <main className="w-full lg:ml-[40%] xl:ml-[35%] lg:w-[60%] xl:w-[65%] min-h-[100dvh] sm:min-h-screen flex items-center justify-center p-0 sm:py-10 md:px-6 select-text overflow-hidden sm:overflow-visible">
        <div className="w-full max-w-[430px] min-h-[100dvh] sm:h-[860px] bg-white sm:border-[12px] sm:border-slate-900 sm:rounded-[44px] sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] relative flex flex-col overflow-hidden">
          
          {/* 모바일 최적화 상단 헤더 */}
          <header className="lg:hidden w-full bg-white border-b border-slate-100 px-5 py-3.5 flex items-center justify-between select-none shrink-0 sticky top-0 z-20">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="flex items-center gap-2 text-slate-800"
            >
              <Logo className="w-8 h-8" containerClassName="bg-blue-50 p-1 rounded-full border border-blue-100/50" />
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-sm tracking-tight leading-none">굿케어</span>
                <span className="text-[10px] text-slate-400 font-bold mt-0.5">창업칼럼</span>
              </div>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={CONSULTING_SURVEY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
              >
                무료컨설팅
              </a>
              <a
                href="tel:1522-3133"
                className="flex items-center gap-1 text-xs text-blue-600 font-extrabold border border-blue-200 bg-blue-50/50 px-2.5 py-1.5 rounded-full transition-colors"
              >
                <Phone className="w-3 h-3 fill-blue-600/10" />
                1522-3133
              </a>
            </div>
          </header>

          {/* 읽기 진행률 프로그레스 바 */}
          {currentView.type === "column" && (
            <div className="w-full h-1 bg-slate-100 z-30 pointer-events-none shrink-0 relative">
              <div 
                className="h-full bg-blue-600 transition-all duration-100" 
                style={{ width: `${scrollPercent}%` }} 
              />
            </div>
          )}

          {/* 모바일 리얼 콘텐츠 스크롤 컨테이너 */}
          <div 
            ref={scrollContainerRef}
            id="scrollArea"
            className="flex-1 overflow-y-auto bg-white relative"
            style={{
              scrollBehavior: "smooth"
            }}
          >
            <div className={currentView.type === "intro" ? "w-full h-full" : "px-6 py-6 pb-24"}>
              {renderCurrentContent()}
            </div>
          </div>

          {/* ────────────────── 3. 하단 모바일 전용 네비게이션 바 (한 줄 3버튼: 칼럼목차, 무료컨설팅, 전화버튼) ────────────────── */}
          {currentView.type !== "intro" && (
            <div className="absolute bottom-0 left-0 w-full z-20 font-sans">
              <div className="bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-xs pt-3 pb-4 px-3 flex items-center justify-between gap-1.5 border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
                {/* 1. 칼럼목차 */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 min-w-0 bg-slate-900 hover:bg-slate-950 text-white font-extrabold text-[12px] py-3.5 px-2 rounded-2xl shadow-sm flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer truncate"
                >
                  <List className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">칼럼목차</span>
                </button>

                {/* 2. 무료컨설팅 */}
                <a
                  href={CONSULTING_SURVEY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-0 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[12px] py-3.5 px-2 rounded-2xl shadow-sm flex items-center justify-center gap-1 active:scale-95 transition-all text-center truncate"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className="truncate">무료컨설팅</span>
                </a>

                {/* 3. 전화버튼 */}
                <a
                  href="tel:1522-3133"
                  className="flex-1 min-w-0 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-[12px] py-3.5 px-2 rounded-2xl shadow-sm flex items-center justify-center gap-1 active:scale-95 transition-all text-center truncate"
                >
                  <Phone className="w-3.5 h-3.5 fill-white/20 shrink-0" />
                  <span className="truncate">전화상담</span>
                </a>
              </div>
            </div>
          )}

          {/* ────────────────── 4. 모바일 전용 보텀 시트 모달 (TOC 모달) ────────────────── */}
          <AnimatePresence>
            {isModalOpen && (
              <div className="absolute inset-0 z-40 select-none">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                />

                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 220 }}
                  className="absolute bottom-0 left-0 w-full max-h-[85%] bg-white rounded-t-[32px] overflow-hidden flex flex-col shadow-[0_-12px_40px_rgba(0,0,0,0.15)] border-t border-slate-100"
                >
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 shrink-0" />

                  <div className="flex items-center justify-between px-6 pb-2 border-b border-slate-50 shrink-0">
                    <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                      창업 가이드 칼럼 목차 (총 15편)
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition"
                      aria-label="목차 닫기"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto px-5 py-3 flex flex-col gap-2">
                    {/* 상단 숏컷 버튼들 */}
                    <div className="grid grid-cols-3 gap-1.5 mb-1">
                      <a
                        href="/"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo("/");
                        }}
                        className={`text-center py-2 px-1 rounded-xl text-xs font-bold border transition ${
                          currentView.type === "intro" ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        메인 소개
                      </a>
                      <a
                        href="/columns"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo("/columns");
                        }}
                        className={`text-center py-2 px-1 rounded-xl text-xs font-bold border transition ${
                          currentView.type === "columns-list" ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}
                      >
                        칼럼 전체
                      </a>
                      <a
                        href={CONSULTING_SURVEY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsModalOpen(false)}
                        className="text-center py-2 px-1 rounded-xl text-xs font-bold border transition bg-indigo-600 text-white border-indigo-600 shadow-xs flex items-center justify-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>무료컨설팅</span>
                      </a>
                    </div>

                    {/* 13편 칼럼 목록 */}
                    {COLUMNS_DATA.map((col) => {
                      const isActive = activeColumnStepNumber === col.stepNumber;
                      return (
                        <a
                          key={col.id}
                          href={col.isYouTube ? (col.youtubeUrl || "https://www.youtube.com/@goodcare1") : col.path}
                          target={col.isYouTube ? "_blank" : undefined}
                          rel={col.isYouTube ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (col.isYouTube) {
                              setIsModalOpen(false);
                              handleSelectColumn(col);
                            } else {
                              e.preventDefault();
                              setIsModalOpen(false);
                              handleSelectColumn(col);
                            }
                          }}
                          className={`w-full text-left flex items-center justify-between px-3.5 py-3 rounded-xl font-bold border transition duration-150 text-[13px] ${
                            isActive
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-black shrink-0 ${
                              isActive ? "bg-white/20 text-white" : col.isYouTube ? "bg-red-100 text-red-700" : "bg-slate-200 text-slate-700"
                            }`}>
                              {col.stepNumber}
                            </span>
                            <span className="truncate">{col.shortTitle}</span>
                          </div>
                          {col.isYouTube ? (
                            <div className="flex items-center gap-1 text-[11px] font-extrabold text-red-600 shrink-0">
                              <Youtube className="w-3.5 h-3.5" />
                              <span>영상</span>
                            </div>
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-70" />
                          )}
                        </a>
                      );
                    })}
                  </div>

                  <div className="h-6 shrink-0 bg-white" />
                </motion.div>
              </div>
            )}
          </AnimatePresence>

        </div>
      </main>

    </div>
  );
}

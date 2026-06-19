import { useState, useRef, useEffect } from "react";
import { HeartHandshake, Phone, List, X, BookOpen, ChevronRight, Youtube, ExternalLink, Calendar } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Intro from "./components/Intro";
import { Logo } from "./components/Common";
import { Step1, Step2, Step3, Step4, Step5 } from "./components/ColumnsPart1";
import { Step6, Step7, Step8, Step9, Step10 } from "./components/ColumnsPart2";

type ArticleId = 
  | "step-intro" 
  | "step1" 
  | "step2" 
  | "step3" 
  | "step4" 
  | "step5" 
  | "step6" 
  | "step7" 
  | "step8" 
  | "step9" 
  | "step10";

interface TocItem {
  id: ArticleId;
  title: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: "step1", title: "1. 무경력자도 주간보호센터 창업할 수 있을까?" },
  { id: "step2", title: "2. 자격증 없어도 주간보호센터 창업할 수 있다고?" },
  { id: "step3", title: "3. 주간보호센터 가족사업으로 해도 될까?" },
  { id: "step4", title: "4. 주간보호센터 양도양수 vs 신규창업" },
  { id: "step5", title: "5. 주간보호센터 창업하면 얼마나 걸릴까?" },
  { id: "step6", title: "6. 주간보호센터 창업지원금 정부지원금 있나요?" },
  { id: "step7", title: "7. 노유자시설 해결하여 주간보호센터 창업비용 아끼기" },
  { id: "step8", title: "8. 주간보호센터 구조설계 및 인테리어 주의점" },
  { id: "step9", title: "9. 주간보호센터 창업절차 실전 16단계" },
  { id: "step10", title: "10. 치매 어르신 돌봄철학과 주간보호센터 창업 가치" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ArticleId>("step-intro");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  // 1. 초기 로드 시 쿼리 파라미터를 파싱하여 해당 탭을 띄웁니다.
  // 뒤로 가기 / 앞으로 가기 브라우저 탐색 역시 정상 지원하여 네이버 크롤러가 전체 단계를 순회할 수 있도록 합니다.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stepParam = params.get("step") as ArticleId | null;
    
    const validIds: ArticleId[] = [
      "step-intro", "step1", "step2", "step3", "step4", "step5",
      "step6", "step7", "step8", "step9", "step10"
    ];

    if (stepParam && validIds.includes(stepParam)) {
      setActiveTab(stepParam);
    }

    const handlePopState = () => {
      const p = new URLSearchParams(window.location.search);
      const s = p.get("step") as ArticleId | null;
      if (s && validIds.includes(s)) {
        setActiveTab(s);
      } else {
        setActiveTab("step-intro");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // 2. 검색엔진 최적화 (SEO)를 위해 활성화된 아티클(칼럼)의 특성에 맞춰 메타데이터를 실시간으로 주입합니다.
  // 네이버 검색 로봇(Yeti)이 자바스크립트를 해석하여 각 개별 칼럼의 타이틀과 설명문을 완벽히 인지 및 색인(Index)하도록 설계했습니다.
  useEffect(() => {
    let pageTitle = "굿케어 주간보호센터 요양원 창업 가이드 | 일생일대 30분 무료 컨설팅 및 창업칼럼";
    let pageDesc = "\"복지도 사업이다!\" 방문요양, 주간보호, 요양원 등 장기요양기관은 정부에서 위탁받아 운영하는 복지사업입니다. 따라서, 일반적인 사업의 목표인 '수익 극대화'뿐 아니라 '수익 지키기'까지 잘! 해야 합니다. 1,400기관의 선택, 굿케어가 가장 잘하는 것! 장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.";

    switch (activeTab) {
      case "step1":
        pageTitle = "1. 무경력자도 주간보호센터 창업할 수 있을까? | 굿케어";
        pageDesc = "경력과 지식이 전혀 없는 완전 무경력자가 주간보호센터 창업에 도전할 때 반드시 알아야 하는 실제 요건과 극복 처방전을 제공합니다.";
        break;
      case "step2":
        pageTitle = "2. 자격증 없어도 주간보호센터 창업할 수 있다고? | 굿케어";
        pageDesc = "사회복지사 자격증이 아예 없는 비전문가도 주간보호센터 창업 대표자가 되는 합법적이고 안전한 공동대표 및 시설장 채용 구조를 알아봅니다.";
        break;
      case "step3":
        pageTitle = "3. 주간보호센터 가족사업으로 해도 될까? | 굿케어";
        pageDesc = "자녀, 배우자와 함께하는 가족형 주간보호센터 창업의 세무, 인건비, 지분 구조적 장점과 경영 리스크 방지 요령을 알아봅니다.";
        break;
      case "step4":
        pageTitle = "4. 주간보호센터 양도양수 vs 신규창업 | 굿케어";
        pageDesc = "기존 주간보호센터를 인수하는 권리금 양도양수 방식과 백지 상태에서의 신규창업 인허가 단계에 필요한 세부 비용 및 세법 요인을 대조합니다.";
        break;
      case "step5":
        pageTitle = "5. 주간보호센터 창업하면 얼마나 걸릴까? | 굿케어";
        pageDesc = "도면 승인부터 공사, 지정신청 심사 및 최종 설치신고 승인까지 평균 90일~120일 소요되는 주간보호센터 창업 타임라인을 투명하게 안내합니다.";
        break;
      case "step6":
        pageTitle = "6. 주간보호센터 창업지원금 정부지원금 있나요? | 굿케어";
        pageDesc = "주간보호센터 창업지원금 혹은 정부무상보조금, 지원금 제도의 실체와 올바른 창업 자금 예산 조달 요건을 집중 분헤해 드립니다.";
        break;
      case "step7":
        pageTitle = "7. 노유자시설 해결하여 주간보호센터 창업비용 아끼기 | 굿케어";
        pageDesc = "주간보호센터 창업의 첫 단추인 상가 용도변경(노유자시설) 과정에서 건축사 조율을 통해 수천만 원을 절세하는 꿀팁을 전수합니다.";
        break;
      case "step8":
        pageTitle = "8. 주간보호센터 구조설계 및 인테리어 주의점 | 굿케어";
        pageDesc = "소방 안전시설 기준, 스프링클러 의무설치 대상, 어르신 보행 동선 및 슬라이딩 도어 등 주간보호센터 창업 인허가 실사 기준에 맞춘 체크리스트입니다.";
        break;
      case "step9":
        pageTitle = "9. 주간보호센터 창업절차 실전 16단계 | 굿케어";
        pageDesc = "부지 선택부터 개설 신고서 제출, 건보공단 장기요양기관 지정 심사까지 전 과정을 16개의 일사불란한 타임라인 단계로 완벽 정리해 드립니다.";
        break;
      case "step10":
        pageTitle = "10. 치매 어르신 돌봄철학과 주간보호센터 창업 가치 | 굿케어";
        pageDesc = "어르신 학대 예방부터 사람의 존엄을 지켜내는 굿케어만의 명품 실버 케어 철학과 지속 가능한 운영 비전을 나눕니다.";
        break;
      case "step-intro":
      default:
        pageTitle = "굿케어 주간보호센터 요양원 창업 가이드 | 일생일대 30분 무료 컨설팅 및 창업칼럼";
        pageDesc = "\"복지도 사업이다!\" 방문요양, 주간보호, 요양원 등 장기요양기관은 정부에서 위탁받아 운영하는 복지사업입니다. 따라서, 일반적인 사업의 목표인 '수익 극대화'뿐 아니라 '수익 지키기'까지 잘! 해야 합니다. 1,400기관의 선택, 굿케어가 가장 잘하는 것! 장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.";
        break;
    }

    document.title = pageTitle;
    
    // 메타 설명 태그 및 og(오픈그래프) 속성 실시간 보정
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", pageDesc);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);
    
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pageDesc);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute("content", "/images/로고1.png");

    let ogSiteName = document.querySelector('meta[property="og:site_name"]');
    if (!ogSiteName) {
      ogSiteName = document.createElement("meta");
      ogSiteName.setAttribute("property", "og:site_name");
      document.head.appendChild(ogSiteName);
    }
    ogSiteName.setAttribute("content", "굿케어");

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    const currentOrigin = window.location.origin || "https://goodcare-startup.co.kr";
    const canonicalUrl = activeTab === "step-intro" 
      ? currentOrigin + window.location.pathname 
      : `${currentOrigin}${window.location.pathname}?step=${activeTab}`;
    linkCanonical.setAttribute("href", canonicalUrl);
  }, [activeTab]);

  // 스크롤 위치를 감지하여 진행률(Progress) 바 퍼센트를 계산합니다.
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
    // 초기 설정
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [activeTab]);

  // 글 전환 시 폰 내부 스크롤을 맨 위로 원위치 시킵니다.
  const handleSelectArticle = (id: ArticleId) => {
    setActiveTab(id);
    setIsModalOpen(false);
    
    // 주행 중인 URL의 쿼리 주소를 업데이트하여 검색 크롤러의 순회를 원활히 돕습니다.
    const newUrl = id === "step-intro" ? window.location.pathname : `?step=${id}`;
    window.history.pushState({ step: id }, "", newUrl);
    
    // 즉각적인 스크롤 리셋
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 약간의 딜레이들을 주어 탭 렌더링 직후 맨 위로 스크롤 시킴
    const forceReset = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      window.scrollTo({ top: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    setTimeout(forceReset, 10);
    setTimeout(forceReset, 50);
    setTimeout(forceReset, 150);
    setTimeout(forceReset, 350);
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex font-sans overflow-x-hidden text-slate-800">
      
      {/* ────────────────── 1. 왼쪽 고정 영역 (PC 전용 목차) ────────────────── */}
      <aside className="hidden lg:flex w-[40%] xl:w-[35%] h-screen fixed left-0 top-0 flex-col bg-white border-r border-slate-200 p-10 xl:p-12 overflow-y-auto select-none">
        
        {/* 로고 영역 */}
        <div className="flex items-center gap-2.5 mb-8">
          <Logo className="w-11 h-11" containerClassName="p-1.5 bg-blue-100 rounded-full text-blue-600 shadow-sm flex items-center justify-center shrink-0 border border-blue-200" />
          <span className="font-extrabold text-xl tracking-tight text-slate-900">굿케어</span>
        </div>

        {/* 메인 헤더 및 전화상담 정보 */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 leading-tight tracking-tight mb-3">
            굿케어 창업칼럼
          </h1>
          <a
            href="tel:1522-3133"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-600 font-extrabold px-5 py-3 rounded-xl border border-blue-100 transition-colors text-lg"
          >
            <Phone className="w-5 h-5 fill-blue-600/10" />
            1522-3133 (내선 1번)
          </a>
        </div>

        {/* 📢 굿케어 공식 SNS & 정보 공유 채널 바로가기 */}
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-1">
            📢 굿케어 공식 채널 바로가기
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            <a
              href="https://blog.naver.com/goodcarecom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/50 text-emerald-800 rounded-xl transition-all text-xs font-black shadow-sm"
            >
              <div className="w-5 h-5 rounded-md bg-emerald-500 font-black text-[11px] text-white flex items-center justify-center shrink-0">N</div>
              <span className="truncate">공식 블로그</span>
            </a>
            
            <a
              href="https://cafe.naver.com/goodcarepartners"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-green-50 hover:bg-green-100 border border-green-100/50 text-green-800 rounded-xl transition-all text-xs font-black shadow-sm"
            >
              <div className="w-5 h-5 rounded-md bg-green-600 font-black text-[11px] text-white flex items-center justify-center shrink-0">C</div>
              <span className="truncate">공식 카페</span>
            </a>

            <a
              href="https://www.youtube.com/@goodcare1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 bg-red-50 hover:bg-red-100 border border-red-100/50 text-red-800 rounded-xl transition-all text-xs font-black shadow-sm"
            >
              <Youtube className="w-4 h-4 text-red-600 shrink-0" />
              <span className="truncate">공식 유튜브</span>
            </a>
          </div>
        </div>

        <p className="text-slate-400 font-medium text-sm mb-4 border-t border-slate-100 pt-6">
          읽고 싶은 주제를 클릭하세요.
        </p>

        {/* 스크롤 가능한 본문 목차 리스트 */}
        <nav className="flex-1">
          <ul className="flex flex-col gap-2.5">
            {/* 인트로 다시보기 버튼 */}
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelectArticle("step-intro");
                }}
                className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all border ${
                  activeTab === "step-intro"
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-transparent hover:bg-blue-50/50 hover:text-blue-600 hover:border-blue-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>인트로 화면 가기</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </a>
            </li>

            {TOC_ITEMS.map((item) => {
              const isYoutubeLink = item.id === "step9";
              const youtubeUrl = "https://www.youtube.com/watch?v=eU75obHOb6Y&list=PLCrWuYsmvlfLzrxTbU6Cdyre5hneGshD4";
              
              if (isYoutubeLink) {
                return (
                  <li key={item.id}>
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all border duration-200 text-[15px] bg-slate-50 text-slate-700 border-transparent hover:bg-blue-50/50 hover:text-blue-600 hover:border-blue-100"
                    >
                      <span className="truncate pr-2">{item.title}</span>
                      <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-70 text-blue-500" />
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <a
                    href={`?step=${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectArticle(item.id);
                    }}
                    className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all border duration-200 text-[15px] ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10"
                        : "bg-slate-50 text-slate-700 border-transparent hover:bg-blue-50/50 hover:text-blue-600 hover:border-blue-100"
                    }`}
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-70" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ────────────────── 2. 오른쪽 폰 시뮬레이터 뷰포트 ────────────────── */}
      <main className="w-full lg:ml-[40%] xl:ml-[35%] lg:w-[60%] xl:w-[65%] h-[100dvh] sm:min-h-screen flex items-center justify-center p-0 sm:py-10 md:px-6 select-text overflow-hidden sm:overflow-visible">
        <div className="w-full max-w-[420px] h-[100dvh] sm:h-[840px] bg-white sm:border-[12px] sm:border-slate-900 sm:rounded-[40px] sm:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)] relative flex flex-col overflow-hidden">
          
          {/* 모바일 최적화 상단 헤더 (모바일 화면 한정 노출) */}
          <header className="lg:hidden w-full bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between select-none shrink-0 sticky top-0 z-15">
            <a
               href="/"
               onClick={(e) => {
                 e.preventDefault();
                 handleSelectArticle("step-intro");
               }}
               className="flex items-center gap-1.5 text-slate-800"
            >
              <Logo className="w-9 h-9" containerClassName="bg-blue-50 p-1 rounded-full border border-blue-100/50" />
              <span className="font-extrabold text-base tracking-tight select-none">굿케어</span>
            </a>
            
            <a
              href="tel:1522-3133"
              className="flex items-center gap-1.5 text-xs text-blue-600 font-extrabold border border-blue-200 bg-blue-50/50 px-3 py-1.5 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-blue-600/10" />
              1522-3133
            </a>
          </header>

          {/* 칼럼 읽기 진행률 진행바 (가느다란 Progress Bar) - 스크롤 뷰포트 영역의 완전한 최상단 고정 */}
          {activeTab !== "step-intro" && (
            <div className="w-full h-1.5 bg-slate-100 z-30 pointer-events-none shrink-0 relative">
              <div 
                className="h-full bg-blue-600 rounded-r-full transition-all duration-100 shadow-[0_1px_3px_rgba(37,99,235,0.3)]" 
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
            {/* 탭 렌더 제어 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.23, ease: "easeOut" }}
                className={activeTab === "step-intro" ? "w-full h-full" : "px-6 py-6 pb-24"}
              >
                {activeTab === "step-intro" && <Intro onStart={() => handleSelectArticle("step1")} />}
                {activeTab === "step1" && <Step1 />}
                {activeTab === "step2" && <Step2 />}
                {activeTab === "step3" && <Step3 />}
                {activeTab === "step4" && <Step4 />}
                {activeTab === "step5" && <Step5 />}
                {activeTab === "step6" && <Step6 />}
                {activeTab === "step7" && <Step7 />}
                {activeTab === "step8" && <Step8 />}
                {activeTab === "step9" && <Step9 />}
                {activeTab === "step10" && <Step10 />}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ────────────────── 3. 하단 모바일 전용 목록 플로팅 배너 및 문의 바로가기 ────────────────── */}
          
          {/* 문의 바로가기 플로팅 버튼 - 모바일 화면 우측 하단 고정 (배너 여부에 따라 높이 동적 가변) */}
          <div className={`absolute right-5 z-30 flex flex-col items-end select-none transition-all duration-300 ${activeTab === "step-intro" ? "bottom-5" : "bottom-[92px]"}`}>
            <AnimatePresence>
              {isInquiryOpen && (
                <>
                  {/* 모달/팝오버 닫기용 백드롭 (투명 레이어) */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsInquiryOpen(false)} 
                  />
                  
                  {/* 문의 옵션 팝업 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="relative z-20 mb-3.5 w-72 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_36px_rgba(30,27,75,0.22)] border border-white/50 p-4 flex flex-col gap-2.5"
                  >
                    <div className="text-[11px] font-black tracking-wide text-blue-600 uppercase px-1">
                      ⚡ 굿케어 전문가 빠른 상담
                    </div>
                    
                    {/* 0. 7월 창업포럼 신청 (한시적 노출) */}
                    <a
                      href="https://cafe.naver.com/goodcarepartners/13162"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsInquiryOpen(false)}
                      className="flex items-center gap-3 p-3 bg-amber-50/90 hover:bg-amber-100/95 text-amber-950 rounded-xl transition-all border border-amber-200/50 group backdrop-blur-xs shadow-xs animate-pulse hover:animate-none"
                    >
                      <div className="p-2.5 bg-amber-500 text-white rounded-lg shadow-sm shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-black text-amber-900 group-hover:text-amber-700 transition-colors">🔥 7월 창업포럼 신청</span>
                        <span className="text-[10px] text-amber-600 font-bold mt-0.5">선착순 조기 마감 예정!</span>
                      </div>
                    </a>
                    
                    {/* 1. 무료상담 설문지 신청 */}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSekX8lrSd9oufmhPXVGDcdVo89cNsou1fYgGRc3ldOdzVb0mA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsInquiryOpen(false)}
                      className="flex items-center gap-3 p-3 bg-indigo-50/85 hover:bg-indigo-100/95 text-indigo-950 rounded-xl transition-all border border-indigo-100/40 group backdrop-blur-xs"
                    >
                      <div className="p-2.5 bg-indigo-600 text-white rounded-lg shadow-sm shrink-0">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-black group-hover:text-indigo-600 transition-colors">무료상담 신청</span>
                        <span className="text-[11px] text-slate-500 font-bold mt-0.5">1분 완성 진단 설문</span>
                      </div>
                    </a>

                    {/* 2. 전화 연결 */}
                    <a
                      href="tel:1522-3133"
                      onClick={() => setIsInquiryOpen(false)}
                      className="flex items-center gap-3 p-3 bg-blue-50/85 hover:bg-blue-100/90 text-blue-950 rounded-xl transition-all border border-blue-100/40 group backdrop-blur-xs"
                    >
                      <div className="p-2.5 bg-blue-600 text-white rounded-lg shadow-sm shrink-0">
                        <Phone className="w-4 h-4 fill-white/10" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-black group-hover:text-blue-600 transition-colors">1522-3133 전화연결</span>
                        <span className="text-[11px] text-slate-500 font-bold mt-0.5">굿케어 가맹 문의 (내선 1번)</span>
                      </div>
                    </a>

                    <div className="border-t border-slate-100/80 my-0.5" />

                    <div className="text-[11px] font-black tracking-wide text-slate-400 uppercase px-1">
                      📢 굿케어 공식 채널 바로가기
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {/* 블로그 */}
                      <a
                        href="https://blog.naver.com/goodcarecom"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsInquiryOpen(false)}
                        className="flex flex-col items-center justify-center p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/20 rounded-xl transition-all text-center group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-500 font-black text-xs text-white flex items-center justify-center mb-1 shadow-sm shrink-0">N</div>
                        <span className="text-[10px] font-black text-emerald-900 group-hover:text-emerald-700">블로그</span>
                      </a>
                      
                      {/* 카페 */}
                      <a
                        href="https://cafe.naver.com/goodcarepartners"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsInquiryOpen(false)}
                        className="flex flex-col items-center justify-center p-2.5 bg-green-50 hover:bg-green-100 border border-green-100/20 rounded-xl transition-all text-center group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-green-600 font-black text-xs text-white flex items-center justify-center mb-1 shadow-sm shrink-0">카페</div>
                        <span className="text-[10px] font-black text-green-900 group-hover:text-green-700">공식카페</span>
                      </a>

                      {/* 유튜브 */}
                      <a
                        href="https://www.youtube.com/@goodcare1"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsInquiryOpen(false)}
                        className="flex flex-col items-center justify-center p-2.5 bg-red-50 hover:bg-red-100 border border-red-100/20 rounded-xl transition-all text-center group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center mb-1 shadow-sm shrink-0">
                          <Youtube className="w-4 h-4 text-red-100" />
                        </div>
                        <span className="text-[10px] font-black text-red-900 group-hover:text-red-700">유튜브</span>
                      </a>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* 플로팅 호출 버튼 */}
            <button
              id="floatingInquiryBtn"
              onClick={() => setIsInquiryOpen(!isInquiryOpen)}
              className="flex items-center justify-center w-12 h-12 bg-blue-600/95 hover:bg-blue-700 backdrop-blur-md active:scale-95 text-white rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.35)] transition-all cursor-pointer relative border border-white/10"
            >
              <Phone className="w-5 h-5 fill-white/10" />
            </button>
          </div>

          {activeTab !== "step-intro" && (
            <div className="absolute bottom-0 left-0 w-full z-20 font-sans">
              <div className="bg-gradient-to-t from-white/90 via-white/60 to-transparent backdrop-blur-xs pt-6 pb-5 px-6 flex justify-center shrink-0 border-t border-slate-100/10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full max-w-[280px] bg-indigo-900/90 hover:bg-indigo-950 backdrop-blur-md text-white font-extrabold text-sm py-4 px-6 rounded-full shadow-[0_8px_24px_rgba(30,27,75,0.2)] flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer border border-white/10"
                >
                  <List className="w-4 h-4" />
                  <span>다른 창업 가이드 읽기</span>
                </button>
              </div>
            </div>
          )}

          {/* ────────────────── 4. 모바일 전용 보텀 시트 모달 (TOC 모달) ────────────────── */}
          <AnimatePresence>
            {isModalOpen && (
              <div className="absolute inset-0 z-40 select-none">
                {/* 배경 딤드 레이어 */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsModalOpen(false)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                />

                {/* 하단 보텀시트 패널 */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 220 }}
                  className="absolute bottom-0 left-0 w-full max-h-[82%] bg-white rounded-t-[32px] overflow-hidden flex flex-col shadow-[0_-12px_40px_rgba(0,0,0,0.15)] border-t border-slate-100"
                >
                  {/* 시트 위 제트 핸들 */}
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto my-3 shrink-0" />

                  {/* 모달 닫기 헤더 */}
                  <div className="flex items-center justify-between px-6 pb-2 border-b border-slate-50 shrink-0">
                    <h3 className="font-extrabold text-lg text-slate-900 flex items-center gap-1.5">
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                      창업 가이드 칼럼 목차
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-1.5 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* 모달 목차 스크롤 리스트 */}
                  <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2.5">
                    {/* 인트로 보기 */}
                    <a
                      href="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectArticle("step-intro");
                      }}
                      className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold border transition ${
                        activeTab === "step-intro"
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-[14px]">인트로 화면 가기</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>

                    {TOC_ITEMS.map((item) => {
                      const isYoutubeLink = item.id === "step9";
                      const youtubeUrl = "https://www.youtube.com/watch?v=eU75obHOb6Y&list=PLCrWuYsmvlfLzrxTbU6Cdyre5hneGshD4";

                      if (isYoutubeLink) {
                        return (
                          <a
                            key={item.id}
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsModalOpen(false)}
                            className="w-full text-left flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold border transition duration-150 bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100"
                          >
                            <span className="text-[14px] truncate pr-2">{item.title}</span>
                            <ChevronRight className="w-4 h-4 flex-shrink-0 text-blue-500" />
                          </a>
                        );
                      }

                      return (
                        <a
                          key={item.id}
                          href={`?step=${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleSelectArticle(item.id);
                          }}
                          className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold border transition duration-150 ${
                            activeTab === item.id
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100"
                          }`}
                        >
                          <span className="text-[14px] truncate pr-2">{item.title}</span>
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        </a>
                      );
                    })}
                  </div>

                  {/* 세련된 보텀 프레임 보장용 패딩 */}
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

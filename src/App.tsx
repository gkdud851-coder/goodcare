import { useState, useRef, useEffect } from "react";
import { HeartHandshake, Phone, List, X, BookOpen, ChevronRight } from "lucide-react";
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
  { id: "step1", title: "1. 무경력자도 창업 할 수 있을까?" },
  { id: "step2", title: "2. 사회복지사 2급 있어도 창업할 수 있다고?" },
  { id: "step3", title: "3. 가족사업으로 해도 될까?" },
  { id: "step4", title: "4. 양도양수 vs 신규창업" },
  { id: "step5", title: "5. 창업하면 얼마나 걸릴까?" },
  { id: "step6", title: "6. 창업 지원금 있나요?" },
  { id: "step7", title: "7. 노유자시설 1000만원을 아낀다고?" },
  { id: "step8", title: "8. 구조설계, 인테리어시 조심해야 할 것" },
  { id: "step9", title: "9. 주간보호센터 창업절차 16단계" },
  { id: "step10", title: "10. 치매 어르신 구타를 바라본 굿케어" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ArticleId>("step-intro");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

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
    
    // 즉각적인 스크롤 리셋
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // 약간의 딜레이들을 주어 탭 렌더링 직후 맨 위로 스크롤 시킴 (비동기식 리렌더와 애니메이션 유실 대응)
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
          <Logo className="w-6 h-6" containerClassName="bg-rose-500 p-2.5 rounded-full text-white shadow-md flex items-center justify-center shrink-0" />
          <span className="font-extrabold text-xl tracking-tight text-slate-900">굿케어</span>
        </div>

        {/* 메인 헤더 및 전화상담 정보 */}
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 leading-tight tracking-tight mb-3">
            굿케어 창업칼럼
          </h1>
          <a
            href="tel:1522-3133"
            className="inline-flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-extrabold px-5 py-3 rounded-xl border border-rose-100 transition-colors text-lg"
          >
            <Phone className="w-5 h-5 fill-rose-600/10" />
            1522-3133 (내선 1번)
          </a>
        </div>

        <p className="text-slate-400 font-medium text-sm mb-4 border-t border-slate-100 pt-6">
          읽고 싶은 주제를 클릭하세요.
        </p>

        {/* 스크롤 가능한 본문 목차 리스트 */}
        <nav className="flex-1">
          <ul className="flex flex-col gap-2.5">
            {/* 인트로 다시보기 버튼 */}
            <li>
              <button
                onClick={() => handleSelectArticle("step-intro")}
                className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl font-bold transition-all border ${
                  activeTab === "step-intro"
                    ? "bg-rose-500 text-white border-rose-500 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-transparent hover:bg-rose-50/50 hover:text-rose-600 hover:border-rose-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>인트로 화면 가기</span>
                </div>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
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
                      <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-70 text-rose-500" />
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleSelectArticle(item.id)}
                    className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl font-bold transition-all border duration-200 text-[15px] ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10"
                        : "bg-slate-50 text-slate-700 border-transparent hover:bg-blue-50/50 hover:text-blue-600 hover:border-blue-100"
                    }`}
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-70" />
                  </button>
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
            <button
               onClick={() => handleSelectArticle("step-intro")}
               className="flex items-center gap-1.5 text-slate-800"
            >
              <Logo className="w-6 h-6" containerClassName="text-rose-500 flex items-center justify-center shrink-0" />
              <span className="font-extrabold text-base tracking-tight select-none">굿케어</span>
            </button>
            
            <a
              href="tel:1522-3133"
              className="flex items-center gap-1.5 text-xs text-rose-600 font-extrabold border border-rose-200 bg-rose-50/50 px-3 py-1.5 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-rose-600/10" />
              1522-3133
            </a>
          </header>

          {/* 칼럼 읽기 진행률 진행바 (가느다란 Progress Bar) - 스크롤 뷰포트 영역의 완전한 최상단 고정 */}
          {activeTab !== "step-intro" && (
            <div className="w-full h-1.5 bg-slate-100 z-30 pointer-events-none shrink-0 relative">
              <div 
                className="h-full bg-rose-500 rounded-r-full transition-all duration-100 shadow-[0_1px_3px_rgba(244,63,94,0.3)]" 
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
                    className="relative z-20 mb-3.5 w-64 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_12px_36px_rgba(30,27,75,0.22)] border border-white/45 p-4 flex flex-col gap-2.5"
                  >
                    <div className="text-[11px] font-black tracking-wide text-rose-500 uppercase px-1">
                      ⚡ 굿케어 전문가 빠른 상담
                    </div>
                    
                    {/* 1. 무료상담 설문지 신청 */}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSekX8lrSd9oufmhPXVGDcdVo89cNsou1fYgGRc3ldOdzVb0mA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsInquiryOpen(false)}
                      className="flex items-center gap-3.5 p-3.5 bg-indigo-50/70 hover:bg-indigo-100/90 text-indigo-950 rounded-xl transition-all border border-indigo-100/40 group backdrop-blur-xs"
                    >
                      <div className="p-2.5 bg-indigo-600/90 text-white rounded-lg shadow-sm">
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
                      className="flex items-center gap-3.5 p-3.5 bg-rose-50/70 hover:bg-rose-100/90 text-rose-950 rounded-xl transition-all border border-rose-100/40 group backdrop-blur-xs"
                    >
                      <div className="p-2.5 bg-rose-500/90 text-white rounded-lg shadow-sm">
                        <Phone className="w-4 h-4 fill-white/10" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-black group-hover:text-rose-600 transition-colors">1522-3133 전화연결</span>
                        <span className="text-[11px] text-slate-500 font-bold mt-0.5">굿케어 가맹 문의 (내선 1번)</span>
                      </div>
                    </a>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* 플로팅 호출 버튼 */}
            <button
              id="floatingInquiryBtn"
              onClick={() => setIsInquiryOpen(!isInquiryOpen)}
              className="flex items-center justify-center w-12 h-12 bg-rose-500/95 hover:bg-rose-600 backdrop-blur-md active:scale-95 text-white rounded-full shadow-[0_8px_20px_rgba(244,63,94,0.35)] transition-all cursor-pointer relative border border-white/10"
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
                    <button
                      onClick={() => handleSelectArticle("step-intro")}
                      className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold border transition ${
                        activeTab === "step-intro"
                          ? "bg-rose-500 text-white border-rose-500"
                          : "bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100"
                      }`}
                    >
                      <span className="text-[14px]">인트로 화면 가기</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

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
                            <ChevronRight className="w-4 h-4 flex-shrink-0 text-rose-500" />
                          </a>
                        );
                      }

                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelectArticle(item.id)}
                          className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-2xl font-bold border transition duration-150 ${
                            activeTab === item.id
                              ? "bg-blue-600 text-white border-blue-600 shadow-md"
                              : "bg-slate-50 text-slate-700 border-transparent hover:bg-slate-100"
                          }`}
                        >
                          <span className="text-[14px] truncate pr-2">{item.title}</span>
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        </button>
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

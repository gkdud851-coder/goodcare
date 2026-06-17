import { useState } from "react";
import { Highlight, Logo } from "./Common";

export default function Intro({ onStart }: { onStart: () => void }) {
  const [mainPhotoSrc, setMainPhotoSrc] = useState("/images/메인사진.png");

  return (
    <div className="w-full min-h-full flex flex-col items-center justify-between text-center px-6 py-10 relative font-sans select-none bg-gradient-to-b from-rose-50/80 via-white to-slate-50/60">
      
      {/* 장식용 탑 플로팅 데코 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/20 to-teal-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-200/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* 상단 로고 & 브랜딩 */}
      <div className="flex flex-col items-center gap-1.5 mt-4 z-10 animate-fade-in">
        <span className="text-xs bg-rose-100/70 border border-rose-200 text-rose-600 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2 select-none shadow-[0_1px_5px_rgba(244,63,94,0.08)]">
          🏆 누적 1,400+ 기관의 동행 파트너
        </span>
        <div className="flex items-center gap-2 mt-1">
          <Logo className="w-7 h-7" containerClassName="bg-rose-500 p-1.5 rounded-full text-white shadow-md flex items-center justify-center shrink-0" />
          <span className="text-slate-900 font-black text-2xl tracking-tight">굿케어</span>
        </div>
      </div>

      {/* 중앙 메인 콘텐츠 카드 */}
      <div className="my-6 flex flex-col items-center gap-5 max-w-sm z-10 w-full">
        
        {/* 메인 히어로 비주얼 카드 */}
        <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/80 bg-white p-2">
          <div className="relative rounded-xl overflow-hidden h-[180px] bg-slate-50 flex items-center justify-center">
            <img 
              src={mainPhotoSrc} 
              alt="굿케어 대표 천천박사"
              onError={() => {
                if (mainPhotoSrc !== "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80") {
                  setMainPhotoSrc("https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80");
                }
              }}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* 정화된 오버레이 데코 */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[10px] text-slate-800 font-bold px-2 py-0.5 rounded-md shadow-sm">
              천천박사 공식 가이딩
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <p className="text-rose-500 font-semibold text-sm tracking-wide bg-rose-50 px-3 py-1 rounded-lg inline-block">
            안녕하세요, 굿케어 대표 천천박사입니다.
          </p>
          <h1 className="text-slate-950 font-black text-3xl leading-snug tracking-tight pt-1">
            "복지도 결국 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-indigo-600">진짜 사업입니다!</span>"
          </h1>
        </div>

        {/* 설명 피드 */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/60 w-full space-y-3.5 text-center">
          <p className="text-slate-600 text-[15px] leading-relaxed">
            방문요양, 주간보호, 요양원 등 <br />
            장기요양기관은 국가 재정 지원을 받아 <br />
            운영되는 소중한 공익적 복지사업입니다.
          </p>
          
          <div className="h-[1px] bg-slate-100 w-2/3 mx-auto" />
          
          <p className="text-slate-800 text-[15px] leading-relaxed font-medium">
            그렇기에 일반 자영업과는 달리 <br />
            <Highlight>수익 극대화</Highlight>는 기본이며, <br />
            수많은 세무·평가 기준 속에서 <br />
            <Highlight>수익을 안전하게 지키기</Highlight>까지 철저해야 합니다.
          </p>
        </div>

        {/* 굿케어 자신감 배너 */}
        <div className="bg-[#fffbeb] border border-[#fde68a]/80 p-4 rounded-2xl w-full text-center shadow-[0_2px_12px_rgba(253,230,138,0.15)]">
          <p className="text-[#92400e] font-bold text-[14px] leading-relaxed">
            💡 1,400개 기관이 검증한 핵심 전략!<br />
            <span className="text-[#b45309] font-black text-[15px]">창업의 첫걸음부터 정원 마감의 마지막 퍼즐까지</span><br />
            굿케어가 실전 솔루션만 엄선해 드립니다.
          </p>
        </div>
      </div>

      {/* 하단 시작 버튼 */}
      <div className="w-full z-10 flex flex-col items-center gap-2.5 mt-2">
        <button 
          onClick={onStart}
          className="w-full max-w-[280px] bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 active:scale-95 text-white font-extrabold text-base py-4 rounded-full shadow-[0_6px_25px_-4px_rgba(244,63,94,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(244,63,94,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>핵심 창업 가이드 바로 시작하기</span>
          <span className="animate-bounce">👉</span>
        </button>
        <span className="text-[11px] text-slate-400 font-medium">
          ※ 3분만에 완독하는 고농축 창업 비법서
        </span>
      </div>
    </div>
  );
}

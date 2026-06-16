import { HeartHandshake } from "lucide-react";
import { Highlight } from "./Common";

export default function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div 
      className="w-full min-h-screen flex flex-col items-center justify-between text-center px-6 py-12 relative font-sans select-none"
      style={{
        background: `linear-gradient(rgba(15, 30, 60, 0.88), rgba(15, 30, 60, 0.96)), url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`
      }}
    >
      {/* 상단 로고 */}
      <div className="flex flex-col items-center gap-2 mt-8 animate-fade-in">
        <div className="bg-rose-500 p-3 rounded-full shadow-lg text-white">
          <HeartHandshake className="w-10 h-10" />
        </div>
        <span className="text-white font-extrabold text-2xl tracking-wider uppercase mt-1">굿케어</span>
      </div>

      {/* 중앙 메인 카피 */}
      <div className="my-8 flex flex-col gap-6 max-w-sm">
        <p className="text-teal-400 font-bold text-lg tracking-wide uppercase">
          안녕하세요 굿케어 천천박사입니다.
        </p>
        
        <h1 className="text-white font-extrabold text-4xl leading-snug tracking-tight">
          "복지도<br />사업이다!"
        </h1>
        
        <div className="text-gray-200 text-lg leading-relaxed font-light">
          방문요양, 주간보호, 요양원 등<br />
          장기요양기관은 정부에서 위탁받아<br />
          운영하는 복지사업입니다.
        </div>
        
        <div className="text-gray-100 text-lg leading-relaxed font-semibold">
          따라서, 일반적인 사업의 목표인<br />
          <Highlight>수익 극대화</Highlight>뿐 아니라<br />
          <Highlight>수익 지키기</Highlight>까지<br />
          잘! 해야 합니다.
        </div>
        
        <div className="text-yellow-200 font-bold text-lg border-t border-white/20 pt-6 mt-2 leading-relaxed">
          1,400기관의 선택, 굿케어가 가장 잘하는 것!<br />
          장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.
        </div>
      </div>

      {/* 하단 시작 버튼 */}
      <button 
        onClick={onStart}
        className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-extrabold text-lg px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(229,62,62,0.45)] transition-all cursor-pointer mb-6"
      >
        창업 가이드 시작하기 👇
      </button>
    </div>
  );
}

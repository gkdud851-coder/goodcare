import { useEffect } from "react";
import { FileText, Sparkles, ArrowRight, ExternalLink, ArrowLeft, Phone } from "lucide-react";
import { CONSULTING_SURVEY_URL } from "../data/columnsData";

export default function Consulting({ onNavigate }: { onNavigate?: (path: string) => void }) {
  useEffect(() => {
    // Automatically redirect to the Google Form survey
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        window.location.href = CONSULTING_SURVEY_URL;
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <article className="font-sans text-slate-800 leading-relaxed py-6 max-w-xl mx-auto text-center">
      {/* 설문지 직행 카드 */}
      <div className="bg-white rounded-3xl border-2 border-indigo-200 p-8 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
          <FileText className="w-8 h-8" />
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 uppercase tracking-wider mb-3 border border-indigo-100">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          1,400+ 기관 검증 1:1 맞춤 진단
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-3 tracking-tight">
          30분 무료 창업 컨설팅 설문지
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
          굿케어 공식 1:1 무료 컨설팅 설문지 신청 페이지로 즉시 이동합니다.<br />
          잠시 후 자동으로 이동되지 않으면 아래 버튼을 눌러주세요.
        </p>

        {/* 설문지 바로가기 대형 버튼 */}
        <a
          href={CONSULTING_SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-extrabold text-base rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group"
        >
          <FileText className="w-5 h-5" />
          <span>1분 완성 무료 컨설팅 설문지 작성하기</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>

        {/* 유선 전화 문의 */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold text-slate-500">
          <a
            href="tel:1522-3133"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:underline"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>전화 문의: 1522-3133 (내선 1번)</span>
          </a>

          {onNavigate && (
            <button
              onClick={() => onNavigate("/columns")}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>창업 칼럼 목록으로 돌아가기</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

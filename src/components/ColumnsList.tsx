import { ArrowRight, BookOpen, Clock, Tag, Youtube, ExternalLink } from "lucide-react";
import { COLUMNS_DATA, ColumnMeta, CONSULTING_SURVEY_URL } from "../data/columnsData";

export default function ColumnsList({ onSelectColumn }: { onSelectColumn?: (col: ColumnMeta) => void }) {
  const dayCareColumns = COLUMNS_DATA.filter(c => c.category === "주간보호센터 창업");
  const nursingHomeColumns = COLUMNS_DATA.filter(c => c.category === "요양원 창업");
  const homeCareColumns = COLUMNS_DATA.filter(c => c.category === "방문요양 창업");

  const renderColumnCard = (col: ColumnMeta) => {
    return (
      <article
        key={col.id}
        className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100/60">
              {col.category}
            </span>
            <span className={`text-xs font-medium flex items-center gap-1 ${col.isYouTube ? "text-red-600 font-bold" : "text-slate-400"}`}>
              {col.isYouTube ? (
                <>
                  <Youtube className="w-3.5 h-3.5 text-red-600" />
                  유튜브 영상 연결
                </>
              ) : (
                <>
                  <Clock className="w-3.5 h-3.5" />
                  {col.readTime} 완독
                </>
              )}
            </span>
          </div>

          <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-2 hover:text-blue-600 transition-colors">
            <a
              href={col.isYouTube ? (col.youtubeUrl || "https://www.youtube.com/@goodcare1") : col.path}
              target={col.isYouTube ? "_blank" : undefined}
              rel={col.isYouTube ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (col.isYouTube) {
                  if (onSelectColumn) onSelectColumn(col);
                } else if (onSelectColumn) {
                  e.preventDefault();
                  onSelectColumn(col);
                }
              }}
            >
              {col.title}
            </a>
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {col.description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 truncate max-w-[200px]">
            <Tag className="w-3 h-3 text-slate-400" />
            {col.shortTitle}
          </span>
          {col.isYouTube ? (
            <a
              href={col.youtubeUrl || "https://www.youtube.com/@goodcare1"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (onSelectColumn) onSelectColumn(col);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-extrabold shadow-xs transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>유튜브 영상 보기</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          ) : (
            <a
              href={col.path}
              onClick={(e) => {
                if (onSelectColumn) {
                  e.preventDefault();
                  onSelectColumn(col);
                }
              }}
              className="inline-flex items-center gap-1 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>칼럼 읽기</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="font-sans text-slate-800 leading-relaxed py-2 max-w-2xl mx-auto">
      {/* 헤더 섹션 */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black bg-blue-100 text-blue-700 uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          1,400+ 기관 검증 실전 비법서
        </span>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
          굿케어 창업 가이드 칼럼 전체보기
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
          천천박사가 직접 전하는 주간보호센터 · 요양원 · 방문요양 창업 성공 방정식 (총 15편)
        </p>
      </div>

      {/* 1. 주간보호센터 창업 가이드 (1~10편) */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-slate-200">
          <span className="w-2.5 h-6 bg-blue-600 rounded-full" />
          <h2 className="text-xl font-black text-slate-900">
            주간보호센터(데이케어센터) 창업 실전 칼럼 (1~10편)
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {dayCareColumns.map(renderColumnCard)}
        </div>
      </section>

      {/* 2. 요양원 창업 가이드 (11~13편) */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-slate-200">
          <span className="w-2.5 h-6 bg-emerald-600 rounded-full" />
          <h2 className="text-xl font-black text-slate-900">
            요양원 & 9인 공동생활가정 창업 실전 칼럼 (11~13편)
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {nursingHomeColumns.map(renderColumnCard)}
        </div>
      </section>

      {/* 3. 방문요양 & 재가복지센터 창업 가이드 (14~15편) */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-slate-200">
          <span className="w-2.5 h-6 bg-indigo-600 rounded-full" />
          <h2 className="text-xl font-black text-slate-900">
            방문요양 & 재가복지센터 창업 실전 칼럼 (14~15편)
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {homeCareColumns.map(renderColumnCard)}
        </div>
      </section>

      {/* 하단 30분 무료 컨설팅 배너 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white text-center shadow-lg">
        <h2 className="text-xl font-black mb-2 text-white">
          칼럼을 읽으시면서 내 상황에 맞는지 궁금하셨나요?
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 mb-5 max-w-md mx-auto">
          굿케어 대표 천천박사가 일생일대 30분 맞춤 컨설팅으로 
          대표님의 예산, 지역, 인허가 기준을 무료로 진단해 드립니다.
        </p>
        <a
          href={CONSULTING_SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-extrabold rounded-xl shadow-md transition-all text-sm"
        >
          <span>30분 무료 컨설팅 설문지 신청하기</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

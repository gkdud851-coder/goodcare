import React from "react";
import { Youtube, ExternalLink, Play, Sparkles } from "lucide-react";
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";
import { CONSULTING_SURVEY_URL } from "../data/columnsData";

// 11. 9인 요양원 창업 할만할까?
export function Step11() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        11. 9인 요양원 창업 할만할까?
      </h1>

      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        1,400여 개 경영지원, 장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>

      <p className="mb-4">
        9인 요양원에 대해서 들어보신 적이 있으실까요?
      </p>
      
      <p className="mb-5">
        요양원 창업은 하고 싶긴 한데 자금은 부족하고, 그럴 때 9인 소규모 요양원(노인공동생활가정)에 대해 많이들 고민하시는 것 같습니다.
      </p>

      <InfoBox title="🧐 지금 이 순간만큼은 진심으로 대답해 주셔야 합니다">
        <p className="leading-relaxed text-[#78350f] font-bold mb-2">
          "9인 요양원, 하고 싶은 진짜 이유가 수익 때문인가요?"
        </p>
        <p className="leading-relaxed text-[#78350f]">
          장기요양기관도 복지사업이니 복지의 마음도 분명 있으실 겁니다. 다만 수익 때문인 이유가 더 크다면, 이 글을 끝까지 꼭 읽어주셔야겠습니다.
        </p>
      </InfoBox>

      <p className="mb-4">
        먼저 요양원은 크게 <strong>9인 이하 시설(노인공동생활가정)</strong>과 <strong>10인 이상 시설(일반 요양원)</strong>로 나뉩니다.
      </p>
      
      <p className="mb-5">
        이게 어떤 차이가 발생하냐면, <Highlight>상가 임대가 가능한지, 아닌지</Highlight>로 나뉘는 중대한 법적 문제로 직결됩니다.
      </p>

      {/* 구분 표 UI */}
      <div className="w-full my-6 overflow-hidden rounded-xl border border-slate-200 shadow-xs">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200">
              <th className="p-3.5 font-bold text-slate-700">구분</th>
              <th className="p-3.5 font-bold text-slate-700">~9인 시설</th>
              <th className="p-3.5 font-bold text-slate-700">10인 이상 시설</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            <tr>
              <td className="p-3.5 font-bold text-slate-900 bg-slate-50/50">임대 가능 여부</td>
              <td className="p-3.5 text-emerald-600 font-bold bg-emerald-50/30">임대 가능</td>
              <td className="p-3.5 text-red-600 font-bold bg-red-50/30">임대 불가능</td>
            </tr>
            <tr>
              <td className="p-3.5 font-bold text-slate-900 bg-slate-50/50">소유권 요건</td>
              <td className="p-3.5 text-slate-600">임차 건물 운영 가능</td>
              <td className="p-3.5 text-slate-900 font-semibold">자가명의 토지·건물 매입 필수</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4">
        그렇다 보니 9인보다 크게 차리실 경우, 29인 시설을 그나마 가장 많이 선택하시는 편입니다.
      </p>

      <p className="mb-4">
        29인 시설을 차리시려면 토지와 건물 매입까지 감안했을 때 <span className="font-bold text-red-600 border-b-2 border-amber-300">최소 15억 원 이상</span>은 필요하다고 보고 있어요.
      </p>

      <p className="mb-5">
        물론 부모님께 물려받은 안 쓰는 토지나 유휴 부지가 있으시다면, 토지나 건물 매입 비용을 제외하고 신축·리모델링 예산으로 접근하실 수 있습니다.
      </p>

      <ColumnImage src="/images/7-5.jpg" alt="소규모 9인 요양원 노인공동생활가정 시설 임대 및 설립 기준" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        🏠 9인 요양원 창업 전 반드시 주의해야 할 4가지
      </h2>

      <div className="space-y-6 mt-6">
        {/* 주의사항 1 */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs">
          <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
            어디서 시작하나? (입지와 월세 부담)
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            9인 요양원을 하시려면 보통 단독주택에서 시작하시는 경우가 많습니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            도심 번화가보다는 비도심, 근교 조용한 주택가에서 운영되는 곳이 많아요.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            단독주택을 임대한다고 하더라도 매달 월세와 보증금 비용이 지속적으로 지출됩니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            그래서 굿케어는 웬만하면 <Highlight>안 쓰는 자가 주택을 이미 보유하고 계신 분들이 9인 요양원을 하셔야 한다</Highlight>고 권장해 드립니다. 임대료를 내가며 시작하신다면 손익분기점을 지켜내기가 매우 빠듯하기 때문입니다.
          </p>
        </div>

        {/* 주의사항 2 */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs">
          <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
            어떻게 모으나? (어르신 모집과 정원 확보)
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            두 번째는 어르신 모집입니다. 정원수가 어떻게 되었든 입소 어르신을 가득 채워야 수익이 납니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            20인, 30인도 아니고 9인은 금방 채울 수 있을 거라고 쉽게 생각하시는 경우가 많습니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            하지만 소규모일수록 신규 상담이 적고, 1~2명만 퇴소해도 매출에 치명타가 옵니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            이를 안정적으로 타개하는 최고의 방법은, <span className="font-semibold text-blue-700">"부모님을 내가 직접 센터에 모신다"</span>는 마음으로 시작하는 것입니다. 내 부모님 두 분만 모셔도 벌써 정원의 상당 부분이 채워지며 든든한 기반이 마련됩니다.
          </p>
        </div>

        {/* 주의사항 3 */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs">
          <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
            얼마를 벌까? (실제 월 순수익 예산)
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            세 번째로는 결국 얼마나 순수익이 날까에 대한 현실적인 질문입니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            대략적으로만 살펴보면 시설장 인건비를 포함해 <Highlight>월 순수익이 300만 원 선</Highlight>이라고 알고 계시면 됩니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            "사업인데 그것밖에 안 되나?" 하실 수 있지만, 자가 주택에서 임대료 지출 없이 시작하고 가족이 함께 일하며 인건비를 가계 소득으로 흡수한다면 충분히 가치 있는 생계형 복지 모델이 됩니다.
          </p>
        </div>

        {/* 주의사항 4 */}
        <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-xs">
          <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">4</span>
            인력배치는 어떻게 하나? (가족사업의 현실)
          </h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            법적으로 시설장(사회복지사 겸직 가능) 1명, 간호조무사 또는 물리치료사 1명, 요양보호사(입소자 3명당 1명), 조리원 1명을 채용하셔야 합니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            9인 요양원은 대부분 가족사업으로 운영되는 경우가 많습니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            가족 구성원들이 역할을 분담해 주면 남에게 지출될 인건비가 우리 가족의 소득으로 돌아오므로, <span className="font-semibold text-slate-900">300만 원 순수익 + 1인당 가족 인건비</span>가 더해져 안정적인 가계 유지가 가능해집니다.
          </p>
        </div>
      </div>

      <div className="my-8 p-5 bg-blue-50/60 rounded-2xl border border-blue-150">
        <h3 className="font-bold text-slate-900 text-lg mb-2">📌 종합 판단 가이드</h3>
        <p className="text-slate-700 leading-relaxed mb-2">
          대박 수익만 바라보고 무작정 임대부터 시작하시는 게 아니라, 아래 조건들을 냉정하게 점검하셔야 합니다:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-medium">
          <li>나에게 안 쓰는 단독주택이나 유휴 건물이 있는가?</li>
          <li>부모님을 어차피 내가 정성껏 모셔야 하는 상황인가?</li>
          <li>가족 구성원 중에 함께 사업에 뛰어들 수 있는 사람이 있는가?</li>
        </ul>
      </div>

      <Quote className="border-indigo-600 bg-indigo-50/60 my-6">
        그래서 굿케어는 늘 이렇게 말씀드립니다.<br />
        <strong>"부모님을 직접 모시면서 시작하는 복지사업이다"</strong>, 이게 9인 요양원 창업의 가장 중요한 핵심입니다.
      </Quote>

      <p className="mb-4">
        이 글은 무조건 창업을 추천하는 글이 아니라, 대표님의 여러 가지 현실 상황을 냉정하게 고려해서 판단하셔야 함을 말씀드리는 글이었습니다.
      </p>

      <p className="mb-5 font-medium">
        더 구체적인 자본금 플랜과 입지 조건이 궁금하시다면, 일생일대 딱 한 번 제공해드리는 굿케어의 30분 무료컨설팅 기회를 적극 활용해보시길 추천드립니다.
      </p>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

// 12. 요양원 창업 전, 반드시 보셔야하는 TOP 5
export function Step12() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        12. 요양원 창업 전, 반드시 보셔야하는 TOP 5
      </h1>

      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>

      <p className="mb-4">
        혹시 요양원 창업에 관심이 있으신가요?
      </p>
      
      <p className="mb-5">
        임대가 안 나가는 상가나, 폐원 예정인 유치원 건물을 갖고 계셔서 알아보고 계시는 중이신가요?
      </p>

      <p className="mb-4">
        그런 생각을 하고 계시더라도 한 가지가 마음에 걸리실 겁니다.
      </p>
      
      <p className="mb-5 text-slate-700 italic">
        '에이, 어르신들이 요양원 가기를 얼마나 싫어하시는데... 저조차도 가기 싫은데 과연 사업성이 있을까?'
      </p>

      <WarningQuote>
        단언해서 말씀드리면, 그건 과거의 편견일 뿐입니다.
      </WarningQuote>

      <p className="mb-4 mt-4">
        지금 대한민국은 엄청나게 빠른 속도로 초고령화가 진행되고 있습니다.
      </p>
      
      <p className="mb-5">
        정부 역시 요양병원 혜택을 줄이면서까지 생활 중심의 요양원 전환을 정책적으로 강력하게 유도하고 있습니다.
      </p>

      <p className="mb-4 font-semibold text-indigo-950">
        하지만 무조건 창업한다고 해서 다 잘되는 것은 아닙니다.
      </p>
      
      <p className="mb-6 font-semibold text-indigo-950">
        요양원의 수익 구조나 법적인 인력·면적 기준을 모른 채 개원하는 순간 막대한 손실이 발생할 수 있어, 오늘 반드시 짚어야 할 5가지를 전해드리겠습니다.
      </p>

      {/* 실사 성장 성적표 UI */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 my-8 shadow-xs">
        <h3 className="font-black text-slate-900 text-lg mb-4 text-center">📈 굿케어 창업 실사 성장 성적표</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-150">
            <span className="text-xs text-blue-600 font-extrabold uppercase tracking-wide">만석 달성 및 유지</span>
            <p className="text-[15px] text-slate-900 font-bold mt-1">1년 만에 근 49명 달성</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">개인적으로 홍보 열심히 하시던 대표님, 49명 만석 돌파 후에도 대기자 상태 유지</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-150">
            <span className="text-xs text-blue-600 font-extrabold uppercase tracking-wide">굿케어 직영 빠른 성장</span>
            <p className="text-[15px] text-slate-900 font-bold mt-1">3개월 만에 49명 돌파</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">굿케어 직영 운영 노하우와 맞춤 마케팅으로 단기간 만석 달성</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-150 md:col-span-2">
            <span className="text-xs text-emerald-600 font-extrabold uppercase tracking-wide">2026년 신규 창업 성공 사례</span>
            <p className="text-[15px] text-slate-900 font-bold mt-1">경상도 지역 단기 입소 급증</p>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">오픈 4개월 만에 20명 돌파 → 5개월 만에 27명 돌파 (30명 만석 목표 순항 중)</p>
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-6 pb-2 border-b-2 border-slate-200">
        💡 요양원 창업 전, 반드시 보셔야 하는 TOP 5 필수 점검
      </h2>

      <div className="space-y-6">
        {/* TOP 1 */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-0.5 rounded-md text-xs">TOP 1</span>
            <h3 className="font-bold text-slate-900 text-lg">"제가 갖고 있는 건물에 요양원 할래요!"의 함정</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            9인 이하 시설이 아닌 이상, 요양원을 창업하시려면 토지와 건물이 모두 자가명의로 매입되어 있으셔야 합니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            대부분의 대표님들은 비어있는 토지에 신축하거나, 소유하고 계신 유휴 건물을 개조해 요양원을 운영하고 싶어 하십니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            그런데 여기서 결정적인 문제가 발생합니다. 내 명의 건물이라 하더라도 <span className="font-bold text-red-600">단층 면적이 75평 미만</span>이라면 요양원 개원을 다시 생각해보셔야 합니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            어르신 1인당 법정 필수 면적이 7.16평으로 정해져 있는데, 단층 면적이 너무 좁으면 2층, 3층, 4층으로 쪼개서 운영해야 하고 층마다 요양보호사를 추가 배치해야 해 인건비 지출이 걷잡을 수 없이 커집니다.
          </p>
        </div>

        {/* TOP 2 */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-0.5 rounded-md text-xs">TOP 2</span>
            <h3 className="font-bold text-slate-900 text-lg">1명의 차이, 인력배치 함정 (49인 vs 50인)</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            주간보호는 정원 자체가 매출을 가져오고, 요양원은 침실 침대 수가 매출을 가져오기에 최대한 침대를 많이 두시려고 합니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            그런 원리라면 49인 시설보다 50인 시설이 1명 더 많으니 훨씬 이득일 것 같죠?
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            하지만 49인에서 50인으로 넘어가는 순간, 법적 필수 인력이 <Highlight>무려 3명이나 늘어나게 됩니다.</Highlight>
          </p>
          <p className="text-slate-700 leading-relaxed">
            특히 일반 급여의 1.5배 수준을 지급해야 하는 사무국장 직군까지 필수로 채용해야 해서 실질적으로 약 3.5명의 인건비가 추가 발생합니다. 50인 이상으로 가시려면 최소 57인 이상으로 한 번에 키우시지 않는 한, <strong>차라리 49인으로 맞추는 것이 훨씬 이득</strong>입니다.
          </p>
        </div>

        {/* TOP 3 */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-0.5 rounded-md text-xs">TOP 3</span>
            <h3 className="font-bold text-slate-900 text-lg">입지 선택의 변화 (도심 vs 비도심)</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            옛날에는 공기 좋고 물 좋은 한적한 산속 외곽에 요양원을 차리는 경우가 많았습니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            하지만 요즘 보호자분들은 거주하시는 도심 근처, 퇴근길에 언제든지 들러볼 수 있는 가까운 곳에 부모님을 모시길 원합니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            또한 비도심 외곽은 요양보호사 선생님들이 출퇴근하기 어려워 극심한 구인난을 겪게 됩니다. 보호자 접근성과 직원 채용이 용이한 <span className="font-semibold text-blue-700">도심 생활권</span>을 선택하셔야 합니다.
          </p>
        </div>

        {/* TOP 4 */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-0.5 rounded-md text-xs">TOP 4</span>
            <h3 className="font-bold text-slate-900 text-lg">창업 지원금은 정말 없는 건가요?</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            장기요양기관 창업 시 국가가 지원금을 준다는 잘못된 정보에 속으시는 경우가 많습니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            국가에서 거저 주는 무상 창업보조금은 없습니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            고용 창출 가산금 같은 운영 보조는 있어도 수억 원의 건물 매입이나 리모델링 비용 지원은 존재하지 않으므로, 대출을 활용하시더라도 <Highlight>자기자본 30~40%는 확실히 마련</Highlight>해두셔야 안전하게 승인을 받으실 수 있습니다.
          </p>
        </div>

        {/* TOP 5 */}
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 font-extrabold px-2.5 py-0.5 rounded-md text-xs">TOP 5</span>
            <h3 className="font-bold text-slate-900 text-lg">29인 요양원의 실제 월 순수익 규모</h3>
          </div>
          <p className="text-slate-700 leading-relaxed mb-3">
            가장 프라이빗하고 인기 있게 운영되는 29인 시설을 만석 기준으로 계산해보면, <strong>월 매출은 약 7,200만 원 ~ 8,700만 원</strong> 선입니다.
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            원장님이 시설장으로 상주하고 간호인력, 조리원, 요양보호사를 포함해 최소 15명의 직원을 정상 가동하며 4대 보험과 모든 운영비를 제하고 나면,
          </p>
          <p className="text-slate-700 leading-relaxed">
            <span className="font-bold text-blue-700 border-b-2 border-blue-200">한 달 순수익은 약 1,000만 원에서 1,300만 원 선</span>에 수렴합니다. 안 쓰는 토지와 건물을 활용해 매월 안정적인 현금 흐름을 창출하고 부동산의 장기적 가치 상승까지 노린다면 매우 훌륭한 복지 사업입니다.
          </p>
        </div>
      </div>

      <Quote className="border-blue-600 bg-blue-50/60 my-8">
        1,400여 개 기관을 경영지원하고 3,000여 번 넘는 창업 상담을 도와드리며 늘 드리는 말씀이 있습니다.<br />
        <strong>"철저하게 준비하면 리스크가 적은 블루오션이지만, 대충 알아보고 계약서부터 쓰면 평생 후회하는 족쇄가 됩니다."</strong>
      </Quote>

      <p className="mb-4">
        신축이나 신규 창업이 복잡하다는 이유로 덜컥 양도양수를 결정하시기 전,
      </p>
      
      <p className="mb-5">
        천천박사가 직접 1:1로 짚어드리는 일생일대 30분 무료컨설팅을 통해 안전성을 완벽히 검증받아 보시기 바랍니다.
      </p>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        천천박사였습니다. 감사합니다.^^
      </p>
    </article>
  );
}

// 13. 요양원 창업 실전 영상 (유튜브)
export function Step13() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        13. 요양원 창업 실전 영상 (유튜브)
      </h1>
      
      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        요양원 창업은 주간보호센터보다 초기 투자 규모가 크고, 토지·건물 자가 소유 요건과 법정 인력배치 기준이 매우 엄격합니다.
      </p>
      
      <p className="mb-6">
        글과 도면만으로는 파악하기 힘든 요양원 신축 및 리모델링 현장, 29인 vs 49인 vs 50인 시설 구조, 그리고 실제 만석 시의 월 순수익(1,000만~1,300만 원) 분석을 생생한 영상으로 전해드립니다.
      </p>

      {/* 유튜브 비디오 전용 연결 카드 */}
      <div className="my-6 rounded-3xl overflow-hidden border-2 border-red-200 bg-gradient-to-b from-red-50/70 via-white to-slate-50 shadow-lg p-6 sm:p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md group">
          <Play className="w-8 h-8 fill-white ml-1" />
        </div>

        <span className="inline-block bg-red-100 text-red-700 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          굿케어 공식 유튜브 요양원 실전 강의
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
          요양원 창업 & 29인 시설 수익 분석 실전 영상
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
          자가 건물 및 토지 매입 요건, 49인 vs 50인 인력배치 함정, 단층 면적 75평 기준, 실제 월 순이익 분석을 천천박사의 생생한 현장 강의로 시청하실 수 있습니다.
        </p>

        {/* 유튜브 바로가기 대형 버튼 */}
        <a
          href="https://www.youtube.com/@goodcare1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full max-w-md py-4 px-6 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-extrabold text-base rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
        >
          <Youtube className="w-6 h-6 shrink-0" />
          <span>굿케어 공식 유튜브 영상 바로 시청하기</span>
          <ExternalLink className="w-4 h-4 shrink-0 opacity-80" />
        </a>

        <div className="mt-4 text-xs text-slate-400 font-medium">
          ※ 유튜브 앱 또는 웹 브라우저에서 고화질로 즉시 재생됩니다.
        </div>
      </div>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        🎬 영상에서 다루는 주요 핵심 포인트
      </h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base mb-1">1. 29인 요양원 실제 월 순수익(1,000만~1,300만 원) 분석</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            월 매출 7,200만~8,700만 원 대비 직원 15명 인건비, 4대보험, 식자재비, 관리비를 제외한 실제 통장 순익 공개
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base mb-1">2. 단층 면적 75평 미만의 함정과 49인 vs 50인 배치</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            자가 건물이라도 층별 쪼개기 운영 시 요양보호사 인건비 폭증 원인 및 50인 초과 시 사무국장 필수 채용 리스크
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base mb-1">3. 신축 vs 기존 모텔/병원 리모델링 인허가</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            지자체 노유자시설 소방 실사 통과 및 도심 생활권 입지 선정으로 공실 없는 대기자 센터 만드는 비법
          </p>
        </div>
      </div>

      {/* 무료 컨설팅 설문지 직행 배너 */}
      <div className="my-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md text-center">
        <Sparkles className="w-8 h-8 text-amber-300 mx-auto mb-2" />
        <h3 className="text-lg sm:text-xl font-black mb-2 text-white">
          영상을 보신 후 내 건물·토지로 창업이 가능한지 궁금하신가요?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mb-5 max-w-md mx-auto">
          천천박사가 대표님의 부지 면적, 예산, 지역 인허가 기준을 1:1로 맞춤 진단해 드립니다.
        </p>
        <a
          href={CONSULTING_SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-white hover:bg-blue-50 text-blue-700 font-extrabold text-sm rounded-xl shadow-md transition-all active:scale-95"
        >
          <span>1분 완성 무료 컨설팅 설문지 작성하기</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        천천박사였습니다. 감사합니다.^^
      </p>
    </article>
  );
}

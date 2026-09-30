import React from 'react';
import { Youtube, ExternalLink, Play, Sparkles } from 'lucide-react';
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";
import { CONSULTING_SURVEY_URL } from "../data/columnsData";

// 6. 장기요양기관 창업, 정부지원금 있나요
export function Step6() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        6. 장기요양기관 창업, 정부지원금 있나요
      </h1>
      
      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-4 text-slate-700 font-medium">
        노무, 세무, 경영, 평가, 창업, 홍보, 회계, 감사,
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양기관 전문가 집단, <span className="text-blue-700 font-bold border-b-2 border-blue-200">굿케어 대표 천천박사</span>입니다.
      </p>

      <p className="mb-5">
        장기요양기관 창업을 준비하시는 예비 대표님들이 가장 많이 주시는 질문이 하나 있습니다.
      </p>
      
      <Quote>
        "국가를 대신해서 어르신을 모시고 돌봐드리는 기관인데, 정부지원금이나 보조금은 없나요?"
      </Quote>

      <p className="mb-4">
        당연히 해보셔야 하는 질문이고, 아주 자연스러운 궁금증입니다.
      </p>
      
      <p className="mb-5">
        그런데 이 질문 앞에서 '내가 정말 감당할 수 있는 사업인가?'를 냉정하게 재점검해 보실 수 있습니다.
      </p>
      
      <p className="mb-5">
        바로 <Highlight>'출발의 차이, 관점의 차이'</Highlight>가 사업의 성패를 가르기 때문입니다.
      </p>
      
      <p className="mb-4 font-semibold text-blue-700">
        결론부터 솔직히 말씀드리면, 순수한 무상 창업지원금이나 창업 보조금 정책은 없습니다.
      </p>
      
      <p className="mb-5">
        왜 그런지 제도와 현실을 하나씩 짚어가며 차근차근 설명해 드리겠습니다.
      </p>

      <ColumnImage 
        src="/images/6-1.jpg" 
        alt="주간보호센터 정부 무상 창업 지원금 현실과 주의사항" 
        caption="창업지원금의 현실과 장기요양 지정제도의 본질"
      />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        지정심사: 허가받기조차 험난한 제도
      </h2>
      
      <p className="mb-4">
        장기요양기관은 단순 신고제가 아니라 지자체의 승인을 받아야 하는 엄격한 허가제(지정제) 사업입니다.
      </p>
      
      <p className="mb-5">
        준비해야 하는 제출 서류나 시설·인력 요건이 상상을 초월할 정도로 까다롭습니다.
      </p>
      
      <p className="mb-4">
        주간보호센터나 요양원 창업만 해도, 무려 <span className="font-bold text-teal-800">16단계 이상의 복잡한 절차</span>를 거쳐야 합니다.
      </p>
      
      <p className="mb-5">
        그중 네 번째 단계에 해당하는 <span className="font-bold text-blue-800">지정심사</span>만 보아도 현실을 체감할 수 있습니다.
      </p>
      
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <p className="font-semibold text-slate-800 leading-relaxed">
          지정심사 단계에서는 요구 서류가 방대하고 규정이 엄격하여, 혼자 준비하다 탈락하는 사례가 부지기수입니다. 담당 공무원조차 전문 컨설팅이나 행정사의 도움을 받아오라고 권할 정도입니다.
        </p>
      </div>

      <p className="mb-4">
        서류 하나 준비하고 지정심사를 통과하는 과정에서조차 대표님의 행정 비용과 컨설팅 비용이 투입되어야 합니다.
      </p>
      
      <p className="mb-4">
        만약 정부가 무상 지원금을 펑펑 줄 만큼 센터가 부족한 상황이라면, 지자체 공무원이 전담 마크하며 개설을 독려했을 것입니다.
      </p>
      
      <p className="mb-4">
        하지만 지금 현장은 어떻습니까? 주간보호, 요양원, 방문요양은 이미 수많은 곳이 경쟁하고 있습니다.
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        오히려 3년마다 재지정 갱신 심사를 통해 부실하거나 기준 미달인 기관을 시장에서 퇴출시키는 추세입니다.
      </p>

      <ColumnImage 
        src="/images/6-2.jpg" 
        alt="장기요양기관 창업 자금 운영과 정책자금 보조금 진실" 
        caption="장기요양기관 지정 심사와 재지정 갱신 심사의 현실"
      />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        장기요양기관은 '복지를 곁들인 자영업'입니다
      </h2>
      
      <p className="mb-4">
        천천박사가 늘 강조하는 명제가 있습니다.
      </p>
      
      <p className="mb-5">
        <span className="font-bold text-slate-950 bg-amber-100/70 px-1 py-0.5 rounded">
          "장기요양기관은 자영업입니다. 단, 철저한 국가 관리감독과 복지를 곁들인 자영업입니다."
        </span>
      </p>
      
      <p className="mb-4">
        일반 카페나 식당은 손님이 없으면 직원을 줄이고 사장님이 발로 뛰며 버틸 수 있습니다.
      </p>
      
      <p className="mb-5">
        하지만 장기요양기관은 어르신 수에 비례하여 법정 필수 인력을 의무적으로 고용해야 합니다.
      </p>

      <InfoBox title="🚨 굿케어가 분석한 장기요양 3대 구조적 현실">
        <div className="flex flex-col gap-5 text-[15.5px]">
          <div>
            <h4 className="font-bold text-amber-900 text-base mb-1">1) 대형 평수 임대료 부담</h4>
            <p className="text-slate-800 leading-relaxed">
              주간보호센터는 최소 100평~150평 이상의 대형 면적이 필요하여 매달 임대료만 400만~600만 원 이상 고정 지출됩니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-amber-900 text-base mb-1">2) 필수 인력 배치 기준의 고정비</h4>
            <p className="text-slate-800 leading-relaxed">
              개원 첫날 어르신이 1명뿐이어도 사회복지사, 간호(조무)사, 요양보호사, 조리원, 운전원 등 법정 인력을 배치해야 하므로, <Highlight>오픈 즉시 월 1,000만 원 이상의 고정 인건비</Highlight>가 발생합니다.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-amber-900 text-base mb-1">3) 엄격한 사회복지시설 재무회계 규칙</h4>
            <p className="text-slate-800 leading-relaxed">
              수익이 난다고 대표 개인 통장으로 바로 인출할 수 없습니다. 모든 세입·세출은 법정 서식에 맞춰 집행되어야 하며, 남은 순이익은 적법한 잉여금 절차를 밟아야 회수할 수 있습니다.
            </p>
          </div>
        </div>
      </InfoBox>

      <ColumnImage 
        src="/images/6-3.jpg" 
        alt="장기요양기관 인력배치 기준 및 통장 재무회계 규칙" 
        caption="장기요양기관 재무회계 규칙과 필수인력 배치기준"
      />

      <p className="mb-4 font-semibold text-blue-700">
        너무 현실적인 이야기만 드려 걱정이 앞서실 수도 있습니다.
      </p>

      <p className="mb-4">
        하지만 정원 50~70명을 채우면 매월 수천만 원의 안정적인 순수익을 창출하는 알짜 사업인 것도 분명한 사실입니다.
      </p>
      
      <p className="mb-5">
        다만 아무런 준비 없이 '정부 지원금 받아서 편하게 해보자'는 안일한 생각으로 접근하시면 큰 낭패를 봅니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        굿케어의 솔직한 진단과 조언
      </h2>

      <p className="mb-5">
        앞서 살펴본 까다로운 지정심사는 굿케어 창업 16단계 중 <Highlight>겨우 4단계</Highlight>에 불과합니다.
      </p>
      
      <WarningQuote>
        그렇다면 굿케어가 생각하는 창업 1단계는 무엇일까요?<br />
        바로 '대표자 적성 검사, 자격 요건 확인, 그리고 올바른 사업 마인드셋'입니다.
      </WarningQuote>

      <p className="mb-5">
        이 각오와 준비 과정을 든든하게 헤쳐 나가실 수 있도록 굿케어가 일생일대 30분 무료 창업 컨설팅을 제공하고 있습니다.
      </p>

      <ColumnImage 
        src="/images/6-4.jpg" 
        alt="장기요양 창업 성공 전략과 굿케어 전문가 동행" 
        caption="굿케어 창업 전문 컨설턴트와의 1:1 맞춤 진단"
      />

      <p className="mb-4">
        상가 입지 분석, 평면도 구획 설계, 인력 구성, 홍보 마케팅, 그리고 손익분기점(BEP) 계산까지 창업의 전 과정을 명확히 짚어드립니다.
      </p>

      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <p className="font-bold text-slate-900 mb-1">💡 본질적인 질문부터 편하게 나눠보세요</p>
        <p className="text-slate-700 leading-relaxed font-medium">
          '제가 이 사업에 맞는 성향일까요?', '지금 가진 자금으로 안전하게 시작할 수 있을까요?'와 같은 본질적인 고민부터 전문가와 함께 점검해 보세요.
        </p>
      </div>

      <p className="mb-5">
        소중한 자산을 투자하는 계약서에 도장을 찍기 전, 반드시 굿케어 전문가의 다각도 검증을 받아보시길 권합니다.
      </p>
      
      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

// 7. 노유자시설 1000만원아끼는 법
export function Step7() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        7. 노유자시설 1000만원아끼는 법
      </h1>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.<br />
        장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        '노유자시설'이라는 단어, 일반인들에게는 참 낯설고 생소한 용어입니다.
      </p>
      
      <p className="mb-5">
        장기요양기관 창업을 결심하고 상가를 알아보러 다니면서 처음 접하게 되셨을 텐데요.
      </p>
      
      <p className="mb-4">
        창업 준비 단계에서 예비 대표님들이 가장 많은 발품과 시간을 쏟는 과정이 바로 '임장(현장 답사)'입니다.
      </p>
      
      <p className="mb-5">
        입지도 좋으면서 노유자시설로 용도변경이 가능하고, 적정 평수와 합리적인 임대료를 갖춘 상가를 찾아내는 것이 결코 쉽지 않기 때문입니다.
      </p>
      
      <ColumnImage 
        src="/images/7-14.jpg" 
        alt="노유자시설 용도변경 현황 및 상가 분석" 
        caption="노유자시설 용도변경을 위한 상가 건축물 현장 분석"
      />

      <p className="mb-4 font-semibold text-slate-900">
        대표님들이 노유자시설 상가 탐색에 필사적인 이유는 분명합니다.
      </p>
      
      <p className="mb-5">
        용도변경 공사비용과 시설 인입비가 천문학적으로 들어가기 때문입니다.
      </p>
      
      <p className="mb-4">
        소방 스프링클러, 피난 직통계단, 장애인 편의시설 등 준병원급에 준하는 법적 설비를 갖추어야 하기에 준비가 덜 된 건물을 고르면 수천만 원이 허공으로 날아갑니다.
      </p>
      
      <p className="mb-5 font-bold text-blue-700">
        그렇다면 상가 임장을 나갈 때 무조건 피해야 할 조건과 즉시 점검해야 할 핵심 체크리스트는 무엇일까요?
      </p>

      <ColumnImage 
        src="/images/7-2.jpg" 
        alt="노유자시설 소방 시설 규격 및 설계 기준" 
        caption="노유자시설 소방법상 스프링클러 및 소방안전 기준"
      />

      <p className="mb-4">
        노유자시설 기준에 부합하거나 근접한 상가만 잘 선별해도, <Highlight>최소 1,000만 원 이상의 초기 공사비용을 절약</Highlight>할 수 있습니다.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900">
        하지만 7가지 세부 점검 항목을 살피기에 앞서, 그보다 훨씬 더 중요한 대전제가 하나 있습니다.
      </p>

      <WarningQuote>
        원칙: 소규모 주간보호센터는 시작도 하지 마십시오
      </WarningQuote>

      <p className="mb-4">
        상가가 아무리 노유자시설에 가깝더라도 정원 규모가 너무 작다면 사업성이 나오지 않습니다.
      </p>
      
      <p className="mb-5">
        주간보호센터의 수익구조는 공단 고시 수가에 따라 어르신 정원수로 직결되는 국가사업이기 때문입니다.
      </p>
      
      <p className="mb-4">
        과거에는 10~15인 소규모 센터도 운영이 가능했으나, 가파른 물가 및 최저임금 인상으로 인해 현재 소규모 센터는 지출을 감당하기 어렵습니다.
      </p>
      
      <p className="mb-5">
        매출 상한선은 닫혀 있는데 고정비는 매년 치솟기 때문입니다.
      </p>

      <ColumnImage 
        src="/images/7-3.jpg" 
        alt="주간보호센터 대형화와 규모의 경제성 확보" 
        caption="굿케어 직영 90인 정원 스마트재활 8년 차 센터 전경" 
      />

      <p className="mb-4 font-bold text-slate-900">
        수년 전에는 80평대를 권장했으나, 현재 기준으로는 최소 실평수 120평 이상(정원 35~50인 이상)을 확보하셔야 안전한 손익분기점을 넘길 수 있습니다.
      </p>
      
      <p className="mb-5">
        대표님이 직접 시설장으로 근무하지 않고 전문 시설장을 채용할 계획이라면 더욱 넉넉한 정원 확보가 필수적입니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        임장 시 반드시 확인해야 할 7대 체크리스트
      </h2>

      <div className="flex flex-col gap-6 my-6 font-sans">
        {/* 1 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">1. 주출입구 점자블록 및 경사로 유무</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            건물 주출입구에 휠체어 경사로와 점자블록이 이미 설치되어 있다면 용도변경 심사 통과 가능성이 매우 높은 상가입니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-8.jpg" alt="출입구 점자블록 경사로 유무 확인" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 2 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">2. 장애인 전용 주차구역 유무</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            지하 또는 지상 주차장에 법정 규격에 맞는 장애인 주차구역이 갖추어져 있는지 확인하세요. 없거나 규격 미달 시 추가 공사가 필요합니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-6.jpg" alt="장애인 전용 주차구역 규격 및 설치 여부" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 3 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">3. 직통 피난계단 2개소 구비</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            임대하고자 하는 층이 3층 이상이라면, 화재 시 양방향 피난이 가능한 직통 피난계단이 2곳 이상 설치되어 있어야 합니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-10.jpg" alt="노유자시설 직통 피난계단 2개소 구비 요건" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 4 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">4. 옥내 소화전 및 스프링클러 배관</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            노유자시설 변경 시 가장 많은 견적이 발생하는 항목입니다. 배관 인입 여부와 증설 가능 여부를 설비 전문가와 반드시 체크해야 합니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-1.jpg" alt="옥내 소화전 및 스프링클러 배관 설비 점검" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 5 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">5. 자동 배연창 설치 여부</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            화재 발생 시 유독가스를 자동 배출하는 배연창은 2층 이상 노유자시설에서 법적 필수 요건입니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-9.jpg" alt="화재 대피 자동 배연창 설비 설치 기준" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 6 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">6. 건축물대장 내진설계 및 정화조 용량</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            정부24에서 건축물대장(갑/을)을 발급받아 내진설계 적용 여부, 위반건축물 등재 여부, 정화조 용량을 사전에 정밀 열람해야 합니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-11.jpg" alt="건축물대장 상가 내진설계 적용 여부 확인" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>

        {/* 7 */}
        <div className="border border-slate-200 bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-bold text-blue-800 text-lg mb-2">7. 어르신 맞춤 장애인 화장실</h3>
          <p className="text-slate-700 leading-relaxed mb-3">
            공용 화장실이 규격에 맞지 않는다면 센터 내부에 휠체어 회전반경과 비상호출벨을 갖춘 장애인 화장실을 신설해야 합니다.
          </p>
          <div className="max-w-md">
            <img src="/images/7-4.jpg" alt="어르신 전용 장애인 화장실 및 안전 손잡이" className="rounded-xl w-full h-auto object-cover max-h-[220px]" />
          </div>
        </div>
      </div>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        대표님은 공사 현장이 아니라 '사람'을 만나러 다니셔야 합니다
      </h2>
      
      <p className="mb-4">
        대표님이 모든 현장 목수나 전기 시공까지 직접 관리감독하려 들면 정작 중요한 오픈 준비를 놓칩니다.
      </p>
      
      <p className="mb-5">
        공사는 신뢰할 수 있는 전문 업체에 일임하고, 대표님은 진짜 중요한 두 가지에 집중하셔야 합니다.
      </p>
      
      <ColumnImage 
        src="/images/7-5.jpg" 
        alt="주간보호 인테리어 현장 실무와 대표의 핵심 역할" 
        caption="인테리어 시공 총괄과 대표자의 역할 분담"
      />

      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-800 font-medium">
          <li>1. 발품과 손품을 팔아 1,000만 원 이상 절감할 수 있는 최적의 노유자 매물 찾기</li>
          <li>2. 센터 오픈 첫날 입소할 어르신 수급자 발굴과 지역 사회 네트워크 구축하기</li>
        </ul>
      </div>

      <p className="mb-5 font-bold text-blue-700">
        오픈 첫날 등원할 어르신을 5명만 미리 확보해 두어도, 그 어떤 자재를 깎는 것보다 수백만 원의 고정 적자를 즉시 방어할 수 있습니다.
      </p>
      
      <p className="mb-4">
        간판 달고 문만 열어두면 어르신이 저절로 찾아올 거라는 착각은 금물입니다.
      </p>
      
      <p className="mb-5">
        개원 초기에는 시설장 채용, 직원 교육, 행정 전산 세팅만으로도 하루 24시간이 모자랍니다.
      </p>

      <ColumnImage 
        src="/images/7-13.jpg" 
        alt="장기요양 전문 파트너십 구축과 경영지원" 
        caption="굿케어 경영지원 솔루션과 지속 가능한 센터 운영"
      />

      <p className="mb-4">
        굿케어는 예비 대표님들이 안전하게 첫 발을 디디실 수 있도록 유튜브 채널, 네이버 카페, 그리고 30분 무료 창업 컨설팅을 열어두고 있습니다.
      </p>
      
      <p className="mb-5 font-medium text-slate-800">
        조급한 마음에 덜컥 상가 계약부터 하지 마시고, 굿케어 전문가와 함께 차근차근 검증하며 성공적인 개원을 준비하시기 바랍니다.
      </p>
      
      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

// 8. 구조설계, 인테리어시 조심해야 할 것
export function Step8() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        8. 주간보호센터 구조설계 및 인테리어 주의점
      </h1>
      
      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양 창업·경영지원 1등, <span className="text-blue-700 font-bold border-b-2 border-blue-200">굿케어</span>입니다.
      </p>
      
      <p className="mb-4">
        굿케어는 지난 12년간 전국 1,400여 개 장기요양기관의 창업, 경영지원, 평가 교육을 전담해 온 전문 기업입니다.
      </p>
      
      <p className="mb-5">
        수많은 현장을 컨설팅하며 가장 안타까웠던 점은, 인테리어와 구조설계 단계에서 잘못된 정보에 속아 거액의 손실을 입는 대표님들이 너무 많다는 것이었습니다.
      </p>
      
      <ColumnImage 
        src="/images/8-1.jpg" 
        alt="장기요양 세미나 전경" 
        caption="장기요양 창업 세미나 현장과 굿케어의 전문 강의"
      />

      <p className="mb-4">
        누군가는 저희의 솔직한 고백에 불편해할 수도 있지만, 장기요양 창업 시장의 불합리한 거품을 걷어내고 정직한 기준을 제시하고자 합니다.
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        진짜 성공하는 주간보호센터 인테리어와 구조설계의 핵심 원칙 2가지를 알려드립니다.
      </p>

      <ColumnImage 
        src="/images/8-2.jpg" 
        alt="굿케어 주간보호센터 본점 어르신들의 활동 모습" 
        caption="굿케어 주간보호센터 직영점 어르신들의 활기찬 일상"
      />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        첫 번째, 건축설계사는 장기요양 실무를 모릅니다
      </h2>
      
      <p className="mb-5">
        일반 건축사나 인테리어 디자이너는 상가 도면은 잘 그릴지 몰라도, <Highlight>주간보호센터 고유의 법적 시설·설비 기준과 동선</Highlight>에 대해서는 모르는 경우가 태반입니다.
      </p>
      
      <ColumnImage 
        src="/images/8-3.jpg" 
        alt="주간보호센터 법적 시설 및 설비 설계 기준 분석" 
        caption="노인복지법상 주간보호센터 필수 시설 및 설비 기준표"
      />

      <p className="mb-4">
        정원을 억지로 늘리겠다고 사무실이나 프로그램실 면적을 비정상적으로 줄이거나, 정원에 따른 법정 인력 동선을 무시하고 설계하면 실무 운영에서 치명적인 하자가 발생합니다.
      </p>
      
      <p className="mb-4 font-semibold text-slate-900">
        주간보호센터 설계는 한정된 평수 안에서 정원을 극대화하면서도 어르신의 안전 동선과 종사자의 서비스 동선이 완벽히 조화를 이루어야 합니다.
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        동선이 꼬인 잘못된 설계는 어르신 낙상 사고를 유발하고, 공간 부족으로 종사자가 불편을 겪어 공단 평가 시 감점의 직접적인 원인이 됩니다.
      </p>

      <ColumnImage 
        src="/images/8-4.jpg" 
        alt="주간보호센터 정원 비례 인력 기준 분석표" 
        caption="정원 규모에 따른 법정 필수 인력 배치 기준"
      />

      <p className="mb-4">
        바른 공간 구획 설계만으로도 종사자의 동선 낭비를 줄이고 정원을 최적으로 확보하여, <Highlight>매달 300만~400만 원 이상의 고정 운영비를 절감</Highlight>하는 놀라운 효과를 거둘 수 있습니다.
      </p>
      
      <p className="mb-4">
        이미 공사를 마치고 어르신들이 입소한 뒤에는 벽을 헐고 다시 지을 수도 없습니다.
      </p>
      
      <p className="mb-5">
        단순 인테리어 업자의 말만 믿지 마시고, 반드시 주간보호 설립 실적을 갖춘 전문가의 정밀 조언을 받으셔야 합니다.
      </p>

      <ColumnImage 
        src="/images/8-5.jpg" 
        alt="굿케어 주간보호센터 본점 어르신 보호자님들의 실제 감사 후기" 
        caption="굿케어 직영점 보호자님들의 진심 어린 감사 후기"
      />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        두 번째, 고객(어르신과 보호자)이 원하는 곳에 투자하십시오
      </h2>
      
      <p className="mb-4">
        위의 감사 후기에서 보듯, 보호자와 어르신이 진정으로 원하는 것은 화려한 대리석 바닥이 아닙니다.
      </p>
      
      <p className="mb-5">
        <span className="font-bold text-slate-900 border-b-2 border-indigo-200">'건강 증진을 위한 체계적인 신체·인지 재활 프로그램'</span>과 <span className="font-bold text-slate-900 border-b-2 border-indigo-200">'진심 어린 케어 서비스'</span>입니다.
      </p>
      
      <p className="mb-4">
        가장 안타까운 사례는 "이것도 미래 투자다"라며 눈에 보이는 겉치레 인테리어에 과도한 예산을 쏟아붓는 경우입니다.
      </p>
      
      <p className="mb-5">
        평당 100만 원짜리 인테리어 대신 200만 원짜리 초호화 인테리어를 한다고 해서 어르신이 2배 더 찾아오지 않습니다.
      </p>

      <Quote>
        "주간보호센터는 젊은 층이 찾는 예쁜 인스타 카페가 아닙니다.<br />
        어르신들이 아침부터 저녁까지 안전하고 편안하게 머무시는 생활 치유 공간입니다."
      </Quote>

      <p className="mb-5 mt-4">
        외관 인테리어에 예산을 무리하게 소진하기보다는 어르신의 건강을 실질적으로 회복시켜 드리는 전문 장비에 투자하십시오.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div>
          <img src="/images/8-6.jpg" alt="어르신 맞춤 물리치료 운동 프로그램" className="rounded-xl shadow-sm border border-slate-200 object-cover w-full h-[180px]" />
          <p className="text-xs text-center text-slate-500 mt-1">어르신 맞춤형 물리치료 및 관절 운동 프로그램</p>
        </div>
        <div>
          <img src="/images/8-7.jpg" alt="주간보호 슬링 재활 장비 및 근력 운동" className="rounded-xl shadow-sm border border-slate-200 object-cover w-full h-[180px]" />
          <p className="text-xs text-center text-slate-500 mt-1">스마트 슬링 보행재활 운동 시스템</p>
        </div>
      </div>

      <p className="mb-4">
        <Highlight>보행재활 슬링, 온열 물리치료기, 맞춤형 인지재활 교구, 힐링 족욕 시스템</Highlight> 등을 알차게 구비하는 것이 주변 센터와의 확실한 차별화 포인트가 됩니다.
      </p>
      
      <p className="mb-4">
        인테리어 업체는 마진이 높은 공사를 권하고, 장비 유통사는 자사 기기의 장점만 부각하기 마련입니다.
      </p>
      
      <p className="mb-5">
        어느 한쪽의 이권에 치우치지 않고 객관적으로 최적의 설계를 조언해 줄 수 있는 전문 창업 파트너를 찾으셔야 합니다.
      </p>

      <ColumnImage 
        src="/images/8-8.jpg" 
        alt="주간보호센터 복합 힐링 시스템과 운동재활 구성" 
        caption="굿케어 주간보호센터의 과학적인 재활 및 힐링 시스템"
      />

      <p className="mb-4 font-semibold text-blue-700">
        설계와 인테리어는 한 번 시공하면 되돌릴 수 없는 창업의 뼈대입니다.
      </p>
      
      <p className="mb-5">
        예산 낭비 없이 실사용 만족도와 정원을 극대화할 수 있는 현명한 가이드를 굿케어와 함께 준비해 보시기 바랍니다.
      </p>
      
      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

// 9. 주간보호센터 창업 실전 영상 (유튜브)
export function Step9() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        9. 주간보호센터 창업 실전 영상 (유튜브)
      </h1>
      
      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        주간보호센터 창업의 핵심 내용과 현장 노하우를 가장 쉽고 빠르게 이해하실 수 있도록, 굿케어 공식 유튜브 채널의 실전 가이드 영상을 연결해 드립니다.
      </p>
      
      <p className="mb-6">
        글로는 다 전달하기 어려운 인허가 실사 팁, 상가 도면 구획의 생생한 현장 화면, 그리고 1,400개 기관의 성공 운영 사례를 영상으로 직접 확인해 보세요.
      </p>

      {/* 유튜브 비디오 전용 연결 카드 */}
      <div className="my-6 rounded-3xl overflow-hidden border-2 border-red-200 bg-gradient-to-b from-red-50/70 via-white to-slate-50 shadow-lg p-6 sm:p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md group">
          <Play className="w-8 h-8 fill-white ml-1" />
        </div>

        <span className="inline-block bg-red-100 text-red-700 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          굿케어 공식 유튜브 실전 강의
        </span>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 tracking-tight">
          주간보호센터 창업 실전 가이드 영상
        </h2>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
          주간보호센터 설립 인허가 16단계, 노유자시설 용도변경, 1년 만에 정원 마감 달성한 실제 마케팅 비법을 천천박사의 생생한 강의로 시청하실 수 있습니다.
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
          <h3 className="font-bold text-slate-900 text-base mb-1">1. 주간보호센터 창업 준비와 지정심사 통과 전략</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            지자체별 지정 기준표 분석 및 보완 요구 없이 단번에 통과하는 서류·실사 준비 노하우
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base mb-1">2. 노유자시설 용도변경과 인테리어 비용 1,000만 원 아끼기</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            소방 스프링클러, 피난계단, 장애인 편의시설 등 불필요한 시공비를 줄이는 상가 선별법
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-base mb-1">3. 어르신 수급자 발굴과 오픈 1년 만에 정원 마감</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            온·오프라인 지역 밀착 마케팅을 통해 공실 적자 없이 흑자 전환하는 실전 비법
          </p>
        </div>
      </div>

      {/* 무료 컨설팅 설문지 직행 배너 */}
      <div className="my-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-md text-center">
        <Sparkles className="w-8 h-8 text-amber-300 mx-auto mb-2" />
        <h3 className="text-lg sm:text-xl font-black mb-2 text-white">
          영상을 보신 후 내 상황에 맞는지 궁금하신가요?
        </h3>
        <p className="text-xs sm:text-sm text-blue-100 mb-5 max-w-md mx-auto">
          천천박사가 대표님의 자본금, 희망 지역, 상가 매물을 1:1로 맞춤 진단해 드립니다.
        </p>
        <a
          href={CONSULTING_SURVEY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-3.5 px-6 bg-white text-blue-700 hover:bg-blue-50 active:scale-95 font-black text-sm rounded-xl shadow-md transition-all cursor-pointer"
        >
          <span>30분 무료 창업 컨설팅 설문지 신청하기 (1분 소요)</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        천천박사였습니다. 감사합니다.^^
      </p>
    </article>
  );
}

// 10. 굿케어 철학
export function Step10() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        10. 굿케어 철학
      </h1>
      
      <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 font-medium leading-relaxed">
        과거 한 주간보호센터에서 치매를 앓고 계신 80대 어르신을 시설 관계자들이 집단 폭행한 사건이 보도되어 온 사회에 큰 충격을 주었습니다.
      </div>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양 현장에서 평생을 몸담아 온 전문가로서, 그리고 어르신을 모시는 한 사람으로서 말로 다 표현할 수 없을 만큼 가슴이 아프고 참담했습니다.
      </p>

      <InfoBox title="🛡️ 굿케어가 지켜온 바른 돌봄의 발자취">
        <ul className="list-disc pl-5 flex flex-col gap-2 font-medium text-[15.5px] text-[#78350f]">
          <li>전국 장기요양기관 1,400여 개 창업·경영지원 달성</li>
          <li>스마트 벤처기업 및 혁신 우수기업 연속 선정</li>
          <li>굿케어 직영 주간보호센터 보건복지부·국민건강보험공단 평가 최우수(A) 등급 선정</li>
          <li>장기요양 우수 종사자 표창 및 전국 서비스 우수사례 최우수상 배출</li>
        </ul>
      </InfoBox>

      <ColumnImage 
        src="/images/10-1.jpg" 
        alt="장기요양 돌봄의 중요성과 요양기관 윤리 의식" 
        caption="어르신의 존엄과 안전을 지키는 요양 현장의 윤리의식"
      />

      <p className="mb-5">
        오늘은 감정을 추스르고, '어떤 분들이 주간보호센터 창업에 뛰어들어야 하고, 어떤 분들은 결코 시작해서는 안 되는지'에 대해 진솔한 이야기를 드리고자 합니다.
      </p>
      
      <Quote>
        "어르신을 아침에 안전하게 모셔와서, 함께 웃고, 재활을 돕고, 따뜻한 식사를 대접하며 저녁에 댁까지 모셔다드리는 곳이 주간보호센터입니다."
      </Quote>

      <p className="mb-5 mt-4">
        지난 수년간 3,000건이 넘는 창업 상담을 진행해 오면서 예비 대표님들로부터 가장 많이 들었던 두 가지 상반된 질문이 있습니다.
      </p>
      
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <p className="font-bold text-slate-800 mb-2">💬 대표적인 두 가지 상담 유형</p>
        <p className="text-slate-700 leading-relaxed font-medium pl-3 border-l-4 border-blue-500 mb-2">
          유형 A: "주간보호센터 하면 매달 얼마 남나요? 순수익 구조가 제일 궁금합니다."
        </p>
        <p className="text-slate-700 leading-relaxed font-medium pl-3 border-l-4 border-emerald-500">
          유형 B: "저는 평생 봉사만 해왔습니다. 돈은 안 벌어도 좋으니 좋은 일 하고 싶습니다."
        </p>
      </div>

      <p className="mb-4">
        노인복지사업 창업가로서 단호히 말씀드립니다.
      </p>
      
      <p className="mb-5">
        위의 두 극단적인 부류는 주간보호센터 창업을 다시 한번 신중하게 고민하셔야 합니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        첫 번째, 머리만 있고 가슴이 없는 사람
      </h2>
      
      <p className="mb-4">
        이런 분들의 대화는 오직 수익으로 시작해서 수익으로 끝납니다.
      </p>
      
      <p className="mb-5">
        머릿속에 '어르신'이라는 존엄한 인격체는 없고, 모든 것이 숫자로만 치환됩니다.
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        수익률과 자본 회전율만 바라보고 사업을 하실 거라면, 다른 상업 비즈니스를 하시는 것이 훨씬 맞습니다.
      </p>
      
      <p className="mb-4">
        장기요양기관은 국가 수가로 수익의 상한이 정해져 있습니다.
      </p>
      
      <p className="mb-4">
        돈만 좇는 설립자는 자신의 몫을 더 남기기 위해 종사자 처우를 깎거나 어르신 식대를 줄이려는 유혹에 빠지게 됩니다.
      </p>
      
      <p className="mb-5">
        그렇게 운영되는 기관 치고 오랫동안 사고 없이 번창한 곳은 단 하나도 없었습니다.
      </p>

      <ColumnImage 
        src="/images/10-2.jpg" 
        alt="장기요양기관 수익성과 복지 가치의 균형" 
        caption="수익성과 복지 가치의 조화로운 균형"
      />

      <p className="mb-5">
        주간보호센터는 정성과 윤리의식이 없다면 매일매일이 서류와 민원, 공단 모니터링의 지옥이 될 수밖에 없습니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        두 번째, 마음만 있고 경영 감각이 없는 사람
      </h2>
      
      <p className="mb-4">
        어르신을 향한 봉사정신과 사랑은 누구보다 뜨겁지만, 사업 경영과 행정 관리에는 아무런 관심도 준비도 없는 분들입니다.
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        수익구조가 어떻게 되는지, 4대 보험과 노무는 어떻게 관리하는지, 공단 전산 청구와 시설 평가는 어떻게 대비하는지 모른 채 무작정 시작하면 그 피해는 고스란히 직원과 어르신에게 돌아갑니다.
      </p>
      
      <p className="mb-4">
        혼자 하는 자원봉사는 나만의 희생으로 끝나지만, 센터 운영은 수십 명 직원의 생계가 걸린 경영입니다.
      </p>
      
      <p className="mb-5">
        봉사의 아름다운 마음이 경영 미숙으로 인해 파산이나 법적 분쟁으로 얼룩져서는 안 됩니다.
      </p>

      <ColumnImage 
        src="/images/10-3.jpg" 
        alt="굿케어 직원들의 따뜻한 복지 봉사활동 모습" 
        caption="굿케어 임직원들의 정기 현장 봉사활동"
      />

      <WarningQuote>
        순수한 열정과 봉사가 업이 되어, 삶의 깊은 상처로 변질되지 않기를 진심으로 바랍니다.
      </WarningQuote>

      <p className="mb-4 mt-4">
        어르신 돌봄 사고는 단순히 한 개인의 일탈 때문만이 아닙니다.
      </p>
      
      <p className="mb-5">
        체계적인 인력 배치, 직원 처우 관리, 그리고 올바른 돌봄 철학이 부재할 때 시스템 전체가 무너지며 발생하는 참사입니다.
      </p>

      <div className="bg-teal-50 border border-teal-200 p-5 rounded-2xl my-6 text-center">
        <p className="font-bold text-teal-900 text-lg sm:text-xl">
          "복지사업은 뜨거운 가슴과 냉철한 머리가 함께 손을 잡는 사업입니다."
        </p>
      </div>

      <p className="mb-4">
        머리만 있는 분은 진정한 돌봄의 가치를 돌아보시고, 마음만 있는 분은 탄탄한 사업 경영 실무를 배우셔야 합니다.
      </p>
      
      <p className="mb-5 font-bold text-slate-900">
        머리와 함께할 마음, 마음과 함께할 머리를 갖추신 분이라면 <Highlight>그것으로 창업의 자격은 충분합니다.</Highlight>
      </p>

      <ColumnImage 
        src="/images/10-4.jpg" 
        alt="감동적인 요양 현장의 따뜻한 손길과 존엄 케어" 
        caption="어르신의 존엄과 행복을 지켜드리는 굿케어의 약속"
      />
      
      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

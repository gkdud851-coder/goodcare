import React from "react";
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";

// 11. 9인 요양원 창업 할만할까?
export function Step11() {
  return (
    <article className="font-serif text-[#333] text-[19px] leading-[1.85] py-4">
      <h2 className="font-sans font-extrabold text-2xl text-[#1a365d] mb-6 tracking-tight leading-tight">
        11. 9인 요양원 창업 할만할까?
      </h2>

      <p className="mb-6 font-medium text-gray-800 leading-relaxed">
        안녕하세요.<br />
        1400여개 경영지원, 장기요양기관 전문가 집단, 굿케어 대표 <span className="font-semibold text-blue-800 border-b-2 border-blue-200">천천박사</span>입니다.
      </p>

      <p className="mb-6">
        9인 요양원에 대해서 들어보신 적이 있으실까요?<br />
        요양원 창업은 하고 싶긴 한데, 자금은 부족하고, 그럴 때 9인 소규모 요양원에 대해서 생각 해보시는 것 같습니다.
      </p>

      <InfoBox title="🧐 지금 이 순간만큼은 진심으로 대답해 주셔야 합니다.">
        <p className="text-[17px] font-sans leading-relaxed text-[#78350f]">
          <strong>"9인 요양원, 하고 싶은 이유가 수익 때문인가요?"</strong><br />
          장기요양기관, 복지사업이니 복지의 마음도 분명 있으실 겁니다. 다만 수익 때문인 이유가 더 크다면, 이 글을 끝까지 읽어주셔야겠습니다.
        </p>
      </InfoBox>

      <p className="mb-6">
        먼저 요양원은 크게 9인 시설과 10인 이상 시설로 나뉩니다. 이게 어떤 차이가 발생하냐면 임대가 가능한지, 아닌지로 나뉘는 중대한 문제로 이어지는데요.
      </p>

      {/* 구분 표 UI */}
      <div className="w-full my-6 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full border-collapse font-sans text-left text-sm">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200">
              <th className="p-3 font-semibold text-slate-700">구분</th>
              <th className="p-3 font-semibold text-slate-700">~9인 시설</th>
              <th className="p-3 font-semibold text-slate-700">9인~ (10인 이상)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 font-bold text-slate-900 bg-slate-50/50">임대 가능 여부</td>
              <td className="p-3 text-emerald-600 font-bold bg-emerald-50/20">임대 가능</td>
              <td className="p-3 text-red-600 font-bold bg-red-50/20">임대 불가능</td>
            </tr>
            <tr>
              <td className="p-3 font-bold text-slate-900 bg-slate-50/50">소유권 요건</td>
              <td className="p-3 text-slate-600">임대 운영 가능</td>
              <td className="p-3 text-slate-900 font-medium">자가명의 토지 건물 매입 해야함</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-6">
        그렇다 보니 9인보다 크게 차리시면, 29인 시설을 그나마 가장 많이 선택하시는 것 같습니다.
      </p>

      <p className="mb-6">
        29인 시설을 차리시려면 <span className="font-bold border-b-2 border-yellow-300">최소 15억 이상은 있으셔야 한다</span>고 보고 있어요. 토지와 건물, 모두 없다는 가정하에요.
      </p>

      <p className="mb-6">
        다만 압니다. 요양원까지 창업하시는 분들은 대부분 부모님께 물려받은 안 쓰는 토지나 부지가 있다는 것을요. 그걸 이용하시는 경우에는 토지나 건물 매입 비용을 제외 시켜주시면 되겠습니다.
      </p>

      <ColumnImage src="/images/7-5.jpg" alt="소규모 9인 요양원의 특장점과 운영방안" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        🏠 주의하셔야 하는 점 4가지
      </h3>

      <div className="space-y-8 font-sans mt-6">
        {/*주의사항1 */}
        <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
          <h4 className="font-black text-md text-blue-900 mb-2 flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
            어디서 시작하나?
          </h4>
          <p className="text-[16px] text-slate-700 leading-relaxed">
            9인 요양원을 하시려면 보통 단독주택에서 시작하시는 경우가 많습니다. 도심보다는 비도심, 근교에서 운영되는 곳이 많죠. 경기권이라고 하더라도, 도심 번화가 보다는, 조금 동떨어진 곳에서 운영하시는 경우가 많아요. 조용한 곳 말이죠.<br />
            단독주택을 임대한다고 하더라도, 월세 비용이 듭니다. 그래서 굿케어는 웬만하면 안 쓰는 주택이 있는 분들이 9인 요양원을 하셔야 한다고 말씀드리는 편이에요. 월세 비용이라도 아낄 수 있는, 임차인도 안 구해지고 그런 상황이라면 고민해 보실 수 있다는 것이죠. 그런 것도 없고, 직접 임대 해야 한다고 하면, 월세나 보증금 비용 또한 더 넉넉하게 초기자본으로 확보해 두셔야 합니다.
          </p>
        </div>

        {/*주의사항2 */}
        <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
          <h4 className="font-black text-md text-blue-900 mb-2 flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
            어떻게 모으나?
          </h4>
          <p className="text-[16px] text-slate-700 leading-relaxed">
            두 번째는 어르신 모집입니다. 정원수가 어떻게 되었는지, 어르신을 채워야 수익이 납니다.<br />
            20인 30인도 아니고 9인은 식은 죽 먹기라고 생각 하실 수도 있을 것 같아요. 물론 그럴 수 있을 겁니다.<br />
            잘만 운영하시고 입지도 나쁘지 않고, 브랜드 평판도 나쁘지 않다면, 대기인원까지 두고 운영하는 센터도 몇 번 봤었으니까요.<br />
            다만 이를 타개하기 위해서는, 부모님도 내가 모실 생각을 하시는 게 좋습니다. 9인 시설에 어머니 아버지만 하더라도 벌써 2명이 안정적으로 정원수를 감당해 주는 경우니, 꽤 든든하실 겁니다.<br />
            다만 이에 대해서는 부모님의 동의도 있으셔야겠지요. 아무리 부모님이라고 하더라도 요양원이라는 명칭의 건물에서 지내시기에 반감이 있을 수 있으니까요.<br />
            즉 두 번째 포인트는, 부모님이 편찮으셔서 어차피 부모님도 내가 돌봐야 하는 상황에까지 왔다면 9인 요양원을 고민해 보실 수 있는 상황이라는 것입니다.
          </p>
        </div>

        {/*주의사항3 */}
        <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
          <h4 className="font-black text-md text-blue-900 mb-2 flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
            얼마를 벌까?
          </h4>
          <p className="text-[16px] text-slate-700 leading-relaxed">
            세 번째로는 결국 얼마나 수익이 날까에 대한 질문을 해보셔야 합니다. 대표님들 아시죠? 정확한 건 직접 따져봐야 합니다.<br />
            대략적으로만 살펴보면 월 순수익이 시설장월급포함해서 300만 원 선이라고 알고 계시면 될 것 같아요.<br />
            그래도 사업인데? 그 정도 밖에 못 번다고 하실 수 있는데, 만약 안 쓰는 주택에서 시작하시는 거라면, 그에 준하는 월세 비용도 순수익으로 더하실 수 있어요. 가족이 함께 뛰어준다면 그만한 수익도 함께 더해 보실 수 있겠지요.
          </p>
        </div>

        {/*주의사항4 */}
        <div className="p-5 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
          <h4 className="font-black text-md text-blue-900 mb-2 flex items-center gap-1.5">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">4</span>
            인력배치?
          </h4>
          <p className="text-[16px] text-slate-700 leading-relaxed">
            시설장&사무국장&사회복지사 1명, 간호조무사&물리치료사 1명, 요양보호사 3명당 1명, 조리원 1명 정도 채용하셔야 하는데요.<br />
            9인 요양원 같은 경우에는 대부분 가족사업으로 운영되는 경우가 많습니다. 여기서 가족구성원들이 함께 사업에 뛰어준다면, 어차피 직원에게 나가야 하는 돈이, 우리 가족에게 들어가는 거고, 부부사업이나 가족사업으로 가정하면 대표님의 가정이 가져가시는 비용이 300만 원 + 1명당 인건비까지 더해 보실 수 있겠지요.<br />
            또 그러면 할만해 보입니다. 물론 회사에 가면 복지사업의 구성원으로 일하는 것보다야 좋겠지요. 하지만 엄청난 특출난 재능이 없으셔서 평범한 급여, 또 상사의 눈치를 보고 하는 것들에 있어서 민감하시다면, 상사의 눈치 없이 일을 할 수 있는 가족사업에 같이 뛰어든다는 건 또 나름대로의 가치가 있는 것 같습니다.
          </p>
        </div>
      </div>

      <p className="my-6">
        그래서 이것들을 종합해서 생각해 보셔야 합니다.<br />
        엄청난 큰 수익을 바라보고, 무작정 임대부터 시작하시는 게 아니라, 일단 나는 왜 이 사업을 하고 싶은지를 보셔야 해요.<br />
        또 마음만 있다고 해서 되는 게 아니라, 나에게 안 쓰는 단독주택이 있는지, 월세를 내놓아도 안 구해지는 그런 주택이 있는 건지, 나는 부모님을 어차피 모셔야 하는 상황인 건지, 그 김에 다른 어르신들도 모시고 싶은 건지, 번외로 가족 중에 함께 일하고 싶은 사람이 있는 건지를 종합적으로 살펴보셔야만 좋은 수익사업이 될 수 있습니다.
      </p>

      <Quote className="border-indigo-600 bg-indigo-50/50 mt-8">
        그래서 굿케어는 늘 이렇게 말씀드려요. 부모님을 모시면서 시작하는 복지사업이다, 이게 이 사업의 핵심이라고 생각합니다.
      </Quote>

      <p className="mb-6 mt-6">
        이 글은 무조건 이 사업을 추천드리는 글이 아니라, 여러가지 상황을 잘 고려해서 판단하셔야 한다 말씀드리는 글이였습니다.<br />
        즐겨볼 수 있는 영상 하나 띄워드리며, 궁금하신 점이 있으시다면, 일생일대 30분 제공해드리는 무료컨설팅의 기회를 이용해보시는 거 추천드릴게요.
      </p>

      <p className="mb-4 font-bold text-[#1a365d]">
        감사합니다.
      </p>
    </article>
  );
}

// 12. 요양원 창업 전, 반드시 보셔야하는 TOP 5
export function Step12() {
  return (
    <article className="font-serif text-[#333] text-[19px] leading-[1.85] py-4">
      <h2 className="font-sans font-extrabold text-2xl text-[#1a365d] mb-6 tracking-tight leading-tight">
        12. 요양원 창업 전, 반드시 보셔야하는 TOP 5
      </h2>

      <p className="mb-6 font-medium text-gray-800 leading-relaxed">
        안녕하세요 장기요양기관 전문가 집단, 굿케어 대표 <span className="font-semibold text-blue-800 border-b-2 border-blue-200">천천박사</span>입니다.
      </p>

      <p className="mb-6">
        혹시 요양원 창업에 관심이 있으신가요?<br />
        임대가 안나가는 상가나, 폐원 예정인 유치원 등을 갖고 계셔서 알아보고 계시는 중이신걸까요?
      </p>

      <p className="mb-6">
        그런 생각을 하고 계시더라도 한가지가 걸릴거에요.<br />
        '에이 어르신들이 요양원 가기를 얼마나 싫어하시는데요, 저조차도 가기 싫은데 사업성이 없을 것 같아요'
      </p>

      <WarningQuote>
        단언해서 말씀드리면, 그건 과거의 편견일 뿐입니다.
      </WarningQuote>

      <p className="mb-6 mt-4">
        지금 엄청나게 빠른 속도로 고령화가 진행되고 있고, 정부는 요양병원 혜택을 줄이면서까지 요양원 전환을 유도하고 있습니다.
      </p>

      <p className="mb-8 font-semibold text-indigo-950">
        하지만 무조건 창업한다고해서 잘되는 것은 아닙니다. 수익구조나 법적인 구조를 모른채로 개원하는 순간, 막대한 손실이 발생 할 수 있어, 오늘 그 이야기들을 전해드리려고 해요.
      </p>

      {/* 실사 성장 성적표 UI */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 my-8">
        <h4 className="font-sans font-black text-slate-900 text-lg mb-4 text-center">📈 굿케어 창업 실사 성장 성적표</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/85 p-4 rounded-xl shadow-xs border border-slate-100">
            <span className="text-[12px] text-blue-600 font-bold uppercase tracking-wide">만석 달성 및 유지</span>
            <p className="text-[15px] font-sans text-slate-800 font-black mt-1">1년만에 근 49명 달성 근접</p>
            <p className="text-[13px] text-slate-500 mt-0.5">개인적으로도 홍보 열심히 하시던 대표님, 49명 돌파하고도 대기자 상태 유지</p>
          </div>
          <div className="bg-white/85 p-4 rounded-xl shadow-xs border border-slate-100">
            <span className="text-[12px] text-blue-600 font-bold uppercase tracking-wide">굿케어 직영 빠른 성장</span>
            <p className="text-[15px] font-sans text-slate-800 font-black mt-1">3개월만에 49명 돌파</p>
            <p className="text-[13px] text-slate-500 mt-0.5">굿케어 직영 노하우 기반 단기 만석 달성</p>
          </div>
          <div className="bg-white/85 p-4 rounded-xl shadow-xs border border-slate-100 md:col-span-2">
            <span className="text-[12px] text-emerald-600 font-bold uppercase tracking-wide">2026년 신규 창업 성공 사례</span>
            <p className="text-[15px] font-sans text-slate-800 font-black mt-1">26년 창업, 경상도 지역 단기 입소 급증</p>
            <p className="text-[13px] text-slate-500 mt-0.5">4개월 만에 20명 돌파 → 5개월만에 27명 돌파 (곧 30명 달성 순항 중)</p>
          </div>
        </div>
      </div>

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        💡 요양원 창업 전, 반드시 보셔야하는 TOP 5 필수 점검
      </h3>

      <div className="space-y-8 font-sans mt-6 text-[16px] text-slate-700">
        {/* TOP 1 */}
        <div className="pb-6 border-b border-slate-100">
          <span className="inline-block bg-blue-100 text-blue-800 font-black px-2.5 py-1 rounded-md text-xs mb-3">TOP 1</span>
          <h4 className="font-bold text-slate-900 text-[18px] mb-2">"박사님, 제가 갖고 있는 건물에 요양원 할래요!"</h4>
          <p className="leading-relaxed">
            9인 노공생이 아닌 이상, 요양원을 창업하시려면 토지와 건물이 모두 자가명의로 매입되어 있으셔야 합니다. 대출을 하셔서라도요. 단 대부분의 대표님들은, 비어있는 토지에 신축해서, 또는 비어있는 건물을 개조해서 요양원을 운영하고 싶어하시는 분들이 훨씬 더 많으세요. 물론 의료집안이나 대기업 대표님들은 일부러 토지나 건물을 매입 해서까지 진행을 하는 경우도 있긴 합니다.<br /><br />
            그런데 여기서 문제가 하나 발생해요. 내 명의로 된 건물을 갖고 있더라도, <span className="text-red-600 font-bold">단층면적이 75평 미만</span>이라면, 요양원 개원을 잘 생각해보셔야 합니다. 어르신 1인당 법정 필수면적이 7.16평으로 정해져있는데, 단층면적이 너무 적은 시설은 2,3,4층으로 쪼개 운영해야하고 그에 따라 요양보호사 선생님 인건비 지출이 심해질 수 있습니다. 내가 갖고 있는 건물에 무작정 하려하시기보다, 적정수준의 규모로 운영 될 수 있는지 살펴보시는게 좋아요.
          </p>
        </div>

        {/* TOP 2 */}
        <div className="pb-6 border-b border-slate-100">
          <span className="inline-block bg-blue-100 text-blue-800 font-black px-2.5 py-1 rounded-md text-xs mb-3">TOP 2</span>
          <h4 className="font-bold text-slate-900 text-[18px] mb-2">1명의 차이, 수익구조를 공부 하셔야 하는 이유 (49인 VS 50인)</h4>
          <p className="leading-relaxed">
            주간보호는 정원의 매출을 가져오고, 요양원은 침실이 매출을 가져오기에 최대한 침대를 많이 두시려고 합니다. 그런 원리라면 49인 시설보다는 50인 시설이, 1명 어르신이 더 많기 때문에 훨씬 이득입니다. 하지만 49인에서 50인으로 넘어가는 순간, 필수법적인력이 <span className="font-bold text-red-600">3명이나 늘어나게 됩니다.</span><br /><br />
            여기에는 사무국장이라고 해서, 일반 급여의 1.5배 정도의 수준을 요구하는 직군도 포함되어 있어, 약 3.5명의 인건비를 추가로 감당하셔야 해요. 49인에서 50인의 차이, 단 1명의 어르신 매출이 3.5명의 1년 인건비를 감당 할 수 있을까요? 없습니다... 3.5명의 인건비를 추가로 감당하시려면, 57인 이상으로 확 건너 뛰셔야 겨우 감당 가능한 수준이에요. 그러니 차라리 49인으로 하시던지, 50인 이상으로 하고싶으면, 조금 더 규모를 많이 키우셔야 합니다.
          </p>
        </div>

        {/* TOP 3 */}
        <div className="pb-6 border-b border-slate-100">
          <span className="inline-block bg-blue-100 text-blue-800 font-black px-2.5 py-1 rounded-md text-xs mb-3">TOP 3</span>
          <h4 className="font-bold text-slate-900 text-[18px] mb-2">입지 선택의 변화 (도심 VS 비도심)</h4>
          <p className="leading-relaxed">
            자, 규모를 정했다면 우리 시설의 위치가 입지적으로는 괜찮은지를 살펴보셔야 해요. 옛날에는 공기 좋고 물 좋은 산속에 요양원을 차리는 경우가 많았습니다. 하지만 요즘은 많이 달라졌어요. 요즘 보호자분들은 거주하시는 도심 근처에, 언제든지 퇴근하고 가볼 수 있는 곳에 모시길 원합니다. 마음의 죄책감 때문에 그래요. 또 비도심은 요양보호사 선생님들이 출퇴근 하기게 어려워 인력난을 겪으실 가능성도 높습니다.<br /><br />
            그래서 마이통계로 사이트에 들어가, 내가 희망하는 창업지 지역의 노인 인구수와 장래 인구수 추이를 확인하셔야 하고요. 건강보험공단 장기요양기관 찾기에 들어가, 근처에서 운영되고 있는 시설들의 정원과 입소율을 확인해보셔야 합니다. 또한 네이버에 들어가, 해당 지역 시설들이 광고는 하고 있는지 또한 검색해보셔야 추후 마케팅 광고 비용도 대략적으로 추산 해볼 수 있게 됩니다.
          </p>
        </div>

        {/* TOP 4 */}
        <div className="pb-6 border-b border-slate-100">
          <span className="inline-block bg-blue-100 text-blue-800 font-black px-2.5 py-1 rounded-md text-xs mb-3">TOP 4</span>
          <h4 className="font-bold text-slate-900 text-[18px] mb-2">박사님, 좋아요. 근데 창업 지원금은 없나요?...</h4>
          <p className="leading-relaxed">
            하도 장기요양기관 창업시, 지원금이 있다는 가짜 이야기들이 많아 대표님들이 혼동하시는 경우가 많은 것 같습니다. 국가에서 주는 무상 창업보조금 같은건 없습니다. 고용 관련해서 지원되는 소액 지원금은 있을지몰라도, 수억원이 드는 리모델링 비용 같은 지원은 없습니다. 그래서 자본이 부족하시다면 대출을 받으셔야 하는데, <strong>자기자본 30~40%는 마련해두셔야</strong> 시군구의 안정적인 승인을 받으실 수 있습니다.
          </p>
        </div>

        {/* TOP 5 */}
        <div className="pb-6 border-b border-slate-100">
          <span className="inline-block bg-blue-100 text-blue-800 font-black px-2.5 py-1 rounded-md text-xs mb-3">TOP 5</span>
          <h4 className="font-bold text-slate-900 text-[18px] mb-2">29인 월 순수익은 얼마정도인데요?</h4>
          <p className="leading-relaxed">
            가장 아담하게 프라이빗하게 운영되는 구조는 29인 정도입니다. 29인 만석기준으로 정리해보면, <strong>매출은 약 7,200만원에서 8,700만원선</strong>이고요. 원장님이 시설장으로 근무한다고 했을 때, 간호인력, 조리원, 2:1 요양보호사 포함 최소 15명 직원이 필요합니다. 4대보험이나 다 제외하고 계산해보면 <strong>순수익은 약 한달 1,000만원에서 1,300만원에 수렴</strong>하게 되어요.<br /><br />
            엄청난 대박은 아닐지 몰라도, 잘 안쓰는 토지와 건물을 리모델링 해서 운영하는거라면, 그만한 가치는 있다고 생각합니다. 요양원을 운영하면서, 토지나 건물 자체의 가치상승도 내다볼 수 있고 하니까요.
          </p>
        </div>
      </div>

      <Quote className="border-blue-600 bg-blue-50/50 mt-8">
        1,400여개 기관을 경영지원해드리고, 3,000여번이 넘는 창업상담을 도와드리면서 늘 드리는 말씀이 있습니다. "철저하게 준비하면 리스크가 적은 블루오션 아이템이지만, 대충 알아보고 계약서부터 작성하게 되시면 평생을 후회하는 족쇄가 될 수 있습니다."
      </Quote>

      <p className="mb-6 mt-6">
        특히 신축이나 신규창업을 어렵다는 이유로, 요양원 양도양수를 고민하시는 분들도 계신데, 천천박사가 직접 제공해드리는 일생일대 딱 한 번, 30분 무료컨설팅을 통해 자세하게 짚어보고, 대화 나눠봤으면 좋겠네요.
      </p>

      <p className="mb-6 font-bold text-blue-900">
        천천박사였습니다. 감사합니다.
      </p>
    </article>
  );
}

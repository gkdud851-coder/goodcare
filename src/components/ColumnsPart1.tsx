import React from 'react';
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";

// 1. 경력 없어도 창업 가능할까요
export function Step1() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        1. 경력 없어도 창업 가능할까요
      </h1>
      
      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        하루에도 정말 많은 대표님들과 창업 상담을 진행하고 있어요.
      </p>
      
      <p className="mb-5">
        그중에서 가장 많이 들어오는 질문 하나가 있습니다.
      </p>

      <Quote>
        "박사님, 저는 복지 관련 경력이 전혀 없어요.<br />
        다른 센터에서 짧게라도 직원으로 근무 경험을 쌓고 시작해야 할까요?"
      </Quote>

      <p className="mb-4">
        그냥 건네는 말이 아닙니다. 정말 많은 분들이 잠 못 이루며 고민하시는 질문이에요.
      </p>
      
      <p className="mb-5">
        이 질문 앞에서는 기존 대표님들마다도 입장이 크게 갈리곤 합니다.
      </p>
      
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <p className="font-bold text-slate-800 mb-2">💡 대표님들의 엇갈리는 두 가지 입장</p>
        <p className="text-slate-700 leading-relaxed font-medium">
          "사업 감각이 있다면 그냥 해도 된다" vs "최소 6개월은 현장 경력을 쌓고 와야 한다"
        </p>
      </div>

      <p className="mb-5">
        그런데 천천박사는 오늘, 이걸 조금 다른 각도에서 현실적으로 풀어보려고 합니다.
      </p>
      
      <p className="mb-4">
        먼저 결론부터 솔직히 말씀드릴게요.
      </p>
      
      <p className="mb-5">
        굿케어 창업패키지를 통해 개원하신 대표님들 중, <Highlight>1년 만에 정원 마감을 달성하신 센터의 대표님들은 전부 완전 무경력자</Highlight>였습니다.
      </p>

      <ColumnImage 
        src="/images/1-1.jpg" 
        alt="무경력 주간보호센터 창업 1년 만에 정원 마감 달성 사례" 
        caption="무경력 대표님들의 1년 만의 놀라운 정원마감 실제 사례" 
      />

      <p className="mb-4">
        물론 현장 근무 경력이 있으면 도움이 되죠. 이건 저도 부인하지 않습니다.
      </p>
      
      <p className="mb-5">
        실제로 일해보시면 사소한 시행착오를 줄일 수 있는 것도 사실이고요.
      </p>
      
      <p className="mb-5 font-semibold text-slate-900">
        그런데, 경력 쌓으러 가시기 전에 반드시 냉정하게 따져보셔야 할 현실적인 2가지가 있습니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        첫 번째, 시간의 함정입니다
      </h2>
      
      <p className="mb-4">
        대표님, 다른 센터에 근로자로 들어가서 근무한다고 가정해봅시다.
      </p>
      
      <p className="mb-5">
        몇 개월이나 생각하고 계신가요? 6개월? 1년?
      </p>
      
      <p className="mb-4 font-semibold text-blue-700">
        과연 그 시간 동안 근로자로 일한다고 해서 센터 운영에 필요한 본질적인 지식을 모두 배울 수 있을까요?
      </p>
      
      <p className="mb-5 font-semibold text-blue-700">
        근로자와 운영자는 보는 시야와 관점이 완전히 다릅니다.
      </p>
      
      <p className="mb-4">
        요양보호사로 들어가시면 신입일 땐 선배 선생님들 지시를 따라가기에도 하루가 벅찹니다.
      </p>
      
      <p className="mb-5">
        사회복지사나 간호조무사로 일하신다 해도 그 직군 고유의 실무만 조금 익히는 것일 뿐, 대표로서 사업을 총괄하고 수급자를 모으는 운영자적 역량을 배우기엔 현실적으로 한계가 큽니다.
      </p>

      <ColumnImage src="/images/1-2.jpg" alt="주간보호센터 요양보호사 실무 현장" />

      <p className="mb-4 font-bold text-slate-900">
        무엇보다 중요한 것은, 시간이 흐를수록 지자체의 지정심사는 갈수록 까다로워지고 있다는 점입니다.
      </p>
      
      <p className="mb-5">
        임대할 수 있는 적정 상가 매물도 계속해서 줄어들고 있고요.
      </p>
      
      <p className="mb-5 text-blue-700 font-semibold">
        내가 남의 밑에서 경력을 쌓는 동안, 정작 내가 창업할 시장의 문은 계속 좁아지고 있습니다.
      </p>

      <ColumnImage src="/images/1-3.jpg" alt="장기요양기관 복합적 시설 운영과 인허가" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        두 번째, 어디서 근무하실 건가요? (지역 평판 리스크)
      </h2>
      
      <p className="mb-4">
        출퇴근을 위해 거주하시는 동네 주변 센터에서 근무하셔야 할 텐데요.
      </p>
      
      <p className="mb-5">
        창업을 마음에 품고 있다는 사실을 알면 선뜻 채용해줄 원장님은 거의 없습니다.
      </p>
      
      <p className="mb-4 text-amber-900">
        설령 어렵게 취업해서 일을 배우고 퇴사한 뒤, 근처에 내 센터를 개원했다고 가정해봅시다.
      </p>
      
      <p className="mb-4 text-amber-900">
        대표님의 순수한 의도와는 무관하게 장기요양 바닥은 좁아서, <em>"우리 센터 어르신과 직원들 빼가려고 위장 취업했었다"</em>라며 순식간에 지역의 적으로 몰릴 수 있습니다.
      </p>
      
      <p className="mb-5 text-amber-900">
        나중에 지자체 협회나 모임에서 마주칠 때 매우 곤란한 처지에 놓이게 됩니다.
      </p>

      <ColumnImage src="/images/1-4.jpg" alt="주변 시선과 갈등 배경" />

      <h3 className="font-bold text-lg text-slate-900 mt-8 mb-3">
        그렇다면 대표님들은 왜 굳이 현장 근무를 해보고 싶어 하실까요?
      </h3>
      
      <p className="mb-4">
        아마 이런 이유들 때문일 겁니다:
      </p>
      
      <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 my-5 text-slate-700 space-y-1.5 font-medium">
        <p>• 주간보호가 현장에서 얼마나 고된 사업인지 몸으로 직접 느껴보고 싶어서</p>
        <p>• 하루 센터 일과와 어르신 송영 시스템의 흐름을 눈으로 보고 싶어서</p>
        <p>• 어르신들을 실제로 어떻게 대해야 하는지 배우고 싶어서</p>
      </div>
      
      <p className="mb-4">
        그 마음, 충분히 공감합니다. 결코 말리고 싶지 않아요.
      </p>
      
      <p className="mb-5">
        하지만 사업의 현실을 직시해야 합니다.
      </p>
      
      <p className="mb-4">
        어르신을 유치하는 마케팅 노하우는 일반 직원이 배울 수 있는 영역이 아닙니다. 그것은 오롯이 사업자인 대표님의 영역입니다.
      </p>
      
      <p className="mb-4">
        또한 어르신을 모시는 태도는 경력의 길이보다 <strong>어르신을 진심으로 존중하고 사랑하는 마음</strong>이 훨씬 크게 작용합니다.
      </p>
      
      <p className="mb-5">
        경력이 10년이어도 사명감이 없으면 어르신들이 먼저 느끼고, 무경력이어도 따뜻한 진심이 있으면 보호자들이 먼저 신뢰합니다.
      </p>

      <ColumnImage src="/images/1-5.jpg" alt="마케팅 성공 요인" />

      <p className="mb-4 font-bold text-amber-800">
        시간적 여유가 넉넉하시다면 현장 분위기를 경험하고 시작하셔도 좋습니다.
      </p>
      
      <p className="mb-5 font-bold text-amber-800">
        다만 천천박사가 말씀드리고 싶은 핵심은 하나입니다. <Highlight>경력이 없다고 해서 시작 자체를 두려워하며 몇 년씩 미룰 이유는 결코 되지 않는다</Highlight>는 것입니다.
      </p>

      <ColumnImage src="/images/1-6.jpg" alt="주간보호센터 온오프라인 마케팅과 수급자 유치" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        그렇다면 경력보다 무엇이 훨씬 중요할까요?
      </h2>
      
      <p className="mb-4">
        센터 운영의 핵심은 두 축으로 나뉩니다:
      </p>
      
      <p className="mb-5">
        <span className="font-semibold text-slate-900">1. 어르신을 모셔오는 마케팅</span>, 그리고 <span className="font-semibold text-slate-900">2. 모인 어르신을 정성껏 케어하는 시스템</span>입니다.
      </p>
      
      <p className="mb-4">
        돌봄 케어의 전문성은 훌륭한 시설장, 사회복지사, 간호조무사, 요양보호사 선생님들을 채용하여 전문가 시스템으로 완성하는 것입니다. 대표가 모든 실무를 혼자 다 할 필요가 없습니다.
      </p>
      
      <p className="mb-5">
        진짜 성패를 가르는 것은 <strong>어르신을 모셔오는 대표님의 마케팅 역량과 사업적 결단력</strong>입니다.
      </p>

      <ColumnImage src="/images/1-7.jpg" alt="주간보호센터 성공 경영과 전문가 협업" />

      <InfoBox title="💡 창업 전 스스로에게 던져야 할 핵심 5문항">
        <ul className="list-disc pl-5 space-y-1.5 font-medium text-[#78350f]">
          <li>1. 규모의 경제성과 손익분기점을 명확히 알고 있는가?</li>
          <li>2. 국민건강보험공단 급여 수가와 지출 구조를 정확히 이해하는가?</li>
          <li>3. 단순 근로자가 아닌 사업가로서의 경영 마인드가 준비되었는가?</li>
          <li>4. 사람의 존엄을 지키고자 하는 진정한 복지의 마음을 품었는가?</li>
          <li>5. 온라인·오프라인 마케팅과 지역 영업의 중요성을 뼈저리게 실감하는가?</li>
        </ul>
      </InfoBox>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        경력은 플러스 요인일 뿐, 성공의 절대 조건이 아닙니다.<br />
        본질을 꿰뚫고 있다면 무경력자도 얼마든지 정원 마감을 달성할 수 있습니다. 감사합니다.^^
      </p>
    </article>
  );
}

// 2. 자격증 없어도 주간보호센터 창업 가능한가요?
export function Step2() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        2. 자격증 없어도 주간보호센터 창업 가능한가요?
      </h1>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        주간보호센터가 유망하다는 소식에 창업 자격 조건을 검색하고 계신 분들 많으시죠?
      </p>
      
      <p className="mb-4">
        오늘은 많은 분들이 오해하고 계시는 설립 자격 요건을 아주 명쾌하게 짚어드리겠습니다.
      </p>
      
      <p className="mb-5">
        주간보호센터 개원 요건은 크게 두 갈래로 나뉩니다:
      </p>

      <Quote>
        <strong>1. 인력 조건:</strong> 시설장이 될 수 있는 법적 자격 요건<br />
        <strong>2. 시설 조건:</strong> 노유자시설 용도변경 및 면적 규격
      </Quote>

      <p className="mb-4">
        시설장으로 직접 근무하시려면 <Highlight>사회복지사 1급 또는 2급 자격증</Highlight>이 필요합니다.
      </p>
      
      <p className="mb-4">
        의사나 한의사, 간호사 면허증이 있어도 가능하고, 요양보호사 실무 5년 이상 경력이 있어도 시설장이 될 수 있습니다.
      </p>
      
      <p className="mb-5 font-medium text-slate-700">
        만약 자격증을 취득하고자 하신다면 학점은행제를 통해 사회복지사 2급을 취득하는 것이 가장 보편적이고 빠른 방법입니다.
      </p>

      <ColumnImage src="/images/2-1.jpg" alt="장기요양기관 창업 자격 및 인허가 상담 자문" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        그런데, 이거 알고 계셨습니까?
      </h2>
      
      <p className="mb-4">
        엄밀히 법을 따져보면, <Highlight>주간보호센터를 창업하는 대표자는 아무런 자격증이 없어도 됩니다.</Highlight>
      </p>
      
      <p className="mb-5">
        센터의 소유주이자 설립자인 <strong>'대표자'</strong>와, 센터 실무를 총괄하는 법적 필수 인력인 <strong>'시설장'</strong>은 완전히 다른 법적 지위이기 때문입니다.
      </p>
      
      <p className="mb-5">
        전국 센터의 약 70%가 시설장 인건비를 아끼기 위해 대표자가 직접 시설장을 겸직하다 보니 두 개념이 마치 같은 것처럼 굳어졌을 뿐입니다.
      </p>
      
      <p className="mb-5 text-slate-900 font-medium">
        요즘은 전문 경영인처럼 시설장을 별도로 채용하여 본인은 경영과 마케팅에만 집중하시거나 여러 지점을 네트워크로 운영하시는 대표님들이 부쩍 늘고 있습니다.
      </p>

      <ColumnImage src="/images/2-2.jpg" alt="주간보호센터 대표자 및 시설장 자격 조건 분석" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        자격증보다 100배 더 중요한 자기 진단
      </h2>
      
      <p className="mb-4">
        굿케어가 수천 건의 상담을 진행하며 센터 양도(매각)를 결정하시는 분들을 분석해보면 공통된 이유가 있습니다.
      </p>
      
      <p className="mb-5">
        건강이나 이사 때문도 있지만, <span className="text-red-600 font-bold">"직원 관리와 사람 상대가 너무 버겁다"</span>는 호소가 압도적으로 많습니다.
      </p>
      
      <p className="mb-5">
        정원을 가득 채워 대기자까지 있는 흑자 센터를 일궈놓고도 사람과의 갈등에 지쳐 사업을 포기하시는 대표님들을 적지 않게 보았습니다.
      </p>

      <ColumnImage src="/images/2-3.jpg" alt="사회복지사 자격 취득" />

      <p className="mb-5 font-semibold text-slate-900">
        따라서 자격증 취득 여부를 고민하기 전에, 스스로에게 먼저 이 질문을 던지셔야 합니다:
      </p>
      
      <div className="bg-indigo-50/70 p-5 rounded-2xl border border-indigo-150 my-6 text-center">
        <p className="text-lg font-extrabold text-indigo-950">
          "나는 사람을 품고, 직원을 조율하고, 어르신을 보살피는 일에 맞는 사람인가?"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6 space-y-2 text-slate-700 font-medium">
        <p>1. 사람을 설득하고 관리하는 일이 나에게 보람을 주는가, 아니면 극심한 스트레스인가?</p>
        <p>2. 어르신과 보호자를 대할 때 진심에서 우러나오는 공감이 자연스럽게 형성되는가?</p>
        <p>3. 예상치 못한 민원이나 직원 간 갈등이 발생했을 때 침착하게 문제를 해결할 회복탄력성이 있는가?</p>
      </div>

      <p className="mb-4">
        이 질문에 자신이 없다고 해서 창업을 포기하실 필요는 없습니다.
      </p>
      
      <p className="mb-5">
        다만 그 경우에는 <Highlight>처음부터 능력 있는 시설장을 별도로 채용하는 전문 경영인 구조</Highlight>로 방향을 잡고, 시설장 급여 지출을 감당할 수 있는 적정 규모로 정원을 설계하셔야 합니다.
      </p>

      <ColumnImage src="/images/2-4.jpg" alt="주간보호센터 시설장 고용 및 급여 지출 구조" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        많은 분들이 놓치는 '규모의 경제학'
      </h2>
      
      <p className="mb-4">
        예를 들어 소규모 30인 미만 센터의 경우, 시설장을 별도로 고용하면 정원을 꽉 채워 운영하더라도 시설장 월급을 빼고 나면 대표 순수익이 100~200만 원 남짓에 불과할 수 있습니다.
      </p>
      
      <p className="mb-5">
        따라서 시설장을 두고 오토(Auto) 운영을 지향하신다면, <span className="font-semibold text-blue-700">처음부터 최소 40인~50인 이상의 넉넉한 면적과 규모</span>를 갖추고 시작하셔야 승산이 있습니다.
      </p>

      <ColumnImage src="/images/2-5.jpg" alt="주간보호센터 정원 만석 및 대기자 관리" />

      <InfoBox title="천천박사의 진심 어린 조언">
        <p className="leading-relaxed text-[#78350f]">
          "월 순수익 수천만 원"이라는 달콤한 장밋빛 숫자만 보고 덜컥 시작하지 마십시오.<br />
          자격 요건, 시설 기준, 나의 성향, 초기 운전자본까지 냉정하게 점검받으신 후 확신을 갖고 출발하셔야 합니다.
        </p>
      </InfoBox>

      <ColumnImage src="/images/2-6.jpg" alt="장기요양기관 창업 및 인수 분석 컨설팅" />

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        천천박사였습니다. 감사합니다.^^
      </p>
    </article>
  );
}

// 3. 가족이랑 같이 해도될까요
export function Step3() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        3. 가족이랑 같이 해도될까요
      </h1>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        안녕하세요. 장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        장기요양 시장이 커지면서 최근 부쩍 늘어난 창업 형태가 바로 배우자, 자녀와 함께하는 <strong>'가족형 주간보호센터'</strong>입니다.
      </p>
      
      <p className="mb-4">
        그런데 가족사업이라고 해서 다 같지 않습니다.
      </p>
      
      <p className="mb-5">
        구조에 따라 리스크가 천차만별인데요, 대표적인 두 가지 케이스를 명확히 짚어드리겠습니다.
      </p>

      <ColumnImage src="/images/3-1.jpg" alt="가족 단위 주간보호센터 어르신 돌봄" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        케이스 1: 가족이 시설장·사회복지사 등 필수 인력으로 함께 뛰는 경우
      </h2>
      
      <p className="mb-4">
        주간보호센터 지출의 <Highlight>60%~70%는 직원 인건비</Highlight>입니다.
      </p>
      
      <p className="mb-5">
        이 막대한 고정비 부담을 가족 구성원이 함께 짊어져준다는 것은 재정 안정성 측면에서 대단히 유리한 출발점입니다.
      </p>
      
      <p className="mb-4">
        하지만 명심해야 합니다. 가족 구성원도 자신의 소중한 커리어와 시간을 희생해서 들어오는 것입니다.
      </p>
      
      <p className="mb-5">
        "일터에서는 냉정한 직원, 가정에서는 따뜻한 가족"이라는 공과 사의 경계를 문서와 규칙으로 명확히 세우지 않으면, 나중에 사업도 가족 관계도 둘 다 흔들릴 수 있습니다.
      </p>

      <ColumnImage src="/images/3-2.jpg" alt="가족 구성 경영 연출" />

      <WarningQuote>
        가족들의 고혈을 다 쥐어짜면서도 적자를 면하지 못하는 영세한 소규모 센터는 가족 모두의 눈물이자 수렁이 될 수 있습니다. 시작부터 확실한 규모의 경제성을 설계하십시오.
      </WarningQuote>

      <ColumnImage src="/images/3-3.jpg" alt="가족의 헌신과 주간보호센터 적자 리스크" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        케이스 2: 가족 한쪽의 직장 월급으로 센터 적자를 메우며 버티는 경우
      </h2>
      
      <p className="mb-5 font-semibold text-blue-700">
        이 케이스는 대단히 위험하므로 각별히 주의하셔야 합니다.
      </p>
      
      <p className="mb-4">
        신규 개원 센터는 오픈 후 최소 3~6개월 동안 어르신을 모으는 손익분기 도달 기간이 반드시 필요합니다.
      </p>
      
      <p className="mb-4">
        이 시기에는 운영비 지출로 인해 매월 적자가 발생합니다.
      </p>
      
      <p className="mb-5">
        이 적자를 배우자나 자녀의 직장 월급으로 계속 메워야 하는 구조라면 금전적 불안감이 가중되어 마케팅에 온전히 집중할 수 없게 되고, 가족 간의 갈등으로 번지기 십상입니다.
      </p>

      <ColumnImage src="/images/3-4.jpg" alt="주간보호센터 초기 운전자금과 수익 리스크 방어전략" />

      <p className="mb-5">
        따라서 가족사업으로 안정적으로 안착하시려면, 가족의 생활비와는 완전히 분리된 <span className="font-bold text-slate-900 border-b-2 border-amber-300">최소 6개월간의 여유 운전자본(1,500만~3,000만 원)</span>을 사전에 금고에 마련해두고 출발하셔야 합니다.
      </p>

      <ColumnImage src="/images/3-5.jpg" alt="주간보호센터 입지 선정과 개원 마케팅 준비" />

      <Quote className="border-blue-600 bg-blue-50/60 my-6">
        가족이 함께하는 사업일수록 "가족이니까 어떻게든 되겠지"라는 안일함을 버리고, 더 엄격하고 냉정하게 수익 구조와 역할을 분담해야 합니다.
      </Quote>

      <ColumnImage src="/images/3-6.jpg" alt="안전한 장기요양 입지 분석 및 리스크 수립" />

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

// 4. 양도양수 vs 신규창업
export function Step4() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        4. 주간보호센터 양도양수 vs 신규창업
      </h1>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        1,400여 개 기관 경영지원 노하우의 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        0명에서부터 어르신을 모을 자신이 없다는 이유로 기존 센터의 인수를 고민하시는 분들이 정말 많습니다.
      </p>
      
      <p className="mb-5">
        하지만 양도양수의 이면에는 자칫 수천만 원을 날릴 수 있는 치명적인 덫이 도사리고 있습니다.
      </p>

      <div className="bg-red-50 border border-red-200 p-5 rounded-2xl my-6 shadow-xs">
        <p className="font-bold text-red-800 mb-2">⚠️ 실제 양도양수 피해 사례</p>
        <p className="text-slate-700 leading-relaxed font-medium mb-1">
          "35인 정원 만석이라고 해서 1억 5천 권리금을 주고 인수했는데, 3개월 만에 어르신 절반이 다른 센터로 빠져나가고 요양보호사들도 집단 퇴사했습니다. 알고 보니 매도 원장이 1km 옆에 새 센터를 짓고 빼돌린 거였습니다."
        </p>
      </div>

      <p className="mb-5">
        이런 사기를 방지하기 위해 인수 전 반드시 체크해야 할 4가지 원칙이 있습니다.
      </p>

      <ColumnImage src="/images/4-1.jpg" alt="주간보호 양도양수와 신규 창업 권리금 비교 분석" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        양도양수 전 필독해야 할 4대 점검 원칙
      </h2>

      <div className="space-y-4 my-6">
        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 text-base mb-1">1. 행정처분 및 환수금 승계 여부를 확인하세요</h3>
          <p className="text-slate-700 leading-relaxed">
            전 원장이 저지른 인력 배치 위반, 허위 청구로 인한 공단 환수 처분은 사업자 변경 여부와 상관없이 센터 고유번호에 그대로 귀속되어 새 대표가 물어내야 합니다.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 text-base mb-1">2. 실제 어르신 출석률과 진성 고객을 대조하세요</h3>
          <p className="text-slate-700 leading-relaxed">
            명부상 30명 등록이어도 병원에 장기 입원 중이거나 주 1~2회만 나오는 허수 어르신이 많습니다. 최소 최근 3~6개월 공단 일일 급여제공기록지를 전수 조사해야 합니다.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 text-base mb-1">3. 기존 요양보호사들의 텃세와 급여 체계를 검토하세요</h3>
          <p className="text-slate-700 leading-relaxed">
            기존 직원이 새 대표에게 비협조적이거나 전 원장과의 유착으로 어르신들을 이탈시킬 위험이 있습니다.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200">
          <h3 className="font-bold text-slate-900 text-base mb-1">4. 신규 창업 공사비와의 기회비용을 비교하세요</h3>
          <p className="text-slate-700 leading-relaxed">
            낡은 시설의 인테리어 권리금과 어르신 머릿수 권리금을 합친 금액이 1~2억 원에 달한다면, 그 돈으로 최신 감각의 스마트 신규 센터를 짓고 마케팅에 투자하는 것이 장기적으로 훨씬 이득일 수 있습니다.
          </p>
        </div>
      </div>

      <ColumnImage src="/images/4-2.jpg" alt="굿케어 장기요양 1400여 기관 경영지원 실적" />

      <InfoBox title="안전한 양도양수를 위한 필수 특약 조건">
        <p className="leading-relaxed text-[#78350f]">
          • 매도 대표는 양도 계약 후 반경 7~10km 이내에 유사 시설을 개원하거나 관여할 수 없다.<br />
          • 관할 관청 지정심사 과정에서 허가 정원이 감축될 경우 감축 비율에 비례하여 매매대금을 감액한다.
        </p>
      </InfoBox>

      <ColumnImage src="/images/4-3.jpg" alt="주간보호 양도양수 전 직원 고용승계 점검 요소" />
      <ColumnImage src="/images/4-4.jpg" alt="장기요양기관 부정수급 및 행정처분 위험 대응" />
      <ColumnImage src="/images/4-5.jpg" alt="주간보호센터 대형화 흐름과 시장 경쟁력" />
      <ColumnImage src="/images/4-6.jpg" alt="비영리 장기요양 임대차 계약 리스크 점검" />

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        양도양수 계약서 날인 전, 전문가의 무료 자문을 반드시 거치시기 바랍니다. 감사합니다.^^
      </p>
    </article>
  );
}

// 5. 주간보호센터 창업, 얼마나 걸릴까요
export function Step5() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        5. 주간보호센터 창업, 얼마나 걸릴까요
      </h1>
      
      <p className="mb-5 font-semibold text-slate-900 leading-relaxed">
        안녕하세요. 장기요양기관 전문가 집단, 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>
      
      <p className="mb-4">
        주간보호센터 창업을 결심하신 뒤 가장 먼저 세우셔야 하는 것이 바로 '현실적인 일정표(로드맵)'입니다.
      </p>
      
      <p className="mb-5">
        많은 대표님들이 "인테리어 한 달, 서류 한 달이면 두 달 만에 오픈할 수 있겠지"라고 생각하시지만, 실제 현장은 전혀 그렇지 않습니다.
      </p>

      <Quote>
        주간보호센터 설립은 준비부터 최종 개설 신고증 교부까지 <Highlight>최소 4개월에서 평균 6개월</Highlight>이 소요되는 장기 프로젝트입니다.
      </Quote>

      <ColumnImage src="/images/5-1.jpg" alt="주간보호센터 창업 일정 및 인허가 타임라인" />

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        단계별 소요 기간 상세 로드맵
      </h2>

      <div className="space-y-4 my-6">
        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg mb-2">1단계: 상가 매물 탐색 및 권리 분석 (1~2개월 소요)</h3>
          <p className="text-slate-700 leading-relaxed mb-2">
            가장 많은 시간과 발품이 드는 단계입니다.
          </p>
          <p className="text-slate-700 leading-relaxed">
            단순히 위치가 좋다고 계약하면 안 되며, 건축물대장상 <strong>노유자시설 용도변경 적합 여부, 정화조 용량, 소방 스프링클러 인입 가능성</strong>을 철저히 검증해야 합니다.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg mb-2">2단계: 노유자시설 용도변경 및 인테리어 (2~3개월 소요)</h3>
          <p className="text-slate-700 leading-relaxed mb-2">
            일반 근린생활시설을 거동 불편 어르신을 위한 <strong>노유자시설</strong>로 변경해야 합니다.
          </p>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
            <p>• 건축 도면 작성 및 관련 부서 사전 협의: 2~3주</p>
            <p>• 정식 허가 신청 및 용도변경 승인: 2~3주</p>
            <p>• 소방 완비 증명 및 인테리어 시공: 4~6주</p>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg mb-2">3단계: 소방시설 설치 및 안전 검사 (계약 전 사전 진단 필수)</h3>
          <p className="text-slate-700 leading-relaxed">
            스프링클러 배관 연장 및 비상 대피 미끄럼틀, 피난계단 2개소 구비 요건을 관할 소방서와 사전 확인해야 공사 지연을 방지할 수 있습니다.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg mb-2">4단계: 필수 법정 인력 채용 (공사 중 병행)</h3>
          <p className="text-slate-700 leading-relaxed">
            시설장, 사회복지사, 간호조무사, 조리원, 운전원 등 개원 즉시 배치해야 할 인력을 준공 1개월 전 사전 공고하여 면접을 완료해야 합니다.
          </p>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <h3 className="font-bold text-slate-900 text-lg mb-2">5단계: 지자체 장기요양기관 지정심사 (1~2개월 소요)</h3>
          <p className="text-slate-700 leading-relaxed">
            사업계획서, 운영규정, 세입세출 예산서 심사와 심사위원 대면 면접 실사를 통과해야 최종 개설신고증이 교부됩니다. 보완 요구가 발생하면 다음 심사 분기까지 지연될 수 있습니다.
          </p>
        </div>
      </div>

      <ColumnImage src="/images/5-2.jpg" alt="주간보호센터 입지 구획 평면도 및 도면 설계" />
      <ColumnImage src="/images/5-3.jpg" alt="노유자시설 스프링클러 및 소방 특별 설비" />

      <Quote className="border-blue-600 bg-blue-50/60 my-6">
        조급한 마음에 서두르다가 소방 부적격 건물을 덜컥 계약하면 수천만 원의 월세와 공사비를 날릴 수 있습니다. 정확하고 철저한 타임라인 관리가 가장 빠른 성공의 지름길입니다.
      </Quote>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        천천박사였습니다. 감사합니다.^^
      </p>
    </article>
  );
}

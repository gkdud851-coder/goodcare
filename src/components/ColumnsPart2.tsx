import React from 'react';
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";

// 6. 창업 지원금 있나요?
export function Step6() {
  return (
    <article className="font-serif text-[#333] text-[19px] leading-[1.85] py-4">
      <h2 className="font-sans font-extrabold text-2xl text-[#1a365d] mb-6 tracking-tight">
        6. 창업 지원금 있나요?
      </h2>
      <p className="mb-6 font-medium text-gray-800 leading-relaxed">
        안녕하세요.<br />
        노무, 세무, 경영, 평가, 창업, 홍보, 회계, 감사,<br />
        장기요양기관 전문가집단,<br />
        <span className="font-semibold text-blue-800 border-b-2 border-blue-200">굿케어 대표 천천박사</span>입니다.
      </p>

      <p className="mb-6">장기요양기관 창업 대표님들이 가장 많이 주시는 질문,</p>
      
      <Quote className="bg-blue-50 border-blue-600 text-[#1a365d] font-bold">
        "국가 대신해서 어르신 대신 돌봐주고 모셔주는 기관인데, 정부지원금 없나요?"
      </Quote>

      <p className="mb-6 mt-4">입니다. 충분히 하셔야 하는 질문이고, 해보셔야 합니다.</p>
      <p className="mb-6 font-medium text-indigo-900">왜냐하면 이 질문 앞에서, '내가 할 사업이 아니구나'를 재점검 해보실 수 있거든요.</p>
      <p className="mb-6">바로 <Highlight>'출발의 차이가, 관점의 차이'</Highlight>가 사업의 승패를 가져오기에 꼭 점검 해보셔야 합니다.</p>
      
      <p className="mb-6 font-bold text-blue-600">일단 명확히 말씀드릴 것은, 창업 정부지원금이나 창업 지원 정책은 없습니다.</p>
      <p className="mb-6">있다고 하면 있다고 할 수 있는데 살펴볼거 다 살펴보고, 설명드려볼게요.</p>

      <ColumnImage src="/images/6-1.jpg" alt="정부 무상 창업 지원금 현실" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        지정심사
      </h3>
      <p className="mb-6">장기요양기관은 허가제사업이라, 주무관청의 허가를 받아야 합니다.</p>
      <p className="mb-6">각종 준비해야하는 제출서류나, 자격조건 등도 굉장히 까다로운데요.</p>
      <p className="mb-6">주간보호, 요양원만 해도, 무려 <span className="font-bold text-teal-700">16단계 이상의 절차가 필요</span>합니다.</p>
      <p className="mb-6">그 중, 4번째 정도에 해당하는 <span className="font-semibold text-blue-700">지정심사 단계</span>를 살펴보겠습니다.</p>
      
      <div className="bg-slate-50 border-l-4 border-slate-400 p-5 rounded-r-lg my-6 font-sans text-stone-800 text-[17px]">
        지정심사 단계에서는 너무 준비해야하는 서류가 많고, 제대로 준비하지 못해 탈락하시는 분들이 많다보니, 주무관님 조차도 업체에 맡기라고 할 지경입니다.
      </div>

      <p className="mb-6">서류 하나 준비하고, 지정심사 과정에서조차 대표님의 '행정사 및 컨설팅 비용'을 쓰셔야 합니다.</p>
      <p className="mb-6">창업 지원금이 있을 정도의 국가사업이라면, 그만큼 시장에 필요하단 이야기이고, 국가에서 발 벗고 나서서, 공무원분들의 전담마크를 받으며 서류 도움을 받으셨을 겁니다.</p>
      <p className="mb-6 font-bold text-blue-600">하지만 우리 시장은 어떤가요? 주간보호, 요양원, 방문요양 많아도 너무 많습니다.</p>
      <p className="mb-6">워낙 많다보니 3년마다 재갱신심사를 통해 잘못된 운영을 하는 기관은 오히려 폐업을 처리하는 지경이라고 하니, 지금 잘 고민해보셔야 합니다.</p>

      <ColumnImage src="/images/6-2.jpg" alt="장기요양기관 창업 자금 운영과 보조금 진실" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        장기요양기관은 자영업이다
      </h3>
      <p className="mb-6">늘 말씀드려왔던 말입니다.</p>
      <p className="mb-6 font-bold text-indigo-950 border-b border-indigo-200 inline">
        장기요양기관은 정말 자영업 같은 사업이에요. 그런데 어떤 자영업이요? 복지를 곁들인 자영업!
      </p>
      <p className="mb-6 mt-4">그런데 이게 참 오묘합니다. 자영업인데, 국가의 감독과 감시까지 받으니, 조금 더 까다로운 자영업이라고 할 수 있어요.</p>
      <p className="mb-6">자영업의 대표산물들인 카페, 치킨집, 식당 같은 경우도 워낙 시장이 불경기이다보니 쉽지 않은게 현실입니다.</p>
      <p className="mb-6">그런데 식당이나 카페나 치킨집은 '열심히 하고 많이 팔면 돈'은 법니다. 하고자 하시는 사업의 임대가 상업권으로 갈 수록 비싸시겠지만,</p>

      <InfoBox title="🚨 굿케어가 분석한 장기요양 3대 구조적 리스크">
        <div className="flex flex-col gap-6 font-sans text-base">
          <div>
            <h4 className="font-extrabold text-[#78350f] text-lg mb-1">1) 임대 부담</h4>
            <p className="text-gray-800 leading-relaxed">
              장기요양기관은 기본 평수 자체도 100평 이상의 규모로 임대 해야해서, 임대료가 월 기본 400~600을 넘나듭니다.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-[#78350f] text-lg mb-1">2) 인력기준의 족쇄</h4>
            <p className="text-gray-800 leading-relaxed">
              거기에 꼭 아셔야하는거 '필수인력배치기준' 이라는게 있는게, 이게 참 무시하지 못하는 부분이에요.<br />
              일반 자영업은 매출이 안나오면 '직원, 알바'를 자르고, 사장인 내가 더 뛰어댕기면 됩니다.<br />
              근데 장기요양기관은 무조건 필수로 고용하고, 배치해야하는 필수 인력기준이 있는데, 이게 오픈하자마다 최소 5명이라, <Highlight>기본 월 -1,000만원부터 시작되는 사업</Highlight>이라는걸, 꼭 기억하셔야 해요.<br />
              즉, 우리가 하고자 하는 사업은 지원금을 바랄 수 없는 자영업 사업이며, 복지와 국가의 감독을 곁들였고 필수 인력기준 등을 갖추어야 하는 무거운 사업이라는 것이지요.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-[#78350f] text-lg mb-1">3) 까다로운 통장관리</h4>
            <p className="text-gray-800 leading-relaxed">
              심지어 놀라운 사실 하나 더 알려드리면, 이제 어르신이 좀 차고 수익이 난다고 해서, 바로 대출이자를 상환하거나, 지인에게 빌린 사업 투자금을 회수 할 수도 없습니다.<br />
              수익이 났다고 바로 인출해버리면, 재무회계 규칙에 의거해서 바로 패널티입니다. 여러번 누적되면? 3년 뒤에 재갱신심사에서 기관 날라갈 수 있습니다.<br />
              지출 할 것들을 모두 지출하고 나서도, 수익이 있으면, 그때 기타잉여금으로 빼오셔야 해요.
            </p>
          </div>
        </div>
      </InfoBox>

      <ColumnImage src="/images/6-3.jpg" alt="고용 창출 가산금과 면세 혜택 조건" />

      <p className="mb-6 font-medium text-blue-600">
        너무 부정적인 이야기만 해서, 주변 창업 회사들로부터 욕을 먹는건 아닌지 싶네요...
      </p>

      <p className="mb-6 text-gray-800">
        이 글을 읽으시는 예비대표님들, 70명 모으면 월 순수익 3000만원 가까운 사업, 맞습니다.<br />
        하지만 어르신 잘 모으고, 모으기 자신 있다던지, 안쓰는 내 임대건물도 있다던지, 사람 만나길 좋아하다던지, 가족이 인건비를 감당해주다던지, 복지센터에 큰 도움 받아 이젠 내가 어르신들을 돌보고 싶다라는 강렬한 마음이 있다던지가 아니면 참 힘든 사업입니다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        굿케어의 솔직한 진단과 조언
      </h3>

      <p className="mb-6">자, 여기서 질문 하나. 우리가 지금까지 살펴본 지정심사 과정이, 전체 창업단계 중에서 몇 단계라고요? <Highlight>겨우 4단계</Highlight> 입니다.</p>
      
      <WarningQuote>
        그럼 굿케어가 생각하는 창업단계 1단계는 무엇이였을까요? 바로 적성검사, 자격 확인하기, 마음먹기였습니다.
      </WarningQuote>

      <p className="mb-6">이 각오, 이 무거운 첫 시작을 온전히 견뎌낼 분들만 하셔야 합니다. 그래서 굿케어가 일생일대, 첫 무료 30분 무료컨설팅, 상담을 성심성의껏 도와드리고 있는겁니다!</p>

      <ColumnImage src="/images/6-4.jpg" alt="성공을 가르는 창업전략과 동행" />

      <p className="mb-6">
        창업 입지설정부터 평면도 및 구획설계가 잘 나왔을지, 홍보 마케팅, 그리고 꼭 창업뿐만 아니라 창업비용, 창업수익, 창업구조, 노무, 세무, 평가, 재갱신, 양도양수 관련 상담까지 모두 명확하게 가능합니다.
      </p>

      <p className="mb-6 font-bold text-indigo-950 bg-slate-50 p-5 rounded-xl border border-slate-100">
        '제가 해도 될까요?', '저하고 성향이 어울리는 맞는 사업일까요?'에 관한 본질적인 상담도 흔쾌히 가능합니다.
      </p>

      <p className="mb-6">부디 그 중요한 계약서에 성급히 싸인 하기 전, 꼭 자격조건과 수익구조를 정밀 확인하시고, 내가 계약을 위해 준비하고 있는 그 모든 것을 굿케어 전문가에게 완벽하게 점검 받고 확인 받으셨으면 좋겠습니다.</p>
      
      <p className="mb-6 font-medium text-gray-800">
        감사합니다.^^
      </p>
    </article>
  );
}

// 7. 노유자시설 1000만원을 아낀다고?


export function Step7() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        7. 노유자시설 1,000만 원을 아낀다고?
      </h2>
      
      <p className="mb-6">
        안녕하세요 장기요양기관 전문가 집단, 굿케어 대표 천천박사입니다.
      </p>
      
      <p className="mb-6">
        노유자시설? 아마 살면서 처음 들어보는 분들도 많을 겁니다.<br />
        어쩌면 장기요양기관 창업을 준비하시면서 듣게 되신 용어 일 수도 있을 것 같아요.
      </p>
      
      <p className="mb-6">
        창업을 준비하시는 많은 대표님들이, 많은 시간은 할애하는 단계가 '임장'입니다.<br />
        입지가 괜찮으면서도, 노유자시설에 가까운, 내가 원하는 평수를 찾는 것에 많은 시간을 할애하시는데요.
      </p>
      
      <ColumnImage src="/images/7-1.jpg" alt="노유자시설 현황" />

      <p className="mb-6 font-medium text-slate-800">
        왜 그럴까 곰곰이 생각해보면, 노유자시설 용도변경 투자금액이 만만치 않기 때문입니다.
      </p>
      
      <p className="mb-6">
        기본 소방시설은 물론, 병원, 의원 수준에 근접할 정도로 각종 시설들을 갖추어야 하기에 공사비용이 정말 만만치 않습니다.
      </p>
      
      <p className="mb-6 font-bold text-blue-600">
        그래서일까요? 주간보호 임대 매물을 찾으실 때, 뒤도 돌아보지 말고 나와야하는 7가지 체크사항이 있다고 합니다.
      </p>
      
      <p className="mb-6">
        처음은 힘드시겠지만, 많이 다녀보시면 보실수록, 매물을 보는 안목과 식견이 생길 거라 믿습니다.<br />
        굿케어가 무료로 배포해드린 임장 체크리스트만 가져다니시면서 체크해보셔도 큰 도움이 되실 거예요.
      </p>

      <ColumnImage src="/images/7-2.jpg" alt="소방 시설 설계" />

      <p className="mb-6">
        노유자시설에 근접한 임대물건만 찾으면 뭐 얼마나 절감되는지 궁금하실 것 같습니다.<br />
        매물에 따라 다르겠지만 <Highlight>평균 1,000만 원 이상의 비용이 절약</Highlight> 될 것으로 예상되오니, 해당 체크리스트를 잘 활용하셨으면 좋겠네요.
      </p>
      
      <p className="mb-6 text-slate-900 font-semibold">
        그 전에 잠깐, 예비 대표님들께 꼭 드리고 싶은 말씀이 있습니다. 노유자시설 용도변경에 필요한 7가지를 보기 전, 그보다 더 중요한 원칙 하나가 있습니다.
      </p>

      <WarningQuote>
        첫 번째, 소규모는 시작도 하지 마세요
      </WarningQuote>

      <p className="mb-6">
        보고자 하시는 매물이 얼마나 노유자시설에 가까운지는 중요하지 않습니다. 제일 중요한 건 수익구조 파악입니다.
      </p>
      
      <p className="mb-6">
        주간보호센터의 수익구조는 국가에서 정해준 고시 비용만을 받을 수 있으며, 정원에 따라 수익이 산정되는 국가사업입니다.
      </p>
      
      <p className="mb-6">
        예전에는 9인, 16인 사업들도 나름대로의 사업성이 있었지만, 요즘은 물가상승으로 인해 인건비, 운영비의 상승이 매우 높아지고 있습니다.<br />
        매출은 한정되어있는데, 지출만 늘어나게 되는 구조는 물론, 소규모 센터는 공단의 정책 변경에 갈대와 같이 흔들릴 수밖에 없습니다.
      </p>

      <ColumnImage src="/images/7-4.jpg" alt="규모의 경제성 확보" caption="굿케어 직영. 90인 정원 스마트재활 8년차 센터" />

      <p className="mb-6 font-bold text-indigo-900">
        22년, 지금으로부터 약 4년 전에는 무조건 80평 이상은 하셔야 한다고 말씀드렸는데, 현재 기준으로는 최소 120평 이상은 해주셔야 안전합니다.
      </p>
      
      <p className="mb-6">
        만약 시설장을 두고 돌릴 생각이시라면, 시설장 급여까지 생각해, 조금 더 넉넉한 정원을 확보하셔야겠지요.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째, 7가지 확인하세요
      </h3>

      <div className="flex flex-col gap-8 my-8 font-sans text-base">
        {/* 1 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">1. 출입구 점자블록 경사로 유무</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            임대하고자 하는 건물 출입구에, 점자블록이 설치되어 있다면, 임장 해볼 가치가 있는 건물입니다.
          </p>
          <div className="max-w-md"><img src="/images/7-8.jpg" alt="출입구 점자블록 경사로 유무 확인" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 2 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">2. 장애인 주차장 유무</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            또한 그 외에 장애인 주차장 또한 갖추어져있다면, 그럴 가능성은 더욱 커지는데요. 만약 장애인 주차장이 없다면, 필수적으로 만드셔야 합니다. 있는 경우에도 규정변경도 많이 바뀌고 있어서 보완 해야 할 가능성이 큽니다.
          </p>
          <div className="max-w-md"><img src="/images/7-9.jpg" alt="장애인 주차장 유무" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 3 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">3. 피난계단</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            임대하고자 하는 건물이 3층 이상이라면, 피난 계단도 2개 이상은 있으셔야 합니다.
          </p>
          <div className="max-w-md"><img src="/images/7-10.jpg" alt="피난계단" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 4 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">4. 소화전 스프링클러 유무 확인</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            소방시설이 되어있어도, 스프링클러 증이설은 추가로 들어가야 하는 경우가 많습니다. 노유자 시설 용도변경에 있어, 가장 많은 비용이 들어가다보니, 내부까지 들어가셨다면 필수적으로 잘 확인하셔야겠습니다.
          </p>
          <div className="max-w-md"><img src="/images/7-11.jpg" alt="소화전 스프링쿨러 유무 확인" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 5 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">5. 배연창 확인</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            배연창은 화재시, 자동으로 열리는 창문을 말합니다. 많이 헷갈려 하시는데 2층이상은 배연창이 필수입니다.
          </p>
          <div className="max-w-md"><img src="/images/7-12.jpg" alt="배연창 확인" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 6 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">6. 건축물대장, 내진설계</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            정부 24에 들어가시면 건축물대장을 발급받을 수 있습니다. 내진설계가 되어있는지도 확인하셔야겠습니다.
          </p>
          <div className="max-w-md"><img src="/images/7-13.jpg" alt="건축물대장, 내진설계" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>

        {/* 7 */}
        <div className="border border-gray-100 bg-white p-5 rounded-lg shadow-sm">
          <h4 className="font-extrabold text-[#2b6cb0] text-lg mb-2">7. 장애인 화장실</h4>
          <p className="text-gray-700 leading-relaxed mb-3">
            마지막은 장애인 화장실입니다. 꼭 센터 내부에 있어야하는건 아닙니다. 임대층에 있다면 사용이 가능하지만, 대부분 만드시긴 하지요.
          </p>
          <div className="max-w-md"><img src="/images/7-14.jpg" alt="장애인 화장실" className="rounded-md w-full h-auto object-cover max-h-[220px]" /></div>
        </div>
      </div>

      <p className="mb-6 font-medium">
        그 외에도 많은 부분들이 있지만, 7가지 정도만 보셔도 충분 하시리라 믿습니다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        세 번째, 공사판에 나오지 마세요
      </h3>
      
      <p className="mb-6">
        마지막 세 번째는, 공사현장에 나오시지 말라고 말씀드리고 싶습니다. 모든 것들을 대표님이 관할하려고 하지 마세요.<br />
        그러기 위해선 진짜 전문가를 만나시기 위해, 전문가를 찾아 나서는 시간을 할애 하셔야 할 것 같습니다.
      </p>
      
      <ColumnImage src="/images/7-6.jpg" alt="인테리어 현장 실무 배제" />

      <p className="mb-6 font-medium text-slate-800">
        왜 공사현장에 나오지말라하냐면, 대표님이 하셔야 하는 것은 딱 2가지 입니다.
      </p>

      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-800 font-medium text-base">
          <li>노유자시설에 근접한 매물을 찾기 위한 부동산 손품팔기, 발품팔기, 이것을 통해 최소 1,000만 원을 아껴가시면 되는 겁니다.</li>
          <li>노유자시설이 정해졌다면, 구획설계 및 인테리어 설계, 용도변경시, 대표님은 사람들을 만나셔야 합니다.</li>
        </ul>
      </div>

      <p className="mb-6 font-bold text-blue-600">
        최소 5명만 모으셔도, 그 어떠한 것을 하시는 것보다 수많은 비용을 절감하실 수 있습니다.
      </p>
      
      <p className="mb-6">
        센터가 오픈한다고해서 사람이 몰려들거란 생각은 하지 않는게 좋습니다. 대표님이 뛰어다니셔야 합니다. 지금 밖에 뛰어다니실 시간이 없습니다.
      </p>
      
      <p className="mb-6">
        시설장으로 근무를 시작하시면 센터 초반, 직원들 채용하고 관리하고 배치하고, 상담하고, 센터 불을 키고 문을 닫고 나오는 일과로도 하루가 모자를겁니다.
      </p>
      
      <p className="mb-6 font-bold text-indigo-900">
        그러니 대표님이 하셔야 할 건, 진짜 전문가를 찾는 보는 일, 괜찮은 노유자시설을 찾아보는 일, 이 2가지입니다.
      </p>

      <ColumnImage src="/images/7-7.jpg" alt="전문 파트너십 구축" />

      <p className="mb-6">
        굿케어는 예비 대표님들을 위해 유튜브 공헌사업과 네이버카페 공헌사업, 블로그 운영 공헌사업, 무료상담 30분 제공 사업을 진행하고 있습니다.
      </p>
      
      <p className="mb-6 font-medium text-teal-800 bg-teal-50 p-4 rounded-xl border border-teal-100">
        잠에서 깨어 기지개를 키고, 몸을 풀어간다는 생각으로 급하지 않게 천천히, 정확히 나아가셨으면 좋겠습니다.
      </p>
      
      <p className="mb-6">
        모든 대표님들을 응원하고, 일생일대 누구나 받을 수 있는 30분 무료상담 컨설팅에서 만나뵙도록 하겠습니다.
      </p>
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}

// 8. 구조설계, 인테리어시 조심해야 할 것


export function Step8() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        8. 구조설계, 인테리어시 조심해야 할 것
      </h2>
      
      <p className="mb-6">
        안녕하세요. 장기요양 창업·경영지원 1등 굿케어입니다. 반갑습니다.^^
      </p>
      
      <p className="mb-6">
        본 글에 앞서 굿케어를 먼저 소개 드리자면 12년간 전국 1,400여 장기 요양, 사회서비스 기관들을 대상으로 창업, 경영지원 및 교육하고 현재 굿케어 창업지원 서비스를 통해 예비 창업자분들의 고민, 불편함을 개선하고 있습니다.
      </p>
      
      <ColumnImage src="/images/8-1.jpg" alt="장기요양 세미나 전경" caption="장기요양 강연 현장과 굿케어의 오늘" />

      <p className="mb-6">
        장기요양 기관들을 지원한 7년 동안 저희는 3천 명에 달하는 고객분들을 만나왔습니다. 그러면서 가장 충격적이었던 것은 생각보다 많은 고객분들께서 온라인, 오프라인에서 잘못된 정보에 잘 속는다는 것이었습니다.
      </p>
      
      <p className="mb-6 font-semibold text-blue-600">
        어쩌면 누군가 저희를 질책할 수도 있지만, 오늘 우리는 이러한 부조리를 바로잡고자 합니다.
      </p>
      
      <p className="mb-6">
        저희의 굿케어 창업 지원 서비스를 이용하시는 예비 대표님들께서는 잘못된 정보에 속아 시간과 돈을 낭비하는 일이 없으셨으면 좋겠습니다.
      </p>
      
      <p className="mb-6">
        오늘은 정직하고 진실된 장기요양 창업 정보를 알아볼 수 있는 2가지 방법을 7년 경험을 바탕으로 말씀드리도록 하겠습니다. 이 글이 여러분에게 조금이나마 도움이 되기를 바랍니다.
      </p>

      <ColumnImage src="/images/8-2.jpg" alt="본점 어르신 요양 모습" caption="굿케어 주간보호센터 본점 어르신들의 활동 모습" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        첫 번째, 설계사는 다 아는 줄 알았어요.
      </h3>
      
      <p className="mb-6">
        노유자 변경은 설계사라면 누구나 가능하겠지만 <Highlight>주간보호 설립 경험이 없다면 시설 및 설비 기준을 놓치는 경우</Highlight>가 발생합니다.
      </p>
      
      <ColumnImage src="/images/8-3.jpg" alt="주간보호 센터 설계" caption="주간보호센터 설립 기준 중 일부" />

      <p className="mb-6">
        무조건 정원을 많이 받기 위해 사무실, 프로그램실을 줄이거나 정원 비례 인력 구성에 대한 이해도가 없을 경우 실사용에서 문제가 됩니다.
      </p>
      
      <p className="mb-6 font-medium text-slate-800">
        주간보호센터 설계는 한정된 공간에서 최대한의 정원을 받을 수 있으면서도 어르신의 동선과 안전, 선생님들의 동선과 서비스 공간이 적절히 확보되어야 합니다.
      </p>
      
      <p className="mb-6 text-blue-600 font-bold">
        잘못된 설계의 경우 어르신의 낙상 사고, 직원들의 업무공간 부족으로 어르신들의 공간을 사용하게 됨으로써 장기 요양 공단 모니터링, 평가 시에 문제가 발생됩니다.
      </p>

      <ColumnImage src="/images/8-4.jpg" alt="인력 기준 분석 자료" caption="주간보호센터 인력기준 중 일부" />

      <p className="mb-6">
        공간의 바른 설계만으로도 효율의 극대화로 인력을 줄이고 수급자 정원을 최적으로 구성하여 <Highlight>매달 300~400만 원을 절약하는 효과</Highlight>를 가져올 수 있습니다.
      </p>
      
      <p className="mb-6 font-medium">
        벌써 창업하신 대표님들은 오픈하고 어르신들도 계시니 부수고 다시 지을 수도 없으니 아쉬워하는 경우가 많습니다.
      </p>
      
      <p className="mb-6">
        꼭 저희 굿케어가 아니더라도 좋습니다. 지인 또는 건너 아는 사람, 인터넷상에 고수로 느껴지는 사람이 아닌 <span className="font-semibold text-indigo-900">진짜 주간보호 설립 전문가의 조언</span>을 받아서 설계하시기 바랍니다.
      </p>

      <ColumnImage src="/images/8-5.jpg" alt="보호자 실제 작성 감사 후기" caption="굿케어 주간보호센터 본점 어르신 보호자님들의 후기" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째, 고객이 원하는 곳에 투자하세요.
      </h3>
      
      <p className="mb-6">
        위에 감사 후기에서 파악할 수 있듯이 결론부터 말씀드리면 당신의 미래 고객이 원하는 것은 <span className="font-bold border-b border-indigo-400">'건강 증진을 위한 신체/인지활동'</span>과 <span className="font-bold border-b border-indigo-400">'좋은 선생님으로부터 케어서비스를 받는 것'</span>입니다.
      </p>
      
      <p className="mb-6 font-semibold text-amber-800">
        제가 가장 안타까운 경우를 말씀드리겠습니다.
      </p>
      
      <p className="mb-6">
        주간보호 설립 시 임대를 하시는 경우가 대부분인데, 여기저기 열심히 인터넷도 찾아보시고 지인들에게 물어보신 후 '이것도 투자야!'라며 과도한 인테리어를 진행하는 경우입니다.
      </p>
      
      <p className="mb-6">
        창업을 준비하시며 알아보시면 최근 자재비와 인건비가 많이 올라서 인테리어 전문 업체는 대략 평당 100만 원부터 200만 원까지 다양한 견적을 받으실 수 있을 겁니다. 그런데,
      </p>

      <Quote className="bg-red-50 border-blue-600 text-blue-800">
        두 배 비싼 200만 원짜리 인테리어를 한다고 어르신이 두 배 더 오시진 않습니다.
      </Quote>

      <p className="mb-6 font-bold text-slate-900 leading-relaxed text-xl mt-4">
        주간보호센터는 이쁜 카페를 차리는 것이 아닙니다.
      </p>
      
      <p className="mb-6">
        주간보호센터는 어르신들이 아침에 오셔서 하루 종일 머물다 가는 공간입니다. 오직 공간의 구성이 가장 중요합니다.
      </p>

      <div className="grid grid-cols-2 gap-4 my-6">
        <img src="/images/8-6.jpg" alt="물리치료 운동" className="rounded-lg shadow-sm border border-gray-100 object-cover w-full h-[160px]" />
        <img src="/images/8-7.jpg" alt="슬링 재활 장비" className="rounded-lg shadow-sm border border-gray-100 object-cover w-full h-[160px]" />
      </div>

      <p className="mb-6 font-medium">
        인테리어에 과도한 투자보단 건강을 지켜드릴 수 있는 좋은 프로그램과 서비스에 투자하세요.
      </p>
      
      <p className="mb-6">
        <Highlight>운동재활 장비, 물리치료 장비, 인지재활 장비, 족욕, 힐링 시스템</Highlight> 등을 다양하게 구성하는 것이 훨씬 더 효과적입니다. 다른 수많은 주간보호 센터와 차별화될 수 있는 방법과 고객이 원하는 것은 무엇인지 잘 생각하고 판단하시기 바랍니다.
      </p>
      
      <p className="mb-6 text-gray-700">
        주의사항으로 인테리어 업체는 인테리어를 더 하게 하려고 유도하고 운동 장비 업체는 운동 장비를.. 물리치료 장비회사는 물리치료 기기의 장점을 부각시킬 겁니다.
      </p>

      <ColumnImage src="/images/8-8.jpg" alt="복합적인 힐링 설비 시스템" caption="굿케어 주간보호센터 본점의 다양한 운동과 힐링 시스템 구성" />

      <p className="mb-6 font-semibold text-[#2b6cb0]">
        꼭 저희 굿케어가 아니더라도 좋습니다. 아무런 이권 없이 오롯이 예비창업자님의 입장에서 정확하게 분석하고 도와드릴 수 있는 굿케어와 같은 창업 지원 전문 기업의 지원을 받으시기 바랍니다.
      </p>
      
      <p className="mb-6">
        지금까지 주간보호 설립을 검색해 관련 정보를 찾아보고 계신 예비 창업자분들에게 올바른 선택 기준 2가지를 알려드렸습니다. 이 글이 현재 주간보호 설립을 고민하시는 분들에게 올바른 선택을 해보실 수 있는 가이드가 되었기를 바랍니다.
      </p>
      
      <p className="mb-6">
        이와 관련하여 굿케어 창업 지원 서비스에 대해 궁금하신 점이 있거나, 전문가의 조언이 필요하신 분들은 아래 포스팅에 댓글 달아주셔도 좋습니다.
      </p>
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        긴 글 읽어 주셔서 감사합니다.^^
      </p>
    </article>
  );
}

// 9. 주간보호 인수시 특약과 권리금 분석
export function Step9() {
  return (
    <article className="font-serif text-[#333] text-[19px] leading-[1.85] py-4">
      <h2 className="font-sans font-extrabold text-2xl text-[#1a365d] mb-6 tracking-tight">
        9. 주간보호 인수(양도양수) 시 특약과 권리금 분석
      </h2>
      <p className="mb-6">안녕하세요 굿케어 대표 천천박사입니다.</p>
      <p className="mb-6">많은 대표님들이 주간보호 인수를 고민하십니다. 처음부터 무작정 신규 창업하긴 무섭기도 하고 두려우시겠죠.</p>
      <p className="mb-6 text-gray-700">안그래도 수급자가 없다는 망하는 이야기도 많이 들리고, 곳곳에 경쟁 센터들은 계속해서 많이 생겨나고 있고, 여러가지 개인 사정과 두려움이 배경에 섞여 있을거에요.</p>

      <div className="bg-amber-50/70 border border-amber-200 p-5 rounded-2xl my-6 font-sans text-base">
        <p className="font-bold text-amber-800 mb-2">📢 기본적으로 알고 가셔야 할 공통 명제</p>
        <ul className="list-disc pl-5 flex flex-col gap-1 text-gray-800 font-medium">
          <li>1. 해당 권익 번호의 행정처분은 인수자에게 고스란히 100% 승계된다는 것.</li>
          <li>2. 양도양수 또한 보건복지 지정심사를 새로 받아야 하므로, 신규 센터와 동일하게 극악의 지정 기준을 충족해야 한다는 것.</li>
        </ul>
      </div>

      <p className="mb-6">위 두 가지 사항은 이미 다른 곳이나 제 칼럼, 유튜브 등에서 너무 많이 말씀드렸기에 오늘은 굳이 중복 설명하지 않을게요. 행정처분 처벌 승계 등이 혹시나 궁금하시다면 굿케어 유튜브 채널을 정독 참고 부탁드릴게요.</p>
      <p className="mb-6 font-bold text-indigo-900 border-b border-indigo-200">오늘 드리는 이 글의 핵심 오롯이 집중 타겟 포인트는 오직 '수익'입니다.</p>
      <p className="mb-6">굿케어는 비영리 복지를 마음 깊이 먼저 생각하는 숭고한 집단이기도 하지만, 현실적인 대표님의 통장 '수익'도 최우선적으로 단단하게 보강해 드리는 든든한 상업 회사에요. 수익 지출이 원활해야 건강한 고품격 복지도 지속되는 법입니다.</p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        1. 법령변화 - 허가정원
      </h3>
      <p className="mb-6">장기요양기관 관련 법령은 해가 다르게 까다롭게 변화해가고 있습니다. 주간보호센터 인수에서 월 기적수익을 결정짓는 가장 직접적인 원천 기둥은 바로 <span className="font-bold text-teal-700">"허가 정원(인원수)"</span>입니다.</p>
      <p className="mb-6 text-[#e53e3e] font-bold">그런데 놀라지 마십시오! 주간보호도요, 양도양수 승인 지정심사를 새로 받을 때 관할 사정관에 의해 허가 정원이 임의 변동 축소 될 수 있습니다!</p>
      <p className="mb-6">즉, 인수 전에는 35인으로 버젓이 운영되던 시설이었는데, 지자체 최신 지정심사 기준표에 도면을 대질 대조하다보니 소방법 보완 유예 사항 미달 등으로 인해 오히려 "시설 정원을 32인으로 감축하시오" 라는 강제 조치를 맞뜨릴 수 있는 것입니다.</p>
      <p className="mb-6 font-medium">과거의 낡고 헐거운 기준표와 최근의 꼼꼼한 지정심사 기준표의 도면 계측은 차원이 다릅니다. 이건 요양원 양도양수 시장에서도 매일 발생하는 눈물 나는 대형 참사 사태입니다.</p>
      
      <Quote>
        허가 정원이 단 1명이라도 줄어든다? 이건 수익적으로 정말 치명적인 대형 파산 타격입니다.
      </Quote>

      <p className="mb-6">수익분기점을 완벽히 넘긴 대항 상태에서, 수급 장기 어르신 1명이 가져다주시는 순수한 본인 월 순수익은 평균 대략 100만 원 선에서 조율 성립됩니다. 1명만 감축되어도 연간 무려 <Highlight>1000만 원이라는 현금이 장부에서 매년 증발</Highlight>하게 되는 꼴입니다.</p>
      <p className="mb-6">그러니 굿케어가 강력 권장해 드리는 방어법은, 양도양수 매매 계약서를 전격 작성하실 때 <strong>"향후 행정관 지청 지정심사 통과 후 실 정원 변동 및 축소 발생 시, 축소된 인원 비율에 대질해 양도 계약 비용을 정량 감액 수임하거나 일정 수준 이상 감축 시 무조 전량 계약을 전격 해약(무효화)한다"</strong>는 특약 조항을 반드시 필수로 집어넣으셔야 합니다.</p>
      <p className="mb-6">35인 가격을 지불하고 샀는데, 32인짜리 시설이 나오면 억울해서 잠이나 오시겠습니까?</p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        2. 왜 양도양수 하려는지 꼼꼼하게 물어보세요
      </h3>
      <p className="mb-6">얼마전, 서울 강동 지역 부근에서 주간보호센터를 한창 인수 예정하시던 한 예비 대표님께서 저에게 급한 다급 조언 전화를 주셨습니다.</p>
      <p className="mb-6 font-medium text-gray-800">50명 정원이 최고 효율로 완전히 가득 찬 명품 센터였는데, 원래 소유주인 매도 원장님이 "자녀가 어려서 이제 육아에만 온전히 오롯이 전념하고자 싸게 판다"며 속전속결 양도를 졸랐다고 합니다.</p>
      <p className="mb-6">저희 머릿속에 딱 스치는 냉정한 이성적 질문은 이것입니다.</p>
      
      <WarningQuote>
        50인 완벽 정원이면, 모든 고정 직원 인건비를 정산해 준 뒤에도 최소 월 순수익이 최소 1000만 원을 우습게 맴도는 대박 알짜 사업장입니다.
      </WarningQuote>

      <p className="mb-6">시설장을 별도로 고용해서 현장 상주를 완전히 배제 처리하더라도, 명목 대표 통장으로 매달 최소 700만 원 이상이 그냥 마술처럼 예치되는 황금 거처인데, 아무리 애지중지 육아를 도맡는다고 해서 매월 천만 원씩 나오는 연금 같은 현금을 과연 선뜻 싸게 내놓는 게 상식에 맞을까요? 무조건 이면 뒤에 깊은 함정이 있다는 합리적 의심을 품어야 합니다.</p>
      <p className="mb-6">결국, 저희 조언을 받아 대표님이 뒤를 정밀 추적해 본 결과, <span className="font-bold text-[#e53e3e]">근방 바로 인근 건물에 그 매도대표의 '인척 시어머니' 명칭 명의로 대형 신규 주간보호센터 공사를 이미 남모르게 전격 기동</span>시키고 있었던 소름 끼치는 이면 실태가 드러났습니다!</p>
      <p className="mb-6">아는 인맥 어르신 입소자 명단과 가슴 따뜻한 핵심 명품 요양보호사 직원들을 자신들의 신규 센터로 싹 빼내가기 위해, 기존 낡아진 껍데기 상가를 외지인에게 돈 받고 팔아치운 폭탄 돌리기 거래 사기였던 것입니다.</p>
      <p className="mb-6 font-bold text-indigo-900 border-b border-indigo-400">그러니 계약서 특약으로 근방 거리 및 연수를 강력히 제약하는 조항을 기필코 완벽히 심어놓으셔야 법원의 배상을 겨우 보장받을 수 있습니다.</p>
      
      <InfoBox title="인수 매매 계약서 필수 특약 수칙">
        <ul className="list-disc pl-5 flex flex-col gap-1 text-[17px] font-sans font-medium">
          <li>매도 대표는 양도 계약 체결 시점 기준 인근 반경 7~10km 내에 신규 주간보호/방문요양 시설을 설립하거나 관여하지 않는다.</li>
          <li>인근 지역 내 타 경쟁 요양시설의 핵심 임직원 및 고문, 무기 계약 요양보호사, 유령 임원으로 취업하거나 근무를 기동하지 않는다.</li>
        </ul>
      </InfoBox>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        3. 어르신 권리금 분석의 무서운 허점
      </h3>
      <p className="mb-6">주간보호 양도 가격(양수 대금)은 겉포장 시 여러 갈래 합산액으로 산정됩니다. 시설 시공에 소모된 시설 권리금도 있지만, 핵심은 입소 어르신 1명당 책정하는 <strong>'어르신 권리금(소위 머릿수 대금)'</strong>입니다.</p>
      <p className="mb-6 text-blue-600 font-bold">주간보호 명부에 단순히 등록이 가득 차 있다고 해서 50명 머릿수 권리금을 냉큼 온전히 내시면, 바보처럼 수천만 원을 사기당하시는 지름길입니다.</p>
      <p className="mb-6">실제 요양 시장에서는 아무리 국가공인 최우수(A) 브랜드 센터라 하더라도, 입소 어르신들의 실질적인 평균 출석률은 통상 평균 88% 내외를 선회 유지합니다.</p>
      
      <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl my-6 font-sans text-stone-800 font-medium">
        "1,000명의 일반 어르신 중 300명은 무늬만 가입된 허수다. 그중 뛰어난 특출 100명을 엄선 조율하더라도, 그 핵심 100명 중 30명은 실제로 출결이 희박한 실 허수 고객이다." 라는 경제학의 파레토 실허수 법칙을 새겨들으십시오.
      </div>

      <p className="mb-6">그러니 단순히 총무 도장 찍힌 등록 장부만 보고 믿지 마시고, <span className="highlight bg-yellow-100 font-semibold px-1">최소 최근 3개월이나 반년간의 실질적인 전산 '일일 급여제공활동기록 서비스 전송지'와 '월 출석률 데이터'를 정밀 수임해 직접 대조</span>하십시오. 그 일별 활동 증빙은 국민건강공단 청구를 위해 법적으로 반드시 완벽 구비 보관되어야 하므로 숨길 수가 없습니다.</p>
      <p className="mb-6 font-bold">실제 출석 빈도가 높은 확실한 진성 어르신 비율에만 가중치를 두어 단가를 협상해야, 개원 당일 공실 적자로 파산하는 참극을 피할 수 있습니다.</p>

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        굿케어가 양수 원장님께 전하는 결언 계획
      </h3>
      <p className="mb-6 font-medium text-gray-800">타인이 모아둔 수십 명의 치매 어르신들과 이미 텃세가 형성되어 눈을 부라리는 늙은 요양보호사 직원들 사이에 신임 대표가 낙하산처럼 뚝 떨어져 정서적 바톤터치를 완벽 성취해 나가는 것은, 생판 신규 창업보다 고도로 골치 아픈 험난한 과도 과정입니다.</p>
      <p className="mb-6">더불어, 만약 양수 총 투자 비용 회수에 따른 손익분기 도출 기간(BEP)이 3년 이상 소요되는 구조라면, 대표님은 사실상 3년 동안 국가를 위해 무임금 노예 봉사를 하시는 것과 진배없는 엄청난 기회 수렁에 빠진 것 입니다.</p>
      <p className="mb-6 font-semibold text-blue-600">오늘 알려드린 정교한 특약 3대 안전벨트를 반드시 구비하십시오. 무경력 설립이라도 안전한 성공 거처로 직진하시도록, 굿케어 전문가들의 전폭 컨설팅을 언제든 신청해 보시기 바랍니다. 감사합니다.</p>
    </article>
  );
}

// 10. 치매 어르신 구타를 바라본 굿케어


export function Step10() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        10. 치매 어르신 구타를 바라본 굿케어
      </h2>
      
      <p className="mb-6 font-bold text-blue-600 bg-blue-50 p-4 rounded-xl border border-blue-100">
        김천의 한 주간보호센터에서 치매를 앓고 있는 42kg밖에 나가지 않는 80대 할머니를 원장과 직원들이 집단폭행 한 사건이다.
      </p>
      
      <p className="mb-6">
        요즘 가장 핫한 이슈이니 장기 요양 업계 사람들과 창업을 준비하시는 분은 모두가 알 거라고 생각한다. 오늘은 위 이슈에 대하여 한번 생각해 보려 한다.
      </p>

      <InfoBox title="🛡️ 굿케어의 정직한 성과와 발자취">
        <ul className="list-disc pl-5 flex flex-col gap-2 font-sans font-medium text-[17px] text-[#78350f]">
          <li>장기요양기관 창업·경영 지원 1,400기관 완료</li>
          <li>스마트 벤처기업 · 우수기업 선정</li>
          <li>굿케어 본사 주간보호센터 장기 요양 평가 최우수 선정</li>
          <li>굿케어 본사 주간보호센터 장기 요양 우수종사자 선정</li>
          <li>굿케어 본사 주간보호센터 서비스 우수사례 우수상 배출</li>
        </ul>
      </InfoBox>

      <ColumnImage src="/images/10-1.jpg" alt="돌봄의 중요성과 사건의 아픔" />

      <p className="mb-6">
        모두가 위 기사를 접했을 때 화가 치밀어 올랐을 거라고 생각한다.<br />
        같은 업계에 종사하는 사람으로서 너무나 화가 났다.
      </p>
      
      <p className="mb-6 font-semibold text-slate-800">
        오늘은 감정을 최대한 추스르고 어떤 사람들이 주간보호센터 창업을 하지 말아야 하지에 대하여 이야기해 보려 한다.
      </p>
      
      <Quote>
        어르신을 오전에 모셔와서, 함께 놀고, 돌봐드리고, 식사를 대접하고 안전하게 집에 모셔다드리는 곳이 주간보호 센터이다.
      </Quote>

      <p className="mb-6">
        7년 동안 3,000건이 넘는 상담을 해보면 다음과 같은 이야기를 자주 듣는다.
      </p>
      
      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <p className="font-bold text-slate-700 mb-2">💬 대표적인 상담 사례</p>
        <p className="text-gray-800 leading-relaxed font-semibold text-base pl-2 border-l-4 border-indigo-400">
          "주간보호센터 하면 수익 구조는 괜찮은 가요?"<br />
          "제가 봉사를 열심히 해왔는데 주간보호센터 해서 좋은 일 하려고요."
        </p>
      </div>

      <p className="mb-6 font-medium">
        노인복지사업 창업가로서 솔직하게 말하겠다. 아래 두 부류는 한 번 더 노인복지사업에 대해 신중하게 고민하였으면 한다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#e53e3e] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        첫 번째, 머리만 있는 사람
      </h3>
      
      <p className="mb-6">
        이런 상담 예는 수익에서 시작해서 수익으로 끝난다. 머릿속에 어르신이라는 단어는 존재하지 않는 거 같다. 모든 것이 돈으로 카운팅 된다.
      </p>
      
      <p className="mb-6">
        주간보호센터를 창업하려면 임대보증금, 인테리어 비용, 인건비 등등.. 몇억 단위의 돈이 들어간다. 주간보호 센터는 규모 대비 투자금도 수익도 달라진다.
      </p>
      
      <p className="mb-6 font-bold text-blue-600">
        수익률만 바라보고 사업을 하고 싶다면, 제발 돈 더 되는 다른 사업을 찾아가시는 게 맞다.
      </p>
      
      <p className="mb-6">
        주간보호 특성상 규모에 대비하여 정해진 수익이 나는데도 불구하고 수익만 쫓는 사람들은 자신의 몫이 아닌 직원들 급여, 어르신들 식대로 장난을 치려고 한다. 모든 어르신이 단순히 돈으로 보인다.
      </p>
      
      <p className="mb-6 font-semibold">
        그렇게 운영되는 센터 중에 오랫동안 정상적으로 운영되는 센터는 없었다.
      </p>

      <ColumnImage src="/images/10-2.jpg" alt="이윤 추구" />

      <p className="mb-6">
        주간보호센터 운영은 정성과 어르신들을 생각하는 마음이 없다면 운영하기 쉬운 정부 돈 받아먹을 수 있는 사업이 절대 아니다.
      </p>
      
      <p className="mb-6">
        내 돈을 들여서 설립했지만 오픈과 동시에 모든 공단과 시군구의 관리를 받고 근무하시는 선생님들은 서류와의 전쟁을 치른다.
      </p>
      
      <p className="mb-6 text-red-600 font-bold border border-red-200 bg-red-50 p-4 rounded-xl">
        창업하시는 분 중 어르신에 대한 거부감이 있으신 분들, 돈만 벌려고 주간보호 센터 하시려는 분들은 제발.. 제발 다른 사업을 알아보시길 간곡히 부탁드린다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째, 마음만 있는 사람
      </h3>
      
      <p className="mb-6">
        어르신을 모시는 데 탁월한 사람일 수도 있다. 가슴이 따뜻하다 못해 뜨겁다. 그러나 사업을 직접 해본 경험은 없다. 복지관이나 주간보호 센터에서 봉사를 해봐서 어떻게 돌아가는지는 대충 살펴봤다.
      </p>
      
      <p className="mb-6 font-bold text-blue-600">
        수익구조가 어떻게 되는지, 인력 관리는 어떻게 하는지, 청구는 어떻게 하는지, 회계나 행정서류는 아무것도 모르고 관심조차도 없다.
      </p>
      
      <p className="mb-6">
        그리고 그 피해는 어르신과 직원 선생님들에게 돌아간다. 희생과 봉사를 강요하기도 한다.
      </p>
      
      <p className="mb-6 font-medium">
        봉사에 너무나 탁월하나 행정이나 사업에는 관심조차 없으신 분들은.. 앞으로도 관심 가질 생각 없으신 분들은 봉사를 계속하시는 걸 추천해 드린다.
      </p>

      <ColumnImage src="/images/10-3.jpg" alt="자원 봉사" caption="굿케어 직원들의 봉사활동 모습" />

      <p className="mb-6">
        혼자 봉사를 할 때는 나만의 희생이지만 주간보호 센터를 창업하고 운영하면서 모든 직원들에게 희생만을 요구하거나 바랄 수는 없다.<br />
        복지사업은 봉사활동과 달리 나의 봉사로 인하여 누군가가 힘들어질 수도 있다는 것이다.
      </p>
      
      <WarningQuote>
        취미가 업이 되어 더 이상 즐겁지 않기를 바라지 않는다.
      </WarningQuote>

      <p className="mb-6 mt-6">
        그러하기에 이번 42kg 할머니 폭행 사건이 당연히 '머리만 있는 사람이 한 행동이다!'라고 단정 지을 수도 없다.<br />
        제대로 된 인력 관리 및 시스템 통제, 그리고 바른 도덕성이 결여되었을 때 나오는 복합적 실패 결과이다.
      </p>
      
      <p className="mb-6 font-bold text-teal-800 text-xl text-center bg-teal-50 p-4 rounded-xl border border-teal-100 my-6">
        결국 복지사업은 마음과 머리가 같이 하는 사업이다.
      </p>
      
      <p className="mb-6">
        머리만 있는 사람은 제발 다른 사업을 하시고 마음만 있는 사람은 봉사를 하시길 바란다.
      </p>
      
      <p className="mb-6 font-medium text-slate-900">
        하지만, 머리와 함께 할 마음.. 마음과 함께 할 머리가 있으신 분은 <Highlight>그걸로 충분합니다.</Highlight>
      </p>
      
      <p className="mb-6">
        결국 복지사업은 사업을 잘 아는 사람은 복지를 배우고, 복지를 잘 아는 사람은 사업을 배워나가며 운영해 나갈 수밖에 없다.
      </p>

      <ColumnImage src="/images/10-4.jpg" alt="감동적인 요양 현장의 따뜻한 손길" />
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}
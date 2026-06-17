import React from 'react';
import { Highlight, Quote, InfoBox, ColumnImage, WarningQuote } from "./Common";

// 1. 무경력자도 창업 할 수 있을까?
export function Step1() {
  return (
    <article className="font-serif text-[#333] text-[19px] leading-[1.85] py-4">
      <h2 className="font-sans font-extrabold text-2xl text-[#1a365d] mb-6 tracking-tight">
        1. 무경력자도 창업 할 수 있을까?
      </h2>
      
      <p className="mb-6">
        안녕하세요.<br />
        장기요양기관 전문가 집단, 굿케어 대표 천천박사입니다.
      </p>
      
      <p className="mb-6">
        하루에도 정말 많은 대표님들과 상담을 진행하고 있어요.<br />
        그 중에서 정말 많이 들어오는 질문, 하나가 있습니다.
      </p>

      <Quote>
        "박사님, 저는 경력이 없어요.<br />
        다른 곳에서 짧게라도 근무 경력을 길러야 할까요?"
      </Quote>

      <p className="mb-6">
        그냥 하는 말이 아니에요. 진짜로 많이 들어오는 질문이에요.<br />
        이 질문엔 대표님들마다 입장이 갈리더라고요.
      </p>
      
      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <p className="font-bold text-slate-700 mb-2">💡 대표님들의 엇갈리는 두 가지 입장</p>
        <p className="text-gray-800 leading-relaxed font-medium">
          "그냥 해도 된다" vs "경력을 쌓고 와야 한다"
        </p>
      </div>

      <p className="mb-6">그런데 천천박사는 오늘, 이걸 조금 다른 각도에서 풀어보려고 합니다.</p>
      
      <p className="mb-6">
        먼저 현실부터 말씀드릴게요.<br />
        굿케어 창업패키지를 통해 창업하신 대표님들 중,,<br />
        <Highlight>1년 만에 정원마감을 이루신 센터들이 있습니다. 그 대표님들, 전부 무경력이었어요.</Highlight>
      </p>

      <ColumnImage src="/images/1-1.jpg" alt="정원마감 센터" caption="무경력 대표님들의 1년 만의 놀라운 정원마감 실제 사례" />

      <p className="mb-6">
        물론, 경력이 있으면 좋죠. 이건 저도 부인 못해요.<br />
        실제로 근무해보시면 시행착오도 줄어들고요.
      </p>
      
      <p className="mb-6 font-medium text-slate-800">
        근데, 경력 쌓으러 가시기 전에... 현실적으로 따져봐야 할 게 있어요.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        첫 번째, 시간입니다.
      </h3>
      
      <p className="mb-6">
        대표님, 근로자로 센터에서 근무하고 온다고 가정해봅시다.<br />
        몇 년 생각하세요? 6개월? 1년?
      </p>
      
      <p className="mb-6 font-semibold text-rose-600">
        그걸로 운영에 필요한 모든 걸 알 수 있을까요?<br />
        근로자와 운영자는 달라요. 완전히 다릅니다.
      </p>
      
      <p className="mb-6">
        요양보호사로 들어가시면, 신입이라면 선배 선생님들 지시 따라가기도 하루가 부족해요.<br />
        사회복지사, 간호조무사로 일하신다고 해도... 그냥 그 직군이 어떻게 돌아가는지 정도만 아는 거지, 운영자로서 배울 수 있는 건 현실적으로 많지 않거든요.
      </p>

      <ColumnImage src="/images/1-2.jpg" alt="요양보호사 업무" />

      <p className="mb-6 font-bold text-slate-800">
        무엇보다, 시간이 흐를수록 지정심사는 더 까다로워집니다.<br />
        매물도 점점 사라지고 있고요. 매물이라는 게,,, 누군가 폐업을 해야 나오는 거니까요.
      </p>
      
      <p className="mb-6 text-rose-600 font-medium">
        경력 쌓는 동안, 시장은 계속 좁아지고 있다는 겁니다.
      </p>

      <ColumnImage src="/images/1-3.jpg" alt="복지시설 운영의 복합성" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째, 어디서 근무하실 건가요?
      </h3>
      
      <p className="mb-6">
        아마 거주하시는 주변 센터에서 근무하셔야 할 텐데요.<br />
        창업을 마음에 품고 있다는 걸 알면,,, 채용해줄 곳이 많지 않아요.
      </p>
      
      <p className="mb-6 text-orange-800">
        설령 채용이 됐다 하더라도, 장기요양 시장은 좁습니다.<br />
        퇴사하고 근처에 센터를 개원했다면? 대표님 의도가 그게 아니었어도...<br />
        "어르신 빼가려고 들어온 거다"라며 순식간에 적으로 몰릴 수 있어요.<br />
        나중에 지역 협회에서 마주치면, 많이 당황스러우실 거예요.
      </p>

      <ColumnImage src="/images/1-4.jpg" alt="주변 시선과 갈등 배경" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        그런데, 천천박사도 한 번 생각해봤어요.
      </h3>
      
      <p className="mb-6">
        대표님들이 왜 근무해보고 싶어 하실까요?<br />
        아마 이런 이유들일 것 같아요.
      </p>
      
      <p className="mb-6 font-medium text-gray-700 bg-gray-50 p-4 rounded-lg">
        주간보호가 현장에서 얼마나 힘든 사업인지 직접 느껴보고 싶어서,,, <br />
        하루 일과 흐름이 어떻게 돌아가는지 알고 싶어서,,, <br />
        어르신을 어떻게 대해야 하는지 배우고 싶어서.
      </p>
      
      <p className="mb-6">
        이 마음, 충분히 이해해요. 말리고 싶지 않아요.<br />
        근데 현실적으로 따져보면,,,
      </p>
      
      <p className="mb-6">
        수급자 모집하는 노하우는요. 페이 시설장으로 들어가지 않는 이상, 근로자 입장에서 체감하기 어려워요. 그것은 운영자, 대표님 몫이거든요.
      </p>
      
      <p className="mb-6">
        어르신을 어떻게 대해야 하는지는요,,, 솔직히 경력보다 어르신을 얼마나 사랑하느냐가 더 크게 작용해요. 경력이 있어도 마음이 없으면 티가 나고, 경력이 없어도 진심이 있으면 어르신들이 먼저 알아보시더라고요.
      </p>

      <ColumnImage src="/images/1-5.jpg" alt="마케팅 성공 요인" />

      <p className="mb-6">
        물론, 경력이 있으면 좋습니다. 이건 저도 인정해요.<br />
        다만 천천박사가 조급함을 말씀드리는 이유는 하나예요.
      </p>
      
      <p className="mb-6 font-bold text-amber-700">
        매물은 점점 사라지고 있고, 지정심사는 점점 까다로워지고 있어요.<br />
        지금 이 시장은,,, 기다려주지 않거든요.
      </p>
      
      <p className="mb-6">
        여유가 있으시고 마음이 급하지 않으시다면, 근무도 해보시고 분위기도 읽어보신 다음 창업하셔도 충분합니다. 그게 더 맞는 분들도 분명히 계세요.
      </p>

      <ColumnImage src="/images/1-6.jpg" alt="온오프라인 마케팅" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        그렇다면 경력은 정말 필요 없는 건가요?
      </h3>
      
      <p className="mb-6">
        여기서 중요한 구분이 하나 있어요.<br />
        <Highlight>센터 운영은 크게 두 가지로 나뉩니다. 어르신을 모으는 것, 그리고 모인 어르신을 잘 케어하는 것.</Highlight>
      </p>
      
      <p className="mb-6">
        경력은 두 번째를 도와줘요. 현장을 알면 케어의 디테일이 달라지는 건 맞거든요.<br />
        근데, 케어의 질은,,, 능력 있는 요양보호사, 사회복지사 선생님으로 충분히 채울 수 있어요. 대표님이 혼자 다 하는 구조가 아니니까요.
      </p>
      
      <p className="mb-6 font-bold text-slate-900">
        문제는 어르신을 모으는 거예요.<br />
        이건 대표님이 직접 하셔야 하는 영역이에요. 경력이 해결해주지 않아요.
      </p>
      
      <p className="mb-6 font-medium">
        10년 경력이 있어도 홍보를 안 하면 어르신이 안 오고,,, <br />
        무경력이어도 마케팅을 잘하면 정원이 찹니다. 실제로 굿케어에 그런 사례가 있고요.
      </p>

      <ColumnImage src="/images/1-7.jpg" alt="요양 협업" />

      <p className="mb-6 font-semibold text-slate-800 mt-8">
        그래서 천천박사는 경력보다 이걸 먼저 보라고 말씀드려요.
      </p>

      <InfoBox title="경력보다 더 먼저 확인해야 할 5가지">
        <ul className="list-disc pl-5 flex flex-col gap-2 font-sans text-[17px] font-medium text-[#78350f]">
          <li>1. 규모의 경제성을 알고 계신가요?</li>
          <li>2. 수익구조를 제대로 이해하고 계신가요?</li>
          <li>3. 사업가다운 머리가 있으신가요?</li>
          <li>4. 복지다운 마음을 갖고 계신가요?</li>
          <li>5. 마케팅과 홍보의 중요성을 진짜로 실감하고 계신가요?</li>
        </ul>
      </InfoBox>

      <p className="mb-6 font-bold text-teal-700 text-center mt-6 text-xl">
        경력은 플러스예요. 있으면 분명히 좋습니다.<br />
        근데 없다고 해서,,, 무조건 시작을 미룰 이유는 안 됩니다.
      </p>
    </article>
  );
}

// 2. 사회복지사 2급 있어도 창업할 수 있다고?
export function Step2() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        2. 사회복지사 2급 있어도 창업할 수 있다고?
      </h2>
      
      <p className="mb-6 font-medium text-slate-800 text-xl">
        자, 주간보호 하면 돈이 된다는 달콤한 말에 솔깃하셔서, 창업 조건 알아보고 계신 분들 많으시죠?
      </p>
      
      <p className="mb-6">
        오늘은 그 조건, 제대로 짚어드리겠습니다.<br />
        주간보호센터 창업 조건에는 크게 두 가지가 있습니다.
      </p>

      <Quote>
        <strong>1. 인력 조건:</strong> 시설장이 될 수 있는 자격 조건<br />
        <strong>2. 건물 조건:</strong> 창업이 가능한 건물의 조건과 규격
      </Quote>

      <p className="mb-6">
        사실 이게 오늘 핵심은 아닌데요, 조건 자체가 궁금해서 들어오신 대표님들을 위해 먼저 빠르게 짚어드릴게요.
      </p>
      
      <p className="mb-6">
        시설장으로 근무하시려면 <Highlight>사회복지사 1급 또는 2급 자격증</Highlight>이 있어야 합니다.
      </p>
      
      <p className="mb-6">
        의사, 한의사, 간호사 같은 의료인 면허를 가진 분들도 가능하다 보니, 의료 업계에서도 창업하시는 분들이 꽤 많고요.<br />
        요양보호사로 현장에서 일하시다가 내 센터를 직접 해보겠다는 신념으로 시작하시는 분들도 계시고, 복지 자격은 없지만 실버산업의 전망과 어르신 돌보는 일에 진심으로 뛰어드시는 분들도 많습니다.
      </p>
      
      <p className="mb-6 font-medium">
        가장 빠르게 자격을 갖추는 방법은 학점은행제를 통한 사회복지사 2급입니다.
      </p>

      <ColumnImage src="/images/2-1.jpg" alt="장기요양 상담 자문" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        근데요, 이거 아십니까?
      </h3>
      
      <p className="mb-6">
        엄밀히 따지면, <Highlight>주간보호를 창업하는 대표자는 아무런 자격이 없어도 됩니다.</Highlight><br />
        주간보호센터의 설립자 개념인 대표와, 필수 인력 기준인 시설장은 전혀 다른 개념이거든요.
      </p>
      
      <p className="mb-6">
        전국 센터의 70프로 정도가 시설장 급여를 아끼기 위해 설립 대표가 시설장으로 직접 근무하는 경우가 많다 보니, 두 개념이 같은 말처럼 쓰여온 것뿐입니다.
      </p>
      
      <p className="mb-6 text-slate-800 font-medium">
        요즘은 몸으로 직접 뛰지 않는 방식으로 창업하시는 분들도 많고, 지점을 여러 개 운영하시는 분들도 늘면서, 시설장을 별도로 고용해 운영을 고려하시는 분들도 무척 많습니다.
      </p>

      <ColumnImage src="/images/2-2.jpg" alt="창업 자격 조건 분석" />

      <h3 className="font-sans font-bold text-xl text-rose-600 mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        정원마감의 찬란한 이면 뒤에 깊이 도사린 진짜 사유
      </h3>
      
      <p className="mb-6">
        자, 여기서 더 중요한 이야기로 넘어갑니다.<br />
        저희 굿케어가 상담해드린 케이스들을 돌아보면, 양도양수를 결정하시는 이유가 정말 다양합니다. 건강 문제, 갑작스러운 이사, 급한 자금 필요 같은 이유들이 있고요.
      </p>
      
      <p className="mb-6 font-bold text-rose-600">
        근데 그 중에서 의외로 적지 않게 나오는 사유가 하나 있습니다. 바로 직원 관리, 그러니까 사람을 다루는 일이 너무 힘들다는 이유입니다.
      </p>
      
      <p className="mb-6">
        실제로 저희가 만나온 대표님들 중에도, 정원을 가득 채우고 대기자까지 있는 탄탄한 센터를 운영하시면서도, 이 부분에서 소진되어 결국 양도를 선택하신 분들이 계셨습니다.
      </p>

      <ColumnImage src="/images/2-3.jpg" alt="사회복지사 자격 취득" />

      <p className="mb-6 font-semibold text-slate-900">
        그래서 드리고 싶은 말씀이 바로 이겁니다.<br />
        시설장 자격을 갖추시기 전에, 먼저 이 질문을 스스로에게 던져보셔야 합니다.
      </p>
      
      <p className="mb-6 font-bold text-indigo-900 bg-indigo-50 p-4 rounded-lg text-center border border-indigo-100">
        "나는 정말 누군가를 돌보는 이 일에 맞는 사람인가?"
      </p>
      
      <p className="mb-6 mt-4">
        이걸 판단하시는 데 도움이 되도록, 세 가지 기준을 드릴게요.
      </p>

      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <ul className="list-disc pl-5 flex flex-col gap-3 text-gray-800 font-medium">
          <li>첫 번째, 사람을 직접 마주하고 설득하고 배치하는 일이 나에게 에너지를 주는가, 아니면 에너지를 빼앗아 가는가.</li>
          <li>두 번째, 어르신과 가족 보호자를 대할 때 진심 어린 태도가 자연스럽게 나오는가.</li>
          <li>세 번째, 예상치 못한 돌봄 상황, 직원 갈등, 민원이 생겼을 때 나는 어떻게 반응하는 편인가.</li>
        </ul>
      </div>

      <p className="mb-6">
        이 세 가지에서 자신 없으시다고 해서 절대 시작 못 하는 건 아닙니다.<br />
        다만 그 경우에는 시설장을 별도로 고용하는 구조로 설계하셔야 하고, 그 급여까지 반영한 수익 구조를 반드시 먼저 계산하셔야 합니다.
      </p>

      <ColumnImage src="/images/2-4.jpg" alt="시설장 고용 검토" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        많은 분들이 놓치시는 '규모의 현실'
      </h3>
      
      <p className="mb-6">
        여기서 많은 분들이 놓치시는 부분이 있습니다.
      </p>
      
      <p className="mb-6 font-semibold text-amber-800 bg-amber-50/60 p-4 rounded-lg">
        예를 들어 소규모 30인 센터를 운영하신다고 하면, 사실상 시설장을 고용하긴 힘듭니다.<br />
        고용할 수는 있지만, 가득 채워 운영한다고 해도 시설장 월급을 제외하면 순수익이 100만원 가량밖에 나오지 않기 때문입니다.
      </p>
      
      <p className="mb-6">
        반대로 말씀드리면, 시설장을 고용하는 구조로 가실 거라면, 처음부터 그 규모에 맞는 정원과 입지를 설계하고 시작하셔야 한다는 겁니다.
      </p>

      <ColumnImage src="/images/2-5.jpg" alt="대기자 확보 성공" />

      <p className="mb-6 mt-8">
        자, 오늘 전해드린 이야기는 창업 조건에서 나온 이야기의 일부일 뿐입니다. 이 자리에서 다 못 전해드린 이야기도 수두룩합니다.
      </p>
      
      <p className="mb-6 font-medium">
        "65명에 월 순수익 2,500만 원", "50명에 순수익 얼마" 이 숫자만 보고 결정하시면 안 됩니다.<br />
        그 숫자, 맞는 이야기입니다.
      </p>
      
      <p className="mb-6 text-rose-600 font-bold">
        근데 성향 체크, 적성 체크, 자본 체크, 그리고 그 이후에 감수해야 할 것들까지 모두 들으신 다음에 결정하셔야 하는 사업입니다.
      </p>

      <ColumnImage src="/images/2-6.jpg" alt="인수 분석 컨설팅" />

      <InfoBox title="천천박사가 진심으로 전하는 한마디">
        <p className="text-[17px] font-medium text-[#78350f] leading-relaxed">
          굿케어가 진심으로 바라는 말이 하나 있습니다. <strong>"무료상담부터 받아보세요."</strong><br />
          이 말이 진심인 이유가 있습니다. 준비되지 않은 상태로 시작하셔서 힘드신 모습을 너무 많이 봐왔기 때문입니다. 오래 잘 운영하시는 대표님들이 많아야, 저희도 오래 함께할 수 있거든요.
        </p>
      </InfoBox>

      <p className="mb-6 mt-6">
        그럼에도 모든 걸 감수하고 해보겠다고 하시는 대표님들만 하셔야 하는 사업입니다.<br />
        "그냥 한번 해볼게요" 하시는 분들은 지금 당장은 하지 않으시는 걸 권합니다.
      </p>
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}

// 3. 가족사업으로 해도 될까?


export function Step3() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        3. 가족사업으로 해도 될까?
      </h2>
      
      <p className="mb-6">
        안녕하세요.<br />
        장기요양기관 전문가 집단, 굿케어 대표 천천박사입니다.
      </p>
      
      <p className="mb-6">
        장기요양기관이 전망 있는 사업이고, 수익성도 있는 사업이다 보니 정말 다양한 분들이 뛰어들고 계십니다.
      </p>
      
      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <p className="font-bold text-slate-700 mb-2">📊 장기요양 시장에 뛰어드는 다양한 분들</p>
        <p className="text-gray-800 leading-relaxed font-medium text-base">
          의료업계 종사자분들, 자본 있는 법인들, 제2의 사업으로 도전하시는 50·60대 가장님들, 30대 젊은 창업자분들, 그리고 복지기관 경력을 바탕으로 시작하시는 분들까지 다양합니다.
        </p>
      </div>

      <p className="mb-6">
        그 중에서도 요즘 부쩍 늘어난 형태가 하나 있습니다. 바로 <Highlight>가족사업</Highlight>입니다.
      </p>
      
      <p className="mb-6">
        근데 가족사업이라고 해서 다 같은 가족사업이 아닙니다. 형태에 따라 리스크가 완전히 달라집니다. 크게 두 가지 케이스로 나눠서 말씀드릴게요.
      </p>

      <ColumnImage src="/images/3-1.jpg" alt="가족의 돌봄" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        첫 번째 케이스, 가족이 함께 필수인력으로 근무하는 경우
      </h3>
      
      <p className="mb-6">
        주간보호센터에서 인건비는 <Highlight>전체 지출의 60%에서 70%를 차지할 만큼 가장 큰 고정비</Highlight>입니다.<br />
        그 인건비 부담을 가족 구성원이 함께 짊어져준다는 건, 수익 구조 측면에서 분명히 유리한 출발입니다.
      </p>
      
      <p className="mb-6">
        근데 여기서 꼭 짚어드리고 싶은 게 있습니다.<br />
        가족이라고 해서 당연히 되는 게 아닙니다. 그 가족 구성원은 자기 삶의 방향을 바꿔서 들어오는 겁니다. 대표님이 그 희생과 결단을 정확하게 인식하고 계셔야 합니다.
      </p>
      
      <p className="mb-6 text-rose-600 font-medium">
        그리고 동시에, 현실적인 리스크도 아셔야 합니다.
      </p>
      
      <p className="mb-6">
        가족이 함께 일하다 보면 업무 역할과 가족 관계가 섞이면서 갈등이 생기는 경우가 적지 않습니다.<br />
        "일적으로는 직원, 집에선 가족"이라는 경계를 처음부터 명확하게 설정하지 않으면, 나중에 사업도 관계도 흔들릴 수 있습니다.
      </p>

      <ColumnImage src="/images/3-2.jpg" alt="가족 구성 경영 연출" />

      <p className="mb-6">
        그래서 이 케이스라면, 두 가지를 반드시 준비하셔야 합니다.
      </p>

      <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl my-6 font-sans">
        <p className="font-bold text-slate-700 mb-2">💡 필수 준비 사항 2가지</p>
        <ul className="list-disc pl-5 flex flex-col gap-2 text-gray-800 font-medium text-base">
          <li><strong>하나, 업무 역할과 책임을 처음부터 문서로 정리하세요.</strong> 가족이기 때문에 대충 넘어가다가 나중에 꼭 문제가 생깁니다.</li>
          <li><strong>둘, 대표님이 사업의 전체 구조를 정확하게 이해하고 이끌 수 있어야 합니다.</strong> 가족이 함께한다는 건 더 큰 책임이지, 더 편한 사업이 아닙니다.</li>
        </ul>
      </div>

      <WarningQuote>
        가족들의 고혈을 다 쥐어짜면서도 적자를 면하지 못하는 구조라면 시작의 싹조차 틔우지 마십시오. 구조를 모른 채 작고 영세하게 시작하는 소형 센터는 가족들의 눈물이자 파멸의 늪이 될 뿐입니다.
      </WarningQuote>

      <ColumnImage src="/images/3-3.jpg" alt="가족의 희생" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째 케이스, 가족 중 한 명이 직장을 유지하며 그 월급으로 센터를 운영하는 경우
      </h3>
      
      <p className="mb-6 font-semibold text-rose-600">
        이 케이스는 정말 굉장히 조심하셔야 합니다.
      </p>
      
      <p className="mb-6">
        왜냐하면 이 구조의 핵심 전제는 "센터가 빠르게 수익을 내야 한다"는 겁니다. 그런데 현실은 그렇지 않은 경우가 훨씬 많습니다.
      </p>
      
      <p className="mb-6 font-medium text-slate-800">
        신규 오픈 센터는 초기 3개월에서 6개월간 수급자를 모으는 기간이 반드시 필요합니다.<br />
        이 기간 동안은 수익이 없거나 적자인 상태가 지속됩니다.
      </p>
      
      <p className="mb-6">
        따라서 초기 투자금 외에도 이 기간을 버틸 운전자금, <Highlight>통상 1,000만 원에서 2,000만 원 수준을 별도로 확보</Highlight>하셔야 합니다.
      </p>

      <ColumnImage src="/images/3-4.jpg" alt="수익 리스크 방어전략" />

      <p className="mb-6 text-gray-800">
        만약 이 운전자금을 가족의 월급에서 계속 충당해야 하는 구조라면, 두 가지 문제가 동시에 생깁니다.
      </p>
      
      <p className="mb-6 pl-4 border-l-4 border-amber-500 font-medium">
        하나, 수급자를 모으는 데 집중해야 할 시간과 에너지가 재정 압박으로 분산됩니다.<br />
        둘, 가족 관계에 금전적 긴장이 생기면서 판단이 흐려질 수 있습니다. 버텨야 할 때 손을 놓거나, 손을 놓아야 할 때 감정적으로 버티게 되는 상황이 옵니다.
      </p>
      
      <p className="mb-6 mt-4">
        이 케이스에서 성공하시려면, 가족 월급 의존 없이 <span className="font-bold text-indigo-900">최소 6개월을 버틸 수 있는 별도 자본이 확보된 상태</span>에서 시작하셔야 합니다.
      </p>

      <ColumnImage src="/images/3-5.jpg" alt="입지 마케팅 준비" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        가족이 함께할수록, 더 냉정하게
      </h3>
      
      <p className="mb-6">
        두 케이스 모두에서 공통적으로 드리고 싶은 말씀은 하나입니다.<br />
        가족이 함께하는 사업일수록, 더 냉정하게 준비하셔야 합니다.
      </p>
      
      <p className="mb-6 font-bold text-rose-600">
        가족이기 때문에 대충 믿고 가도 되겠지, 가족이니까 어떻게든 되겠지 — 이 생각이 가장 위험합니다.
      </p>
      
      <p className="mb-6 text-teal-800 font-medium bg-teal-50 p-4 rounded-xl border border-teal-100">
        이 사업이 어떤 구조인지, 어떤 리스크를 감수해야 하는지, 수익이 나기까지 얼마나 걸리는지를 가족 모두가 같은 온도로 이해하고 시작하셔야 합니다. 그게 진짜 가족사업입니다.
      </p>

      <ColumnImage src="/images/3-6.jpg" alt="안전 입지 및 리스크 수립" />

      <p className="mb-6 mt-6">
        주간보호센터 창업, 프랜차이즈든 직접 준비든 지인 정보든, 어떤 경로로 알아보고 계시든 좋습니다.<br />
        굿케어 유튜브, 블로그, 카페에도 실질적인 정보들이 많이 있으니 꼭 살펴보시고요. 판단은 항상 충분한 정보를 갖추신 다음에 하시길 바랍니다.
      </p>
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}

// 4. 양도양수 vs 신규창업


export function Step4() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        4. 양도양수 vs 신규창업
      </h2>
      
      <p className="mb-6">
        안녕하세요.<br />
        1,400여 개 기관 경영지원, 3,000여 번 창업 상담 노하우를 갖고 있는 장기요양기관 전문가 집단 굿케어 대표 천천박사입니다.
      </p>
      
      <p className="mb-6 font-medium text-slate-800 text-xl">
        요즘 많은 대표님들과 상담을 진행하면서, 가장 많이 나오는 주제가 하나 있습니다. 바로 양도양수입니다.
      </p>
      
      <p className="mb-6">
        주간보호는 하고 싶은데, 0명에서부터 어르신을 모을 자신이 없다고 하시는 분들이 정말 많거든요.<br />
        그 마음, 충분히 이해합니다. 수급자를 모으는 일, 쉽지 않은 여정이니까요.<br />
        그런데 오늘은 양도양수를 고민하시는 분들께 꼭 드려야 할 이야기가 있습니다.
      </p>

      <div className="bg-rose-50 border border-rose-100 p-5 rounded-xl my-6 font-sans">
        <p className="font-bold text-rose-700 mb-2">⚠️ 실제로 있었던 양도양수 피해 사례</p>
        <p className="text-gray-800 leading-relaxed font-medium text-base">
          • <strong>경상북도 사례:</strong> 처음에 어르신 28명을 인수하셨는데, 몇 개월 만에 23명으로 줄었습니다.<br />
          • <strong>경기 북부 사례:</strong> 27명을 인수하셨는데, 그 중 11명이 나오지 않게 됐습니다.
        </p>
        <p className="text-rose-600 font-semibold text-sm mt-2">
          몇 년이 아닙니다. 인수 후 불과 몇 개월 사이에 일어난 일입니다.
        </p>
      </div>

      <p className="mb-6 font-bold text-slate-900">
        1명의 어르신 권리금이 평균 1,000만 원이라고 가정하면, 대표님은 0명에서 시작하면 불안하다는 그것 하나로, 시작하자마자 최소 몇천만 원을 손해보고 시작하게 되는 겁니다.
      </p>

      <ColumnImage src="/images/4-1.jpg" alt="수급자 마케팅" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        양도양수를 고려하신다면 반드시 확인해야 할 4가지
      </h3>
      
      <p className="mb-6 font-semibold">
        인수를 머리 싸매고 고민 중이시라면, 다음 기준을 절대 놓치지 마세요.
      </p>

      <h4 className="font-sans font-bold text-lg text-indigo-900 mb-2">1. 등록 인원이 아니라 실제 출석 인원을 보세요</h4>
      <p className="mb-6">
        등록은 되어 있어도 건강 문제로 한 번도 나오지 못하시는 어르신들이 생각보다 꽤 많습니다. 전국 주간보호센터 평균을 봐도 마찬가지입니다.<br />
        양도하시는 대표님과 직접 마주 앉아서, 어르신 명단 한 분 한 분의 건강 상태와 실제 출석 현황을 확인하세요. <span className="font-semibold text-rose-600">등록 인원 서류 그대로 권리금을 내시면 안 됩니다.</span>
      </p>

      <h4 className="font-sans font-bold text-lg text-indigo-900 mb-2">2. 센터에 행정처분 이력이 없는지 확인하세요</h4>
      <p className="mb-6">
        이 부분이 좀 중요한데요, 어렵게 생각하실 필요 없이 딱 하나만 기억하시면 됩니다.<br />
        <Highlight>문제 있는 센터를 인수하면, 그 센터의 행정적인 문제와 처분까지 그대로 내가 떠안게 됩니다. 법적으로 그렇게 되어 있습니다.</Highlight>
      </p>
      <p className="mb-6">
        그러니 인수 전에 반드시 담당 주무관에게 이력 조회를 요청하세요. 제대로 운영해온 센터라면 이 요청에 민감하게 반응하지 않습니다. 오히려 거부하거나 불편해한다면, 그게 이미 신호입니다.
      </p>

      <ColumnImage src="/images/4-2.jpg" alt="굿케어 경영지원 실적" />

      <h4 className="font-sans font-bold text-lg text-indigo-900 mb-2">3. 직원도 꼼꼼히 살펴보세요</h4>
      <p className="mb-6">
        어르신들과 오랫동안 관계를 쌓아온 요양보호사 선생님이 누구인지 파악하세요. 그분들이 함께 남아주실 수 있는지가 <Highlight>어르신 유지율에 직접적인 영향</Highlight>을 줍니다.<br />
        대표가 바뀌더라도 익숙한 선생님이 계시면 어르신들의 불안감이 훨씬 줄어듭니다.
      </p>

      <ColumnImage src="/images/4-3.jpg" alt="양도양수 전 점검 요소" />

      <h4 className="font-sans font-bold text-lg text-indigo-900 mb-2">4. 신규창업과의 비용적 가치 비교</h4>
      <p className="mb-6">
        양도양수에서 어르신 1명이 퇴소하면, 권리금 기준으로 1,000만 원 손실이 발생하는 구조입니다. 5명이 나가면 5,000만 원 손해입니다.<br />
        그런데 입소 문의는 들어오지 않는 상황이라면, 사실 그 돈으로 <span className="font-bold border-b border-indigo-400">신규창업 후 마케팅에 몇 년간 투자하는 게 오히려 나을 수도 있습니다.</span>
      </p>
      <p className="mb-6">
        양도양수가 무조건 나쁘다는 게 아닙니다. 신규창업의 가능성도 함께 열어두고 비용과 리스크를 비교해보시라는 겁니다.
      </p>

      <ColumnImage src="/images/4-4.jpg" alt="부정수급 및 행정처분 대응" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        그렇다면 어떤 경우에 양도양수가 괜찮을까요?
      </h3>
      
      <p className="mb-6 font-medium text-slate-800">
        이런 경우라면 그나마 안전하다고 볼 수 있습니다.
      </p>

      <InfoBox title="안전한 양도양수가 가능한 예외 조건">
        <p className="text-[17px] font-medium text-[#78350f] leading-relaxed">
          • 기존 대표님의 건강 악화나 은퇴 등 신변상의 문제로 어쩔 수 없이 내놓는 센터<br />
          • 행정처분 및 부당청구 이력이 조회 결과 깨끗하게 증명된 투명한 센터
        </p>
      </InfoBox>

      <ColumnImage src="/images/4-5.jpg" alt="대형화 흐름 대응" />

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        마지막으로 한 말씀만 더 드릴게요
      </h3>
      
      <p className="mb-6">
        양도양수를 진행하시더라도, 인수 후 어르신이 줄어들 수 있다는 현실을 꼭 인정하고 시작하셔야 합니다.<br />
        그리고 새로운 어르신을 모시는 홍보와 마케팅 예산을 반드시 따로 준비해두셔야 합니다.
      </p>
      
      <p className="mb-6 font-bold text-amber-700">
        수급자가 채워진 상태로 시작하는 안도감, 분명히 있습니다. 하지만 그 숫자가 언제까지 유지될지는 아무도 모릅니다.
      </p>
      
      <p className="mb-6">
        모든 대표님들을 응원합니다. 화이팅입니다.
      </p>

      <ColumnImage src="/images/4-6.jpg" alt="비영리 임대차 계약 리스크" />
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}

// 5. 창업하면 얼마나 걸릴까?


export function Step5() {
  return (
    <article className="max-w-2xl mx-auto px-4 py-8 text-gray-850 leading-relaxed text-lg">
      <h2 className="font-sans font-bold text-2xl text-slate-900 mt-8 mb-6">
        5. 창업하면 얼마나 걸릴까?
      </h2>
      
      <p className="mb-6 font-medium text-slate-800 text-xl">
        안녕하세요. 굿케어 대표 천천박사입니다.
      </p>
      
      <p className="mb-6">
        주간보호센터 오픈을 준비하시는 예비 대표님들과 이야기를 나눠보면, 공통적으로 나오는 질문이 하나 있습니다.<br />
        <span className="font-semibold text-indigo-900">"2개월에서 3개월 안에 오픈할 수 있을까요?"</span>
      </p>

      <p className="mb-6 font-bold text-rose-600">
        결론부터 말씀드리겠습니다. 건물이 이미 정해진 상태에서도 최소 4개월에서 6개월은 잡으셔야 합니다.<br />
        그리고 현실에서는 그보다 더 길어지는 경우가 훨씬 많습니다.
      </p>

      <p className="mb-6">
        왜 그런지, 단계별로 솔직하게 짚어드리겠습니다.
      </p>
      
      <ColumnImage src="/images/5-1.jpg" alt="개원 및 타임라인 분석" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        첫 번째, 입지 설정 (최소 2개월 이상)
      </h3>
      <p className="mb-6">
        주간보호센터는 한 번 자리를 잡으면 최소 5년 이상 그 자리에서 운영해야 합니다. 그러다 보니 입지 결정을 쉽게 내리기가 어렵습니다.
      </p>
      <p className="mb-6">
        게다가 요즘은 <Highlight>평균 정원이 40인 이상으로 대형화</Highlight>되고 있어서, 전용면적 100평 이상 건물을 찾아야 합니다. 엘리베이터, 소방시설, 용도변경 가능 여부까지 따지다 보면 조건에 맞는 건물 자체가 많지 않습니다.
      </p>
      <p className="mb-6 font-medium text-amber-800">
        입지 설정에만 빠르면 2개월, 길면 그 이상 걸립니다. 이 기간을 아예 일정에서 빼고 계산하시는 분들이 많은데, 가장 큰 변수 중 하나입니다.
      </p>

      <ColumnImage src="/images/5-2.jpg" alt="입지 구획 도면 작성" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        두 번째, 용도변경과 인테리어 (3개월 ~ 4개월)
      </h3>
      <p className="mb-6">
        주간보호센터는 반드시 <Highlight>노유자시설로 용도변경</Highlight>을 해야 합니다. 노유자시설이란 쉽게 말해 노인, 유아처럼 거동이 불편한 분들을 위한 특수 시설 분류입니다. 일반 상가나 사무실 건물과는 요건이 완전히 다릅니다.
      </p>

      <InfoBox title="📐 용도변경 건축 허가 실제 소요 단계">
        <ul className="list-disc pl-5 flex flex-col gap-2 font-sans font-medium text-[17px] text-[#78350f]">
          <li><strong>도면 작성 및 검토:</strong> 1주 ~ 2주</li>
          <li><strong>관련 부서 사전 협의:</strong> 1주 ~ 2주</li>
          <li><strong>정식 신청 및 승인:</strong> 1주 ~ 2주</li>
          <li><strong>현장 확인 및 보완 처리:</strong> 2주 ~ 3주</li>
        </ul>
      </InfoBox>

      <p className="mb-6 mt-4">
        최종 승인까지 순조롭게 진행돼도 최소 6주에서 8주가 소요됩니다. 여기에 인테리어 공사 기간까지 더하면 <span className="font-bold text-rose-600">이 단계 하나만으로 90일에서 120일이 걸립니다.</span>
      </p>
      <p className="mb-6">
        특히 주간보호 경험이 없는 건축사와 처음으로 작업하는 경우, 도면 수정과 부서 협의가 반복되면서 기간이 크게 늘어납니다. 주간보호 경험이 있는 건축사와 함께하시는 걸 강하게 권해드리는 이유가 바로 이겁니다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        세 번째, 소방시설 (계약 전 사전 확인 필수)
      </h3>
      <p className="mb-6">
        노유자시설은 일반 건물과 소방 기준이 다릅니다. 스프링클러 설치가 필요하고, 소화기 배치 간격도 다르고, 거동이 불편한 어르신들의 대피 동선까지 고려한 구조여야 합니다.
      </p>
      <p className="mb-6 text-rose-600 font-medium">
        문제는 일반 임대 건물 대부분이 이 조건을 처음부터 갖추고 있지 않다는 겁니다.
      </p>
      <p className="mb-6">
        스프링클러 하나 설치하는 데도 위층 건물주 동의가 필요하고, 비용도 상당합니다. 공사가 조금이라도 지연되면 그만큼 임대료와 인건비가 추가로 나갑니다.
      </p>
      <p className="mb-6 font-bold text-slate-900">
        반드시 건물 계약 전에 소방서에 먼저 상담받으세요. 계약 후에 소방 조건이 맞지 않는 걸 알게 되면, 이미 들어간 비용을 그대로 날릴 수 있습니다.
      </p>

      <ColumnImage src="/images/5-3.jpg" alt="소방 특별 설비" />

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        네 번째, 인력 확보 (병행 진행)
      </h3>
      <p className="mb-6">
        센터 오픈 전에는 사업자 등록이 나지 않은 상태라 정식 채용 공고를 올리기 어렵습니다.<br />
        그렇다고 인력 확보를 오픈 직전까지 미루면, 막상 오픈할 때 사람이 없는 상황이 생깁니다.
      </p>
      <p className="mb-6">
        해결 방법은 <span className="font-semibold text-indigo-905">인허가 완료 시점부터 근무 시작이라는 조건을 명시한 사전 채용 공고</span>를 미리 올려두는 것입니다. 이 타이밍이 생각보다 빨리 잡혀야 전체 일정이 맞아 돌아갑니다.
      </p>

      <h3 className="font-sans font-bold text-xl text-[#2b6cb0] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        다섯 번째, 지정심사 (1개월 ~ 2개월)
      </h3>
      <p className="mb-6">
        이게 마지막 관문입니다.<br />
        주간보호센터는 허가제 사업입니다. 시설도 갖추고 인력도 확보했다고 해서 자동으로 운영할 수 있는 게 아니라, 시군구의 지정심사를 반드시 통과해야 합니다.
      </p>
      <p className="mb-6 font-bold text-slate-800">
        서류 접수부터 현장 실사 일정 조율, 실사 후 보완 처리, 최종 승인까지 순조롭게 진행돼도 40일에서 50일이 소요됩니다.
      </p>
      
      <WarningQuote>
        보완 요구가 한 번이라도 나오면 처음부터 다시 시작해야 하는 경우도 있습니다. 심사에서 떨어지면 다음 달, 심한 경우 다음 분기까지 기다려야 합니다. 시설과 인력을 다 갖췄다고 방심하시면 안 되는 이유가 바로 이 단계 때문입니다.
      </WarningQuote>

      <h3 className="font-sans font-bold text-xl text-[#1a365d] mt-10 mb-4 border-b-2 border-gray-150 pb-2">
        천천히 완벽하게 준비하는 게 결국 가장 빠른 길
      </h3>
      <p className="mb-6">
        정리해드리겠습니다.<br />
        입지 설정 최소 2개월, 용도변경과 인테리어 3~4개월, 소방시설과 인력 확보 병행, 지정심사 1~2개월. 이걸 순서대로 밟으면 <Highlight>빠르게 진행해도 5개월에서 6개월</Highlight>입니다.
      </p>
      <p className="mb-6">
        변수가 하나라도 생기면 6개월은 훌쩍 넘어갑니다. 입지 설정 하나에도 1년 넘게 걸리시는 분들이 많이 계실 정도로, 요즘 매물 구하기가 어려워지고 있다는 점도 꼭 인지해주시길 바랍니다.
      </p>
      
      <p className="mb-6 text-teal-800 font-medium bg-teal-50 p-4 rounded-xl border border-teal-100">
        마음이 급하신 건 압니다. 그런데 서두르다가 소방 조건 안 맞는 건물 계약하거나, 지정심사에서 보완을 받게 되면 오히려 더 오래 걸립니다. 비용도 더 많이 나가고요. 결국 가장 정밀하게 가다듬는 성실함이 최고의 지름길입니다.
      </p>
      
      <p className="mb-6">
        준비하시는 모든 대표님들 응원드립니다.
      </p>
      
      <p className="mb-6 font-bold text-center text-indigo-900 border-t border-gray-100 pt-6 mt-8">
        감사합니다.
      </p>
    </article>
  );
}
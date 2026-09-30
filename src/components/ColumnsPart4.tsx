import React from 'react';
import { Youtube, ExternalLink, Play } from 'lucide-react';
import { Highlight, Quote, InfoBox, WarningQuote } from "./Common";

// 14. 방문요양 창업, 제발 혼자 하세요
export function Step14() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        14. 방문요양 창업, 제발 혼자 하세요
      </h1>

      <p className="mb-5 font-semibold text-slate-900 leading-relaxed text-lg">
        '방문요양센터 차리시려고요?'
      </p>

      <p className="mb-4">
        그럼 하나만 여쭤보겠습니다.
      </p>

      <p className="mb-4">
        지금 프랜차이즈 사업 설명회 다녀오셨거나, 컨설팅 견적 받아보고 계신거죠?
      </p>

      <p className="mb-5 font-semibold text-red-600">
        2천, 3천, 많게는 5천만원까지 부르던가요?
      </p>

      <p className="mb-6 font-bold text-slate-950 text-lg">
        제가 오늘은 딱 잘라 말씀드리겠습니다. 방문요양은 그 돈 주고 맡겨서 하는 사업이 아닙니다.
      </p>

      {/* 1. 유튜브 시리즈 영상 썸네일 카드 (칼럼14 시리즈영상.png) */}
      <div className="my-6">
        <a
          href="https://www.youtube.com/watch?v=KUf9tyTdO2s&list=PLCrWuYsmvlfI-Cj3-R5fVV0PbxPVVICVw&index=18"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all"
        >
          <img
            src="/images/14-video.png"
            alt="방문요양 창업, 제발 혼자 하세요 - 천천박사 시리즈 영상"
            className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
            <p className="font-extrabold text-sm sm:text-base flex items-center gap-2">
              <Youtube className="w-4 h-4 text-red-500 shrink-0" />
              <span>[18편] 방문요양 창업, 제발 혼자 하세요 (클릭 시 공식 유튜브 영상 재생)</span>
            </p>
          </div>
        </a>
      </div>

      <Quote className="border-blue-600 bg-blue-50/70 my-6">
        위에 시리즈영상을 올려드렸으니 차라리 혼자하세요. 그리고 혼자 할 자신이 없다면 죄송한 말씀이지만 안하시는게 맞습니다.
      </Quote>

      <p className="mb-4">
        방문요양은 다들 아시는 것처럼, 보증금 3천에서 4천, 5평정도의 사무실이면 창업이 됩니다.
      </p>

      <p className="mb-4">
        그런데 많은 대표님들이 여기에 프랜차이즈 가맹비까지 컨설팅비로 2~3천만원을 더 얹으시려고 한다는 점입니다.
      </p>

      <p className="mb-4">
        그뿐인가요? 방문요양 오픈하겠다고 마음 먹는 순간, 카페에서 블로그에서 요양보호사 교육원에서 몇백만원이면 오픈해주겠다는 말들 또한 진짜 많이 듣게 되실거에요.
      </p>

      <p className="mb-4">
        이분들은 누구냐면요. 제가 알기론 상당수가 방문요양하고 계신 다른 센터 대표님들이세요.
      </p>

      <p className="mb-4">
        본인센터 운영하면서 부업으로 '나 이거 해봤고 잘 아니까 해줄게' 하시는거에요.
      </p>

      <p className="mb-6">
        물론 '방문요양 운영하고 계신 대표님 = 전문가'가 아니라는 말씀이 절대 아닙니다.
      </p>

      {/* 2. 칼럼14 시리즈영상1.jpg */}
      <div className="my-6">
        <img
          src="/images/14-1.jpg"
          alt="재가센터 창업전 입지 선정 및 장기요양 급여자 확인"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      {/* 네이버 블로그 링크 카드 */}
      <a
        href="https://blog.naver.com/goodcarecom"
        target="_blank"
        rel="noopener noreferrer"
        className="block my-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group"
      >
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
          네이버 블로그 칼럼
        </span>
        <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors mb-1">
          재가센터 창업전 입지 선정, 장기 요양 급여자 확인하는 법 (주간보호포함)
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
          도대체 어디에 어르신들이 많을까? 어디에 오픈하는 곳이 좋을까요.. 다른 재가센터 와 장기 요양센터들은 ...
        </p>
        <div className="mt-2 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
          <span>blog.naver.com</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </a>

      <p className="mb-4">
        근데 생각해보세요. 도와주시겠다고 하시는 대표님들은 해당 대표님께서 거주하고 계셨던 거주지에 창업하셨던 분입니다.
      </p>

      <p className="mb-4">
        대표님이 창업하고자 하시는 지자체가 어떤지, 어떤 상황인지, 요양보호사는 잘 구해지는 동네인지를 전혀 모르시는 곳이라는 거죠.
      </p>

      <p className="mb-6">
        그리고 오픈하고 나면, 이치상 본인이 운영하셨던 센터로 복귀하시게 됩니다. 대표님은 혼자가 되는 거고요.
      </p>

      {/* 3. 칼럼14 시리즈영상2.jpg */}
      <div className="my-6">
        <img
          src="/images/14-2.jpg"
          alt="방문요양 수익구조 및 수급자 순수익 현실"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      <p className="mb-4 font-bold text-slate-900">
        이런 이야기는 드릴 수 밖에 없는 이유는 방문요양 수익구조를 아셔야 합니다.
      </p>

      <p className="mb-4">
        방문요양은 1명의 수급자를 모실 때, 잘 해봐야 <Highlight>월 10만원 남습니다.</Highlight> 순수익으로요.
      </p>

      <p className="mb-4">
        30명을 모아도 실수령이 몇백이 안됩니다. 물론 최대한 최소한의 수익을 가지고 드리는 말씀이에요. 최대한 보수적으로요.
      </p>

      <p className="mb-4 font-semibold text-red-600">
        그런데 여기에 3천만원에 달하는 컨설팅 비용을 더하신다고요? 그렇다면 이 돈, 언제 회수하실건가요?
      </p>

      <p className="mb-4">
        이미 요양현장에 경험이 있으신 분들은, 그 돈 뽑는데 몇년이 걸린다는 사실을 잘 알고 계실 겁니다.
      </p>

      <p className="mb-5">
        전혀 모르시는 분이라면 정말 솔직히 더 심각한 상황인거에요.
      </p>

      <p className="mb-4">
        방문요양은 시설처럼 건물이 돈을 버는 사업도 아닙니다. 대표님이 직접 뛰어다니시고, 직접 청구하시고, 직접 어르신 댁에 다니시는 사업이에요.
      </p>

      <p className="mb-6 font-semibold text-slate-900">
        남이 대신 해줄 수 있는게 거의 없다는 뜻입니다.
      </p>

      {/* 4. 칼럼14 시리즈영상3.png */}
      <div className="my-6">
        <img
          src="/images/14-3.png"
          alt="방문요양 창업 시 필수 요양보호사 15명 확보 및 청구 전산 시스템"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      <InfoBox title="🚨 방문요양 창업 전 냉정한 2가지 체크포인트">
        <div className="space-y-3 text-slate-800">
          <div>
            <p className="font-bold text-amber-950 mb-1">첫 째, 요양보호사 15명 명단을 구할 자신이 없다면 시작하시면 안됩니다.</p>
            <p className="text-sm leading-relaxed">
              저희 굿케어도 구하는 방법을 알려드리지만, 실제로 그 명단을 구해드리지 않습니다. 지금 15명의 요양보호사도 구하기 힘드시다면, 추후 어르신이 모이기 시작 했을 때, 20명 30명의 요양보호사? 구하기 힘들거라 봅니다.
            </p>
          </div>
          <div>
            <p className="font-bold text-amber-950 mb-1">두 번째, 컴퓨터를 할 줄 아셔야 합니다.</p>
            <p className="text-sm leading-relaxed">
              방문요양은 청구사업이에요. 공단 시스템에 들어가서 일정을 넣고, 태그를 확인하고, 급여를 청구하고, 4대보험 EDI 처리하고, 이거 다 컴퓨터로 하거든요. 이게 안되시면 매달 직원 한명 월급이 나가게 됩니다. 컴퓨터는 잘 못해도 되는 경우가 1가지 있긴 합니다. 압도적인 영업력이 있는 경우. 이게 아니라면 하시면 안되세요.
            </p>
          </div>
        </div>
      </InfoBox>

      <p className="mb-5 font-semibold text-blue-700">
        천천박사가 겁주려는게 아니고, 이게 방문요양의 현실입니다. 8년동안 폐업하는 수백개 센터 대표님들을 만나며 정리한 결론이에요.
      </p>

      <p className="mb-4">
        여기서 오해하시면 안되는게요. '배우지마라'는 이야기가 아닙니다.
      </p>

      <p className="mb-4">
        방문요양 청구를 어떻게 하는지, 등급별 어르신을 어떻게 모으는지, 요양보호사 급여 구조는 어떻게 짜는지, 이런걸 체계적으로 합리적인 가격에 배우는건 정말 좋아요.
      </p>

      <p className="mb-5">
        굿케어에서도 그런 교육을 하고 있고요. 저희가 아니어도 어디서라도 배우셨으면 합니다.
      </p>

      <WarningQuote>
        근데 배우는 것과 맡기는것은 완전히 다릅니다. 제가 다 해드릴게요. 대표님은 도장만 찍으세요.라는 말만 믿고 도장을 찍으시는 순간, 대표님은 자기 센터도 모르는 대표님이 되는 겁니다.
      </WarningQuote>

      <p className="mb-4">
        거꾸로 말씀드리면, 주먹구구여도, 좀 서툴러도 내 손으로 열어보겠다는 자신이 있으셔야 합니다.
      </p>

      <p className="mb-5">
        그 자신이 없으시면 그냥 남이 열어준 센터를 대표님 이름으로 운영하는거에요.
      </p>

      <p className="mb-4">
        그리고 이건 솔직하게 말씀드릴게요. 설립 서류 행정사한테 맡기면 무조건 통과 될 것 같으시죠?
      </p>

      <p className="mb-4">
        아니에요. 저희 굿케어 행정사가 해도 떨어집니다. 왜냐하면 지금 방문요양은 지정제이고, 신고만 하면 열리던 시대는 이미 끝났거든요. 지자체가 현재 지역의 수급 균형에 맞춰 지정여부를 결정합니다.
      </p>

      <p className="mb-6">
        실제로 어떤 지자체는 10건 중, 8~9건은 지정 해주지 않습니다. 반대로 지정심사가 쉬운 지역도 있지요.
      </p>

      {/* 5. 칼럼14 시리즈영상4.jpg */}
      <div className="my-6">
        <img
          src="/images/14-4.jpg"
          alt="방문요양 지정제 심사 실제 현황 및 반려 사례"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      {/* 유튜브 영상 연결 카드 2 */}
      <div className="my-6 rounded-2xl overflow-hidden border border-red-200 bg-red-50/60 p-5 text-center shadow-xs">
        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
          <Play className="w-6 h-6 fill-white ml-0.5" />
        </div>
        <p className="font-bold text-slate-900 text-base mb-1">
          🎬 방문요양 지정제 심사 통과 핵심 영상
        </p>
        <p className="text-slate-600 text-xs sm:text-sm mb-4">
          지자체별 지정심사의 실제 난이도와 까다로운 거절 사례를 생생히 확인하세요.
        </p>
        <a
          href="https://youtu.be/dNAEvuHRh8A?t=135"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl shadow-sm transition-all"
        >
          <Youtube className="w-4 h-4" />
          <span>지정심사 영상 바로보기</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-80" />
        </a>
      </div>

      <p className="mb-4">
        그러니까 100페이지 짜리 사업계획서 써주는데 몇백만원 내시는거, 그 지역 상황이라면 맞지 않으면 그냥 종이에요.
      </p>

      <p className="mb-6">
        결국 대표님이 관할 노인복지과에 직접 찾아가서 분위기 살피고, 주무관님의 반응을 살펴보셔야 하는 이유입니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        자 여기까지 듣고, '나는 하지 말라는건가?' 싶으시다면
      </h2>

      <p className="mb-4">
        만에 하나를 대비해 다시 한 번 정리해드리겠습니다.
      </p>

      <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2.5 my-6">
        <p className="font-semibold text-slate-900">하나, 요양보호사 15명 모으실 수 있는 분</p>
        <p className="font-semibold text-slate-900">둘, 영업력 있으신 분, 온라인이든 오프라인이든요.</p>
        <p className="font-semibold text-slate-900">셋, 압도적인 인프라가 있으신 분, 가족 중에 병원을 하신다거나, 오래 장사를 하셨다거나, 보험 왕이거나요.</p>
        <p className="font-semibold text-slate-900">넷, 방문요양이 부족한 지역에 계신 분, 서툴러도 자리를 잡는 지역입니다.</p>
        <p className="font-semibold text-slate-900">다섯, 간호사 출신이거나 확장 아이디어가 있으신 분, 방문간호, 주간보호 등으로요.</p>
      </div>

      <p className="mb-5 font-bold text-red-600">
        이 다섯가지 중, 하나도 해당이 안된다면 지금은 하실 때가 아닙니다. 준비되면 하세요. 안된다면 내 사업이 아니구나 생각하시면 속 편하실 겁니다.
      </p>

      {/* 6. 칼럼14 시리즈영상5.png */}
      <div className="my-6">
        <img
          src="/images/14-5.png"
          alt="방문요양 초기 서류 및 시스템 구축의 중요성"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      <p className="mb-4">
        마지막으로 하나더 말씀드리면 혼자 창업하시는 분들께서 일단은 오픈하고, 나머지 일은 나중에 생각하자 생각 하십니다.
      </p>

      <p className="mb-4">
        방문요양은 오픈하고 나면, 몇년 뒤에 평가를 받고 현지조사를 받는 사업입니다. 초반에 서류가 없으면, 결국 환수를 당하게 되어요.
      </p>

      <p className="mb-4">
        그러니까 부디 첫날부터 센터의 시스템과 틀을 잡고, 거기에 맞춰 서류를 만드시고 보관하시는 습관을 잡아보셨으면 좋겠어요.
      </p>

      <p className="mb-5">
        굿케어 같은 전문기관이랑 같이 가는게 아니라면, 이건 오롯이 대표님의 몫이 될겁니다.
      </p>

      <p className="mb-4 font-extrabold text-blue-900 text-lg">
        다시한번 말씀드리지만, 방문요양 컨설팅에는 2천, 3천 쓰는 사업이 아닙니다.
      </p>

      <p className="mb-6 font-semibold text-slate-900">
        어느정도 공부를 하신 뒤에, 나는 정말 해도 되는 사람인가가 궁금하시다면 굿케어에서 제공해드리는 30분 무료컨설팅에서 자격검증 받아보시고, 궁금한 점들에 대한 답답함을 풀어보시는걸 추천드릴게요.
      </p>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.
      </p>
    </article>
  );
}

// 15. 방문요양 소자본 창업, 5평으로 진짜 될까?
export function Step15() {
  return (
    <article className="max-w-2xl mx-auto py-2 text-slate-800 text-[15.5px] sm:text-[16px] leading-[1.85] font-sans">
      <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-950 mb-6 tracking-tight leading-tight">
        15. 방문요양 소자본 창업, 5평으로 진짜 될까?
      </h1>

      <p className="mb-4 font-semibold text-slate-900 leading-relaxed">
        안녕하세요. 지난 12년동안 약 3,000여명이 넘는 예비대표님들과 수많은 상담을 진행한 장기요양기관 전문가 집단 굿케어 대표 <span className="text-blue-700 font-bold border-b-2 border-blue-200">천천박사</span>입니다.
      </p>

      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 my-6 text-center">
        <p className="font-extrabold text-slate-900 text-lg sm:text-xl leading-snug">
          소자본 창업이라는 생각에<br />
          방문요양 창업을<br />
          고민하고 계시나요?
        </p>
      </div>

      <p className="mb-4">
        방문요양센터? 솔직히 소자본 창업 맞습니다. 지자체 규정에 따르면 사무실 5평만 있으면 되니까요.
      </p>

      <p className="mb-4">
        어차피 요양보호사를 파견하는 사업이고, 보통 어르신 댁을 찾아가거나 전화로 상담을 주고 받는 사업이니 구석진 곳에 한다고 합시다.
      </p>

      <p className="mb-6">
        그럼? 월 50~60만원 임대료만 있으면 됩니다. 센터장으론 내가 일을 할거니, 어르신 모을 때까진 몸으로 때우자는 생각 하실 수 있습니다.
      </p>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-8 mb-4 pb-2 border-b-2 border-slate-200">
        &lt; 근데 5평으로 진짜 될까? &gt;
      </h2>

      {/* 1. 칼럼15.jpg */}
      <div className="my-6">
        <img
          src="/images/15-1.jpg"
          alt="방문요양 센터 오픈 5평 사무실 알아보기"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      {/* 네이버 블로그 링크 카드 1 */}
      <a
        href="https://blog.naver.com/goodcarecom"
        target="_blank"
        rel="noopener noreferrer"
        className="block my-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group"
      >
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
          네이버 블로그 칼럼
        </span>
        <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors mb-1">
          방문요양 센터 오픈, 5평이면 진짜 충분할까?
        </h3>
        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
          팀장님, 방문요양센터 사무실 알아보고 있는데 혹시 몇 평이어야 할까요? 5평이면 충분할까요? #방문요양 ...
        </p>
        <div className="mt-2 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
          <span>blog.naver.com</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </a>

      <p className="mb-4">
        모두 맞는 이야기 입니다. 하지만 굿케어는 이렇게 말씀드리고 싶어요.
      </p>

      <p className="mb-6 font-bold text-red-600 text-lg">
        아래 2가지 경우가 아니라면, 하지마세요.
      </p>

      <p className="mb-4">
        굿케어를 통해 방문요양과 차량목욕을 오픈하시고, 많은 어르신을 모으시던 대표님이 계셨습니다.
      </p>

      <p className="mb-4">
        장기요양기관이 비전과 희망을 보신 후, 주간보호와 요양원을 이어서 창업하셨는데요
      </p>

      {/* 2. 칼럼15-1.jpg */}
      <div className="my-6">
        <img
          src="/images/15-2.jpg"
          alt="방문요양 차량목욕에서 주간보호 요양원 확장 연계"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      <p className="mb-4">
        방문요양과 차량목욕을 통해, 이미 많은 어르신들을 만나고 있었고, 관계가 되어 있으시다보니,
      </p>

      <p className="mb-4 font-semibold text-blue-800">
        주간보호와 요양원을 오픈하자마자 10~14명 어르신을 곧바로 등록하게 되셨습니다.
      </p>

      <p className="mb-4">
        주간보호에서 10명 가량의 어르신이 첫달부터 등록한다는건, 굉장히 어려운 일이에요.
      </p>

      <p className="mb-5">
        가가호호 발로 뛰어다니던 그 경험이 있으셨기에, 그 노력이 있으셨기에 망정이지, 절대 쉬운 일이 아닙니다.
      </p>

      <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl my-6">
        <p className="font-bold text-slate-900 mb-2">📊 방문요양 1명당 실제 순수익 계산</p>
        <p className="text-slate-700 text-sm leading-relaxed mb-3">
          방문요양은 1명의 최대 수익을 계산해보면, 주 5회 매일 3시간 제공을 기준으로 7~9만원이 됩니다.
        </p>
        <div className="p-3 bg-white rounded-xl border border-slate-200 text-center font-mono text-sm sm:text-base font-bold text-blue-900 my-2">
          수급자 X 110만원 - 총 매출의 86.6% 인건비 + 운영비 = 한달 총 약 7~9만원
        </div>
        <p className="text-slate-700 text-sm leading-relaxed mt-3">
          즉 방문요양에서 12명 어르신을 모실 때, 발생하는 순수익은 보수적으로 잡으면 108만원 정도입니다.<br />
          <span className="text-xs text-slate-500 font-semibold">(*방문요양 최소 어르신 20~30명은 있어야, 시설장 최저시급 월급은 가져갈 수 있게 된다는 소리)</span>
        </p>
      </div>

      <p className="mb-4">
        근데 12명의 어르신이 주간보호나 요양원으로 오게되면, 수익자체가 달라진다는 이야기입니다.
      </p>

      <p className="mb-4">
        요양원의 같은 경우에는 29명 어르신만 오셔도 월 순수익이 1,500만원에 달하고,
      </p>

      <p className="mb-5">
        주간보호는 가족이 함께 하느냐, 출석율이 어떻게 되느냐에 따라 다르지만 최소 4백만원 이상은 벌게 됩니다.
      </p>

      <Quote className="border-blue-600 bg-blue-50/70 my-6">
        즉 첫 번째, 방문요양센터는 <Highlight>주간보호와 요양원으로까지 사업 확장을 꿈꾸시는 분들</Highlight>이 해야 합니다.
      </Quote>

      <p className="mb-4">
        더 놀라운 것은, 한차례, 두차례가 아닌 수없이 보고 되는 케이스라는 점을 말씀드립니다.
      </p>

      <p className="mb-4">
        그래서 몇일 전에도 말씀드렸지요? 간호사 선생님들이 창업하시는 방문간호 센터 자체도 왜 하는지.
      </p>

      <p className="mb-4">
        어르신들이 많이 많이 모이지 않으면, 병원에서 버는거나, 방문간호 센터장으로 버는 수익이나 비슷합니다.
      </p>

      <p className="mb-6">
        다만 누누히 말씀드렸습니다. 방문간호는 요양원까지, 주간보호까지 바라볼 간호사 선생님들이 하시는 사업이라고요.
      </p>

      <h3 className="font-bold text-lg text-slate-900 mt-6 mb-3">
        &lt; 방문간호 희망하시는 분들만 &gt;
      </h3>

      {/* 3. 칼럼15-2.png */}
      <div className="flex justify-center my-6">
        <img
          src="/images/15-3.png"
          alt="간호사 창업 박람회 방문간호센터 고민 중이신 분"
          className="w-full max-w-sm h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      {/* 네이버 블로그 링크 카드 2 */}
      <a
        href="https://blog.naver.com/goodcarecom"
        target="_blank"
        rel="noopener noreferrer"
        className="block my-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group"
      >
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
          네이버 블로그 칼럼
        </span>
        <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors mb-1">
          간호사 창업 박람회? 방문간호센터 고민 중이신 간호사선생님께 드리는 당부
        </h4>
        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
          안녕하세요 장기요양기관 집단, 굿케어 대표 천천박사입니다. 3교대 근무에 지친 간호사 선생님들, 분명 &#...
        </p>
        <div className="mt-2 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
          <span>blog.naver.com</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </a>

      <p className="mb-6 font-semibold text-slate-900">
        즉 방문요양, 차량목욕, 방문간호는 그 너머의 사업을 위해, 모수와 집단, 잠재고객을 만드는 <Highlight>퍼널 역할</Highlight>로 창업하셔야 하는 겁니다.
      </p>

      <h3 className="font-bold text-lg text-slate-900 mt-8 mb-3">
        &lt; 차라리 차량목욕이 나을 수 있다고? &gt;
      </h3>

      {/* 4. 칼럼15-3.jpg */}
      <div className="my-6">
        <img
          src="/images/15-4.jpg"
          alt="방문목욕 센터 차량 창업 비용 가격 중고 수익"
          className="w-full h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      {/* 네이버 블로그 링크 카드 3 */}
      <a
        href="https://blog.naver.com/goodcarecom"
        target="_blank"
        rel="noopener noreferrer"
        className="block my-6 p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/50 transition-colors group"
      >
        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mb-1">
          네이버 블로그 칼럼
        </span>
        <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors mb-1">
          방문목욕 센터 차량 창업, 비용 가격 중고? 수익은?
        </h4>
        <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
          안녕하세요 평가,회계,노무,세무,감사, 현지조사, 마케팅, 창업 장기요양기관 전문가 집단, 굿케어 대표 천...
        </p>
        <div className="mt-2 text-[11px] text-emerald-600 font-bold flex items-center gap-1">
          <span>blog.naver.com</span>
          <ExternalLink className="w-3 h-3" />
        </div>
      </a>

      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 mt-10 mb-4 pb-2 border-b-2 border-slate-200">
        두 번째, '진짜 방문요양의 왕이 되고 싶은 분'들이 창업해야 합니다
      </h2>

      <p className="mb-4">
        무슨 말이냐하면, 방문요양에서 독보적인 서비스로, 지역 어르신들을 <Highlight>100명 이상 모아가실 확고한 의지</Highlight>가 있으신 분들이 해야한다는 말입니다.
      </p>

      <p className="mb-4">
        방문요양은, 거대한 집합체와도 같습니다. 시스템만 잘 갖추어놓는다면 요양보호사 - 어르신 - 가족보호자 - 센터,
      </p>

      <p className="mb-4">
        어르신이 많아지면 많아질수록, 관계망이 넓어지면서 촘촘해지는 유기생명과도 같은 역할을 합니다.
      </p>

      <p className="mb-5 font-semibold text-blue-900">
        즉 100명 이상만 넘어가면, 대표님이 출근하지 않아도 돌아가는 시스템이 구축 됩니다.
      </p>

      <p className="mb-4">
        1명의 어르신에게 1명의 요양보호사를 보낸다고 가정하면(가정입니다. 가정),
      </p>

      <p className="mb-4">
        해당 지역의 100명 요양보호사, 100명 가족보호자, 100명 어르신, N명의 사회복지사가 대표님을 대신해서 뛰어줄겁니다.
      </p>

      <p className="mb-4">
        요양보호사, 가족보호자, 어르신, 사회복지사, 대략 300명 넘는 분들에게 5%만 소개받아도 한달 15명입니다.
      </p>

      <p className="mb-4">
        5%는 너무 많다고요? 1%만 받아도 한달 3명, 1년이면 30명이 넘습니다.
      </p>

      <p className="mb-5">
        물론 돌아가시고, 주간보호, 요양원으로 가시는 분들도 많으시겠죠. 굿케어가 모르고 말씀드리는 이야기가 아닙니다.
      </p>

      <Quote className="border-indigo-600 bg-indigo-50/70 my-6">
        즉 방문요양을 해야하는 두번째 카테고리의 대표님들은 방문요양에서 끝판왕, 해당 지역을 장악하는 시스템을 만들고 싶은 분들이 하셔야 합니다.
      </Quote>

      <p className="mb-4">
        이렇게 되셨을 때, 꼭 주간보호, 요양원이 아니라, 차량목욕, 방문간호, 복지용구만 연계해도 수익은 더욱 확장 될 수 밖에 없습니다.
      </p>

      {/* 5. 칼럼15-4.jpg (복지용구 부산 출장) */}
      <div className="flex justify-center my-6">
        <img
          src="/images/15-5.jpg"
          alt="억 단위 버는 부산 복지용구 사업소 출장 현장"
          className="w-full max-w-md h-auto rounded-xl shadow-xs border border-slate-100"
        />
      </div>

      <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 font-bold my-4 text-center">
        🏆 억 단위 버는 부산 복지용구 사업소 출장
      </div>

      <p className="mb-4">
        물론 '이 나이 먹고도, 출근 할 곳이 있음자체로 감사하는 대표님들도 많으시고'
      </p>

      <p className="mb-4">
        '10년동안 단 5명의 어르신을 데리고 있더라도, 행복해하시는 대표님들도 계십니다'
      </p>

      <p className="mb-4">
        월세임대료 정도야, 몇명 어르신만 모으면 충당은 되고, 시설장으로 근무하는 내 인건비야, 못버는것 뿐이지, 더 나가는건 아니니 괜찮다 생각하시는 것이죠.
      </p>

      <p className="mb-4">
        정말 소중한 분들입니다. 이런 소중한 대표님들을 볼 때, 이런 생각까지 듭니다.
      </p>

      <p className="mb-4">
        성공? 행복이란 무엇일까요? 어르신을 잘 모으고, 사업적으로 잘되는 것만이 성공일까? 생각도 듭니다.
      </p>

      <p className="mb-6">
        이렇게 낮은 자리에서, 낮은 모습으로 섬겨나가는 것이 목표인 대표님들은 제가 나무랄 수 없는 성역의 영역 인 것 같습니다.
      </p>

      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 my-6">
        <p className="font-bold text-slate-900 mb-2">
          그렇기 때문에 굿케어 천천박사는 방문요양을 꿈꾸시는 대표님들에게 늘 드리는 말씀이 있습니다:
        </p>
        <p className="text-slate-800 font-semibold pl-3 border-l-2 border-blue-500 mb-1">
          "대표님, 이 사업 왜 하려고 하세요?"
        </p>
        <p className="text-slate-800 font-semibold pl-3 border-l-2 border-blue-500 mb-1">
          "대표님은 어떤 분이신가요?"
        </p>
        <p className="text-slate-800 font-semibold pl-3 border-l-2 border-blue-500">
          "대표님은 어떤걸 좋아하고 싫어하세요?"
        </p>
      </div>

      <p className="mb-4">
        다만 사업을 경영지원해드리는 회사로 말씀드리자면, 장기요양기관 사업은 머리와 마음이 같이 있어야 합니다.
      </p>

      <p className="mb-4">
        위에 봉사의 마음으로, 어르신을 섬겨 나가는 분들이 잘못 되었다는 것이 아닙니다. 틀렸다는 이야기는 더더욱 아닙니다.
      </p>

      <p className="mb-6 font-bold text-slate-950">
        다만 복지다워야하고, 사업다워야하는게 장기요양기관 사업인 것 같습니다. 하단의 글을 참고 바랍니다.
      </p>

      <p className="mt-8 pt-6 border-t border-slate-200 text-center font-bold text-slate-900 text-lg">
        감사합니다.^^
      </p>
    </article>
  );
}

export interface ColumnMeta {
  id: string; // e.g. "step1"
  stepNumber: number; // 1 ~ 15
  slug: string; // "1"
  aliases: string[]; // ["step1", "1"]
  path: string; // "/column/1"
  title: string;
  shortTitle: string;
  category: "주간보호센터 창업" | "요양원 창업" | "방문요양 창업";
  pageTitle: string;
  description: string;
  keywords: string;
  summary: string;
  readTime: string;
  isYouTube?: boolean;
  youtubeUrl?: string;
}

export const CONSULTING_SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSekX8lrSd9oufmhPXVGDcdVo89cNsou1fYgGRc3ldOdzVb0mA/viewform";

export const COLUMNS_DATA: ColumnMeta[] = [
  {
    id: "step1",
    stepNumber: 1,
    slug: "1",
    aliases: ["1", "step1", "경력-없어도-창업-가능할까요", "무경력자-주간보호센터-창업"],
    path: "/column/1",
    title: "1. 경력 없어도 창업 가능할까요",
    shortTitle: "경력 없어도 창업 가능할까요",
    category: "주간보호센터 창업",
    pageTitle: "1. 경력 없어도 창업 가능할까요 | 굿케어",
    description: "경력과 지식이 전혀 없는 완전 무경력자가 주간보호센터 창업에 도전할 때 반드시 알아야 하는 실제 요건과 1년 만에 정원 마감을 달성하는 극복 처방전을 제공합니다.",
    keywords: "주간보호센터창업, 무경력창업, 노인복지센터, 데이케어센터창업, 굿케어, 천천박사",
    summary: "무경력자도 1년 만에 정원 마감을 달성할 수 있습니다. 근로자로서의 경력보다 사업가로서의 관점과 마케팅 능력이 성공을 좌우합니다.",
    readTime: "3분"
  },
  {
    id: "step2",
    stepNumber: 2,
    slug: "2",
    aliases: ["2", "step2", "자격증-없어도-주간보호센터-창업-가능한가요", "자격증-없이-주간보호센터-창업"],
    path: "/column/2",
    title: "2. 자격증 없어도 주간보호센터 창업 가능한가요?",
    shortTitle: "자격증 없어도 주간보호센터 창업 가능한가요?",
    category: "주간보호센터 창업",
    pageTitle: "2. 자격증 없어도 주간보호센터 창업 가능한가요? | 굿케어",
    description: "사회복지사 자격증이 없는 비전문가도 주간보호센터 설립 대표자가 되는 합법적이고 안전한 공동대표 및 시설장 채용 구조를 상세히 알려드립니다.",
    keywords: "주간보호센터자격증, 사회복지사설립, 주간보호대표자격, 시설장채용, 노인복지시설",
    summary: "설립 대표자는 자격증이 없어도 됩니다. 시설장 채용 및 공동대표 제도를 활용해 비전문가도 합법적이고 안전하게 창업할 수 있습니다.",
    readTime: "3분"
  },
  {
    id: "step3",
    stepNumber: 3,
    slug: "3",
    aliases: ["3", "step3", "가족이랑-같이-해도될까요", "주간보호센터-가족사업"],
    path: "/column/3",
    title: "3. 가족이랑 같이 해도될까요",
    shortTitle: "가족이랑 같이 해도될까요",
    category: "주간보호센터 창업",
    pageTitle: "3. 가족이랑 같이 해도될까요 | 굿케어",
    description: "배우자, 자녀와 함께하는 가족형 주간보호센터 창업의 세무, 인건비 절감 효과, 지분 구조적 장점과 경영 리스크 방지 비법을 제시합니다.",
    keywords: "주간보호가족사업, 노인복지인건비, 가족공동창업, 주간보호센터수익, 굿케어",
    summary: "가족 구성원이 함께 근무하면 인건비가 가계 소득으로 직결되어 안정성이 크게 높아집니다. 단, 공사의 구분과 지분 분배 원칙이 필수입니다.",
    readTime: "4분"
  },
  {
    id: "step4",
    stepNumber: 4,
    slug: "4",
    aliases: ["4", "step4", "주간보호센터-양도양수-vs-신규창업"],
    path: "/column/4",
    title: "4. 주간보호센터 양도양수 vs 신규창업",
    shortTitle: "양도양수 vs 신규창업 비교",
    category: "주간보호센터 창업",
    pageTitle: "4. 주간보호센터 양도양수 vs 신규창업 비교 분석 | 굿케어",
    description: "기존 주간보호센터를 인수하는 권리금 양도양수 방식과 백지 상태에서의 신규창업 인허가 단계에 필요한 세부 비용, 리스크, 세법 요인을 대조합니다.",
    keywords: "주간보호양도양수, 주간보호권리금, 신규창업비교, 장기요양기관인수, 굿케어",
    summary: "권리금을 주고 기존 기관을 인수하는 것과 백지에서 신규 창업하는 것의 장단점을 투명하게 비교하고 권리금 거품을 피하는 법을 공개합니다.",
    readTime: "4분"
  },
  {
    id: "step5",
    stepNumber: 5,
    slug: "5",
    aliases: ["5", "step5", "주간보호센터-창업-얼마나-걸릴까요", "얼마나-걸릴까요", "주간보호센터-창업기간-타임라인"],
    path: "/column/5",
    title: "5. 주간보호센터 창업, 얼마나 걸릴까요",
    shortTitle: "주간보호센터 창업, 얼마나 걸릴까요",
    category: "주간보호센터 창업",
    pageTitle: "5. 주간보호센터 창업, 얼마나 걸릴까요 | 굿케어",
    description: "도면 승인부터 인테리어 공사, 노유자시설 용도변경, 지정신청 심사 및 최종 설치신고 승인까지 평균 90일~120일 소요되는 창업 타임라인을 안내합니다.",
    keywords: "주간보호창업기간, 노인복지설치신고, 지정심사기간, 주간보호인테리어일정, 굿케어",
    summary: "입지 선정부터 오픈까지 약 3~4개월이 소요됩니다. 인허가 실사와 소방 심사 기간을 단축하여 월세 낭비를 막는 핵심 팁을 확인하세요.",
    readTime: "3분"
  },
  {
    id: "step6",
    stepNumber: 6,
    slug: "6",
    aliases: ["6", "step6", "장기요양기관-창업-정부지원금-있나요", "정부지원금-있나요", "주간보호센터-정부지원금-창업지원금"],
    path: "/column/6",
    title: "6. 장기요양기관 창업, 정부지원금 있나요",
    shortTitle: "장기요양기관 창업, 정부지원금 있나요",
    category: "주간보호센터 창업",
    pageTitle: "6. 장기요양기관 창업, 정부지원금 있나요 | 굿케어",
    description: "주간보호센터 창업지원금 혹은 정부 무상보조금 제도의 실체와 올바른 창업 자금 예산 조달 및 정책자금 활용 요건을 집중 분석해 드립니다.",
    keywords: "주간보호창업지원금, 노인복지정부보조금, 장기요양창업자금, 정책자금대출, 굿케어",
    summary: "무상 지원금이라는 달콤한 환상 뒤에 숨겨진 까다로운 현실을 짚어보고, 실제로 활용 가능한 저금리 정책자금 조달 전략을 설명합니다.",
    readTime: "4분"
  },
  {
    id: "step7",
    stepNumber: 7,
    slug: "7",
    aliases: ["7", "step7", "노유자시설-1000만원아끼는-법", "노유자시설-용도변경-비용절감"],
    path: "/column/7",
    title: "7. 노유자시설 1000만원아끼는 법",
    shortTitle: "노유자시설 1000만원아끼는 법",
    category: "주간보호센터 창업",
    pageTitle: "7. 노유자시설 1000만원아끼는 법 | 굿케어",
    description: "주간보호센터 창업의 첫 단추인 상가 용도변경(노유자시설) 과정에서 건축사 조율을 통해 수천만 원을 절세하고 공사비를 아끼는 꿀팁을 전수합니다.",
    keywords: "노유자시설용도변경, 주간보호건축사, 상가용도변경비용, 직통계단소방, 굿케어",
    summary: "노유자시설 용도변경 시 직통계단, 소방스프링클러 규정으로 수천만 원이 날아갈 수 있습니다. 계약 전 반드시 확인해야 할 3대 체크포인트를 전합니다.",
    readTime: "4분"
  },
  {
    id: "step8",
    stepNumber: 8,
    slug: "8",
    aliases: ["8", "step8", "주간보호센터-구조설계-인테리어"],
    path: "/column/8",
    title: "8. 주간보호센터 구조설계 및 인테리어 주의점",
    shortTitle: "구조설계 및 인테리어 주의점",
    category: "주간보호센터 창업",
    pageTitle: "8. 주간보호센터 구조설계 및 인테리어 주의점 | 굿케어",
    description: "소방 안전시설 기준, 스프링클러 의무설치 대상, 어르신 보행 동선 및 슬라이딩 도어 등 주간보호센터 창업 인허가 실사 기준에 맞춘 체크리스트입니다.",
    keywords: "주간보호인테리어, 노유자도면설계, 어르신동선, 스프링클러설치, 주간보호실사, 굿케어",
    summary: "예쁜 인테리어보다 인허가 실사 기준에 맞는 구조설계가 먼저입니다. 재공사 없이 한 번에 허가받는 필수 도면 배치 기준을 짚어드립니다.",
    readTime: "4분"
  },
  {
    id: "step9",
    stepNumber: 9,
    slug: "9",
    aliases: ["9", "step9", "주간보호센터-창업-영상", "주간보호-유튜브"],
    path: "/column/9",
    title: "9. 주간보호센터 창업 실전 영상 (유튜브)",
    shortTitle: "주간보호 창업 영상 (유튜브)",
    category: "주간보호센터 창업",
    pageTitle: "9. 주간보호센터 창업 실전 가이드 영상 | 굿케어",
    description: "1,400여 개 장기요양기관 경영 노하우를 집약한 굿케어 천천박사의 주간보호센터 창업 실전 핵심 영상 강의입니다.",
    keywords: "주간보호창업영상, 주간보호유튜브, 천천박사, 굿케어, 데이케어센터설립",
    summary: "성공적인 주간보호센터 창업을 위해 꼭 시청해야 할 천천박사의 공식 실전 영상 가이드입니다.",
    readTime: "영상",
    isYouTube: true,
    youtubeUrl: "https://www.youtube.com/@goodcare1"
  },
  {
    id: "step10",
    stepNumber: 10,
    slug: "10",
    aliases: ["10", "step10", "굿케어-철학", "치매어르신-돌봄철학-창업가치"],
    path: "/column/10",
    title: "10. 굿케어 철학",
    shortTitle: "굿케어 철학",
    category: "주간보호센터 창업",
    pageTitle: "10. 굿케어 철학 | 굿케어",
    description: "어르신 학대 예방부터 사람의 존엄을 지켜내는 굿케어만의 명품 실버 케어 철학과 장기 지속 가능한 주간보호센터 운영 비전을 나눕니다.",
    keywords: "굿케어철학, 치매돌봄철학, 노인존엄케어, 주간보호운영가치, 장기요양기관윤리, 굿케어",
    summary: "단순한 수익을 넘어 어르신의 존엄과 가족의 평안을 지켜주는 복지 사업으로서의 진정한 가치와 롱런 운영 비결을 제시합니다.",
    readTime: "4분"
  },
  {
    id: "step11",
    stepNumber: 11,
    slug: "11",
    aliases: ["11", "step11", "9인-요양원-창업"],
    path: "/column/11",
    title: "11. 9인 요양원 창업 할만할까?",
    shortTitle: "9인 요양원 창업 타당성",
    category: "요양원 창업",
    pageTitle: "11. 9인 요양원 창업 할만할까? 소규모 노인공동생활가정 분석 | 굿케어",
    description: "소규모 9인 요양원(공동생활가정) 창업의 대원칙인 주택/상가 임대 요건 분석부터 어르신 모집 노하우, 법적 인력 배치와 실제 월 순수익 예산을 속시원히 공개합니다.",
    keywords: "9인요양원창업, 노인공동생활가정, 요양원임대조건, 9인요양원수익, 소규모요양원, 굿케어",
    summary: "10인 이상 요양원과 달리 9인 이하는 임대가 가능합니다. 부모님 돌봄과 가족 사업을 결합해 실질적인 300만원+@ 수익을 만드는 현실적인 가이드입니다.",
    readTime: "4분"
  },
  {
    id: "step12",
    stepNumber: 12,
    slug: "12",
    aliases: ["12", "step12", "요양원-창업-주의사항-top5"],
    path: "/column/12",
    title: "12. 요양원 창업 전, 반드시 보셔야하는 TOP 5",
    shortTitle: "요양원 창업 전 필수점검 TOP 5",
    category: "요양원 창업",
    pageTitle: "12. 요양원 창업 전 반드시 보셔야하는 TOP 5 | 굿케어",
    description: "요양원 창업 대표님들이 반드시 걸러야 할 5대 함정! 최소 단층 면적 기준, 49인 vs 50인 필수 배치 인건비 폭락 구조, 도심 초밀착형 입지 전설, 29인 실제 실수령액 순이익을 완벽 분석해 드립니다.",
    keywords: "요양원창업주의점, 29인요양원수익, 요양원인력배치, 요양원입지선정, 굿케어",
    summary: "단층 면적 미달, 50인 배치 함정, 막연한 도심 입지 선호 등 수억 원의 손실을 유발하는 요양원 창업 5대 리스크를 선제적으로 점검해 드립니다.",
    readTime: "5분"
  },
  {
    id: "step13",
    stepNumber: 13,
    slug: "13",
    aliases: ["13", "step13", "요양원-창업-영상", "요양원-창업-유튜브"],
    path: "/column/13",
    title: "13. 요양원 창업 실전 영상 (유튜브)",
    shortTitle: "요양원 창업 영상 (유튜브)",
    category: "요양원 창업",
    pageTitle: "13. 요양원 창업 실전 가이드 영상 | 굿케어",
    description: "요양원 설립 전 필수 시청! 29인 시설 실제 수익 분석, 부지 및 건축 인허가 기준을 상세히 설명하는 굿케어 천천박사의 공식 유튜브 영상 가이드입니다.",
    keywords: "요양원창업영상, 요양원유튜브, 요양원설립가이드, 천천박사, 굿케어",
    summary: "요양원 설립 전 반드시 알아야 할 실전 인허가 및 수익 구조를 담은 굿케어 공식 유튜브 영상 가이드입니다.",
    readTime: "영상",
    isYouTube: true,
    youtubeUrl: "https://www.youtube.com/@goodcare1"
  },
  {
    id: "step14",
    stepNumber: 14,
    slug: "14",
    aliases: ["14", "step14", "방문요양-창업-제발-혼자-하세요"],
    path: "/column/14",
    title: "14. 방문요양 창업, 제발 혼자 하세요",
    shortTitle: "방문요양 창업, 제발 혼자 하세요",
    category: "방문요양 창업",
    pageTitle: "14. 방문요양 창업, 제발 혼자 하세요 | 굿케어",
    description: "방문요양센터 프랜차이즈 가맹비 및 2~3천만원 컨설팅의 허상과 요양보호사 15명 수급 요건, 전산 청구 현실 등 혼자 창업해야 하는 이유를 짚어드립니다.",
    keywords: "방문요양창업, 방문요양센터설립, 방문요양컨설팅, 재가복지센터창업, 굿케어, 천천박사",
    summary: "방문요양은 프랜차이즈나 수천만원 컨설팅으로 하는 사업이 아닙니다. 현실적인 수익구조와 혼자 시작해야 하는 이유를 전합니다.",
    readTime: "5분"
  },
  {
    id: "step15",
    stepNumber: 15,
    slug: "15",
    aliases: ["15", "step15", "방문요양-소자본-창업-5평으로-진짜-될까", "방문요양-소자본-창업"],
    path: "/column/15",
    title: "15. 방문요양 소자본 창업, 5평으로 진짜 될까?",
    shortTitle: "방문요양 5평 소자본 창업의 진실",
    category: "방문요양 창업",
    pageTitle: "15. 방문요양 소자본 창업, 5평으로 진짜 될까? | 굿케어",
    description: "사무실 5평 소자본 창업으로 시작하는 방문요양센터의 현실적인 수익과 주간보호·요양원 확장 퍼널 전략, 그리고 100명 이상 규모화의 비결을 공개합니다.",
    keywords: "방문요양5평, 방문요양소자본창업, 방문요양수익구조, 주간보호연계, 굿케어, 천천박사",
    summary: "방문요양 5평 소자본 창업의 한계와 주간보호·요양원으로 확장하는 성공 로드맵을 상세히 알려드립니다.",
    readTime: "5분"
  }
];

export interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
}

export const DEFAULT_METADATA: PageMetadata = {
  title: "굿케어 주간보호센터 요양원 창업 가이드 | 일생일대 30분 무료 컨설팅 및 창업칼럼",
  description: "\"복지도 사업이다!\" 방문요양, 주간보호, 요양원 등 장기요양기관은 정부에서 위탁받아 운영하는 복지사업입니다. 따라서, 일반적인 사업의 목표인 '수익 극대화'뿐 아니라 '수익 지키기'까지 잘! 해야 합니다. 1,400기관의 선택, 굿케어가 가장 잘하는 것! 장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.",
  keywords: "주간보호센터창업, 어르신유치원창업, 노인복지센터창업, 데이케어센터창업, 노인주간보호센터, 노인복지시설창업, 굿케어",
  canonicalUrl: "https://goodcarestart.com/",
  ogTitle: "굿케어 주간보호센터 요양원 창업 가이드 | 일생일대 30분 무료 컨설팅 및 창업칼럼",
  ogDescription: "\"복지도 사업이다!\" 방문요양, 주간보호, 요양원 등 장기요양기관은 정부에서 위탁받아 운영하는 복지사업입니다. 따라서, 일반적인 사업의 목표인 '수익 극대화'뿐 아니라 '수익 지키기'까지 잘! 해야 합니다. 1,400기관의 선택, 굿케어가 가장 잘하는 것! 장기요양기관 수익 극대화, 또 그걸 지키는 것입니다.",
  ogImage: "https://goodcarestart.com/images/로고1.png",
  ogUrl: "https://goodcarestart.com/"
};

export function getColumnByIdOrSlug(idOrSlug: string): ColumnMeta | undefined {
  const clean = idOrSlug.trim();
  return COLUMNS_DATA.find(
    (c) => c.slug === clean || c.id === clean || c.aliases.includes(clean)
  );
}

export function getPageMetadata(pathname: string, search = ""): PageMetadata {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const origin = "https://goodcarestart.com";
  const defaultOgImage = `${origin}/images/로고1.png`;

  // Check consulting page
  if (cleanPath === "/consulting") {
    return {
      title: "30분 무료 창업 컨설팅 설문지 신청 | 굿케어 주간보호센터·요양원 1:1 맞춤 진단",
      description: "1,400여 개 장기요양기관 성공 사례를 보유한 굿케어 대표 천천박사의 일생일대 30분 무료 컨설팅 설문 신청 페이지입니다.",
      keywords: "장기요양기관 무료컨설팅, 주간보호센터 창업상담, 요양원 창업진단, 굿케어 설문지, 굿케어 천천박사",
      canonicalUrl: `${origin}/consulting`,
      ogTitle: "30분 무료 창업 컨설팅 설문지 신청 | 굿케어",
      ogDescription: "1,400여 개 장기요양기관 성공 사례를 보유한 굿케어 대표 천천박사의 일생일대 30분 무료 컨설팅 설문 신청 페이지입니다.",
      ogImage: defaultOgImage,
      ogUrl: `${origin}/consulting`
    };
  }

  // Check columns list page
  if (cleanPath === "/columns") {
    return {
      title: "창업 가이드 칼럼 전체보기 (총 15편) | 굿케어 주간보호·요양원·방문요양",
      description: "주간보호센터, 요양원, 방문요양 창업 인허가 실전 가이드, 노유자시설 용도변경, 무경력자 정원 마감 비법 칼럼 15편을 제공합니다.",
      keywords: "주간보호센터창업, 요양원창업, 방문요양창업, 창업칼럼, 장기요양가이드, 굿케어",
      canonicalUrl: `${origin}/columns`,
      ogTitle: "창업 가이드 칼럼 전체보기 (총 15편) | 굿케어",
      ogDescription: "주간보호센터, 요양원, 방문요양 창업 인허가 실전 가이드, 노유자시설 용도변경, 무경력자 정원 마감 비법 칼럼 15편을 제공합니다.",
      ogImage: defaultOgImage,
      ogUrl: `${origin}/columns`
    };
  }

  // Check column detail page by URL path (e.g. /column/1, /column/step1)
  const columnMatch = cleanPath.match(/^\/column\/(.+)$/);
  if (columnMatch) {
    const slug = columnMatch[1];
    const col = getColumnByIdOrSlug(slug);
    if (col) {
      return {
        title: col.pageTitle,
        description: col.description,
        keywords: col.keywords,
        canonicalUrl: `${origin}${col.path}`,
        ogTitle: col.pageTitle,
        ogDescription: col.description,
        ogImage: defaultOgImage,
        ogUrl: `${origin}${col.path}`
      };
    }
  }

  // Query parameter fallback (?step=step1)
  if (search) {
    const params = new URLSearchParams(search);
    const stepParam = params.get("step");
    if (stepParam) {
      const col = getColumnByIdOrSlug(stepParam);
      if (col) {
        return {
          title: col.pageTitle,
          description: col.description,
          keywords: col.keywords,
          canonicalUrl: `${origin}${col.path}`,
          ogTitle: col.pageTitle,
          ogDescription: col.description,
          ogImage: defaultOgImage,
          ogUrl: `${origin}${col.path}`
        };
      }
    }
  }

  return DEFAULT_METADATA;
}

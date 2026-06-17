import { ReactNode, useState } from "react";

const logoSources = [
  "/images/로고1.png",
  "/images/로고.jpg",
  "/images/logo.svg",
  "/images/logo.png",
  "/images/로고.png",
  "/images/logo.jpg",
  "/logo.png"
];

export function Logo({ className = "w-10 h-10", containerClassName = "" }: { className?: string; containerClassName?: string }) {
  const [logoIndex, setLogoIndex] = useState(0);

  let element;
  if (logoIndex < logoSources.length) {
    element = (
      <img
        src={logoSources[logoIndex]}
        alt="굿케어 로고"
        onError={() => setLogoIndex(prev => prev + 1)}
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    );
  } else {
    element = (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fallbackGoodCareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#60a5fa" />
            <stop offset="60%" stop-color="#2563eb" />
            <stop offset="100%" stop-color="#1d4ed8" />
          </linearGradient>
          <linearGradient id="fallbackLeafGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#34d399" />
            <stop offset="100%" stop-color="#059669" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="none" stroke="#e2e8f0" stroke-width="2" />
        <g transform="translate(0, -2)">
          <path d="M50 35 C41 22, 22 25, 22 44 C22 62, 50 78, 50 78 C50 78, 78 62, 78 44 C78 25, 59 22, 50 35 Z" fill="url(#fallbackGoodCareGrad)" opacity="0.95" />
          <path d="M34 52 C34 43, 44 38, 50 45 C56 38, 66 43, 66 52 C66 61, 50 71, 50 71 C50 71, 34 61, 34 52 Z" fill="#ffffff" />
          <path d="M50 49 C46 44, 39 45, 39 52 C39 59, 50 66, 50 66 C50 66, 61 59, 61 52 C61 45, 54 44, 50 49 Z" fill="#3b82f6" />
          <path d="M49 32 C50 25, 56 20, 62 19 C61 24, 57 29, 52 31 C51 32, 49 32, 49 32 Z" fill="url(#fallbackLeafGrad)" />
          <path d="M50 33 C45 28, 43 21, 44 15 C49 17, 52 23, 52 29 C52 31, 50 33, 50 33 Z" fill="url(#fallbackLeafGrad)" opacity="0.85" />
        </g>
      </svg>
    );
  }

  return (
    <div className={`${className} ${containerClassName} flex items-center justify-center shrink-0 overflow-hidden`}>
      {element}
    </div>
  );
}

// 형광펜 스타일 하이라이트
export function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="font-bold text-[#e53e3e] shadow-[inset_0_-10px_0_#fef08a] px-1 rounded-sm">
      {children}
    </span>
  );
}

// 본문 인용구 스타일
export function Quote({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`my-6 font-bold bg-[#f8fafc] p-5 border-l-4 border-[#3182ce] text-[19px] leading-relaxed text-gray-800 rounded-r-md ${className}`}>
      {children}
    </div>
  );
}

// 주의/경고용 우측 인용구 스타일
export function WarningQuote({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 font-bold bg-[#fff5f5] p-5 border-l-4 border-[#e53e3e] text-[19px] leading-relaxed text-[#c53030] rounded-r-md">
      {children}
    </div>
  );
}

// 노란색 마인드체크 박스 스타일
export function InfoBox({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="my-6 bg-[#fffbeb] p-5 border border-[#fde68a] text-[19px] leading-relaxed text-[#92400e] rounded-md">
      {title && <h4 className="font-bold mb-3 text-[#b45309]">{title}</h4>}
      {children}
    </div>
  );
}

// 이미지 컴포넌트 (우측 마우스 방지 및 엑박 방지 대비)
export function ColumnImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <div className="my-6 select-none pointer-events-none w-full">
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className="w-full h-auto rounded-lg shadow-sm max-h-[300px] object-cover transition-transform duration-300 hover:scale-[1.02]"
      />
      {caption && (
        <p className="text-center text-sm text-[#718096] mt-2 font-sans font-medium">
          {caption}
        </p>
      )}
    </div>
  );
}

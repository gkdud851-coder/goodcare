import { ReactNode, useState } from "react";
import { HeartHandshake } from "lucide-react";

const logoSources = [
  "/images/logo.png",
  "/images/로고.png",
  "/images/logo.jpg",
  "/images/logo.svg",
  "/logo.png"
];

export function Logo({ className = "w-6 h-6", containerClassName = "bg-rose-500 p-2 rounded-full text-white shadow-md flex items-center justify-center shrink-0" }: { className?: string; containerClassName?: string }) {
  const [logoIndex, setLogoIndex] = useState(0);

  if (logoIndex < logoSources.length) {
    return (
      <img
        src={logoSources[logoIndex]}
        alt="굿케어 로고"
        onError={() => setLogoIndex(prev => prev + 1)}
        className={`${className} object-contain rounded-full`}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className={containerClassName}>
      <HeartHandshake className={className} />
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

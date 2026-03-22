import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  const textColor = light ? "#F5F2EB" : "#2C2A26";
  const barColor = light ? "#F5F2EB" : "#00A8B5";
  const barSecondaryColor = light ? "rgba(245, 242, 235, 0.6)" : "#007A8B";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col items-end">
        <span 
          className="text-2xl md:text-3xl font-bold tracking-tighter leading-none"
          style={{ color: textColor }}
        >
          מזרחי
        </span>
        <span 
          className="text-[9px] md:text-[10px] font-medium tracking-tight leading-none mt-1"
          style={{ color: textColor, opacity: 0.8 }}
        >
          נציגויות ייבוא ושיווק
        </span>
      </div>
      <div className="flex gap-1 items-end">
        <div className="w-1.5 md:w-2 h-8 md:h-10 rounded-sm opacity-40" style={{ backgroundColor: barSecondaryColor }}></div>
        <div className="w-1.5 md:w-2 h-8 md:h-10 rounded-sm opacity-70" style={{ backgroundColor: barSecondaryColor }}></div>
        <div className="w-1.5 md:w-2 h-8 md:h-10 rounded-sm rounded-tr-lg md:rounded-tr-xl" style={{ backgroundColor: barColor }}></div>
      </div>
    </div>
  );
};

export default Logo;

import React from "react";

export default function MarqueeBanner() {
  const text = "ALL NEW EBOOK SHOP NOW";

  // Shared styles for the marquee rows
  const rowStyles = "flex whitespace-nowrap min-w-full shrink-0 items-center justify-around animate-scroll hover:[animation-play-state:paused]";

  return (
    <>
      {/* Injecting the keyframes via a style tag so it works in one file */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      <div className="relative flex overflow-hidden bg-[#3E7D72] py-5 border-y border-white/20">
        <div className={rowStyles}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-lg font-black tracking-[0.2em] text-white uppercase italic">
                {text}
              </span>
              {/* Modern separator dot */}
              <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>
          ))}
        </div>

        {/* Duplicate row for the infinite loop effect */}
        <div className={rowStyles} aria-hidden="true">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-lg font-black tracking-[0.2em] text-white uppercase italic">
                {text}
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
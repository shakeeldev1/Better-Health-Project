import React from "react";

export default function MarqueeBanner() {
  const items = [
    "Become athletic",
    "Stupidly simple meal plans",
    "Correct nutrient deficiencies",
    "Lower blood pressure",
    "Improve cholesterol",
    "Better hormone balance",
    "Less aches and pains",
    "Stronger confidence",
    "Improve gut health",
    "Better bone density",
    "Reduced inflammation",
    "More stable blood sugars",
    "Increase energy",
    "Improved sleep quality",
    "Reduced cravings",
  ];

  // Shared styles for the marquee rows
  // We use 'gap-0' and 'px-0' to ensure we control spacing manually via the text margins
  const rowStyles = "flex whitespace-nowrap shrink-0 items-center animate-scroll hover:[animation-play-state:paused]";

  return (
    <>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          /* Adjusted time to 60s for a smoother, readable speed with more text */
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <div className="relative flex overflow-hidden bg-[#3E7D72] py-5 border-y border-white/20">
        {/* First Set */}
        <div className={rowStyles}>
          {items.map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-10 text-lg font-black tracking-[0.1em] text-white uppercase italic">
                {text}
              </span>
              {/* Modern separator dot */}
              <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          ))}
        </div>

        {/* Second Set (Duplicate for seamless looping) */}
        <div className={rowStyles} aria-hidden="true">
          {items.map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-10 text-lg font-black tracking-[0.1em] text-white uppercase italic">
                {text}
              </span>
              <div className="h-2 w-2 rounded-full bg-white/40" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
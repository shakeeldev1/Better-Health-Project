import React from "react";
import { Flame, Utensils, Pill, Heart, BarChart2, Scale, Bone, Leaf, Apple, Zap, Moon, Target } from "lucide-react";

export default function MarqueeBanner() {
  const items = [
    { icon: Flame, text: "Become athletic" },
    { icon: Utensils, text: "Stupidly simple meal plans" },
    { icon: Pill, text: "Correct nutrient deficiencies" },
    { icon: Heart, text: "Lower blood pressure" },
    { icon: BarChart2, text: "Improve cholesterol" },
    { icon: Scale, text: "Better hormone balance" },
    { icon: Bone, text: "Less aches and pains" },
    { icon: Leaf, text: "Stronger confidence" },
    { icon: Apple, text: "Improve gut health" },
    { icon: Flame, text: "Better bone density" },
    { icon: Leaf, text: "Reduced inflammation" },
    { icon: Apple, text: "More stable blood sugars" },
    { icon: Zap, text: "Increase energy" },
    { icon: Moon, text: "Improved sleep quality" },
    { icon: Target, text: "Reduced cravings" },
  ];

  // Shared styles for the marquee rows
  const rowStyles = "flex whitespace-nowrap shrink-0 items-center animate-scroll hover:[animation-play-state:paused]";

  return (
    <>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <div className="relative flex overflow-hidden bg-gradient-to-r from-[#3E7D72] via-[#2f5f56] to-[#3E7D72] py-6 border-y border-white/20">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#3E7D72]/20 blur-3xl" />
        
        {/* First Set */}
        <div className={rowStyles}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-2 mx-8">
                  <Icon size={20} className="text-amber-400" strokeWidth={2.5} />
                  <span className="text-lg md:text-xl font-black tracking-[0.1em] text-white uppercase italic drop-shadow-lg">
                    {item.text}
                  </span>
                </div>
                {/* Star separator */}
                <div className="h-2 w-2 bg-amber-400 rounded-full shadow-lg" />
              </div>
            );
          })}
        </div>

        {/* Second Set (Duplicate for seamless looping) */}
        <div className={rowStyles} aria-hidden="true">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-2 mx-8">
                  <Icon size={20} className="text-amber-400" strokeWidth={2.5} />
                  <span className="text-lg md:text-xl font-black tracking-[0.1em] text-white uppercase italic drop-shadow-lg">
                    {item.text}
                  </span>
                </div>
                <div className="h-2 w-2 bg-amber-400 rounded-full shadow-lg" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import { Salad, ClipboardList, Presentation } from "lucide-react";

const features = [
{
icon: Salad,
title: "Eat Real Food You Actually Enjoy",
description:
"No cutting out dessert, snacks, or your favourite meals… because you won’t stick to that",
image: "/fo.JPG",
},
{
icon: ClipboardList,
title: "Done-For-You Meal Plans",
description:
"No guessing, overwhelm, or confusion — just follow the plan and get results",
image: "/sa.jpg",
},
{
icon: Presentation,
title: "Simple Training Plans",
description:
"No crazy HIIT routines or long workouts — smart training that supports fat loss",
image: "/si.jpg",
},
];

export default function FatLossSection() {
return ( <section className="relative w-full py-12 px-6 overflow-hidden bg-gradient-to-b from-[#f7fbfa] via-white to-[#eef5f3]">

```
  {/* Soft background glow */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3E7D72]/10 blur-[120px] rounded-full pointer-events-none" />

  <div className="relative max-w-6xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
      <span className="text-[#3E7D72]">
        FINALLY! A FAT LOSS SYSTEM
      </span>
      <br />
      BUILT FOR HECTIC PARENTS!
    </h2>

    <div className="w-24 h-1 bg-[#3E7D72] mx-auto mt-4 rounded-full" />

    {/* Feature grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mt-20 place-items-center">
      {features.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="group relative w-[230px] h-[230px] md:w-[260px] md:h-[260px] rounded-full overflow-hidden flex flex-col items-center justify-center text-center px-6 text-white shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Default gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3E7D72] to-[#2f5f56] transition-opacity duration-500 group-hover:opacity-0" />

            {/* Hover background image */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4 backdrop-blur-sm">
                <Icon size={28} />
              </div>

              <h3 className="font-semibold text-sm md:text-base mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>


);
}

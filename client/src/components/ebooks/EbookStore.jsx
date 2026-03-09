import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, CheckCircle2, Star } from "lucide-react";

const EbookCard = ({ title, price, tag, color, bgImage }) => (
  <div className="group relative overflow-hidden rounded-2xl h-[200px] shadow-sm hover:shadow-2xl transition-all  duration-500 flex flex-col justify-end p-6 border border-slate-100">
    {/* 1. BACKGROUND IMAGE LAYER */}
    <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
      <img src={bgImage} alt={title} className="w-full h-full  object-cover" />
      {/* 2. OVERLAY: Bottom-heavy gradient ensures text is readable regardless of the image */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-99 group-hover:opacity-90 transition-opacity" />
    </div>

    {/* 3. CONTENT LAYER */}
    <div className="relative z-10 space-y-2">
      <div
        className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 ${color} backdrop-blur-md bg-opacity-90`}
      >
        {tag}
      </div>

      <h3 className="text-2xl font-bold text-white leading-tight italic drop-shadow-md">
        {title}
      </h3>

      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-white">$</span>
        <span className="text-3xl font-black text-white">{price}</span>
      </div>

      <Link
        to="/booking"
        state={{ item: { title, price, bgImage, tag, type: "ebook" } }}
        className="mt-4 w-full py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-[#3E7D72] hover:text-white transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2"
      >
        <ShoppingCart size={18} /> Buy Now
      </Link>
    </div>
  </div>
);

export default function EbookStore() {
  const ebooks = [
    {
      title: "Breakfast Rituals",
      price: "24.99",
      tag: "Recipes",
      color: "bg-orange-100 text-orange-600",
      bgImage: "https://miro.medium.com/1*o39Hxqwt94IP7Nr9NwKlUQ.jpeg",
    },
    {
      title: "Lunch & Dinner",
      price: "24.99",
      tag: "Recipes",
      color: "bg-orange-100 text-orange-600",
      bgImage:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Snacks & Desserts",
      price: "24.99",
      tag: "Recipes",
      color: "bg-orange-100 text-orange-600",
      bgImage:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "The Cortisol Reset",
      price: "19.99",
      tag: "Protocol",
      color: "bg-blue-100 text-blue-600",
      bgImage:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Deep Sleep Method",
      price: "19.99",
      tag: "Protocol",
      color: "bg-blue-100 text-blue-600",
      bgImage:
        "https://www.cspi.org/sites/default/files/styles/700x530/public/2022-02/terovesalainen_AdobeStock_exerciseApp_352235085_hero_700x530.jpg.webp?itok=pauD9qqF",
    },
    {
      title: "Lifestyle Protocols",
      price: "24.99",
      tag: "Lifestyle",
      color: "bg-purple-100 text-purple-600",
      bgImage:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div id="shop" className="bg-slate-50 min-h-screen pt-8 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter">
            THE SHOP<span className="text-[#3E7D72]">.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium">
            Expertly crafted protocols designed to optimize your family's
            health.
          </p>
        </div>

        {/* FEATURED BUNDLE (The Superstack) */}
        <div className="relative mb-12">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-yellow-400 text-black px-8 py-2 rounded-full font-black text-sm tracking-tighter shadow-xl animate-bounce">
            MOST POPULAR - SAVE $40.95
          </div>

          <section className="relative group overflow-hidden rounded-[2.5rem] text-white min-h-[400px] flex items-center shadow-2xl">
            {/* Main Bundle Background */}
            <div className="absolute  inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
                alt="Healthy lifestyle"
                className="w-full h-full  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-[#3E7D72]/30" />
            </div>

            <div className="relative z-10 p-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-12">
              <div className="max-w-xl space-y-6">
                <div className="flex items-center gap-2 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                  <span className="text-white/90 font-bold ml-2 tracking-wide">
                    2,000+ HAPPY FAMILIES
                  </span>
                </div>
                <h2 className="text-5xl md:text-5xl font-black italic leading-[0.85] tracking-tighter drop-shadow-2xl">
                  THE ULTIMATE <br /> FAMILY <br /> COLLECTION
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold pt-4">
                  {[
                    "6 Best-Selling Ebooks",
                    "Lifetime Access",
                    "Mobile-Friendly PDF",
                    "Instant Download",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        className="text-[#3E7D72] bg-white rounded-full"
                        size={20}
                      />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bundle Purchase Card */}
              <div className="w-full md:w-80 relative group/card overflow-hidden rounded-3xl px-5 py-2 border border-white/20 text-center shadow-2xl backdrop-blur-sm bg-white/5">
                <p className="text-white/60 line-through text-xl font-bold">
                  $139.95
                </p>
                <div className="text-5xl font-black text-white mb-6 tracking-tighter">
                  $99
                </div>
                <Link
                  to="/booking"
                  state={{
                    item: {
                      title: "The Ultimate Family Collection",
                      price: "99",
                      bgImage:
                        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
                      tag: "Bundle",
                      type: "ebook",
                    },
                  }}
                  className="w-full bg-white text-[#3E7D72] py-2 rounded-2xl font-black text-xl hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={24} /> BUY NOW
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* INDIVIDUAL LIST */}
        <div className="mb-12 flex items-center gap-4">
          <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">
            Individual Guides
          </h4>
          <div className="h-[1px] w-full bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((book, index) => (
            <EbookCard key={index} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}

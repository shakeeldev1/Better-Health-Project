import React from "react";

const AuthorityBrands = () => {
  const images = [
    "/client-1.jpeg",
    "/client-2.jpeg",
    "/client-3.jpeg",
    "/client-4.jpeg",
    "/client-5.jpeg",
    "/client-6.jpeg",
    "/client-7.jpeg",
  ];

  const brands = images.map((path) => ({ src: path, alt: "Transformation" }));
  const trackItems = [...brands, ...brands];

  return (
    <section id="transformations" className="bg-zinc-50  overflow-hidden">
      <style>{`
        @keyframes transformations-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .transformations-track {
          display: flex;
          width: max-content;
          /* --- SPEED CONTROL --- */
          /* 120s = Slower, 180s = Very Slow, 40s = Fast */
          animation: transformations-scroll 120s linear infinite; 
        }
        .transformations-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-slate-900  tracking-tighter">
            Real <span className="text-[#3E7D72]">Transformations</span>
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            Direct results from our training programs
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-50 to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="transformations-track gap-0 py-4">
              {trackItems.map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="h-64 w-48 sm:h-72 sm:w-56 overflow-hidden rounded bg-slate-200 shadow-lg border border-slate-100 cursor-pointer transition-transform duration-300 hover:scale-105">
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80`;
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBrands;

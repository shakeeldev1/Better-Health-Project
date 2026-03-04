import React from 'react';

const AuthorityBrands = () => {
  const brands = [
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-4-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-1-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-2-1.webp", alt: "Transformation" },
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-5-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-6-1.webp", alt: "Transformation" },
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-7.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-4-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/03/130894952-opt.jpg", alt: "Transformation" },
    { src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTu84kWBYb0LETZz1hoGz8bJmvg4OY8kgzDSv87cjaKxm4adsf1", alt: "Transformation" },
  ];

  const trackItems = [...brands, ...brands];

  return (
    <section id="transformations" className="bg-white py-8 sm:py-10">
      <style>{`
        @keyframes transformations-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .transformations-track {
          animation: transformations-scroll 36s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wider">
            Real <span className="text-[#3E7D72]">Transformations</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Inspiring results from real clients who stayed consistent.</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">

          <div className="transformations-track flex w-max items-center hover:[animation-play-state:paused]">
            {trackItems.map((brand, index) => (
              <div key={`${brand.src}-${index}`} className="mr-3 sm:mr-4">
                <div className="flex items-center justify-center h-32 sm:h-36 md:h-40 w-40 sm:w-44 md:w-48 rounded-xl bg-slate-50 border border-slate-100">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="h-full w-full object-cover rounded-lg shadow-md"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBrands;

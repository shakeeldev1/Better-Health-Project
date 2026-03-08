import React from 'react';

const AuthorityBrands = () => {
  const PROXY_URL = "https://images.weserv.nl/?url=";
  const DOMAIN = "www.ebtonline.au";

  const images = [
    "/assets/transform-new-1-S2bxYt_g.jpg", "/assets/transform-new-2-BPpPfpaM.jpg",
    "/assets/transform-new-3-Dz6e8Fx0.jpg", "/assets/transform-new-4-CSVGxPvX.jpg",
    "/assets/transform-new-5-ChGQphRY.jpg", "/assets/transform-new-6-DlWqjUFK.jpg",
    "/assets/transform-new-8-CwL7z6N6.jpg", "/assets/transform-new-9-Dz3bQEyi.jpg",
    "/assets/transform-new-10-CemrKQf-.jpg", "/assets/transform-new-11-BLu4tmdN.jpg",
    "/assets/transform-new-12-Cngb6HMJ.jpg", "/assets/transform-new-13-CBsTu_rS.jpg",
    "/assets/transform-new-14-BFncG6f2.jpg", "/assets/transform-new-15-CbbB0e11.jpg",
    "/assets/transform-new-16-DL9B38c1.jpg", "/assets/transform-new-17-D5ObIxoW.jpg",
    "/assets/transform-new-18-CSD05YSL.jpg", "/assets/transform-new-19-r1XsiJlo.jpg",
    "/assets/transform-new-20-DJv9BBnQ.jpg", "/assets/ebt-result-1-CkshN5DZ.webp",
    "/assets/ebt-result-2-DF73r8Pg.webp", "/assets/ebt-result-3-Cp9mG7nW.webp",
    "/assets/ebt-result-4-Dva6zU8x.webp", "/assets/ebt-result-5-CFsm4M4E.webp",
    "/assets/ebt-result-6-gNra6DNr.webp", "/assets/ebt-result-8-BKIAQ9bv.jpg",
    "/assets/ebt-result-9-CdOYvrRD.jpg", "/assets/ebt-result-10-DuoCcecb.jpg",
    "/assets/ebt-result-11-BPVRAevH.jpg", "/assets/ebt-result-12-Br1c6Ngi.jpg",
    "/assets/ebt-result-13-cevOL9sj.jpg", "/assets/ebt-result-14-FMDDKge1.jpg",
    "/assets/ebt-result-15-BtQ0tZt3.jpg", "/assets/ebt-result-16-vwOrBlke.jpg",
    "/assets/ebt-result-17-Bn3jSC7e.jpg", "/assets/ebt-result-18-CvQNOBOi.jpg",
    "/assets/ebt-result-19-DtEI2FVK.jpg", "/assets/ebt-result-20-xAI0GkBX.jpg",
    "/assets/ebt-result-21-B7nO7owz.jpg", "/assets/ebt-result-22-zni3WbU3.jpg",
    "/assets/ebt-result-23-D1huRJXn.jpg", "/assets/ebt-result-24-B2Rv5cGj.jpg",
    "/assets/ebt-result-25-k3KOIXwS.jpg", "/assets/ebt-result-26-C6ENVtzJ.jpg",
    "/assets/ebt-result-27-COskbOy9.jpg", "/assets/ebt-result-28-D_cuYK6S.jpg",
    "/assets/ebt-result-29-vgP_i7pu.jpg", "/assets/ebt-result-30-Cno0DakY.jpg",
    "/assets/ebt-result-31-CtR-tdna.jpg", "/assets/ebt-result-32-DYT9Ax3H.jpg",
    "/assets/ebt-result-33-7nkX4XM8.jpg", "/assets/ebt-result-34-I72epWY0.jpg",
    "/assets/ebt-result-35-BH2QnbVI.jpg", "/assets/ebt-result-36-BzgB9L2H.jpg",
    "/assets/ebt-result-37-Dh5GOsjQ.jpg", "/assets/ebt-result-38-DiEsWllZ.jpg",
    "/assets/ebt-result-39-LXOI6ykA.jpg", "/assets/ebt-result-40-C-XPz1oK.jpg",
    "/assets/ebt-result-41-blEHKHb5.jpg", "/assets/ebt-result-42-D1eY7Pnp.jpg",
    "/assets/ebt-result-43-BLOZpWyY.jpg"
  ];

  const brands = images.map(path => ({ src: `${DOMAIN}${path}`, alt: "Transformation" }));
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
          <p className="text-slate-500 font-medium mt-1">Direct results from our training programs</p>
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
                      src={`${PROXY_URL}${brand.src}&w=400&fit=cover`} 
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
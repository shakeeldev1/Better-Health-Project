import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import resultImg from "../../public/hero.jpeg";

const EBTTransformations = () => {
  // Proxy helps bypass CORS issues so images show up in development/production
  const PROXY = "https://images.weserv.nl/?url=";
  const DOMAIN = "www.ebtonline.au";

  const imagePaths = [
    { path: "/assets/transform-new-1-S2bxYt_g.jpg", weight: "-12 kg" },
    { path: "/assets/transform-new-2-BPpPfpaM.jpg", weight: "-15 kg" },
    { path: "/assets/transform-new-3-Dz6e8Fx0.jpg", weight: "-18 kg" },
    { path: "/assets/transform-new-4-CSVGxPvX.jpg", weight: "-10 kg" },
    { path: "/assets/transform-new-5-ChGQphRY.jpg", weight: "-14 kg" },
    { path: "/assets/transform-new-6-DlWqjUFK.jpg", weight: "-20 kg" },
    { path: "/assets/transform-new-8-CwL7z6N6.jpg", weight: "-11 kg" },
    { path: "/assets/transform-new-9-Dz3bQEyi.jpg", weight: "-16 kg" },
    { path: "/assets/transform-new-10-CemrKQf-.jpg", weight: "-13 kg" },
    { path: "/assets/transform-new-11-BLu4tmdN.jpg", weight: "-9 kg" },
    { path: "/assets/transform-new-12-Cngb6HMJ.jpg", weight: "-17 kg" },
    { path: "/assets/transform-new-13-CBsTu_rS.jpg", weight: "-21 kg" },
    { path: "/assets/transform-new-14-BFncG6f2.jpg", weight: "-8 kg" },
    { path: "/assets/transform-new-15-CbbB0e11.jpg", weight: "-19 kg" },
    { path: "/assets/transform-new-16-DL9B38c1.jpg", weight: "-12 kg" },
    { path: "/assets/transform-new-17-D5ObIxoW.jpg", weight: "-14 kg" },
    { path: "/assets/transform-new-18-CSD05YSL.jpg", weight: "-10 kg" },
    { path: "/assets/transform-new-19-r1XsiJlo.jpg", weight: "-15 kg" },
    { path: "/assets/transform-new-20-DJv9BBnQ.jpg", weight: "-11 kg" },
    { path: "/assets/ebt-result-1-CkshN5DZ.webp", weight: "-16 kg" },
    { path: "/assets/ebt-result-2-DF73r8Pg.webp", weight: "-13 kg" },
    { path: "/assets/ebt-result-3-Cp9mG7nW.webp", weight: "-18 kg" },
    { path: "/assets/ebt-result-4-Dva6zU8x.webp", weight: "-7 kg" },
    { path: "/assets/ebt-result-5-CFsm4M4E.webp", weight: "-22 kg" }
  ];

  return (
    <section className="bg-gray-100 py-16 md:py-12 font-sans text-gray-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        
        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src={resultImg}
              alt="Better Health Project Transformation" 
              className="w-full h-100 md:h-100 lg:h-100 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl inline-block">
                <p className="text-gray-900 font-bold text-lg md:text-xl">
                  Real People. Real Results. <span className="text-[#3E7D72]">Real Transformation.</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#3E7D72] text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            The Wall of Results
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-gray-900 font-sans leading-tight tracking-tight">
            Client <span className="text-[#3E7D72]">Transformations</span>
          </h2>
        </div>

        {/* 24-Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {imagePaths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.05 }}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border-4 border-white"
            >
              <img 
                src={`${PROXY}${DOMAIN}${item.path}`} 
                alt={`Result ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Weight loss label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 pt-12">
                <div className="bg-[#3E7D72] text-white text-center py-1.5 px-3 rounded-full inline-block font-bold text-sm shadow-lg">
                  <span className="mr-1">💪</span>
                  {item.weight} Lost
                </div>
              </div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default EBTTransformations;
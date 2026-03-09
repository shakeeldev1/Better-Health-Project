import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import resultImg from "../../public/hero.jpeg";

const EBTTransformations = () => {
  // Proxy helps bypass CORS issues so images show up in development/production
  const imagePaths = [
    { path: "/client-1.jpeg", weight: "-12 kg" },
    { path: "/client-2.jpeg", weight: "-15 kg" },
    { path: "/client-3.jpeg", weight: "-18 kg" },
    { path: "/client-4.jpeg", weight: "-10 kg" },
    { path: "/client-5.jpeg", weight: "-14 kg" },
    { path: "/client-6.jpeg", weight: "-20 kg" },
    { path: "/client-7.jpeg", weight: "-11 kg" },
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
                  Real People. Real Results.{" "}
                  <span className="text-[#3E7D72]">Real Transformation.</span>
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
                src={item.path}
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

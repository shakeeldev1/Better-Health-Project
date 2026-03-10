import React from "react";
import { motion } from "framer-motion";

const EBTTransformations = () => {
  const transformations = [
    {
      name: "Jackie",
      path: "/client-1.jpeg",
      description:
        "She lost <span class='font-bold text-slate-900'>14kg</span> after over <span class='font-bold text-slate-900'>10 years</span> of yo-yo dieting",
    },
    {
      name: "Sarah",
      path: "/client-2.jpeg",
      description:
        "who lost <span class='font-bold text-slate-900'>8kg</span> in her first <span class='font-bold text-slate-900'>8 weeks</span> after suffering for <span class='font-bold text-slate-900'>5 years</span> with insulin resistance",
    },
    {
      name: "Mel",
      path: "/client-3.jpeg",
      description:
        "who lost <span class='font-bold text-slate-900'>16kg</span> and now has <span class='font-bold text-slate-900'>energy</span> for her <span class='font-bold text-slate-900'>3 kids</span>",
    },
    {
      name: "Steph",
      path: "/client-4.jpeg",
      description:
        "who lost <span class='font-bold text-slate-900'>16kg</span> whilst having <span class='font-bold text-slate-900'>3 young kids</span> at home",
    },
    {
      name: "Emma",
      path: "/client-5.jpeg",
      description:
        "Regained her <span class='font-bold text-slate-900'>confidence</span> and lost <span class='font-bold text-slate-900'>12kg</span> in 12 weeks",
    },
    {
      name: "Rachel",
      path: "/client-6.jpeg",
      description:
        "achieved <span class='font-bold text-slate-900'>20kg loss</span> and improved her <span class='font-bold text-slate-900'>vitality</span>",
    },
  ];

  return (
    <section className="relative bg-[#FAFBFD] py-20 md:py-32 font-sans text-gray-800 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
        
        {/* Subtle Radial Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#3E7D72 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Modern Premium Header Section */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="bg-[#3E7D72]/10 text-[#3E7D72] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full mb-8 block border border-[#3E7D72]/20 shadow-sm">
              Transformation Gallery
            </span>
            <h2 className="text-3xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.1]">
              REAL PEOPLE. REAL CHANGES. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7D72] to-[#00AEEF]">REAL LIFE.</span>
            </h2>
            <div className="w-20 h-2 bg-gradient-to-r from-[#3E7D72] to-[#00AEEF] mx-auto mt-10 rounded-full shadow-sm" />
          </motion.div>
        </div>

        {/* Transformations Grid with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group relative bg-white/70 backdrop-blur-2xl rounded-[2.5rem] flex flex-col items-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_50px_100px_-20px_rgba(62,125,114,0.3)] transition-all duration-500 border border-white/90 overflow-hidden pt-8 pb-6"
            >
              {/* Floating Dark Name Badge */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-black tracking-[0.25em] px-6 py-1.5 rounded-full shadow-2xl uppercase z-20 border border-white/10">
                {item.name}
              </div>

              {/* Image Container - Full Width Reach */}
              <div className="relative w-full aspect-square overflow-hidden mb-6 bg-slate-50 border-y border-slate-100/50">
                <img
                  src={item.path}
                  alt={`${item.name}'s Transformation`}
                  className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle Image Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 opacity-40" />
              </div>

              {/* Description Section with Refined Text */}
              <div className="w-full px-6">
                <p 
                  className="text-center text-[13px] md:text-[14px] leading-relaxed text-slate-700 font-semibold italic opacity-85 group-hover:opacity-100 transition-opacity"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-[#3E7D72]/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Professional Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 md:mt-40 text-center"
        >
          <div className="inline-flex flex-col items-center gap-8">
            <div className="bg-white/50 backdrop-blur-md px-12 py-8 rounded-[2.5rem] border border-white/80 shadow-xl relative group overflow-hidden cursor-default">
               <div className="absolute inset-0 bg-gradient-to-r from-[#3E7D72]/10 to-[#00AEEF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <p className="text-slate-900 font-black text-xl md:text-2xl tracking-wide relative z-10">
                 Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E7D72] to-[#00AEEF]">800+</span> success stories.
               </p>
               <p className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mt-3 relative z-10 opacity-70">
                 Start your transformation today
               </p>
            </div>
            
            {/* Elegant Loading-style Dots */}
            <div className="flex gap-3 opacity-20">
               {[0, 1, 2].map(i => (
                 <motion.div
                   key={i}
                   animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                   className="w-2 h-2 bg-[#3E7D72] rounded-full"
                 />
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EBTTransformations;

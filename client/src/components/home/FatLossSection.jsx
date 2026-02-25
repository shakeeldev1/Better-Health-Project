import { Salad, ClipboardList, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Salad,
    title: "Eat Real Food You Actually Enjoy",
    description:
      "No cutting out dessert, snacks, or your favourite meals… because you won't stick to that",
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
    icon: Dumbbell,
    title: "Simple Training Plans",
    description:
      "No crazy HIIT routines or long workouts — smart training that supports fat loss",
    image: "/si.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function FatLossSection() {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#3E7D72]/8 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#3E7D72]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#3E7D72]/10 text-[#3E7D72] text-xs md:text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            <span className="text-[#3E7D72]">
              FINALLY! A FAT LOSS SYSTEM
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            BUILT FOR HECTIC PARENTS!
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-[#3E7D72] mx-auto mt-5 md:mt-6 rounded-full" />
        </motion.div>

        {/* Feature grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative w-full h-full min-h-[280px] md:min-h-[320px] lg:min-h-[340px] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Default gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3E7D72] via-[#2f5f56] to-[#1f4a42] transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Hover background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm mb-5 md:mb-6 group-hover:bg-white/30 transition-colors">
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="font-bold text-lg md:text-xl mb-3 text-white leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-[280px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom gradient for hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>

                {/* Number indicator */}
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 bg-amber-500 text-white font-bold text-lg md:text-xl flex items-center justify-center rounded-full shadow-lg z-20">
                  {i + 1}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
            Start Your Transformation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

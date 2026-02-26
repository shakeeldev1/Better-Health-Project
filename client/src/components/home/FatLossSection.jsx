import { Salad, ClipboardList, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    image: "/plan1.jpeg",
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
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FatLossSection() {
  return (
    <section className="relative w-full py-10 md:py-14 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-slate-50 via-white to-teal-50/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-[#3E7D72]/10 blur-[120px] rounded-full pointer-events-none" />

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            <span className="text-[#3E7D72]">Finally! A Fat Loss System</span>
            <br className="hidden sm:block" />
            Built for Hectic Parents
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-[#3E7D72] mx-auto mt-5 md:mt-6 rounded-full" />
        </motion.div>

        {/* Feature grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} variants={itemVariants} className="group">
                <div className="relative h-[380px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-gray-100">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-end h-full p-6 md:p-8 pb-10 text-center text-white">
                    <div className="w-16 h-16 md:w-20 md:h-20 mb-4 flex items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 group-hover:bg-[#3E7D72]/80 group-hover:border-[#3E7D72]/50 transition-all duration-500">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/80 max-w-[280px] md:max-w-[300px]">{item.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm">
                        Learn more
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">{i + 1}</span>
                  </div>
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
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3E7D72] hover:bg-[#2f5f56] text-white font-bold py-2 px-5 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
            Start Your Transformation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
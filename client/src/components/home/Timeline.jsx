import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { homeTimelineData as timelineSteps, homeTimelineHeader as data } from '../../data/homeData';
import GlobalHeading from '../common/GlobalHeading';

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-20"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop SVG Snake Line */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none" style={{ height: '100%' }}>
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <motion.path
                d="M 25 5 C 85 5, 85 35, 50 35 C 15 35, 15 65, 75 65 C 135 65, 135 95, 50 95"
                fill="none"
                stroke="url(#timelineGradient)"
                strokeWidth="0.4"
                strokeDasharray="1 1"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0" />
                  <stop offset="20%" stopColor="#22C55E" stopOpacity="1" />
                  <stop offset="80%" stopColor="#22C55E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

          <div className="space-y-16 lg:space-y-0 relative">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              // Custom positions for desktop snake flow
              const desktopPositions = [
                "lg:justify-start lg:ml-[10%]",
                "lg:justify-end lg:mr-[10%]",
                "lg:justify-start lg:ml-[15%]",
                "lg:justify-end lg:mr-[5%]"
              ];

              return (
                <div key={index} className={`flex w-full ${desktopPositions[index] || (isEven ? 'lg:justify-start' : 'lg:justify-end')} lg:h-48 items-center relative`}>
                  {/* Mobile Dot */}
                  <div className="lg:hidden absolute left-[30px] w-4 h-4 rounded-full bg-white border-4 border-primary z-10 shadow-sm" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative w-full lg:w-[420px] group pl-16 lg:pl-0"
                  >
                    <div className="relative overflow-hidden flex items-start gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/20 transition-all duration-500">
                      {/* Glassmorphism Background Accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
                      
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0 z-10">
                        <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary transition-all duration-500 shadow-inner">
                          {React.cloneElement(step.icon, { 
                            size: 28, 
                            strokeWidth: 2,
                            className: "group-hover:text-white transition-colors duration-500"
                          })}
                        </div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-xl bg-primary text-white text-xs font-black flex items-center justify-center shadow-lg shadow-primary/30 z-20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 border-4 border-white">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 pt-1">
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mt-2 font-medium">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Connector Dot with Pulse */}
                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 z-30 ${isEven ? '-right-6' : '-left-6'}`}>
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                      <div className="relative w-full h-full bg-white border-4 border-primary rounded-full shadow-sm" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

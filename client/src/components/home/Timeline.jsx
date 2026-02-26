import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { homeTimelineData as timelineSteps, homeTimelineHeader as data } from '../../data/homeData';
import GlobalHeading from '../common/GlobalHeading';

const Timeline = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
  });

  return (
    <section ref={containerRef} className="py-10 md:py-12 lg:py-14 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-10 md:mb-12"
        />

        <div className="relative max-w-5xl mx-auto">
          {/* MOBILE VERTICAL TIMELINE */}
          <div className="lg:hidden relative">
            {/* Mobile timeline line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3E7D72] to-[#3E7D72]/30" />
            
            <div className="space-y-6 md:space-y-8">
              {timelineSteps.map((step, index) => {
                const IconComponent = step.icon;
                const renderIcon = () => {
                  const iconProps = { 
                      size: 20, 
                      className: "text-[#3E7D72]" 
                  };
                  return React.isValidElement(IconComponent) 
                      ? React.cloneElement(IconComponent, iconProps) 
                      : <IconComponent {...iconProps} />;
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex gap-4"
                  >
                    {/* Mobile Icon Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#3E7D72] shadow-lg flex items-center justify-center">
                        {renderIcon()}
                      </div>
                    </div>
                    
                    {/* Mobile Card */}
                    <div className="flex-1 bg-white p-4 md:p-5 rounded-2xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)] -mt-1">
                      <div className="flex gap-4 items-start">
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-sm leading-snug">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP SNAKE LINE */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 600" fill="none">
              <path
                d="M 180 10 C 850 10, 850 200, 500 200 C 150 200, 150 400, 820 400 C 1200 400, 1200 580, 500 580"
                stroke="#E2E8F0"
                strokeWidth="2"
              />
              <motion.path
                d="M 180 10 C 850 10, 850 200, 500 200 C 150 200, 150 400, 820 400 C 1200 400, 1200 580, 500 580"
                className="stroke-primary" 
                strokeWidth="3"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="hidden lg:block space-y-12 lg:space-y-16 relative">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              // Safe Icon Handling
              const IconComponent = step.icon;
              const renderIcon = () => {
                const iconProps = { 
                    size: 22, 
                    className: "text-primary group-hover:text-white transition-colors duration-300" 
                };
                return React.isValidElement(IconComponent) 
                    ? React.cloneElement(IconComponent, iconProps) 
                    : <IconComponent {...iconProps} />;
              };

              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center w-full ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full lg:w-[46%] group pl-14 lg:pl-0"
                  >
                    {/* Professional Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_2px_15px_rgba(0,0,0,0.02)] group-hover:border-primary/30 transition-all duration-500">
                      <div className="flex gap-5 items-center">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center transition-all duration-300 group-hover:bg-primary border border-primary/10">
                            {renderIcon()}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-slate-500 text-sm leading-snug">{step.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* --- RECREATED TECH HUB CIRCLE --- */}
                    <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-14 h-14 ${isEven ? '-right-[14.5%]' : '-left-[14.5%]'}`}>
                      
                      {/* 1. Rotating Outer Dashboard Ring */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
                      />
                      
                      {/* 2. Glassmorphism Background Ring */}
                      <div className="absolute w-8 h-8 bg-white/40 backdrop-blur-sm border border-slate-200 rounded-full shadow-inner" />

                      {/* 3. The "Living" Core */}
                      <div className="relative w-5 h-5 bg-white border-2 border-primary rounded-full z-10 flex items-center justify-center shadow-lg shadow-primary/20">
                        {/* Internal Breathing Light */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      </div>

                      {/* 4. Hover State Glow */}
                      <div className="absolute w-12 h-12 bg-primary/0 group-hover:bg-primary/10 rounded-full blur-xl transition-all duration-500" />
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
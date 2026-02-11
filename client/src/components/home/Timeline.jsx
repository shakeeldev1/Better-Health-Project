import React from 'react';
import { motion } from 'framer-motion';
import { homeTimelineData as timelineSteps, homeTimelineHeader as data } from '../../data/homeData';
import GlobalHeading from '../common/GlobalHeading';

const Timeline = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* SVG Snake Line (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <motion.path
                d="M 20 10 C 80 10, 80 40, 50 40 C 20 40, 20 70, 80 70"
                fill="none"
                stroke="url(#snakeGradient)"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "linear" }}
              />
              <defs>
                <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#22C55E" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#22C55E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#22C55E" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-0 relative">
            {timelineSteps.map((step, index) => {
              // Alignments for a tight snake flow
              const alignments = [
                "lg:justify-start lg:pl-0",      // Step 1: Left
                "lg:justify-end lg:pr-0",        // Step 2: Right
                "lg:justify-start lg:pl-12",     // Step 3: Mid-Left
                "lg:justify-end lg:pr-12"        // Step 4: Mid-Right
              ];

              return (
                <div key={index} className={`flex w-full ${alignments[index]} lg:h-32 items-center`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative w-full lg:w-[380px] group"
                  >
                    <div className="flex items-center gap-6 p-4 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-300">
                      {/* Step Number & Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                          {React.cloneElement(step.icon, { 
                            size: 24, 
                            strokeWidth: 2.5,
                            className: "transition-colors duration-300"
                          })}
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-primary/20 z-10 group-hover:scale-110 transition-transform">
                          {step.step}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-xs leading-relaxed mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Desktop Connector Dot */}
                    <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-primary rounded-full z-20 transition-transform duration-300 group-hover:scale-150 ${index % 2 === 0 ? '-right-4' : '-left-4'}`} />
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

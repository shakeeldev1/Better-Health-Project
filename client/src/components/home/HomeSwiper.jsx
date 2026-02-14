import React from 'react';
import { FaArrowRight  } from 'react-icons/fa';
import joimg from "../../../public/jo.jpg"

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
     

      {/* --- Hero Section --- */}
      <section className="relative px-8 pt-24 pb-24 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Dot Pattern Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <div className="relative">
            <div className="absolute -inset-4 bg-indigo-100 rounded-[2rem] -rotate-3 -z-10"></div>
            <img 
              src={joimg}
              alt="Health and Fitness" 
              className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-[#3E7D72]
] text-sm font-bold rounded-full tracking-wide uppercase">
              New: AI Coaching Available
            </span>
            <h1 className="text-4xl md:text-4xl font-extrabold leading-tight tracking-tight">
             Finally Become The Strong & Energetic 
              <span className="text-[#3E7D72]"> Parent That Other Parents Will be Jealous of.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
             Stop waiting for motivation to take action and start getting incredible results today with our personilised meal and nutrition plans. 

            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 cursor-pointer bg-[#3E7D72] text-white px-5 py-3 rounded-xl font-bold hover:bg-[#255c53] transition-all hover:scale-105 active:scale-95 group">
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-5 py-3 bg-white cursor-pointer border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition text-gray-700">
               Client Results

              </button>
            </div>
          </div>

         
        </div>
      </section>

      
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-indigo-100 transition-all hover:shadow-xl hover:-translate-y-1 group">
    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
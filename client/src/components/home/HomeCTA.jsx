import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Busy Mom",
    feedback:
      "Thanks to this program, I finally have the energy to keep up with my kids! The meal plans are simple and the workouts are effective.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    name: "Olivia Smith",
    role: "New Mom",
    feedback:
      "Finally a program that understands a busy schedule! The personalized meal and fitness plans made it so easy to get back in shape. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
  },
  {
    name: "Daniel Harris",
    role: "Father of Three",
    feedback:
      "Between work and family life, I never had time for the gym. This program made everything simple and realistic. I've lost 12kg and feel stronger than ever.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 5,
  },
];
function Rating({ stars }) {
  return (
    <div className="flex gap-1 justify-center md:justify-start">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < stars ? "text-[#3E7D72]" : "text-gray-300"
          }`}
          fill={i < stars ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);

    return () => clearInterval(timeoutRef.current);
  }, [length]);

  return (
   <section className="relative py-16 px-5 md:px-12 bg-gradient-to-b from-[#3E7D72] to-[#295d55] overflow-hidden">
  
  {/* Soft glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

  <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">

    

    
    <div className="w-full md:w-2/3 relative">
      
      <div className="relative min-h-[320px] md:min-h-[260px]">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out
            ${
              idx === current
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : "opacity-0 translate-x-8 scale-95 z-0"
            }`}
          >
            <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-10 
                            flex flex-col md:flex-row items-center md:items-start 
                            gap-6 text-gray-800 w-full">

              <img
                src={t.image}
                alt={t.name}
                className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
              />

              <div className="text-center md:text-left">
                <h3 className="font-bold text-[#3E7D72] text-xl md:text-2xl">
                  {t.name}
                </h3>

                <p className="text-sm text-gray-400 mb-3">
                  {t.role}
                </p>

                <Rating stars={t.rating} />

                <p className="mt-5 text-sm md:text-base leading-relaxed text-gray-600 italic">
                  “{t.feedback}”
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex md:justify-start justify-center mt-8 gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === current
                ? "w-10 bg-white"
                : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
<div className="w-full md:w-1/3 text-left md:text-right">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        Our <span className="text-[#f5f5f0]">Clients</span>,  
        <br className="hidden md:block" />
        In Their Own Words
      </h2>

      <p className="mt-4 text-gray-200 text-sm sm:text-base">
        See why busy parents love our system and how it transforms their energy,
        confidence, and lifestyle.
      </p>
    </div>
  </div>
</section>
  );
}
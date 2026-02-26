import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  "Enquire about family coaching",
  "Book a call to discuss your family plan",
  "Download the BHP App",
  "Onboard together",
  "Access your unique family plan",
  "Create lasting healthy habits as a family",
];

export default function FamilyCoachingPage() {
  return (
    <div className="py-10 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Sidebar Steps */}
          <div className="space-y-3">
            <h2 className="font-bold text-lg mb-4 text-gray-800">
              HOW FAMILY COACHING WORKS
            </h2>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`rounded-xl border p-4 shadow-sm transition-all ${
                  index === 0
                    ? "bg-[#3E7D72] text-white border-[#3E7D72]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#3E7D72]/50"
                }`}
              >
                <p className="text-xs font-semibold opacity-70">Step {index + 1}</p>
                <p className="text-sm font-medium mt-1">{step}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 relative bg-white rounded-2xl shadow-lg p-6 md:p-8 overflow-hidden">

            {/* Circular background decoration */}
            <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] border border-gray-100 rounded-full mt-[-300px]" />
            </div>

            <div className="relative z-10 space-y-6">

              {/* Header */}
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                  Create your plan
                </h1>
              </div>

              {/* Image Section */}
              <div className="w-full h-48 md:h-64 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://better-health-project.vercel.app/assets/1-CB2Gr1JZ.jpg"
                  alt="Happy family"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900">
                  Save money on family plans
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Get discounted rates when you join with your family, work
                  colleagues, or friends. This is a great way of achieving
                  results, but with people you love.
                </p>
              </div>

              {/* CTA Button */}
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#3E7D72] hover:bg-[#2f5f56] text-white px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 group"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

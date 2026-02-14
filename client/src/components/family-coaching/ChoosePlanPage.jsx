import React from "react";
import img4  from "../../../public/1.jpg"
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Sidebar Steps */}
        <div className="space-y-4">
          <h2 className="font-bold text-lg mb-2">
            HOW FAMILY COACHING WORKS
          </h2>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`rounded-xl border p-5 shadow-sm transition ${
                index === 0
                  ? "bg-[#50978b] text-white border-[#3E7D72]"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              <p className="text-sm font-semibold">Step {index + 1}</p>
              <p className="mt-1 font-medium">{step}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 relative bg-white rounded-2xl shadow-lg p-10 overflow-hidden">

          {/* Circular background decoration */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
            <div className="w-[700px] h-[700px] border border-gray-200 rounded-full mt-[-450px]" />
          </div>

          <div className="relative z-10 space-y-8">

            {/* Header */}
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">
                Create your plan
              </h1>
            </div>

            {/* Image Section */}
            <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
              {/* Replace src with your actual image */}
              <img
                src={img4}
                alt="Happy family"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Save money on family plans
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Get discounted rates when you join with your family, work
                colleagues, or friends. This is a great way of achieving
                results, but with people you love.
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-[#519a8e] hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold">
              Get Started
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
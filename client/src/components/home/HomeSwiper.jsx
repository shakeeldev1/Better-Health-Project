import React from "react";
import joimg from "../../../public/hero.jpeg";
import { Link } from "react-router-dom";

const SummerPromo = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100svh-4rem)] pt-4 md:pt-4 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Image Column */}
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <img
              src={joimg}
              alt="Healthy Parent"
              className="w-full rounded-xl shadow-xl object-cover aspect-[4/3] max-h-[50vh] md:max-h-full"
            />
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 space-y-2 md:space-y-2 text-center md:text-left order-2 md:order-2 pb-4 md:pb-4">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-slate-900 uppercase italic">
              Lose 5kg+ and Get Back To The Fit Parent
              <span className="text-[#3E7D72] block mt-2">
                You Were In 12 Weeks.
              </span>
            </h2>
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-bold">
              Done-for-you meals. Simple 20-minute workouts. Weekly accountability. No guessing, no overwhelm, no sacrificing time with your family so you can be the energetic parent your kids see.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#3E7D72] text-white text-base font-black rounded-xl hover:bg-[#2f5f56] hover:shadow-2xl hover:shadow-[#3E7D72]/30 transition-all duration-300 group w-full sm:w-auto uppercase tracking-wider"
              >
                Start My 12-Week Reset
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
                </svg>
              </Link>

              <Link
                to="/result"
                className="inline-flex items-center justify-center px-3 py-3 sm:px-4  bg-white shadow-lg text-sm font-bold rounded-md hover:bg-orange-500 hover:text-white hover:shadow-orange-500/30 transition-all duration-300 group w-full sm:w-auto border border-gray-200"
              >
                CLIENT RESULTS
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
                </svg>
              </Link>
            </div>
            {/* App Store */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center md:justify-start gap-2">
              {/* App Store */}
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-6 w-auto"
                />
              </Link>

              {/* Google Play */}
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-6 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerPromo;

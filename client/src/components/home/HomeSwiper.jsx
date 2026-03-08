import React from "react";
import joimg from "../../../public/hero.jpeg";
import { Link } from "react-router-dom";

const SummerPromo = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100svh-3.5rem)] pt-4 md:pt-4 flex items-center justify-center">
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
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold leading-snug md:leading-tight">
              Finally Become The Strong & Energetic
              <span className=" text-[#3E7D72] ml-2 mt-1">
                Parent That Other Parents Will Be Jealous Of.
              </span>
            </h2>
            {/* Description */}
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed">
              Stop waiting for motivation to take action and start getting
              incredible results today with our personalised meal and nutrition
              plans.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2 sm:mt-2 justify-center md:justify-start">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-4 py-3 sm:px-5  bg-[#3E7D72] text-white text-sm font-bold rounded-md hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group w-full sm:w-auto"
              >
                GET STARTED
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
            <div className="mt-6 sm:mt-8 flex items-center justify-center md:justify-start gap-3">
              {/* App Store */}
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-8  w-auto"
                />
              </Link>

              {/* Google Play */}
              <Link to="#">
                <img
                  loading="lazy"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-8 w-auto"
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
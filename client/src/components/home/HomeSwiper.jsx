import React from "react";
import joimg from "../../../public/jo.jpg";
import { Link } from "react-router-dom";

const SummerPromo = () => {
  return (
    <div className="bg-gray-100 min-h-[calc(100svh-3.5rem)] pt-6 md:pt-8 flex items-center justify-center">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">

          {/* Image Column */}
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <img
              src={joimg}
              alt="Healthy Parent"
              className="w-full rounded-3xl shadow-xl object-cover aspect-[4/3] max-h-[60vh] md:max-h-full"
            />
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-2 py-6 md:py-16">

            {/* Heading */}
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight">
              Finally Become The Strong & Energetic 
              <span className=" text-[#3E7D72] ml-2 mt-1">
                 Parent That Other Parents Will Be Jealous Of.
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg max-w-md md:max-w-lg mx-auto md:mx-0 leading-relaxed">
              Stop waiting for motivation to take action and start getting incredible results today with our personalised meal and nutrition plans.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
              <Link
               to="/ebooks"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-[#3E7D72] text-white text-sm sm:text-base font-medium rounded-md hover:bg-[#325d56] transition-all duration-300 group w-full sm:w-auto"
              >
                GET STARTED
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
                </svg>
              </Link>

              <Link
               to="/family-coaching"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-800 text-white text-sm sm:text-base font-medium rounded-md hover:bg-gray-900 transition-all duration-300 group w-full sm:w-auto"
              >
                CLIENT RESULTS
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 512 512"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path>
                </svg>
              </Link>
            </div>

            {/* App Store */}
            <div className="mt-6 sm:mt-8 flex justify-center md:justify-start">
              <img 
                loading="lazy"
                src="https://ebtonline.au/wp-content/uploads/2024/06/App-store.svg"
                alt="Download on App Store"
                className="h-10 sm:h-12 w-auto"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default SummerPromo;
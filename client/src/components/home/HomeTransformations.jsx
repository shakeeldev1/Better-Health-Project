import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import img1 from "../../../public/1.jpg"
import img2 from "../../../public/2.jpg"
import img3 from "../../../public/3.jpg"
import img4 from "../../../public/4.jpg"
import img5 from "../../../public/fo.JPG"
import img6 from "../../../public/sa.jpg"
import img7 from "../../../public/si.jpg"
import img8 from "../../../public/pocket.jpg"
import img9 from "../../../public/footer.jpg"

const AuthorityBrands = () => {
  const brands = [
    { src: img1, alt: "Asp" },
    { src: img2, alt: "Benjamin Franklin" },
    { src: img3, alt: "Cleaning Authority" },
    { src: img4, alt: "Doody Calls" },
    { src: img5, alt: "Doody Calls" },
    { src: img6, alt: "Doody Calls" },
    { src: img7, alt: "Doody Calls" },
    { src: img8, alt: "Doody Calls" },
    { src: img9, alt: "Doody Calls" },
    { src: img5, alt: "Doody Calls" },
    { src: img6, alt: "Doody Calls" },
    { src: img7, alt: "Doody Calls" },
    { src: img8, alt: "Doody Calls" },
    { src: img9, alt: "Doody Calls" },
  ];

  const swiperConfig = {
    modules: [Autoplay, FreeMode],
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000, 
    loop: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 0, // Set to 0 to remove gaps
    // Remove the breakpoints object or set spaceBetween to 0 in all breakpoints
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Gradient Overlay Wrapper for "Fading" edges */}
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          
          <Swiper {...swiperConfig} className="flex items-center">
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="!w-auto">
                {/* Remove mx-2 or any margin classes */}
                <div className="flex items-center justify-center h-full">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="h-25 md:h-25 w-auto object-contain block"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBrands;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
// import img1 from "../../../public/1.jpg"
// import img2 from "../../../public/2.JPG"
// import img3 from "../../../public/3.jpg"
// import img4 from "../../../public/4.jpg"
// import img5 from "../../../public/fo.JPG"
// import img6 from "../../../public/sa.jpg"
// import img7 from "../../../public/si.jpg"
// import img8 from "../../../public/pocket.jpg"
// import img9 from "../../../public/footer.jpg"

const AuthorityBrands = () => {
  const brands = [
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-4-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-1-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-2-1.webp", alt: "Transformation" },
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-5-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-6-1.webp", alt: "Transformation" },
    { src:"https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-7.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/06/EBT-client-results-4-1.webp", alt: "Transformation" },
    { src: "https://ebtonline.au/wp-content/uploads/2025/03/130894952-opt.jpg", alt: "Transformation" },
    { src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTu84kWBYb0LETZz1hoGz8bJmvg4OY8kgzDSv87cjaKxm4adsf1", alt: "Transformation" },
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
    spaceBetween: 0,
  };

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wider">
            Real <span className="text-[#3E7D72]">Transformations</span>
          </h2>
        </div>
        
        {/* Gradient Overlay Wrapper */}
        <div className="relative overflow-hidden rounded-2xl before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white after:to-transparent">
          
          <Swiper {...swiperConfig} className="flex items-center">
            {brands.map((brand, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <div className="flex items-center justify-center h-32 md:h-40 w-40 md:w-48">
                  <img 
                    src={brand.src} 
                    alt={brand.alt}
                    className="h-full w-full object-cover rounded-lg shadow-md"
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

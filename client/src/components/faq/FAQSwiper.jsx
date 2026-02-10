import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { faqSwiperSlides as slides } from '../../data/faqData';

const FAQSwiper = () => {
  // Preload images for faster loading
  React.useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  return <GlobalSwiper slides={slides} buttonStyle="gradient" showIcon={false} />;
};

export default FAQSwiper;

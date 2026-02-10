import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { familySwiperSlides as slides } from '../../data/familyCoachingData';

const FamilySwiper = () => {
  // Preload images
  React.useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  return <GlobalSwiper slides={slides} buttonStyle="gradient" showIcon={false} />;
};

export default FamilySwiper;

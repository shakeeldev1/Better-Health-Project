import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { ebookSwiperSlides as slides } from '../../data/ebookData';

const EbookSwiper = () => {
  // Preload images
  React.useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  return <GlobalSwiper slides={slides} buttonStyle="gradient" showIcon={false} />;
};

export default EbookSwiper;

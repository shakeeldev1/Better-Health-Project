import React from 'react';
import GlobalSwiper from '../common/GlobalSwiper';
import { contactSwiperSlides as slides } from '../../data/contactData';

const ContactSwiper = () => {
  // Preload images for faster loading
  React.useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  }, []);

  return <GlobalSwiper slides={slides} buttonStyle="gradient" showIcon={true} />;
};

export default ContactSwiper;

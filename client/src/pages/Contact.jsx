import React from 'react';
import ContactSwiper from '../components/contact/ContactSwiper';
import GetInTouch from '../components/contact/GetInTouch';
import LocationSection from '../components/contact/LocationSection';


const Contact = () => {
  return (
    <div className="w-full overflow-hidden">
      <ContactSwiper />
      <GetInTouch />
      <LocationSection />
    </div>
  );
};

export default Contact;
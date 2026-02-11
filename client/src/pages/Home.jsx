import React, { useEffect } from 'react';
import HomeSwiper from '../components/home/HomeSwiper';
import HomeAbout from '../components/home/HomeAbout';
import HomeExpect from '../components/home/HomeExpect';
import HomeIncluded from '../components/home/HomeIncluded';
import HomeApp from '../components/home/HomeApp';
import Timeline from '../components/home/Timeline';
import HomeTransformations from '../components/home/HomeTransformations';
import HomeCTA from '../components/home/HomeCTA';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <HomeSwiper />
      <HomeAbout />
      <HomeExpect />
      <HomeIncluded />
      <HomeApp />
      <Timeline />
      <HomeTransformations />
      <HomeCTA />
    </div>
  );
};

export default Home;

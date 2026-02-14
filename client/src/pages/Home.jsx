import React, { useEffect } from 'react';
import HomeSwiper from '../components/home/HomeSwiper';
import HomeAbout from '../components/home/HomeAbout';
import HomeExpect from '../components/home/HomeExpect';
import HomeIncluded from '../components/home/HomeIncluded';
import HomeApp from '../components/home/HomeApp';
import Timeline from '../components/home/Timeline';
import HomeTransformations from '../components/home/HomeTransformations';
import HomeCTA from '../components/home/HomeCTA';
import EbookHowItWorks from '../components/ebooks/EbookHowItWorks';
import MarqueeBanner from '../components/home/MarqueeBanner';

const Home = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <HomeSwiper />
      <MarqueeBanner/>
      <HomeAbout />
      <HomeExpect />
      <HomeTransformations />
      <HomeIncluded />
      <HomeApp />
      <Timeline />
      <EbookHowItWorks/>
      <HomeCTA />
    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import EbookSwiper from '../components/ebooks/EbookSwiper';
import EbookGrid from '../components/ebooks/EbookGrid';
import EbookHowItWorks from '../components/ebooks/EbookHowItWorks';
import HomeCTA from "../components/home/HomeCTA"
import EbookStore from '../components/ebooks/EbookStore';

const Ebooks = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <EbookSwiper />
      <EbookStore/>
      <EbookHowItWorks />
      {/* <EbookComingSoon /> */}
<HomeCTA/>
    </div>
  );
};

export default Ebooks;

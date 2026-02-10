import React, { useEffect } from 'react';
import EbookSwiper from '../components/ebooks/EbookSwiper';
import EbookGrid from '../components/ebooks/EbookGrid';
import EbookHowItWorks from '../components/ebooks/EbookHowItWorks';
import EbookComingSoon from '../components/ebooks/EbookComingSoon';

const Ebooks = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <EbookSwiper />
      <EbookGrid />
      <EbookHowItWorks />
      <EbookComingSoon />
    </div>
  );
};

export default Ebooks;

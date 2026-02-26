import React from 'react';
import { ebookComingSoonData as data } from '../../data/ebookData';
import GlobalCTA from '../common/GlobalCTA';

const EbookComingSoon = () => {
  return (
    <GlobalCTA 
      title={data.title}
      highlightText={data.highlightText}
      description={data.description}
      buttonText="Join the Waitlist"
      buttonLink="/contact"
      className="py-8 md:py-10"
    />
  );
};

export default EbookComingSoon;

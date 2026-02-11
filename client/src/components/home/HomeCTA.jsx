import React from 'react';
import { homeCTAData as data } from '../../data/homeData';
import GlobalCTA from '../common/GlobalCTA';

function HomeCTA() {
  return (
    <div className="mt-6 sm:mt-8 lg:mt-10">
      <GlobalCTA 
        title={data.title}
        highlightText={data.highlightText}
        description={data.description}
        buttonText={data.primaryButton.text}
        buttonLink={data.primaryButton.link}
      />
    </div>
  );
}

export default HomeCTA;

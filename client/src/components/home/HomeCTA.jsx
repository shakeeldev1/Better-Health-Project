import React from 'react';
import { homeCTAData as data } from '../../data/homeData';
import GlobalCTA from '../common/GlobalCTA';

function HomeCTA() {
  return (
    <GlobalCTA 
      title={data.title}
      highlightText={data.highlightText}
      description={data.description}
      buttonText={data.primaryButton.text}
      buttonLink={data.primaryButton.link}
    />
  );
}

export default HomeCTA;

import React from 'react';
import { familyCTAData as data } from '../../data/familyCoachingData';
import GlobalCTA from '../common/GlobalCTA';

const FamilyCTA = () => {
  return (
    <GlobalCTA 
      title={data.title}
      highlightText={data.highlightText}
      description={data.description}
      buttonText={data.primaryButton.text}
      buttonLink={data.primaryButton.link}
      className="py-20"
    />
  );
};

export default FamilyCTA;

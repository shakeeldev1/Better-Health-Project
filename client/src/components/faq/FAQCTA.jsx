import React from 'react';
import { faqCTAData as data } from '../../data/faqData';
import GlobalCTA from '../common/GlobalCTA';

const FAQCTA = () => {
  return (
    <GlobalCTA 
      title={data.title}
      highlightText={data.highlightText}
      description={data.description}
      buttonText={data.secondaryButton.text}
      buttonLink={data.secondaryButton.link}
      className="pb-16"
    />
  );
};

export default FAQCTA;

import React, { useEffect } from 'react';
import FamilySwiper from '../components/family-coaching/FamilySwiper';
import FamilyWhatIs from '../components/family-coaching/FamilyWhatIs';
import FamilyWhoFor from '../components/family-coaching/FamilyWhoFor';
import FamilyHowItWorks from '../components/family-coaching/FamilyHowItWorks';
import FamilyWhyDifferent from '../components/family-coaching/FamilyWhyDifferent';
import FamilyScenarios from '../components/family-coaching/FamilyScenarios';
import FamilyCTA from '../components/family-coaching/FamilyCTA';
import FamilyCoachingPage from '../components/family-coaching/ChoosePlanPage';

const FamilyCoaching = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <FamilySwiper />
      {/* <FamilyWhatIs /> */}
    <FamilyCoachingPage/>
      {/* <FamilyWhoFor /> */}
      {/* <FamilyHowItWorks /> */}
      {/* <FamilyWhyDifferent /> */}
      <FamilyScenarios />
      <FamilyCTA />
    </div>
  );
};

export default FamilyCoaching;

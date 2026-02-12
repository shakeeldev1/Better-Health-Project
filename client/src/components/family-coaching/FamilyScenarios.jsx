import React from 'react';
import { motion } from 'framer-motion';
import GlobalHeading from '../common/GlobalHeading';
import GlobalCard1 from '../common/GlobalCard1';
import { familyScenarios as scenarios, familyScenariosData as data } from '../../data/familyCoachingData';

const FamilyScenarios = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlobalHeading 
          badge={data.badge}
          title={data.title}
          highlightText={data.highlightText}
          description={data.description}
          className="mb-12"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {scenarios.map((scenario, index) => (
              <GlobalCard1
                key={index}
                index={index}
                icon={scenario.icon}
                title={scenario.title}
                description={scenario.description}
                bgImage={scenario.bgImage}
                variants={cardVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyScenarios;

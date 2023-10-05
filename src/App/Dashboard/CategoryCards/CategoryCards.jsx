import React from 'react';
import DashboardCard from '../../Components/DashboardCard/DashboardCard';
import availableCards from './Data';

export const CategoryCards = () => {
  return (
    <>
      {availableCards.map((card) => {
        return (
          <DashboardCard
            key={card.sectionTitle}
            sectionTitle={card.sectionTitle}
            description={card.description}
            link={card.link}
            icon={card.icon}
          />
        );
      })}
    </>
  );
};

import React from 'react';
import './MainSection.css';

const MainSection = ({ title, children }) => {
  return (
    <div className="main-section">
      <div className="main-section--title">{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default MainSection;

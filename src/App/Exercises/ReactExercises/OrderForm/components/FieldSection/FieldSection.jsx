import React from 'react';
import './FieldSection.css';

const FieldSection = ({ title, children }) => {
  return (
    <div className="field-section">
      <div className="field-setion--title">{title}</div>
      <div className="field-section--childern">{children}</div>
    </div>
  );
};

export default FieldSection;

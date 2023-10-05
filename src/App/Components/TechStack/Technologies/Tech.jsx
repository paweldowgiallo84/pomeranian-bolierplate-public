import React from 'react';
import techstackIons from './Data';

export const Tech = () => {
  return (
    <>
      {techstackIons.map((tech) => (
        <div key={tech.techstachTitle} className="tech__icon">
          <span className="tech__icon--icon">{tech.icon}</span>
          <span className="tech__icon--title">{tech.techstachTitle}</span>
        </div>
      ))}
    </>
  );
};

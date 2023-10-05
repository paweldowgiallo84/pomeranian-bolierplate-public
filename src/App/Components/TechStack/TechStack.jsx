import './styles.css';

import { Tech } from './Technologies/Tech';

export const TechStack = () => {
  return (
    <div className="techstack">
      <div className="techstack--title">
        <h3>My Tech Stack</h3>
        <p>Technologies I have learned and programs I use</p>
      </div>

      <div className="techstack__icon--container">
        <Tech />
      </div>
    </div>
  );
};

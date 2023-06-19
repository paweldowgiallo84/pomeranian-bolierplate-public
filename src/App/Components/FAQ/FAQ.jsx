import './styles.css';
import { TogleArrowIcon } from '../Icons/ToggleArrowIcon';

export const FAQ = () => {
  return (
    <div>
      <h1 className="blog">
        <div className="toggle-arrow-icon">
          <TogleArrowIcon />
        </div>
        FAQ
      </h1>
      <div className="post post01"></div>
    </div>
  );
};

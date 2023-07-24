import { TogleArrowIcon } from './images/ToggleArrowIcon';

export const TitleAndDescription = () => {
  return (
    <div className="wackTheMoleMain">
      <p className="title">
        <span className="arrow_icon">
          <TogleArrowIcon />
        </span>
        KRET
      </p>
      <div className="wtm_game_rules">
        <p>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>
      </div>
    </div>
  );
};

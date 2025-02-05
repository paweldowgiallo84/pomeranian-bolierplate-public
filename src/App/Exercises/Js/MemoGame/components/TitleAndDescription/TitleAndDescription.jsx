import React from 'react';
import { TogleArrowIcon } from '../../images/ToggleArrowIcon';
import './TitleAndDescription.css';

const TitleAndDescription = () => {
  return (
    <div className="memo_game_title">
      <p className="title">
        <span className="memo_arrow_icon">
          <TogleArrowIcon />
        </span>
        MEMO
      </p>
      <div className="memo_rules">
        <p>
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w
          pary.
        </p>
      </div>
    </div>
  );
};

export default TitleAndDescription;

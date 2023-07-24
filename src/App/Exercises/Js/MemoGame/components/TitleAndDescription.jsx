import React from 'react';
import { TogleArrowIcon } from './../images/ToggleArrowIcon';

const TitleAndDescription = () => {
  return (
    <div className="memo_game_main">
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

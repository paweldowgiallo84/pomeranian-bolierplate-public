import React, { useState } from 'react';
import { TitleAndDescription } from './components/TitleAndDescription/TitleAndDescription';
import { HitTheMole } from './components/HitTheMole';

import './styles.css';

export function HitTheMoleGame() {
  const [showFullscreen, setShowFullscreen] = useState(false);

  const openFullscreenComponent = () => {
    setShowFullscreen(true);
  };

  const closeFullscreenComponent = () => {
    setShowFullscreen(false);
  };

  return (
    <div>
      <div>{!showFullscreen && <TitleAndDescription />}</div>
      <div>
        {!showFullscreen && (
          <button
            className="btn hitTheMole__btn--open"
            onClick={openFullscreenComponent}
          >
            URUCHOM GRE
          </button>
        )}
      </div>
      {showFullscreen && (
        <div className="hitTheMole__game-fullscreen">
          <div className="hitTheMole__game-content">
            <HitTheMole />
            <div className="close__btn">
              <button
                className="btn hitTheMole__btn"
                onClick={closeFullscreenComponent}
              >
                ZAMKNIJ GRE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

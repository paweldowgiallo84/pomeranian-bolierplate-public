import React, { useState } from 'react';
import TitleAndDescription from './components/TitleAndDescription/TitleAndDescription';
import { Memo } from './components/Memo';

import './styles.css';

export const MemoGame = () => {
  const [showFullscreen, setShowFullscreen] = useState(false);

  const openFullscreenComponent = () => {
    setShowFullscreen(true);
  };

  const closeFullscreenComponent = () => {
    setShowFullscreen(false);
  };

  return (
    <>
      <div>
        <div>{!showFullscreen && <TitleAndDescription />}</div>
        <div>
          {!showFullscreen && (
            <button className="btn memo__btn" onClick={openFullscreenComponent}>
              URUCHOM GRE
            </button>
          )}
        </div>
        {showFullscreen && (
          <div className="memo__game-fullscreen">
            <div className="memo__game-content">
              <Memo />
              <div className="close__btn">
                <button
                  className="btn memo__btn"
                  onClick={closeFullscreenComponent}
                >
                  ZAMKNIJ GRE
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

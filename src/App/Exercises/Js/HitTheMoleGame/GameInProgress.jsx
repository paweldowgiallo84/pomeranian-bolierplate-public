export const GameInProgress = ({ stopTimer, seconds, scoreCount }) => {
  let minutesToFinish = Math.floor(seconds / 60);
  let secondsToFinish = seconds % 60;
  return (
    <div className="wackTheMoleMain">
      <div className="wtm_optins">
        <div className="wtm_option_settings">
          <div className="description">
            <p>CZAS DO KOŃCA: </p>
            <p>WYNIK: </p>
            <p>PRZYCISKI STERUJĄCE</p>
          </div>

          <div className="wtm_options_btns">
            <div className="btns">
              <span className="scoreAndTime">
                {minutesToFinish.toString().padStart(2, 0)}:
                {secondsToFinish.toString().padStart(2, 0)}
              </span>
            </div>

            <div className="btns">
              <span className="scoreAndTime">{scoreCount}</span>
            </div>

            <div className="btns">
              {seconds === 0 ? (
                <button className="btn" onClick={() => stopTimer()}>
                  Restart
                </button>
              ) : (
                <button className="btn" onClick={() => stopTimer()}>
                  Stop
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GameInProgress = ({ seconds, scoreCount }) => {
  let minutesToFinish = Math.floor(seconds / 60);
  let secondsToFinish = seconds % 60;
  return (
    <div className="wackTheMoleMain game--start">
      <div className="wtm_optins">
        <div className="wtm_option_settings ">
          <div className="description wtm__game--start">
            <p>CZAS DO KOŃCA: </p>
            <p>WYNIK: </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

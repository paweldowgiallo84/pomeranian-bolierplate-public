import { TogleArrowIcon } from './images/ToggleArrowIcon';

export const GameSettings = ({
  gameTime,
  howManyMoles,
  setHowManyMoles,
  setGameTime,
  startTimer,
}) => {
  const gameTimeSelector = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },
    { label: '2 minuty', timeValue: 2 * 60 * 1000 },
    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];

  const molesCountOption = [
    { label: '1 kret' },
    { label: '2 krety' },
    { label: '3 krety' },
  ];

  return (
    <div className="wackTheMoleMain">
      <p className="title">
        <span className="arrow_icon">
          <TogleArrowIcon />
        </span>
        KRET
      </p>
      <div className="wtm_optins">
        <div className="wtm_game_rules">
          <p>
            Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
            którym się pojawił.
          </p>
        </div>
        <div className="wtm_option_settings">
          <div className="description">
            <p>
              CZAS GRY: {gameTime / 60 / 1000}
              {gameTime > 1 * 60 * 1000 ? ' minuty' : ' minuta'}
            </p>
            <p>
              LICZBA KRETÓW: {howManyMoles}{' '}
              {howManyMoles > 1 ? ' krety' : ' kret'}
            </p>
            <p>PRZYCISKI STERUJĄCE</p>
          </div>

          <div className="wtm_options_btns">
            <div className="btns">
              {gameTimeSelector.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activ_btn' : 'btn'}
                  onClick={() => setGameTime(timeValue)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="btns">
              {molesCountOption.map(({ label }) => (
                <button
                  className={
                    howManyMoles === Number(label[0]) ? 'activ_btn' : 'btn'
                  }
                  onClick={() => setHowManyMoles(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="btns">
              <button className="btn" onClick={() => startTimer()}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

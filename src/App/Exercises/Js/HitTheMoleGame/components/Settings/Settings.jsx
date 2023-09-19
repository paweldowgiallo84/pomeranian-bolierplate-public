import './Settings.css';

export const GameSettings = ({
  gameTime,
  howManyMoles,
  setHowManyMoles,
  setGameTime,
  endGame,
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
    <div className="wackTheMoleMain wtm__main__settings">
      <div className="wtm_optins">
        <div className="wtm_option_settings">
          <div className="description">
            <p>CZAS GRY:</p>
            <p>LICZBA KRETÓW:</p>
          </div>

          <div className="wtm_options_btns">
            <div className="btns">
              {gameTimeSelector.map(({ label, timeValue }) => (
                <button
                  disabled={endGame}
                  className={
                    endGame
                      ? 'btn--disabled'
                      : gameTime === timeValue
                      ? 'activ_btn'
                      : 'btn'
                  }
                  onClick={() => setGameTime(timeValue)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="btns">
              {molesCountOption.map(({ label }) => (
                <button
                  disabled={endGame}
                  className={
                    endGame
                      ? 'btn--disabled'
                      : howManyMoles === Number(label[0])
                      ? 'activ_btn'
                      : 'btn'
                  }
                  onClick={() => setHowManyMoles(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

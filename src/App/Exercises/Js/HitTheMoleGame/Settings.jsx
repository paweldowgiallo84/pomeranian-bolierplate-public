export const GameSettings = ({
  gameTime,
  howManyMoles,
  setHowManyMoles,
  setGameTime,
  startTimer,
  seconds,
}) => {
  const gameTimeSelector = [
    { label: '1 minuta', timeValue: 0.1 * 60 * 1000 },
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
      <div className="wtm_optins">
        <div className="wtm_option_settings">
          <div className="description">
            <p>CZAS GRY:</p>
            <p>LICZBA KRETÓW:</p>
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

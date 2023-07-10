export const GameResult = ({ scoreCount, gameTime }) => {
  const minutesOfGame = Math.floor(gameTime / 1000 / 60);
  const secondsOfGame = (gameTime / 1000) % 60;

  return (
    <div className="wackTheMoleMain">
      <h2>
        Gratulacje! Twój wynik to: {scoreCount}
        {scoreCount === 1
          ? ' złapany '
          : scoreCount > 1 && scoreCount < 5
          ? ' złapane '
          : ' Złapanych '}
        {scoreCount === 1
          ? ' kret '
          : scoreCount > 1 && scoreCount < 5
          ? ' kretyt '
          : ' kretów '}
        w czasie
        {minutesOfGame.toString().padStart(2, 0)}:
        {secondsOfGame.toString().padStart(2, 0)}
        {/* {gameTime / 1000} */}
      </h2>
    </div>
  );
};

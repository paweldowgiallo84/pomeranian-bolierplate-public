import { useState } from 'react';
import './styles.css';

export const SeeOrNot = () => {
  const [isvVsible, setIsVisible] = useState(true);
  const [isButto, setIsButto] = useState('ukryj');

  function clickHandler() {
    let curentIsVisible = isvVsible;
    setIsVisible(!curentIsVisible);

    if (!curentIsVisible) {
      setIsButto('Pokaż');
    }
    else {
      setIsButto('Ukryj')
    }
    // console.log(curentIsVisible);
  }

  return (
    <div className="SeeOrNot">
      <h1>See Or Not</h1>
      <button className="btn" onClick={clickHandler}>{isButto}</button>
      </div>
  );
};

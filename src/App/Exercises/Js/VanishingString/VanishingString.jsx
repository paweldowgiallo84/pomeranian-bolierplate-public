import React, { useEffect, useState } from 'react';

import './styles.css';

const VanishingString = () => {
  const [text, setText] = useState('');

  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [bannerContent, setBanerContent] = useState('animating banner ');

  const [squareAnimate, setSquareAnimate] = useState(false);
  const [squerSizeDown, setSquerSizeDown] = useState(false);
  const [animationTime, setAnimationTime] = useState(0);
  const initSize = 10;
  const maxSize = 100;
  const [size, setSize] = useState(null);

  const showText = () => {
    setText('text');
    setTimeout(() => {
      setText('');
    }, 3000);
  };

  const startStopTimer = () => {
    setTimerRunning((current) => !current);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setSeconds(0);
    console.log(seconds);
  };

  useEffect(() => {
    let intervalID;

    if (timerRunning) {
      intervalID = setInterval(() => {
        setSeconds(seconds + 1);
        console.log(seconds);
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [timerRunning, seconds]);

  const startStopBanerAnimation = () => {
    setIsAnimating((current) => !current);
  };

  useEffect(() => {
    let banerInterval;

    if (isAnimating) {
      banerInterval = setInterval(() => {
        setBanerContent(
          bannerContent.slice(1) + bannerContent.substring(1, -1)
        );
      }, 200);
    }

    return () => clearInterval(banerInterval);
  }, [bannerContent, isAnimating]);

  const handelInputChange = (event) => {
    const animationtTimeInputValue = event.target.value;
    setAnimationTime(animationtTimeInputValue);
  };

  const StartSquerAnimation = () => {
    setSquareAnimate((current) => !current);
    setSize(initSize);
  };

  useEffect(() => {
    const animationStepsTime = animationTime / 2;
    const stepTime = 1000 / ((maxSize - initSize) / animationStepsTime);
    let intervalID;

    if (squareAnimate && !squerSizeDown) {
      intervalID = setInterval(() => {
        setSize(size + 1);
        if (size === 100) {
          setSquerSizeDown(true);
        }
      }, stepTime);
    }

    if (squareAnimate && squerSizeDown) {
      intervalID = setInterval(() => {
        setSize(size - 1);
        if (size === initSize) {
          setSquareAnimate(false);
        }
      }, stepTime);
    }

    return () => clearInterval(intervalID);
  }, [size, squareAnimate]);

  return (
    <div>
      <div>
        <button onClick={() => showText()}>Push to render text</button>
        <p>{text}</p>
      </div>
      <hr />
      <div>
        <button onClick={() => startStopTimer()}>
          {timerRunning ? 'stop timer' : 'start timer'}
        </button>
        <button onClick={() => resetTimer()}>restart</button>
        <p>Timer: {seconds}</p>
      </div>
      <hr />
      <div>
        <button onClick={() => startStopBanerAnimation()}>
          {isAnimating ? 'stop baner animation' : 'start baner animation'}
        </button>
        <p className="baner__animation">{bannerContent}</p>
      </div>
      <hr />
      <div>
        <label for="animationTime">set animation time</label>
        <input
          onChange={handelInputChange}
          id="animationTime"
          type="number"
          className="animationInput"
        />
        <p className="animation__time">Animation duration: {animationTime}</p>
        <button onClick={() => StartSquerAnimation(animationTime)}>
          {squareAnimate ? 'Stop Animation' : 'Start Animation'}
        </button>

        <div
          style={{
            width: `${size || initSize}px`,
            height: `${size || initSize}px`,
            backgroundColor: 'brown',
          }}
        ></div>
      </div>
    </div>
  );
};

export default VanishingString;

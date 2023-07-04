import React, { useEffect, useState } from 'react';

export const Time = () => {
  const [minutes] = useState(0);
  const [seconds, setSeconds] = useState(4);
  const [msSeconds] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(false);

  function setTimer(ev) {
    setSeconds(ev.target.value);
  }

  function startTimer() {
    setIsCountingDown(true);
  }

  function stopTimer() {
    setIsCountingDown(false);
  }
  //TODO starting and stoping timer.

  useEffect(() => {
    let intervalId;
    if (isCountingDown) {
      if (seconds !== 0) {
        intervalId = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }
    return () => clearInterval(intervalId);
  }, [seconds]);

  if (seconds === 0) {
    alert('Odliczanie dobiegło końca');
  }

  return (
    <>
      <input type="Number" onChange={setTimer} placeholder="set Timer" />
      <div>
        {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:
        {msSeconds}
      </div>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => stopTimer}>Stop</button>
    </>
  );
};

/*
odliczyć od 4 sekund do 0 pokazując aktualne sekundy
*/

//--------------------------------------------------------------------------------------------------------------------

/*

export const Time = () => {
  const [text, setText] = useState('Welcome to the candy shop ');
  const [isRolling, setIsRolling] = useState(true);

  function stopTextRolling() {
    setIsRolling(false);
  }

  function startTextRollin() {
    setText(text.slice(-1) + text.slice(0, -1));
    setIsRolling(true);
  }

  useEffect(() => {
    console.log(text);
    let intervalId;
    if (isRolling) {
      intervalId = setInterval(() => {
        setText(text.slice(-1) + text.slice(0, -1));
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <>
      <button onClick={() => stopTextRolling()}>Stop</button>
      <button onClick={() => startTextRollin()}>Start</button>
      <div>{text}</div>
    </>
  );
};

*/

/*
stwórz baner, który będzie wyświetlał dowolny tekst. tekst powinien zmieniać swój stan (przykładowo 5 razy na sekundę) - a efektem zmiany stanu 
powinno być przesuwanie się napisu w lewo.
*/

//---------------------------------------------------------------------------------------------------------------

/*
function howManyMinutes(timestamp) {
  return Math.floor(timestamp / 1000 / 60);
}

function howManySeconds(timestamp) {
  return Math.floor(timestamp / 1000);
}

function getSecondsFromTime(timestamp) {
  return Math.floor(timestamp / 1000) % 60;
}

function getMsFromTime(timestamp) {
  return timestamp % 100;
}

export const Time = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [msSeconds, setMsSeconds] = useState(0);
  const [isWorking, setIsWorking] = useState(true);
  const [deltaTime, setDeltaTime] = useState(0);
  const [startDate, setStartDate] = useState(Date.now());

  function stopWatch() {
    const currentDate = Date.now();
    setDeltaTime(currentDate - startDate + deltaTime);
    setIsWorking(false);
  }

  function startWatch() {
    setStartDate(Date.now());
    setIsWorking(true);
  }

  useEffect(() => {
    let intervalId;
    if (isWorking) {
      intervalId = setInterval(() => {
        const currentDate = Date.now();
        const timeDiff = currentDate - startDate + deltaTime;

        const minutes = howManyMinutes(timeDiff);
        const seconds = getSecondsFromTime(timeDiff);
        const ms = getMsFromTime(timeDiff);

        setMinutes(minutes);
        setSeconds(seconds);
        setMsSeconds(ms);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isWorking]);

  return (
    <>
      <div>
        {isWorking && <button onClick={() => stopWatch()}>Stop</button>}
        {!isWorking && <button onClick={() => startWatch()}>Start</button>}
        {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:
        {msSeconds}
      </div>
    </>
  );
};

*/

// const [napis, setNapis] = useState('jakis napis');

//------------------------------------------------------------------------------------------------------------------
/*
  const fadeTime = 4000;

  const Box = ({ animationTime }) => {
    const [currentOpaicty, setOpacity] = useState(1);
    const frammesPerSec = 60;
    const opacitySteps = 1000 / animationTime;
    const intervalTime = 1000 / frammesPerSec;

    useEffect(() => {
      const timeoutFlag = setInterval(() => {
        setOpacity(currentOpaicty - opacitySteps / frammesPerSec);
      }, intervalTime);

      return () => clearInterval(timeoutFlag);
    }, [currentOpaicty]);

    return (
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
          opacity: currentOpaicty,
        }}
      ></div>
    );
  };

  const [currentTimeAnimation, setCurrentAnimationTime] = useState(fadeTime);
*/
//----------------------------------------------------------------------------------------------------------------------

// useEffect(() => {});

// useEffect(() => {}, []);

// useEffect(() => {}, [prop, state]);

//-----------------------------------------------

// useEffect(() => {
//   const timeOutFlag = setInterval(() => {
//     setZm(zm + 1);
//     console.log(zm);
//   }, 2000);
//   return () => clearInterval(timeOutFlag);
// }, [zm]);

// 1. odpala sie setInterval
// 2. setInterval czeka 2s
// 3. wewnetrzna funkcja setInterval sie odpala i zmniena zmienna
// 4. zmiana zmiennej powoduje sygnal dla useEffect aby sie wykonal
// 5. useEffect

// useEffect(() => {
//   setTimeout(() => {
//     setZm(zm + 1);
//     console.log(zm);
//   }, 2000);
// }, [zm]);

// const timeFlagForInterval = setInterval(() => {
//   setZm(zm + 1);
//   console.log(zm);
// });

// useEffect(() => {
//   setTimeout(() => {
//     setNapis('');
//   }, 5000);
// }, []);

//   return (
//     <>
//       {/* <Box animationTime={1000} /> */}
//       {/* <div>{napis}</div> */}
//          </>
//   );
// };

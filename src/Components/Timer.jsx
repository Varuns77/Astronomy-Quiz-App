import React, { useState, useEffect } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ difficultLvl }) => {

  const gameTime = {
    Easy: 30,
    Medium: 45,
    Hard: 60,
  };

  const LvlTime = gameTime[difficultLvl]

  console.log(difficultLvl);

  const renderTime = ({ remainingTime }) => {
    const [timerDone, setTimerDone] = useState(false);

    useEffect(() => {
      if (remainingTime === 0 && !timerDone) {
        setTimerDone(true); // Prevents this from running again on subsequent renders
        setTimeout(() => {
          window.location.reload(); // Reload the page after a short delay
        }, 1000); // 1000 milliseconds = 1 second
      }
    }, [remainingTime, timerDone]);
  
    if (timerDone) {
      return <div className="timer" style={{ fontSize: "10px" }}>Restarting</div>;
    }
  
    return (
      <div className="timer">
        <div className="value"><p>{remainingTime}</p></div>
      </div>
    );
  ;
  };

  return (

  <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={LvlTime}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[60, 40, 20, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          size={80}
        >
          {renderTime}
        </CountdownCircleTimer>
    </div>
  )
};


export default Timer;

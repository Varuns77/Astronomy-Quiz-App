import { Box, styled } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { GameContext } from '../Context/GameContext';

const Timer = () => {

  const { selectedDifficulty } = useContext(GameContext);

  const gameTime = {
    Easy: 50,
    Medium: 70,
    Hard: 90,
  };

  const LvlTime = gameTime[selectedDifficulty]

  const renderTime = ({ remainingTime }) => {
    const [timerDone, setTimerDone] = useState(false);

    useEffect(() => {
      if (remainingTime === 0 && !timerDone) {
        setTimerDone(true); // Prevents this from running again on subsequent renders
        setTimeout(() => {
          // window.location.reload(); // Reload the page after a short delay
        }, 1000);
      }
    }, [remainingTime, timerDone]);
  
    if (timerDone) {
      return <strong>0</strong>;
    }
  
    return (
      <Box className="timer">
        <Box className="value">
          <strong>{remainingTime}</strong></Box>
      </Box>
    );
  ;
  };

  return (

  <Box>
        <CountdownCircleTimer
          isPlaying
          duration={LvlTime}
          colors="#9e9e9e"
          onComplete={() => ({ shouldRepeat: true})}
          size={80}
        >
          {renderTime}
        </CountdownCircleTimer>
    </Box>
  )
};

export default Timer;

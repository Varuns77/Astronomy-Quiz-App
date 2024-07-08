import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  
    const toggleGamePlay = () => {
      if (selectedDifficulty !== null) {
        setIsGameStarted((prev) => !prev);
      }
    };
  
    const handleSelectDifficulty = (difficulty) => {
      setSelectedDifficulty(difficulty);
    };
  
    const homeFn = () => {
      setIsGameStarted(false);
      setSelectedDifficulty(null);
    };
  
    return (
      <GameContext.Provider value={{
        isGameStarted,
        selectedDifficulty,
        toggleGamePlay,
        handleSelectDifficulty,
        homeFn
      }}>
        {children}
      </GameContext.Provider>
    );
  };
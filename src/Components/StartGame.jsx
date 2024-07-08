import React, { useContext, useState } from "react";
// import "./StartGame.css";
// import { Button } from "../styled/Button";
import { DifficultyButton } from "../styled/DifficultyButton";

import styled from "styled-components";
import DisplayScores from "./DisplayScores";
import Instructions from "./Instructions";
import MusicPlayer from "./MusicPlayer";
import CustomButtonComponent from "./CustomButtonComponent";
import { GameContext } from '../Context/GameContext';

function StartGame({}) {
  
  const { toggleGamePlay, handleSelectDifficulty } = useContext(GameContext);


  const [showOptions, setShowOptions] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [viewInstructions, setViewInstructions] = useState(false);
  

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDifficultySelect = (difficulty) => {
    handleSelectDifficulty(difficulty);
    // console.log(difficulty);
    setShowOptions(false); // Close difficulty options after selection
  };
  // const handleDifficultySelect = (difficulty) => {
  //   onSelectDifficulty(difficulty);
  //   // console.log(difficulty);
  //   setShowOptions(false); // Close difficulty options after selection
  // };

  const handleShowScores = () => {
    setShowScores(true); // Set showScores to true when the button is clicked
  };

  const openInstructions = () => {
    setViewInstructions(true);
  }

  return (
    <Container>
      <div className="quiz-heading">
        <p>Astronomy Quiz</p>
      </div>
      <div className="start-btn">
        <CustomButtonComponent onClick={toggleGamePlay}>Start Game</CustomButtonComponent>
        <CustomButtonComponent onClick={handleButtonClick}>Difficult Level</CustomButtonComponent>
        {showOptions && (
        <div>
          <DifficultyButton>
            <ul>
              <li onClick={() => handleDifficultySelect('Easy')}>Easy</li>
              <li onClick={() => handleDifficultySelect('Medium')}>Medium</li>
              <li onClick={() => handleDifficultySelect('Hard')}>Hard</li>
            </ul>
          </DifficultyButton>
        </div>
        )}
        <CustomButtonComponent onClick={handleShowScores}>High Scores</CustomButtonComponent>
        {showScores && <DisplayScores onClose={()=> setShowScores(false)}/>}
        <CustomButtonComponent  onClick={openInstructions}>Instructions</CustomButtonComponent>
        {viewInstructions && <Instructions onCancel={() => setViewInstructions(false)} />}
        <MusicPlayer />
        
        
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  /* border: 1px solid yellow; */

  .quiz-heading p {
    font-weight: 600;
    color: white;
    font-size: 50px;
  }

  .start-btn {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
`;

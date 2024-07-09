import React, { useContext, useState } from "react";
import { Button, Container, Typography, Box, styled } from "@mui/material";
import DisplayScores from "./DisplayScores";
import Instructions from "./Instructions";
import MusicPlayer from "./MusicPlayer";
import { GameContext } from '../Context/GameContext';
import CustomButtonComponent from "./CustomButtonComponent";
import DifficultyButton, { StyledList, StyledListItem } from "./DifficultyButton";

function StartGame() {
  const { toggleGamePlay, handleSelectDifficulty } = useContext(GameContext);
  
  const [showOptions, setShowOptions] = useState(false);
  const [showScores, setShowScores] = useState(false);
  const [viewInstructions, setViewInstructions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleDifficultySelect = (difficulty) => {
    handleSelectDifficulty(difficulty);
    setShowOptions(false); // Close difficulty options after selection
  };

  const handleShowScores = () => {
    setShowScores(true); // Set showScores to true when the button is clicked
  };

  const openInstructions = () => {
    setViewInstructions(true);
  }

  return (
    <StartGameContainer maxWidth="md">
      <Typography variant="h2" component="h2" sx={{color: 'white', textAlign: "center" }}>
        Astronomy Quiz
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButtonComponent onClick={toggleGamePlay}>
          Start Game
        </CustomButtonComponent>
        <CustomButtonComponent onClick={handleButtonClick}>
          Difficult Level
        </CustomButtonComponent>
        {showOptions && (
          <Box>
            <DifficultyButton>
            <StyledList disablePadding>
              <StyledListItem onClick={() => handleDifficultySelect('Easy')} disablePadding>Easy</StyledListItem>
              <StyledListItem onClick={() => handleDifficultySelect('Medium')}disablePadding>Medium</StyledListItem>
              <StyledListItem onClick={() => handleDifficultySelect('Hard')}disablePadding>Hard</StyledListItem>
            </StyledList>
            </DifficultyButton>
          </Box>
        )}
        <CustomButtonComponent onClick={handleShowScores}>
          High Scores
        </CustomButtonComponent>
        {showScores && <DisplayScores onClose={() => setShowScores(false)} />}
        <CustomButtonComponent onClick={openInstructions}>
          Instructions
        </CustomButtonComponent>
        {viewInstructions && <Instructions onCancel={() => setViewInstructions(false)} />}
        <MusicPlayer />
      </Box>
    </StartGameContainer>
  );
}

export default StartGame;

const StartGameContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 40px;
  height: 100vh
`;

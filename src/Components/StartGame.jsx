import React, { useContext, useState } from "react";
import { Button, Container, Typography, Box, styled } from "@mui/material";
import DisplayScores from "./DisplayScores";
import Instructions from "./Instructions";
import MusicPlayer from "./MusicPlayer";
import { GameContext } from '../Context/GameContext';
import CustomButtonComponent from "./CustomButtonComponent";
import DifficultyButton, { StyledList, StyledListItem } from "./DifficultyButton";

function StartGame() {
  const { toggleGamePlay, handleSelectDifficulty, selectedDifficulty } = useContext(GameContext);
  
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
    <StartGameContainer maxWidth="xl">
      {/* <DiffLevelContainer> */}
        <Typography className="diff-level" variant="h4" component="h2">
        Difficulty: 
        {selectedDifficulty ? selectedDifficulty : ' Not Selected'}
        </Typography>
      {/* </DiffLevelContainer> */}
      <Typography variant="h2" sx={{color: 'white', textAlign: "center" }}>
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

const StartGameContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',
  height: '100vh',
  position: 'relative',
  '& .diff-level': {
    // color: 'white',
    position: 'absolute',
    top: '5%',
    right: '1%',
    // additional styles if needed
  },
}));

const DiffLevelContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'absolute',
  top: '0',
  right: '0',
  color: 'white',
  // marginBottom: '20px'
  // columnGap: '10px'
  // marginBottom: '20px', // Optional: Add some margin if needed
}));
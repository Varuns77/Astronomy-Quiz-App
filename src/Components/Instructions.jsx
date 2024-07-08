import React from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  styled,
  Typography
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

function Instructions({ onCancel }) {
  return (
    <Dialog onClose={onCancel} open={true} maxWidth="md">
      <Box p={2} sx={{marginLeft: "10px"}}>
        <InstructionHeader>
        <Typography variant="h5">Instructions</Typography>
          <IconButton onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </InstructionHeader>
        <InstructionContent>
          <Typography variant="h6">Gameplay:</Typography>
          <Typography variant="body2">
            First pick your difficulty level. <br />
            Answer questions within the set time. <br />
            Aim to score as high as possible.
          </Typography>
          <Typography variant="h6">Time Limits (entire game):</Typography>
          <Typography variant="body2">
            Easy: 30 seconds<br />
            Medium: 45 seconds<br />
            Hard: 60 seconds
          </Typography>
          <Typography variant="h6">Scoring:</Typography>
          <Typography variant="body2">
            Score 3 points for every correct answer.<br />
            Score 5 points for every correct answer.<br />
            Score 10 points for every correct answer.
          </Typography>
          <Typography variant="h6">Ending the Game:</Typography>
          <Typography variant="body2">
            When the timer runs out, the game finishes immediately.<br />
            When you finish every question, the game ends and your final score is displayed.
          </Typography>
          <Typography variant="h6">Music:</Typography>
          <Typography variant="body2">
            Double tap to play the music.
          </Typography>
        </InstructionContent>
      </Box>
    </Dialog>
  );
}

export default Instructions;

const InstructionContent = styled(Box)`
max-height: 400px;
overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: "grey white" /* scroll thumb and track; */
`;

const InstructionHeader = styled(Box)`
display: flex;
justify-content: space-between;
align-items: center;
`;


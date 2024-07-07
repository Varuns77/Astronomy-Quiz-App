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
      <Box p={2}>
        <InstructionHeader>
          <DialogTitle>Instructions</DialogTitle>
          <IconButton onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        </InstructionHeader>
        <InstructionContent>
          <Typography variant="h6">Gameplay:</Typography>
          <Typography paragraph>
            First pick your difficulty level. <br />
            Answer questions within the set time. <br />
            Aim to score as high as possible.
          </Typography>
          {/* <Typography variant="body1"><b>Choose Difficulty:</b> Start by selecting Easy, Medium, or Hard mode.</Typography> */}
          <Typography variant="h6">Time Limits (entire game):</Typography>
          <Typography paragraph>
            Easy: 30 seconds<br />
            Medium: 45 seconds<br />
            Hard: 60 seconds
          </Typography>
          <Typography variant="h6">Scoring:</Typography>
          <Typography paragraph>
            Score 3 points for every correct answer.<br />
            Score 5 points for every correct answer.<br />
            Score 10 points for every correct answer.
          </Typography>
          <Typography variant="h6">Ending the Game:</Typography>
          <Typography paragraph>
            If the timer runs out: Game ends immediately.<br />
            Complete all questions: Game ends, revealing your final score.
          </Typography>
          <Typography variant="h6">Music:</Typography>
          <Typography paragraph>
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


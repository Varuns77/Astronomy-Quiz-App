import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function DisplayScores({ onClose }) {
  const [savedUserData, setSavedUserData] = useState(null);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    console.log(keys);
    const userDataArray = keys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setSavedUserData(userDataArray);
  }, []);

  return (
    <Modal open onClose={onClose}>
      <ScoreContainer
        sx={{
          p: 2
        }}
      >
        
          <ScoreHeader sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <Typography sx={{flex: '2', marginLeft: '75px'}} variant="h5" component="h1" textAlign="center">
              Saved Scores
            </Typography>
            <IconButton onClick={onClose} size="large">
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </ScoreHeader>
          
          <ScoreTable>
          <TableContainer
            component={Paper}
            sx={{ width: "100%", margin: "10px 0"}}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Difficulty</TableCell>
                  <TableCell align="center">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {savedUserData && savedUserData.length > 0 ? (
                  savedUserData.map((score, index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{score.name}</TableCell>
                      <TableCell align="center">
                        {score.difficultylevel}
                      </TableCell>
                      <TableCell align="center">{score.userscore}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} align="center">
                      Play the game to view your scores
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          </ScoreTable>
        </ScoreContainer>
      
    </Modal>
  );
}

export default DisplayScores;


const ScoreTable = styled(Box)`
width: 100%;
overflow-y: auto;
scrollbar-width: thin;

scrollbar-color: "grey white" /* scroll thumb and track */;
`;

const ScoreHeader = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScoreContainer = styled(Box)`

  width: 650px;
  height: 350px;
  min-width: 280px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  /* padding: ; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
import React, { useContext, useRef, useState } from "react";
import { data } from "../assets/Data";
import { MediumData } from "../assets/MediumData";
import { HardData } from "../assets/HardData";
import Timer from "./Timer";
import MusicPlayer from "./MusicPlayer";
import { TextField, Button, Container, Typography, List, ListItem, Divider, Box, ListItemButton } from '@mui/material';
import { styled } from '@mui/system';
import { GameContext } from '../Context/GameContext';

function Qui() {

  const { selectedDifficulty, homeFn } = useContext(GameContext);

  const gameLevels = {
    Easy: data,
    Medium: MediumData,
    Hard: HardData,
  };

  const Gamelvl = gameLevels[selectedDifficulty];

  let [index, setIndex] = useState(9);
  const [question, setQuestion] = useState(Gamelvl[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  const [userData, setUserData] = useState({});

  const handleNameChange = (event) => {
    const newName = event.target.value;
    const newScore = score;
    const newDifficulty = selectedDifficulty;

    setUserData({
      name: newName,
      userscore: newScore,
      difficultylevel: newDifficulty,
    });
  };

  const handleSaveScore = () => {
    const randomId = Math.random().toString(36).substring(2, 10);
    localStorage.setItem(randomId, JSON.stringify(userData));
    alert('Score saved successfully!');
  };

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  const opt_arr = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        if (selectedDifficulty === 'Easy') setScore((prev) => prev + 3);
        else if (selectedDifficulty === 'Medium') setScore((prev) => prev + 5);
        else setScore((prev) => prev + 10);
      } else {
        e.target.classList.add("wrong");
        if (selectedDifficulty === 'Easy') setScore((prev) => prev - 1);
        else if (selectedDifficulty === 'Medium') setScore((prev) => prev - 2);
        else setScore((prev) => prev - 4);
        setLock(true);
        opt_arr[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === Gamelvl.length - 1) {
        setResult(true);
        return;
      }
      setIndex(++index);
      setQuestion(Gamelvl[index]);
      setLock(false);
      opt_arr.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setLock(false);
    setQuestion(Gamelvl[0]);
    setScore(0);
    setResult(false);
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 3, mt: 6}}>
      {result ? (
        <ResultSection>
          <Typography variant="h1">
            GAME OVER
          </Typography>
          <Typography variant="h6">Enter your name:</Typography>
          <TextField
            variant="filled"
            size="small"
            value={userData.name}
            onChange={handleNameChange}
            sx={{ mb: 2, width: '50%'}}
          />
          
          <Typography variant="body1">
            Difficulty Level: <strong style={{color: 'lightgrey'}}>{selectedDifficulty}</strong>
          </Typography>
          <Typography variant="body1">
            You Scored: <strong>{score}</strong>
          </Typography>
          <CustomBtn variant="contained" color="primary" onClick={handleSaveScore} sx={{ mt: 2 }}>
            Save your score
          </CustomBtn>
          <Button variant="contained" color="secondary" onClick={reset} sx={{ mt: 2, fontFamily: 'Bungee, cursive', fontWeight: '900' }}>
            PLAY AGAIN
          </Button>
          <CustomBtn variant="contained" onClick={homeFn} sx={{ mt: 2 }}>
            Home
          </CustomBtn>
        </ResultSection>
      ) : (
        <>
          <TimerWrapper>
            <Timer difficultLvl={selectedDifficulty} />
          </TimerWrapper>
          <TopSection> 
            <QuesSection>
              <Typography variant="body1">Questions</Typography>
              <Typography variant="body1">{index + 1}/{Gamelvl.length}</Typography>
            </QuesSection>
            <ScoreSection>
              <Typography variant="body1">Score</Typography>
              <Typography variant="body1">{score}</Typography>
            </ScoreSection>
          </TopSection>
          <QuesAnsSection>
            <Divider />
            <Typography variant="h6" align="center" sx={{ my: 2, fontWeight: '700' }}>
              {question.ques}
            </Typography>
            <List sx={{ fontWeight: '500'}}>
              <ListItem disablePadding>
                <ListItemButton ref={Option1} onClick={(e) => { checkAns(e, 1); }}>
                  {question.option1}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton ref={Option2} onClick={(e) => { checkAns(e, 2); }}>
                  {question.option2}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton ref={Option3} onClick={(e) => { checkAns(e, 3); }}>
                  {question.option3}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton ref={Option4} onClick={(e) => { checkAns(e, 4); }}>
                  {question.option4}
                </ListItemButton>
              </ListItem>
            </List>
            <Box display="flex" justifyContent="center">
              <CustomBtn onClick={next} sx={{ mt: 2 }}>
                Next
              </CustomBtn>
            </Box>
          </QuesAnsSection>
        </>
      )}
      <MusicPlayer />
    </Container>
  );
}

export default Qui;

const ResultSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopSection = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
  // fontWeight: theme.typography.body1.fontWeight
}))
  // display: flex;
  // justify-content: space-around;
  // padding: 10px;
  // `;

const QuesSection = styled(Box)(({theme}) => ({
 
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontWeight: theme.typography.body1.fontWeight
}));


const ScoreSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuesAnsSection = styled(Box)`
  hr {
    height: 2px;
    max-width: 70%;
    margin: 0 auto;
    border: none;
    background-color: #707070;
  }

  ul li {
    /* display: flex;
    align-items: center; */
    max-width: 70%;
    /* height: 50px; */
    /* padding-left: 15px; */
    border: 1px solid #686868;
    border-radius: 8px;
    font-size: 17px;
    cursor: pointer;
    margin: 0 auto;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .correct {
    background: #34faab;
    /* border-color: #00ffb7; */
    
  }

  .wrong {
    background: #fc8c8c;
    /* border-color: #fd4444; */
  }
`;

const TimerWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  padding-top: 15px;
`;

const CustomBtn = styled(Button)`
    color: white;
    padding: 8px;
    background-color: black;
    border-radius:5px;
    display: block;
    min-width: 150px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.4s ease-in;

    &:hover {
        background-color: grey;
        /* border: 1px solid black; */
        color: white;
        border-radius:5px;
    }
`;
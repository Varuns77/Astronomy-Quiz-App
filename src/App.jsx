import { useContext, useState } from 'react'
// import './App.css'
import Quiz from './Components/Quiz'
import StartGame from './Components/StartGame'
import Qui from './Components/Qui';
import { ThemeProvider } from '@mui/material';
import theme from './Themes/Theme';
import { GameProvider } from './Context/GameContext';
import { GameContext } from '../src/Context/GameContext';

function App() {
  // const [isGameStarted, setisGameStarted] = useState(false);
  // const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  // const toggleGamePlay = () => {
  //   if(selectedDifficulty != undefined)
  //     setisGameStarted((prev) => !prev);
  // }

  // const handleSelectDifficulty = (difficulty) => {
  //   setSelectedDifficulty(difficulty);
  // };

  // const homeFn = () => {
  //   setisGameStarted(false)
  //   setSelectedDifficulty(null)
  // }

  return (
    <>
    <ThemeProvider theme={theme}>
      <GameProvider>
    {/* {isGameStarted ? <Qui difficulty={selectedDifficulty} homeToggle = {homeFn}/> : <StartGame toggle = {toggleGamePlay} onSelectDifficulty={handleSelectDifficulty}/>} */}
        <GameComponent />
      </GameProvider>
    </ThemeProvider>
    </>
  )
}

const GameComponent = () => {
  const { isGameStarted } = useContext(GameContext);

  return (
    <>
      {isGameStarted ? <Qui/> : <StartGame />}
    </>
  );
};

export default App

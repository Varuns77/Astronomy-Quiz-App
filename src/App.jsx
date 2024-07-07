import { useState } from 'react'
// import './App.css'
import Quiz from './Components/Quiz'
import StartGame from './Components/StartGame'
import Qui from './Components/Qui';
import { ThemeProvider } from '@mui/material';
import theme from './Themes/Theme';

function App() {
  const [isGameStarted, setisGameStarted] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const toggleGamePlay = () => {
    if(selectedDifficulty != undefined)
      setisGameStarted((prev) => !prev);
  }

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  const homeFn = () => {
    setisGameStarted(false)
    setSelectedDifficulty(null)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    {isGameStarted ? <Qui difficulty={selectedDifficulty} homeToggle = {homeFn}/> : <StartGame toggle = {toggleGamePlay} onSelectDifficulty={handleSelectDifficulty}/>}
    </ThemeProvider>
    </>
  )
}

export default App

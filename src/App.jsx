import { useState } from 'react'
import './App.css'
import Quiz from './Components/Quiz'
import StartGame from './Components/StartGame'

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

  return (
    <>
    {isGameStarted ? <Quiz difficulty={selectedDifficulty}/> : <StartGame toggle = {toggleGamePlay} onSelectDifficulty={handleSelectDifficulty}/>}
      
    </>
  )
}

export default App

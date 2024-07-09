import { useContext } from 'react'
import Quiz from './Components/Quiz'
import StartGame from './Components/StartGame'
import { ThemeProvider } from '@mui/material';
import theme from './Themes/Theme';
import { GameProvider } from './Context/GameContext';
import { GameContext } from '../src/Context/GameContext';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GameProvider>
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
      {isGameStarted ? <Quiz /> : <StartGame />}
    </>
  );
};

export default App

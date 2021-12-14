import './App.css';
import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import Game from './components/Game';
import imageRules from './components/assets/image-rules.svg';


function App() {
  const [showRules, setShowRules] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)

  const showRulesAction = (props) => {
    setShowRules(!showRules)
  }

  const startGame = () => {
    setGameStarted(!gameStarted)
}

  const addScore = () => {
    setScore(score + 1)
  }

  return (
    <div className="App" style={{opacity: 1.5}}>
      <div className='Game-Container'>
        {showRules === true && <RulesModal />}
        <ScoreBoard score={score}/>
        <Game startGame={startGame} gameStarted={gameStarted} addScore={addScore}/>
        <Rules showRulesAction={showRulesAction} />
      </div>
    </div>
  );
}

const RulesModal = () => {
  return (
    <div id='Rules-Modal-Container'>
      <div id='Rules-Modal'>
        <h2>RULES</h2>
        <img alt='rules' src={imageRules}></img>
      </div>
  </div>
  )
}

const Rules = (props) => {

  const triggerShowRules = () => {
    props.showRulesAction()
  }

  return (
  <div className='Rules'>
    <button onClick={triggerShowRules} id='Rules-Button'>RULES</button>
  </div>
  )
}

export default App;

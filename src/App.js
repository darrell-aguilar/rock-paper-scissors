import './App.css';
import { useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import Game from './components/Game';
import imageRules from './components/assets/image-rules.svg';
import imageCloseRule from './components/assets/icon-close.svg'


function App() {
  const [showRules, setShowRules] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  var getScore = JSON.parse(localStorage.getItem("score") || 0)
  const [score, setScore] = useState(getScore)

  const showRulesAction = (props) => {
    setShowRules(!showRules)
  }

  const startGame = () => {
    setGameStarted(!gameStarted)
}

  const addScore = () => {
    setScore(score + 1)
    localStorage.setItem("score", JSON.stringify(getScore + 1))
  }

  const subtractScore = () => {
    setScore(score - 1)
    localStorage.setItem("score", JSON.stringify(getScore - 1))
  }

  return (
    <div className="App" style={{opacity: 1.5}}>
      <div className='Game-Container'>
        {showRules === true && <RulesModal showRulesAction={showRulesAction}/>}
        <ScoreBoard score={score}/>
        <Game startGame={startGame} gameStarted={gameStarted} addScore={addScore} subtractScore={subtractScore} score={score}/>
        <Rules showRulesAction={showRulesAction} />
      </div>
    </div>
  );
}

const RulesModal = (props) => {

  const closeModal = () => {
    props.showRulesAction()
  }

  return (
    <div id='Rules-Modal-Container'>
      <div id='Rules-Modal'>
        <div id='Rules-Text'>
          <h2>RULES</h2>
          <img id='close' alt='close' onClick={closeModal} src={imageCloseRule}></img>
        </div>
        <img id='rules' alt='rules' src={imageRules}></img>
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

import '../css/Game.css'
import rock from './assets/icon-rock.svg'
import scissors from './assets/icon-scissors.svg'
import paper from './assets/icon-paper.svg'
import { useState, useEffect } from 'react'

const Game = (props) => {

    const possibleAnswers = ['rock', 'paper', 'scissors']
    const [answer, setAnswer] = useState(null)
    const [opponentAnswer, setOpponentAnswer] = useState(null)
    const [winner, setWinner] = useState(null)
    const [restartButton, setRestartButton] = useState(false)
    const [matchCounter, setMatchCounter] = useState(0)

    const handleClick = (event) => {
        props.startGame();
        setAnswer(event.target.id)
        generateOpponentAnswer()
    }

    const generateOpponentAnswer = () => {
        var randomNumber = (Math.floor(Math.random() * possibleAnswers.length))
        setOpponentAnswer(possibleAnswers[randomNumber])
        setMatchCounter(matchCounter + 1)
    }

    useEffect(() => {
        if (matchCounter === 0) return

        switch(answer + opponentAnswer) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setWinner('YOU WIN')
                setTimeout(() => {
                    props.addScore()
                }, 1500)
                break
            case 'scissorsrock':
            case 'rockpaper':
            case 'paperscissors':
                setWinner('YOU LOSE')
                setTimeout(() => {
                    props.subtractScore()
                }, 1500)
                break
            default:
                setWinner("DRAW")
                break
        }
    }, [matchCounter])

    useEffect(() => {
         if (matchCounter === 0) return
         setTimeout(() => {
            setRestartButton(true) 
        }, 1500)
    }, [matchCounter])
    
    const restart = () => {
        setRestartButton(false)
        props.startGame();
    }

    return(
        <div className='game'>
            { props.gameStarted === false &&
            <div id='icon-container'>
                <img onClick={handleClick} alt='paper' className='icon icon-answer' id='paper' src={paper} />
                <img onClick={handleClick} alt='scissors' className='icon icon-answer' id='scissors' src={scissors} />
                <img onClick={handleClick} alt='rock' className='icon icon-answer' id='rock' src={rock} />
            </div>
            }
            { props.gameStarted &&
            <div id='game-inprogress'>
                <div className='answer' id='your-choice'>
                    <h2>YOU PICKED</h2>
                    <div className='answer-icon-container' id='answer-animation'>
                        <img className='icon-large' id={`${answer}`} alt={answer} src={require(`./assets/icon-${answer}.svg`).default}></img>
                    </div>
                </div>
                {restartButton && <RestartGame restart={restart} winner={winner}/> }
                <div className='answer' id='opponent-choice'>
                    <h2>THE HOUSE PICKED</h2>
                    <div className='answer-icon-container' id='opponent-animation'>
                        <img className='icon-large' id={`${opponentAnswer}`} alt={opponentAnswer} src={require(`./assets/icon-${opponentAnswer}.svg`).default}></img>
                    </div>
                </div>
            </div>}
        </div>
    )
}

const RestartGame = (props) => {
    const updateRestartGame = () => {
        props.restart()
    }

    return (
        <div id='restart-game'>
            <h1>{props.winner}</h1>
            <button id='restart-game-button' onClick={updateRestartGame}>PLAY AGAIN</button>
        </div>
    )
}

export default Game
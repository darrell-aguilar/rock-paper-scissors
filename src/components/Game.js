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

    const handleClick = (event) => {
        props.startGame();
        setAnswer(event.target.id)
        generateOpponentAnswer()
    }

    const generateOpponentAnswer = () => {
        var randomNumber = (Math.floor(Math.random() * possibleAnswers.length))
        setOpponentAnswer(possibleAnswers[randomNumber])
    }

    useEffect(() => {
        switch(answer + opponentAnswer) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setWinner('You Win! 😀')
                break
            case 'scissorsrock':
            case 'rockpaper':
            case 'paperscissors':
                setWinner('Opponent Wins 🤨')
                break
            default:
                setWinner("It's a draw 😑")
                break
        }
    }, [answer, opponentAnswer])

    useEffect(() => {
        if (winner === 'You Win! 😀') {
            setTimeout(() => {
                props.addScore()
            }, 3000)
        }
    }, [winner])
    
    const restart = () => {
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
                <div className='answer' id='opponent-choice'>
                    <h2>THE HOUSE PICKED</h2>
                    <div className='answer-icon-container' id='opponent-animation'>
                    <   img className='icon-large' id={`${opponentAnswer}`} alt={opponentAnswer} src={require(`./assets/icon-${opponentAnswer}.svg`).default}></img>
                    </div>
                </div>
                {/* <p>You have chosen {answer}</p>
                <p>Your opponent has chosen {opponentAnswer}</p>

                <p>{winner}</p>
                <button onClick={restart}>Play Again!</button> */}
            </div>}
        </div>
    )
}

export default Game
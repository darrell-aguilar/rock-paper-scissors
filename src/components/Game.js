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
            case 'scissorsrock':
            case 'rockscissors':
            case 'paperrock':
                setWinner('You Win! 😀')
                break
            case 'scissorsrock':
            case 'rockpaper':
            case 'paperscissors':
                setWinner('Opponent Wins 🤨')
                break
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                setWinner("It's a draw 😑")
                break
        }
    }, [opponentAnswer])

    useEffect(() => {
        if (winner === 'You Win! 😀') {
            props.addScore()
        }
    }, [winner])
    
    const restart = () => {
        props.startGame();
    }

    return(
        <div className='game'>
            { props.gameStarted === false &&
            <div id='icon-container'>
                <img onClick={handleClick} alt='paper' className='icon' id='paper' src={paper} />
                <img onClick={handleClick} alt='scissors' className='icon' id='scissors' src={scissors} />
                <img onClick={handleClick} alt='rock' className='icon' id='rock' src={rock} />
            </div>
            }
            {props.gameStarted &&
            <div id='game-inprogress'>
                {/* <p>You have chosen {answer}</p>
                <p>Your opponent has chosen {opponentAnswer}</p>

                <p>{winner}</p>
                <button onClick={restart}>Play Again!</button> */}
            </div>}
        </div>
    )
}

export default Game
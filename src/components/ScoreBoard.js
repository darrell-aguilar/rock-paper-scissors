import '../css/ScoreBoard.css'
import logo from './assets/logo.svg';

const ScoreBoard = (props) => {
    return(
        <div id="parent-nav-container">
            <div className='nav-container'>
                <div className="container-items" id='title'><img className='item' alt='logo' src={logo}/></div>
                <div className="container-items" id='score'>
                    <div className='score-container item'>
                        <h5>SCORE</h5>
                        <p>{props.score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ScoreBoard;
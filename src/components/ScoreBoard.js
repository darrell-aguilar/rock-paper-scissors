import '../css/ScoreBoard.css'
import logo from './assets/logo.svg';

const ScoreBoard = (props) => {
    return(
        <div id="parent-nav-container">
            <div className='nav-container'>
                <div className="container-items" id='title'><img className='item' id='logo' alt='logo' src={logo}/></div>
                <div className="container-items" id='score'>
                    <div className='score-container item'>
                        <h4>SCORE</h4>
                        <p>{props.score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ScoreBoard;
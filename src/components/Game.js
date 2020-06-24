import React from 'react';
import BackgroundTriangle from '../images/bg-triangle.svg';
export const Game = () => {
    return (
        <div className="game">
            <img src={BackgroundTriangle} className="bg-triangle" alt="Background"/>
            <div className="option">
                <i class="icon rock fas fa-hand-rock" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="option">
                <i class="icon paper fas fa-hand-paper" />
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="option">
                <i class="icon scissors fas fa-hand-scissors" />
            </div>

            
        </div>
    )
}


export default Game;
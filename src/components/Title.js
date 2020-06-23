import React from 'react';
import Score from './Score';
const Title = () => {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <div>ROCK</div>
                    <div>PAPER</div>
                    <div>SCISSORS</div>
                </div>
                <Score />
            </div>
        </div>
    )
}

export default Title;

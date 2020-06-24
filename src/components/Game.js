import React, { Fragment } from 'react';
import BackgroundTriangle from '../images/bg-triangle.svg';
import Result from '../components/Result';
const choices = ["rock","paper","scissors"];

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            playerChoice: null,
            robotChoice: null,
            playerScore: 0,
            robotScore:0,
            playAgain: false,
            match: null
        }
    }  

    choseRock = () => {
        this.setState({playerChoice: "rock"});
        this.playMatch();
    }
    chosePaper = () => {
        this.setState({playerChoice: "paper"})
        this.playMatch();
    }

    choseScissors = () => {
        this.setState({playerChoice: "scissors"})
        this.playMatch();
    }

    playMatch() {
        this.setState({ robotChoice: choices[Math.floor(Math.random()*choices.length)]})
        const {playerChoice,robotChoice} = this.state;
        switch(playerChoice) {
            case "rock": 
                        if(robotChoice === "rock") {
                            this.setState({match: "draw"});
                        }
                        else if(robotChoice === "paper") {
                            this.setState({
                                match: "lost", 
                                robotScore: this.state.robotScore + 1 
                            });
                        }
                        else {
                            this.setState({
                                match: "won",
                                playerScore: this.state.playerScore + 1
                            })
                        }
                        break;
        case "paper": 
                    if(robotChoice === "paper") {
                        this.setState({match: "draw"});
                    }
                    else if(robotChoice === "scissors") {
                        this.setState({
                            match: "lost", 
                            robotScore: this.state.robotScore + 1 
                        });
                    }
                    else {
                        this.setState({
                            match: "won",
                            playerScore: this.state.playerScore + 1
                        })
                    }
                    break;
        case "scissors": 
                    if(robotChoice === "scissors") {
                        this.setState({match: "draw"});
                    }
                    else if(robotChoice === "rock") {
                        this.setState({
                            match: "lost", 
                            robotScore: this.state.robotScore + 1 
                        });
                    }
                    else {
                        this.setState({
                            match: "won",
                            playerScore: this.state.playerScore + 1
                        })
                    }
                    break;
            default: ;
        }
    }

    render() {
        return (
            <Fragment>
                <img className="bg-triangle" src={BackgroundTriangle} alt="background" />

                <div className="option rock" onClick={this.choseRock}>
                    <i className="icon fas fa-hand-rock"/>
                </div>
                <div className="option paper" onClick={this.chosePaper}>
                    <i className="icon fas fa-hand-paper"/>
                </div>
                <div className="option scissors" onClick={this.choseScissors}>
                    <i className="icon fas fa-hand-scissors"/>
                </div>

                { this.state.match !== null && <Result state={this.state} />}
            </Fragment>
        )
    }
}


export default Game;
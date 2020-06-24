import React from 'react'

export const Result = (props) => {
    return (
        <div>
            {props.state.match === "won" && console.log( + "won")}
            {props.state.match === "lost" && console.log("lost")}
            {props.state.match === "match" && console.log("draw")}
        </div>
    )
}

export default Result;
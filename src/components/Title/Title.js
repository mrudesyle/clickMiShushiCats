import React from "react";

const Title = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
        <li className="title"><h2>Kitty Sushi Memory Game</h2></li>
        <li className="score">Score: <span>{props.score}</span> | Top Score: {props.topScore}</li>
        <li className="message"><span>{props.message}</span></li>
        </ul>
    </div>
);

export default Title;
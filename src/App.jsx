import { DemonstratingProps } from "./components/demo/DemonstratingProps";
import React, { useState } from "react";

function App() {
    const [player1Score, setPlayer1Score] = React.useState(0);
    const [player2Score, setPlayer2Score] = React.useState(0);
    const [lastDiceRoll, setLastDiceRoll] = React.useState("-");
    const [gameDuration, setGameDuration] = useState(30);
    const [turnTotal, setTurnTotal] = useState(0);
    const [playerTurn, setPlayerTurn] = useState("P1");
    const [player1Turn, setPlayer1Turn] = useState(true);

    // function gameTurn() {
    //     const resultP1Score = player1score + turnTotal;
    //     const resultP2Score = player2score + turnTotal;

    //     if (playerTurn == "P1") {
    //         setPlayer1score(resultP1Score);

    //         if
    //     }

    return (
        <div>
            <h1>App component</h1>
            <DemonstratingProps />
            <h3>
                {player1Turn ? "playing " : ""} P1 score: {player1Score}
            </h3>
            <h3>
                {player1Turn ? "" : "playing"} P2 score: {player2Score}
            </h3>
            <h3></h3>

            <section>
                <button className="roll-button">Roll!</button>
                <h4>Last Roll: {lastDiceRoll}</h4>
                <h4>Turn Total: {turnTotal}</h4>
            </section>
        </div>
    );
}

export default App;

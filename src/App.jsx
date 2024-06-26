import React, { useState } from "react";
import diceRoll from "./components/diceRoll";

function App() {
    const [player1Score, setPlayer1Score] = React.useState(0);
    const [player2Score, setPlayer2Score] = React.useState(0);
    const [lastDiceRoll, setLastDiceRoll] = React.useState("-");
    const [gameDuration, setGameDuration] = useState(30);
    const [turnTotal, setTurnTotal] = useState(0);
    const [player1Turn, setPlayer1Turn] = useState(true);

    function handleRoll() {
        const roll = diceRoll();
        if(roll === 1){
            setTurnTotal(0)
            setPlayer1Turn((prevValue) => !prevValue)
        } else {
        setTurnTotal((prevTotal) => prevTotal + roll);
        }
        setLastDiceRoll(roll);
    }

    function handleStick() {
        setTurnTotal(0);
        if (player1Turn) {
            setPlayer1Score((prevScore) => prevScore + turnTotal);
        } else {
            setPlayer2Score((prevScore) => prevScore + turnTotal);
        }
        setPlayer1Turn((prevalue) => !prevalue);
    }

    return (
        <div>
            <h1>Pig Game</h1>
            <h3>
                {player1Turn ? "playing " : ""} P1 score: {player1Score}
            </h3>
            <h3>
                {player1Turn ? "" : "playing"} P2 score: {player2Score}
            </h3>
            <h3></h3>

            <section>
                <button className="roll-button" onClick={handleRoll}>
                    Roll!
                </button>
                <h4>Last Roll: {lastDiceRoll}</h4>
                <h4>Turn Total: {turnTotal}</h4>
                <button className="stick-button" onClick={handleStick}>
                    Stick!
                </button>
            </section>
        </div>
    );
}

export default App;

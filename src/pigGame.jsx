import { useState } from "react";

export function pigGame() {
    const [gameDuration, setGameDuration] = useState(30)
    const [turnTotal, setTurnTotal] = useState(0);
    const [player1score, setPlayer1score] = useState(0);
    const [player2score, setPlayer2score] = useState(0);
    const [playerTurn, setPlayerTurn] = useState("P1")

    function gameTurn() {
        const resultP1Score = player1score + turnTotal;
        const resultP2Score = player2score + turnTotal;

        if (playerTurn == "P1") {
            setPlayer1score(resultP1Score);

            if 
        }
    }


}

// Description - turn total

// Add tracking and display of the current turn total.

// Acceptance Criteria

// React useState is used to track a current turn total.

// The turn total is a number which starts as 0.

// The turn total is displayed when the component is rendered, along with a label “Turn total: “


// Description - whose turn

// Add tracking and display of whose turn it is.

// Acceptance Criteria

// React useState is used to track whose turn it is.

// It is a string, with possible values “P1” or “P2”

// It starts as “P1”

// The text “(Playing)” should be displayed after the current player’s score, when the component renders.
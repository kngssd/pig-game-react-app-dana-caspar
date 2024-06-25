import { DemonstratingProps } from "./components/demo/DemonstratingProps";
import React from 'react'

function App() {
    const [player1Score, setPlayer1Score] = React.useState(0)
    const [player2Score, setPlayer2Score] = React.useState(0)
    const [lastDiceRoll, setLastDiceRoll] = React.useState('-')
    return (
        <div>
            <h1>App component</h1>
            <DemonstratingProps />
            <h3>P1 score: {player1Score}</h3>
            <h3>P2 score: {player2Score}</h3>
            <section>
                <button className='roll-button'>Roll!</button>
                <h4>Last Roll: {lastDiceRoll}</h4>
            </section>
        </div>
    );
}

export default App;

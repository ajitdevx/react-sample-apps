import { useRef, useState } from "react";
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
    const [dice, setDice] = useState(() => generateAllNewDice());
    const gameWon = dice.every(d => d.value == dice[0].value
        && d.isHeld);
    const buttonRef = useRef(null);
    if (gameWon) buttonRef.current.focus({ focusVisible: true });

    function generateAllNewDice() {
        return new Array(10).fill(0)
            .map(() => ({
                id: nanoid(),
                value: 5, //Math.ceil(Math.random() * 6),
                isHeld: false
            }))
    }

    const rollDice = () => {
        setDice(prevDice => prevDice.map(die =>
            die.isHeld && !gameWon
                ? die
                : {
                    ...die,
                    value: Math.ceil(Math.random() * 6),
                    isHeld: gameWon ? false : die.isHeld
                }));
    }

    const hold = (id) => {
        const updatedDice = dice.map((item => (
            item.id === id ? { ...item, isHeld: !item.isHeld } : item
        )));

        setDice(updatedDice);
    }

    const diceElements = dice.map((item) => (
        <Die key={item.id} value={item.value} isHeld={item.isHeld} id={item.id} hold={hold} />
    ))

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite">
                {gameWon && <p>Congratulations! You Won!, Press New Game to start again</p>}
            </div>
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are the same. Click each die to freeze it as its current value between rolls
            </p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button ref={buttonRef} onClick={rollDice} className="roll">
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main >
    )
}


import { useState } from 'react';
import Key from './Key'
import LanguageElement from './LanguageElement';
import { languages } from './languages'
import Letter from './Letter';
import clsx from 'clsx';
import { getFarewellText, getWord } from './util';
import Confetti from 'react-confetti'

export default function App() {
    const [currentWord, setCurrentWord] = useState(() => getWord());
    const [guessedLetters, setGuessedLetter] = useState([])

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const currentLetters = [...currentWord];
    const rightGuessCount = currentLetters.filter(letter =>
        guessedLetters.includes(letter)
    ).length;

    const wrongGuessCount = guessedLetters.length - rightGuessCount;
    const isGameWon = rightGuessCount === currentLetters.length;
    const isGameLost = wrongGuessCount >= 8;
    const isGameOver = isGameWon || isGameLost;

    const addGuessedLetter = (letter) => {
        setGuessedLetter(prev => (
            prev.includes(letter)
                ? prev
                : [...prev, letter]
        ))
    }

    const languageElements = languages
        && languages.map((language, index) => {

            const className = clsx({
                'lost': index < wrongGuessCount
            })

            return <LanguageElement
                className={className}
                key={language.name}
                name={language.name}
                backgroundColor={language.backgroundColor}
                color={language.color} />
        });

    const letterElements = currentLetters.map((char, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(char);

        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(char) && "missed-letter"
        )
        return <Letter
            className={letterClassName}
            key={index}
            value={shouldRevealLetter && char.toUpperCase()} />
    })

    const keyElements = [...alphabet].map(char => {

        const className = clsx({
            'key': true,
            'right': guessedLetters.includes(char) && currentLetters.includes(char),
            'wrong': guessedLetters.includes(char) && !currentLetters.includes(char)
        })

        return <Key
            className={className}
            key={char}
            value={char}
            isGameOver={isGameOver}
            addGuessedLetter={() => addGuessedLetter(char)} />
    });


    const renderGameStatus = () => {
        if (!isGameOver) {
            return (
                <div className={wrongGuessCount > 0 ? "game-status farewell" : "game-status"}>
                    <p>{
                        wrongGuessCount > 0 &&
                        getFarewellText(languages[wrongGuessCount - 1].name)
                    }</p>
                </div>
            )
        }

        if (isGameWon) {
            return (
                <div className="game-status won">
                    <p><strong>You win!</strong></p>
                    <p><small>Well done! 🎉</small></p>
                </div>
            )
        }
        else {
            return (
                <div className="game-status lost">
                    <p><strong>Game over!</strong></p>
                    <p><small>You lose! Better start learning Assembly 😭</small></p>
                </div>
            )
        }
    }

    const newGame = () => {
        setCurrentWord(getWord());
        setGuessedLetter([])
    }

    return (
        <main>
            <section aria-live='polite' role='status' className="game-header">
                {isGameWon && <Confetti />}
                <h2>Assembly: Endgame</h2>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>

                {renderGameStatus()}
            </section>

            <section aria-live="polite" className="game-languages">
                {languageElements}
            </section>

            <section aria-live="polite" className="game-word">
                {letterElements}
            </section>

            <section aria-live="polite" className="game-keys">
                {keyElements}
            </section>

            {
                isGameOver && (
                    <section className='game-footer'>
                        <button onClick={newGame}>New Game</button>
                    </section>
                )
            }

        </main>
    )
}

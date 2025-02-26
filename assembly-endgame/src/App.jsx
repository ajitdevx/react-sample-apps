import { useState } from 'react';
import Key from './Key'
import LanguageElement from './LanguageElement';
import { languages } from './languages'
import Letter from './Letter';
import clsx from 'clsx';

export default function App() {
    const [currentWord, setCurrentWord] = useState('react');
    const [guessedLetters, setGuessedLetter] = useState([])

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const currentLetters = [...currentWord];
    const rightGuessCount = currentLetters.filter(letter =>
        guessedLetters.includes(letter)
    ).length;

    const isGameWon = rightGuessCount == currentLetters.length;
    const wrongGuessCount = guessedLetters.length - rightGuessCount;
    const isGameLost = wrongGuessCount > currentLetters.length || !isGameWon;
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
        const isGuessedLetterCorrect = guessedLetters.includes(char);
        return <Letter
            key={index}
            value={isGuessedLetterCorrect && char.toUpperCase()} />
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
            addGuessedLetter={() => addGuessedLetter(char)} />
    })

    return (
        <main>
            <section className="game-header">
                <h2>Assembly: Endgame</h2>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>

                <div className="game-status">
                    <p><i>"Farewell HTML & CSS"</i></p>
                </div>
            </section>

            <section className="game-languages">
                {languageElements}
            </section>

            <section className="game-input-letter">
                {letterElements}
            </section>

            <section className="game-keys">
                {keyElements}
            </section>

            {
                isGameOver && (
                    <section className='game-footer'>
                        <button>New Game</button>
                    </section>
                )
            }

        </main>
    )
}

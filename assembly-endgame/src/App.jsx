import Key from './Key'
import LanguageElement from './LanguageElement';
import { languages } from './languages'

export default function App() {
    const [currentWord, setCurrentWord] = useState('Apple');

    const currentWordCharacter = [...currentWord]
    console.log(currentWordCharacter)

    const languageElements = languages && languages.map(language => (
        <LanguageElement
            key={language.name}
            name={language.name}
            backgroundColor={language.backgroundColor}
            color={language.color} />
    ));

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

            <section className='game-footer'>
                <button>New Game</button>
            </section>
        </main>
    )
}
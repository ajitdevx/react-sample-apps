import Key from './Key'

export default function App() {
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
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
                <span>React</span>
                <span>Typescript</span>
                <span>Node.js</span>
                <span>Python</span>
                <span>.NET</span>
                <span>Assembly</span>
            </section>

            <section className="game-input-keys">
                <input type="text" value="A" />
                <input type="text" value="B" />
                <input type="text" value="C" />
                <input type="text" value="B" />
                <input type="text" value="B" />
            </section>

            <section className="game-keys">
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
                <Key value="A" />
            </section>

            <section className='game-footer'>
                <button>New Game</button>
            </section>
        </main>
    )
}
export default function App() {
    return (
        <main>
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are the same. Click each die to freeze it as its current value between rolls
            </p>
            <div className="dice">
                <button className="die">1</button>
                <button className="die">2</button>
                <button className="die">3</button>
                <button className="die">4</button>
                <button className="die">5</button>
                <button className="die">1</button>
                <button className="die">2</button>
                <button className="die">3</button>
                <button className="die">4</button>
                <button className="die">5</button>
            </div>

            <button>Roll</button>
        </main>
    )
}
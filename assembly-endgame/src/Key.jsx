export default function Key(prop) {

    return (
        <button
            className={prop.className}
            disabled={prop.isGameOver}
            aria-disabled={prop.isGameOver}
            aria-label={`Label ${prop.value}`}
            onClick={prop.addGuessedLetter}>{prop.value}</button>
    )
}
export default function Key(prop) {

    return (
        <button
            className={prop.className}
            onClick={prop.addGuessedLetter}>{prop.value}</button>
    )
}
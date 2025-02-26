export default function Die(prop) {

    return (
        <button
            className={prop.isHeld ? "die held" : "die"}
            aria-pressed={prop.isHeld}
            onClick={() => prop.hold(prop.id)}
            aria-label={`Die with value ${prop.value}, ${prop.isHeld ? "held" : "not held"}`}
        >{prop.value}</button>
    )
}
import TrollFaceIcon from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img src={TrollFaceIcon} alt="Brand" className="brand" />
            <h2>Meme Generator</h2>
        </header>
    )
}
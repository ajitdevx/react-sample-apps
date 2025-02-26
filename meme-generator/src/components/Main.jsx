import { useEffect, useState } from "react"

export default function Main() {
    const [memes, setMemes] = useState([])

    const [meme, setMeme] = useState({
        topText: "Shut up",
        bottomText: "And take my money",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    });

    const getMemes = () => {
        const uri = "https://api.imgflip.com/get_memes";
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                data.data.success ?? setMemes(data.data.memes)
            });
    }

    useEffect(() => {
        getMemes();
    }, [])

    const handleChange = (event) => {
        const { value, name } = event.currentTarget;
        setMeme(prev => ({ ...prev, [name]: value }))
    }

    const handleClick = () => {
        const newMeme = memes[Math.floor(Math.random() * memes.length)];
        setMeme(prev => ({
            ...prev,
            imageUrl: newMeme.url
        }))
    }

    const { topText, bottomText, imageUrl } = meme;

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={imageUrl} alt="Meme" />
                <span className="top">{topText}</span>
                <span className="bottom">{bottomText}</span>
            </div>
        </main>
    )
}
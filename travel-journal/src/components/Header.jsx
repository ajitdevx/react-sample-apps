import icon from '../assets/globe.png'

export default function Header() {
    return (
        <header>
            <img src={icon} alt="globe" className='navbar--brand' />
            <h1>my travel journal.</h1>
        </header>
    )
}
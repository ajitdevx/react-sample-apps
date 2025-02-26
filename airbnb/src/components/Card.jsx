import Star from '../assets/Star.png'
import CardImage from '../assets/image 12.png'

export default function Card({ coverImg, rating, reviewCount, price, location, title }) {
    return (
        <>
            <div className="card">
                <img src={CardImage} alt="card--image" />
                <div className="card--body">
                    <div className="card--stats">
                        <img src={Star} alt="Star" className="card--star" />
                        <span>{rating}</span>
                        <span className="gray">({reviewCount})</span>
                        <span className="gray">{location}</span>
                    </div>
                    <div className="card--info">
                        <p className="card--text">{title}</p>
                        <p><b>From ${price}</b> / person</p>
                    </div>
                </div>
            </div>
        </>
    )
}
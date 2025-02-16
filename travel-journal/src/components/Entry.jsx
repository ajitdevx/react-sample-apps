import imgSrc from '../assets/p-japan.jpg'
import marker from '../assets/marker.png'

export default function Entry(props) {
    const { item } = props;
    return (
        <article>
            <div className="image--container">
                <img src={imgSrc} alt={item.img.alt} className="image" />
            </div>
            <div className='text--container'>
                <img src={marker} alt="Marker" className='marker' />
                <span className="country">{item.country}</span>
                <a href={item.googleMapsLink} className='map-link'>View on Google Maps</a>
                <h2 className='title'>{item.title}</h2>
                <p className='dates'>{item.dates}</p>
                <p className='text'>{item.text}</p>
            </div>
        </article>
    )
}
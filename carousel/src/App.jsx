import image1 from './assets/images/item-1.jpeg'
import image2 from './assets/images/item-2.jpeg'
import image3 from './assets/images/item-3.jpeg'
import image4 from './assets/images/item-4.jpeg'
import image5 from './assets/images/item-5.jpeg'
import image6 from './assets/images/item-6.jpeg'
import image7 from './assets/images/item-7.jpeg'
import image8 from './assets/images/item-8.jpeg'
import image9 from './assets/images/item-9.jpeg'
import image10 from './assets/images/item-10.jpeg'
import './app.css'
import { useState } from 'react'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (dir) => {
    if (dir == 'prev') {
      setCurrentImageIndex(((currentImageIndex - 1 + images.length) % images.length));
    }
    else {
      setCurrentImageIndex((((currentImageIndex + 1) % images.length)));
    }
  }

  return (
    <div className='app'>
      <div className="carousel-container">
        <button className='prev' onClick={() => handleClick('prev')}>❮</button>
        <div className="carousel-image">
          <img src={images[currentImageIndex]} alt="Carousel Image" />
        </div>
        <button className='next' onClick={() => handleClick('next')}>❯</button>
      </div>
    </div>
  )
}

export default App;
import { useState } from "react";


function App() {

  const colors = ['green', 'red', 'yellow', 'orange', 'rgba(133,122,200)', '#Fe5tge', 'rgba(113,432,200)'];

  const [color, setColor] = useState('green')

  const backgroundColor = {
    backgroundColor: color
  }


  const handleChangeColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length)
    setColor(colors[randomNumber])
  }

  const handleSetHexColor = () => {
    const hexaColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(hexaColor)
  }

  return (
    <div className="app" style={ backgroundColor }>
      <div className="container">
        <h2>
          Background Color: {' '}
          <span className="color">{color}</span>
        </h2>

        <button className="btn btn-launch" onClick={handleChangeColor}>Change Colors</button>
        <button className="btn btn-launch" onClick={handleSetHexColor}>Set Hex Colors</button>
      </div>
    </div>
  )
}

export default App;
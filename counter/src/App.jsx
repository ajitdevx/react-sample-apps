import { useEffect, useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    let newColor = 'black';
    if(counter > 0) newColor = 'green';
    else if(counter < 0) newColor = 'red'
    return setColor(newColor);
  }, [counter]);

  return (
    <div className="app">
      <div className="container">
        <h1>Counter</h1>
        
        <span id="value" style={{ color: color }}> {counter}</span>

        <div className="btn-container">
          <button className="btn btn-launch" onClick={() => setCounter(counter - 1)}>Decrease</button>
          <button className="btn btn-launch" onClick={() => setCounter(0)}>Reset</button>
          <button className="btn btn-launch" onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
      </div>
    </div>
  )

}
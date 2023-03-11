import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

/**
 * Default entry point.
 */
const App: React.FC<{title: string}> = (props: {title: string}) => {
  const [number, setNumber] = useState(0);
  
  return (
    <div className="App">
      <p>{props.title}</p>
      <h1>Test Title for the page</h1>
      <img width="200" height="200" src="https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/Slave_Knight_Gael_Buffing.jpg" alt="Gael" />
        <p>The number is: {number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
    </div>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App(props: { title: string }) {
  return (
    <div className="App">
      <p>{props.title}</p>
    </div>
  )
}

export default App;

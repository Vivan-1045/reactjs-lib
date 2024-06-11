import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , SetCounter] = useState(0);
  


  const AdjustVolUp = () => {
    counter ++;
    SetCounter(counter++);

  }
  const AdjustVolDown = () => {
    counter --;
    SetCounter(counter--);
  }


  return(
    
    <>
      <h1>Hii Developers❤️</h1>
      <h3>Volume : {counter}%</h3>
      <button onClick = {AdjustVolUp}>Up </button>
      <br/>
      <button  onClick = {AdjustVolDown}>Down </button>

    </>
  )
}

export default App

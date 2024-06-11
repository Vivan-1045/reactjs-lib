import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cardcomp from './newcomponants/cardcomp'
import SignIn from './newcomponants/signin'
import Price from './newcomponants/pricingtable'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     {/* <SignIn/> */}

    
     {/* <h1 className='bg-green-500 text-black rounded-xl p-4 font-medium mb-8 bg-green-400 shadow-lg shadow-green-300/50'>Mohit</h1>
     <Cardcomp username = "Mohit" btn = "know more"/>
     <br />
     <Cardcomp username = "Rohit" btn="Hitman"/> */}

    <Price/>
    </>
  )
}

export default App

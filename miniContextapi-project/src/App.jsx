import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Account from './componants/Account'
import Login from './componants/login'



function App() {


  return (
    <UserContextProvider>
     <h1 className='font-bold'>Hii folks Login here ❤️</h1>
     <Login/>
     <Account/>
    </UserContextProvider>
  )
}

export default App

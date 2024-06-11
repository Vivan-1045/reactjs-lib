import { useState } from 'react'
import Product from './componants.jsx/viewproduct'
import Cart from './componants.jsx/Cart'
import Buy from './componants.jsx/Buy'
import Nav from './componants.jsx/navbar'





function App() {
  const [count, setcount] = useState(0)

  return (
    <>
    <Nav/>
    <Product/>
    {/* <Cart/> */}
    {/* <Buy/> */}
  
    </>
  )
}

export default App

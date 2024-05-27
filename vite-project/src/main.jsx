import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function DumApp(){
  return(
    <div>
      <h1>This is Dummy App</h1>
    </div>
  )
}

// const dummyElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   Children : 'Click here to visit Google'
// }
const user = 'frontend developer'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
 
const newElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'hit me to visit google',
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <App/>
     
  </React.StrictMode>
    
   
   
)

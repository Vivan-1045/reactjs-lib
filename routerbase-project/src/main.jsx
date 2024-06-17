import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Root from './route.jsx'
import Home from './componants/home/home.jsx'
import About from './componants/About/About.jsx'
import Contact from './componants/contact/Contact.jsx'
import User from './User/User.jsx'
import Github, { githubinfo } from './componants/github/Github.jsx'

//To create Router method
// const router =  createBrowserRouter([
//   {
//     path : "/",
//     element : <Route/>,
//     children :[
//     { 
//       path : "",
//       element : <Home/>
//     },
//     {
//       path : "About",
//       element : <About/>
//     }
//     ,
//     {
//       path : "Contact",
//       element : <Contact/>
//     }
//   ]
//   }
// ])

//Another way to create router method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element ={<Root/>} >
      <Route path='' element = {<Home/>}/>
      <Route path='About' element = {<About/>}/>
      <Route path='Contact' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>
      <Route loader ={githubinfo} path='github' element = {<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

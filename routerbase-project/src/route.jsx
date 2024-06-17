import React from 'react'
import Header from './componants/header/header'
import Footer from './componants/footer/footer'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Root

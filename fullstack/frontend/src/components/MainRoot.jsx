import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {Outlet }from "react-router-dom"
const MainRoot = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainRoot

import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        <div className='main-content min-h-screen'>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default Layout
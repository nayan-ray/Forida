import React from 'react'
import "./logo.css"
import logoBanner from "../../../assets/7-fieldbrand.jpg"


const Logo = () => {
  return (
    <div className=''>
       <div className="logo-container">
           <img className="logo-img" src={logoBanner} alt="Logo" />

       </div>
    </div>
  )
}

export default Logo
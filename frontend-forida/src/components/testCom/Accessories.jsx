import React from 'react'
import accessoriesImg from "../../assets/14-0_thumb.jpg"

import "./accessories.css"

const Accessories = () => {
  return (
    <div className='accessories'>
        <img src={accessoriesImg} alt="" />
        <div className='accessories__text'>
            <h3>Accessories</h3>
        </div>
    </div>
  )
}

export default Accessories
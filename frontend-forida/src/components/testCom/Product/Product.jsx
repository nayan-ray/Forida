import React from 'react'
import "./product.css"
import banner from "../../../assets/banner21.jpg"

const Product = () => {
  return (

    <div>
        <div className="product-container">
             <img className='banner-img' src={banner} alt="Product" />
             <div className="product-cover">

             </div>
        </div>
       
    </div>

  )
}

export default Product
import React from 'react'
import "./card.css"
import cardImg from "../../../assets/lorem-ipsum-dolor (2).jpg"
import cardImg2 from "../../../assets/lorem-ipsum-dolor (1).jpg"
import { Search, Heart } from 'lucide-react';

const Card = () => {
  return (
    <div className='card'>

      <img className='mainImg' src={cardImg} alt="Card" />
      <img className='cover' src={cardImg2} alt="Cover" />
      <div className="content-box">
         <div className="content-wrapper">
            <div className="icon-item">
                <Search className="search-icon" />
            </div>    
            <div className="icon-item">
                <Heart className="search-icon" />
            </div>       
         </div>
      </div>
    </div>
  )
}

export default Card
import React from 'react'
import logoImg from "../../../assets/forida2-logo-15465079752 (1).jpg"

import { Menu } from 'lucide-react'
import DeskCart from '../icons/DeskCart'
import DeskSearch from '../icons/DeskSearch'

const Desktop = () => {
  return (
    <div className='w-full flex items-center justify-between'>
       <div>
           <img src={logoImg} alt="logo" /> 
       </div>
       <ul className='flex gap-7.5 text-white text-[16px] uppercase font-poppins cursor-pointer tracking-[1px] font-medium'>
          <li className='pb-0.75'>Home</li>
          <li className='pb-0.75'>Shop</li>
          <li className='pb-0.75'>Chairs</li>
          <li className='pb-0.75'>About us</li>
          <li className='pb-0.75'>Blog</li>
       </ul>
       <div className='flex gap-7.5 items-center text-white'>
         <DeskSearch />
         <DeskCart />
          <Menu size={20} color="#fff" strokeWidth={3} />
       </div>

    </div>
  )
}

export default Desktop
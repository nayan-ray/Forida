import React from 'react'
import { X, ChevronRight } from "lucide-react";
import productImg from "../../../assets/posuere-a-pede2.jpg"

const CartBody = () => {
  return (
    <div className='text-[#111] text-[14px]'>
        <h4 className="font-poppins text-[#111] text-[18px] font-semibold">
        Cart
       </h4>
       <ul className='list-none my-3'>
          <li className='flex gap-4'>
            <div className='w-1/3 relative before:content-[""] before:absolute before:z-10 before:transition-all before:duration-300 before:ease-in-out  before:w-0 before:h-full before:top-0 before:left-0 before:bg-productCover hover:before:w-full'>
                <img className='w-full h-full object-cover relative z-5' src={productImg} alt="product" />
            </div>
            <div className='w-2/3 flex items-start'>
                <div className='flex-1 flex-row gap-2'>
                   <h6 className='flex items-center'>
                     <div className='flex items-center'>
                        <span>1</span>
                        <span className='mx-1'>
                            <X size={12} color="#111" strokeWidth={5} />
                        </span>
                     </div>
                     <span className='hover:text-[#f70b38] cursor-pointer'>Posuere a, pede</span>
                   </h6>
                   <div>
                      <span className='text-[15px] mr-1  text-[#f70b38] font-poppins'>$240.00</span><span>/items</span>
                   </div>
                   <div>
                     <span className='mr-1'>Size:</span><span>S</span>
                   </div>
                   <div>
                     <span className='mr-1'>Color:</span><span>Blue</span>
                   </div>
                </div>
                <button className='mt-2 rounded-full flex items-center justify-center bg-black w-3 h-3 hover:bg-[#f70b38] cursor-pointer'>
                    <X size={8} color="#fff" strokeWidth={5} />
                </button>
                
            </div>
          </li>
       </ul>
       <ul className='list-none border-t border-solid border-black/10'>
          <li className=' border-b border-solid border-black/10 py-2'>
             <div className='flex items-center justify-between'>
                <span className=''>1items</span><span className='text-[15px] font-poppins text-[#f70b38]'>$240.00</span>
             </div>
             <div className='flex items-center justify-between'>
                <span>Shippings</span><span className='text-[15px] font-poppins text-[#f70b38]'>$240.00</span>
             </div>
          </li>
           <li className=' border-b border-solid border-black/10 py-2'>
             <div className='flex items-center justify-between'>
                <span className=''>Taxes:</span><span className='text-[15px] font-poppins text-[#f70b38]'>$240.00</span>
             </div>
             <div className='flex items-center justify-between'>
                <span>Total:</span><span className='text-[15px] font-poppins text-[#f70b38]'>$240.00</span>
             </div>
          </li>
       </ul>
       <div className='mt-4'>
          <button className='uppercase flex items-center gap-0.5 cursor-pointer bg-black px-4 py-1.5 hover:bg-[#f70b38] text-[13px'><span className='text-white'>Views Cart</span> <ChevronRight className='text-white' size={18} /></button>
       </div>
    </div>
  )
}

export default CartBody
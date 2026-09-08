import React from 'react'
import footerImg from "../../assets/bg_footer.png"
import footerBrand from "../../assets/payment_ft.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaVimeoV } from "react-icons/fa";
import { TiSocialGooglePlus } from 'react-icons/ti';
const Footer = () => {
  return (
    <div>
        <div
        style={{ backgroundImage: `url(${footerImg})` }}
        className="max-w-[1915.2px] mx-auto bg-center bg-cover bg-origin-border px-3.75 py-10 bg-no-repeat"
        >
            <div
            className="w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330 p-10"
            >
               
              <div className='text-white '>
                   <ul className='max-w-160 mx-auto list-none flex items-center justify-center gap-y-2  flex-wrap mb-10'>
                        <li className='text-[15px] font-poppins font-normal px-3.75 '> <span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Help</span> </li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Contact Us</span> </li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Shops</span> </li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'> <span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>My Accounts</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Orders</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Returns</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Gift Voucher</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>Company</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>About Us</span></li>
                        <li className='text-[15px] font-poppins font-normal px-3.75'><span className='border-b border-solid border-transparent hover:text-[#f70b38] hover:border-[#f70b38] cursor-pointer'>FAQs</span></li>
                   </ul>
                    <div className='flex items-center justify-center gap-3.75 flex-wrap'> 
                       <FaFacebookF className='text-white hover:text-[#f70b38]'/> <FaTwitter className='text-white hover:text-[#f70b38]' /> <FaInstagram className='text-white hover:text-[#f70b38]'/> <TiSocialGooglePlus className='text-white hover:text-[#f70b38]'/> <FaPinterest className='text-white hover:text-[#f70b38]'/> <FaVimeoV className='text-white hover:text-[#f70b38]'/>
                    </div>
                    
                    <p className='text-center text-[14px] mt-4 mb-6'>HotLine : 01424654145</p>
                     <div className='max-w-86 mx-auto'>
                        <img className='w-full h-full object-cover' src={footerBrand} alt="footer" />
                     </div>
                   

              </div>

            </div>
            
        </div>
        <div className='p-8.5'>
            <p className='text-center text-[14px] text-[#333] font-normal'>Copyright © 2026 <span className='text-[#f73b08] cursor-pointer'>FieldThemes</span>. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
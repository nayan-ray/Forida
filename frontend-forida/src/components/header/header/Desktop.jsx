import React, { useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BsCurrencyEuro, BsCurrencyDollar  } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { HiMiniKey } from "react-icons/hi2";
import logoImg from "../../../assets/forida2-logo-15465079752 (1).jpg";

import { Menu } from "lucide-react";
// import DeskCart from '../icons/DeskCart'
import DeskSearch from "../icons/DeskSearch";
import CartIcon from "../icons/CartIcon";
import { useClickOutside } from "../../../hook/DeteckClick";

const Desktop = () => {
   const [open, setOpen] = useState(false);
   const containerRef = useRef(null);
   useClickOutside(containerRef, () => setOpen(false));
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <ul className="flex gap-7.5 text-white text-[16px] uppercase font-poppins cursor-pointer tracking-[1px] font-medium">
        <li className="pb-0.75 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:invisible hover::before:transition-all hover:before:duration-300 hover:before:ease-in-out hover:before:w-full hover:before:visible ">Home</li>
        <li className="pb-0.75 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:invisible hover::before:transition-all hover:before:duration-300 hover:before:ease-in-out hover:before:w-full hover:before:visible ">Shop</li>
        <li className="pb-0.75 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:invisible hover::before:transition-all hover:before:duration-300 hover:before:ease-in-out hover:before:w-full hover:before:visible ">Chairs</li>
        <li className="pb-0.75 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:invisible hover::before:transition-all hover:before:duration-300 hover:before:ease-in-out hover:before:w-full hover:before:visible ">About us</li>
        <li className="pb-0.75 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:invisible hover::before:transition-all hover:before:duration-300 hover:before:ease-in-out hover:before:w-full hover:before:visible ">Blog</li>
      </ul>
      <div  className={`flex gap-7.5 items-center text-white ${open ? 'before:content-[""] before:fixed before:w-full before:h-full before:top-0 before:left-0 before:bg-transparent before:-z-20' : ''}`}>
        <DeskSearch mode={"3"} />
        <CartIcon mode={"9"} />
        <div ref={containerRef} className="relative ">
          <Menu size={20} color="#fff" strokeWidth={3} onClick={() => setOpen(!open)} />
          <div  className={`w-65 overflow-hidden transition-all duration-500 ease-in-out bg-white absolute top-[calc(100%+33px)] right-0 text-[#111] ${open ? 'h-61.75' : 'h-0 '} `}>
            <div  className="p-3 border-t-3 border-solid border-[#111] shadow-[5px_5px_10px_0_rgba(0,0,0,0.08)]">
              <div>
                <p className="font-poppins text-[15px]">English:</p>
                <div className="flex gap-2 mt-2 justify-center">
                 
                    <button className="flex items-center justify-center p-2.5 border-2 border-[#f70b38]">
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                        title="US"
                      />
                    </button>
                 
                  <button className="flex items-center justify-center p-2.5 border-2 border-[#f70b38]">
                      <ReactCountryFlag
                        countryCode="BD"
                        svg
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                        title="BGD"
                      />
                    </button>
                 
                  <button className="flex items-center justify-center p-2.5 border-2 border-[#f70b38]">
                      <ReactCountryFlag
                        countryCode="CA"
                        svg
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                        title="CAN"
                      />
                    </button>
                 
                 <button className="flex items-center justify-center p-2.5 border-2 border-[#f70b38]">
                      <ReactCountryFlag
                        countryCode="FR"
                        svg
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                        title="FRA"
                      />
                    </button>
                 
                 <button className="flex items-center justify-center p-2.5 border-2 border-[#f70b38]">
                      <ReactCountryFlag
                        countryCode="AU"
                        svg
                        style={{
                          width: "16px",
                          height: "auto",
                        }}
                        title="AUS"
                      />
                    </button>
                 
                </div>
              </div>
              <div className="mt-4">
                <p className="font-poppins text-[15px]">USD:</p>
                <div className="flex gap-2 mt-2">
                  <button className="flex items-center justify-center gap-0.5 px-4 py-1.5 border-2 border-[#111]">
                    <BsCurrencyEuro size={18}/>  <span className=" text-[16px]">EUR</span>
                 </button>
                  <button className="flex items-center justify-center gap-0.5 px-4 py-1.5 border-2 border-[#f70b38]">
                    <BsCurrencyDollar size={18}/>  <span className=" text-[16px]">USD</span>
                 </button>  
                 
                </div>
              </div>
               <div className="mt-4">
                  <p className="flex gap-1 items-center">
                      <HiMiniKey size={14}/>  <span className=" text-[14px]">Sign in</span>
                  </p>
                  <p className="flex gap-1 items-center">
                      <FaUserPlus size={14}/>  <span className=" text-[14px]">Create an account</span>
                  </p>
               </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;

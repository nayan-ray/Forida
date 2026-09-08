import React, { useEffect, useState } from "react";
import logoImg from "../../../assets/forida2-logo-15465079752 (1).jpg";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import MenuIcon from "../icons/MenuIcon";
import KeyIcon from "../icons/KeyIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Desktop from "./Desktop";


const Header = () => {
 const [showHeaderBackground, setShowHeaderBackground] = useState(false);


  useEffect(()=>{

      let ticking = false;

        const handleScroll = () => {

        if(ticking) return;

        ticking=true;

      
         window.requestAnimationFrame(()=>{
         const scrollY = window.scrollY;              
         setShowHeaderBackground(scrollY > 50);

         ticking=false;


       })
       
         
      }

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      }


  },[])



  return (
    <header className={`h-auto fixed left-0 right-0 top-0 z-999 shadow-[0_5px_10px_rgba(0,0,0,0.25)] bg-black/90 ${showHeaderBackground ? 'lg:bg-black/60 lg:shadow-[0_5px_10px_rgba(0,0,0,0.25)]' : 'lg:bg-transparent lg:shadow-none lg:mt-3'}`}>
      <div className={`max-w-full mx-auto ${showHeaderBackground ? "px-0 pb-0" : "px-3.75 pb-7.5"} lg:px-3.75 lg:max-w-292.5 lg:h-22 lg:pb-0`}>
        <div className="desktop hidden lg:flex items-center h-full">
              <Desktop />
        </div>
        <div className="mobile lg:hidden">
          <div className={`py-7.5 flex justify-center items-center ${showHeaderBackground ? "hidden " : "block"}`}>
            <div className="max-w-75">
              {" "}
              <img className="w-full object-cover" src={logoImg} alt="Logo" />
            </div>
          </div>
          <div className="bg-white flex ">
            <MenuIcon />
            <SearchIcon />
            <CartIcon />
            <KeyIcon />
             <SettingsIcon />
          </div>
        </div>
      </div>
    
     
    </header>
  );
};

export default Header;

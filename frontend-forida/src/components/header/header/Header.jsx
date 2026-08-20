import React from "react";
import logoImg from "../../../assets/forida2-logo-15465079752 (1).jpg";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import MenuIcon from "../icons/MenuIcon";
import KeyIcon from "../icons/KeyIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Desktop from "./Desktop";


const Header = () => {
  return (
    <header className="bg-[#111] h-auto">
      <div className="max-w-full mx-auto px-3.75 lg:max-w-292.5 lg:h-22 pb-7.5 lg:pb-0">
        <div className="desktop hidden lg:flex items-center h-full">
              <Desktop />
        </div>
        <div className="mobile lg:hidden">
          <div className="py-7.5 flex justify-center items-center">
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

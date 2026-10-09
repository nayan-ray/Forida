import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../../assets/forida2-logo-15465079752 (1).jpg";
import SearchIcon from "../icons/SearchIcon";
import CartIcon from "../icons/CartIcon";
import MenuIcon from "../icons/MenuIcon";
import KeyIcon from "../icons/KeyIcon";
import SettingsIcon from "../icons/SettingsIcon";
import Desktop from "./Desktop";
import { IoIosArrowUp } from "react-icons/io";
import DeskSearch from "../icons/DeskSearch";
import { useClickOutside } from "../../../hook/DeteckClick";
import ReactCountryFlag from "react-country-flag";
import { BsCurrencyDollar, BsCurrencyEuro } from "react-icons/bs";

const Header = () => {
  const [showHeaderBackground, setShowHeaderBackground] = useState(false);
 


  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setShowHeaderBackground(scrollY > 50);

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`h-auto fixed left-0 right-0 top-0 z-999 shadow-[0_5px_10px_rgba(0,0,0,0.25)] bg-black/90 ${showHeaderBackground ? "lg:bg-black/60 lg:shadow-[0_5px_10px_rgba(0,0,0,0.25)]" : "lg:bg-transparent lg:shadow-none lg:top-4"}`}
      >
        <div
          className={`max-w-full mx-auto ${showHeaderBackground ? "px-0 pb-0" : "px-3.75 pb-7.5"} lg:px-3.75 lg:max-w-292.5 lg:h-22 lg:pb-0`}
        >
          <div className="desktop hidden lg:flex items-center h-full">
            <Desktop />
          </div>
          <div className="mobile lg:hidden">
            <div
              className={`py-7.5 flex justify-center items-center ${showHeaderBackground ? "hidden " : "block"}`}
            >
              <div className="max-w-75">
                {" "}
                <img className="w-full object-cover" src={logoImg} alt="Logo" />
              </div>
            </div>
            <div className="bg-white flex ">
              <MenuIcon />
              <DeskSearch mode={"2"} />
              <CartIcon mode={"8"} />
              <KeyIcon />
              <SettingsIcon />

              {/* <div ref={containerRef} className="relative inline-block">
                <SettingsIcon onClick={() => setOpen(!open)} />
                <div
                  className={`w-65 overflow-hidden transition-all duration-500 ease-in-out bg-white absolute top-[calc(100%+33px)] right-0 text-[#111] ${open ? "h-61.75" : "h-0 "} `}
                >
                  <div className="p-3 border-t-3 border-solid border-[#111] shadow-[5px_5px_10px_0_rgba(0,0,0,0.08)]">
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
                          <BsCurrencyEuro size={18} />{" "}
                          <span className=" text-[16px]">EUR</span>
                        </button>
                        <button className="flex items-center justify-center gap-0.5 px-4 py-1.5 border-2 border-[#f70b38]">
                          <BsCurrencyDollar size={18} />{" "}
                          <span className=" text-[16px]">USD</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed z-999 bottom-10 right-10 group ${showHeaderBackground ? "block" : "hidden"}`}
      >
        <div
          className="relative w-12 h-12 rounded-full border-2 border-solid border-black/70 cursor-pointer group-hover:border-[#f70b38]"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="flex flex-col items-center justify-center bg-black/70 absolute inset-0.75 rounded-full group-hover:bg-[#f70b38]">
            <IoIosArrowUp className="-mb-2 text-white w-8" />
            <IoIosArrowUp className="text-white w-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

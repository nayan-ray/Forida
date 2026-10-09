import React, { useRef, useState } from 'react'
import { Settings } from 'lucide-react'
import ReactCountryFlag from 'react-country-flag'
import { BsCurrencyDollar, BsCurrencyEuro } from 'react-icons/bs'
import { useClickOutside } from '../../../hook/DeteckClick'

const SettingsIcon = () => {
    const containerRef = useRef(null);
     const [open, setOpen] = useState(false);
    useClickOutside(containerRef, () => setOpen(false));
  return (
    // <div className="flex-1 flex items-center justify-center border-e border-[#ebebeb] py-4.5">
    //     <Settings size={14} color="#111" strokeWidth={3}/>
    // </div>

    <div ref={containerRef} className="flex-1 flex items-center justify-center border-e border-[#ebebeb] py-4.5 ">
                    <Settings size={14} color="#111" strokeWidth={3} onClick={() => setOpen(!open)} />
                    <div
                      className={`w-65 overflow-hidden transition-all duration-500 ease-in-out bg-white absolute top-[calc(100%+0px)] right-0 text-[#111] ${open ? "h-45.75" : "h-0 "} `}
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
                  </div>
  )
}

export default SettingsIcon
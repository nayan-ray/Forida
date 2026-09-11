import React, { useRef, useState } from "react";
import { useClickOutside } from "../../../hook/DeteckClick";

const SearchCom = () => {
  const [open, setOpen] = useState(false);
  const [borderColor, setBorderColor] = useState(true);
  const [value , setValue] =useState('');

  const containerRef = useRef(null);

  useClickOutside(containerRef, () => {
    setOpen(false);
    setBorderColor(false);
  });

  const handleSelect = ()=>{
     setOpen(!open);
     setBorderColor(true)
  }

  const items = [
    {
      id:1,
      title:"Green"
    },
     {
      id:1,
      title:"Red"
    },
     {
      id:1,
      title:"Yellow"
    },
     {
      id:1,
      title:"blue"
    },

  ]

  return (
    <div className="text-[#333]">
      <h4 className="font-poppins text-[18px] font-semibold">Search</h4>
      <div
        className={`border-2 border-solid mt-2 ${borderColor ? "border-amber-500" : "border-gray-300"}`}
        ref={containerRef}
        onClick={handleSelect}
      >
        <div className="relative">
          <button className="block w-full ">
            <div className="flex items-center justify-between px-4 py-2 text-[14px]">
              <span>{value.length ===  0 ? 'All Categories' : value}</span>
              <span>red</span>
            </div>
          </button>
          {open && (
            <ul  className="list-none border border-solid border-[#333] absolute w-full z-25 left-0 top-full max-h-70 overflow-y-scroll mt-0.5 text-[14px]">
              {items.map((item, index)=>{
                 return <li key={index} className={`px-4 py-1 ${value === item.title ? "bg-[#0e66a0f8] text-white" : ""} hover:bg-[#0e66a0f8] hover:text-white`} onClick={()=>setValue(item.title)}>{item.title}</li>
            
              })}
            
          </ul>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SearchCom;

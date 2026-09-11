import React, { useRef, useState } from "react";
import { useClickOutside } from "../../../hook/DeteckClick";

const SearchCom = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null)

   useClickOutside(containerRef, () => {
     setOpen(false);
   });

  return (
    <div className="text-[#333]">
      <h4 className="font-poppins text-[18px] font-semibold">Search</h4>
      <div className={`border-2 border-solid ${open ? "border-amber-500" : ""}`} ref={containerRef} onClick={()=>setOpen(true)}>
       
      </div>
    </div>
  );
};

export default SearchCom;

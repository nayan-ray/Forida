import React from "react";
import { ArrowLeftIcon, Menu } from "lucide-react";

const MenuIcon = () => {
  return (
    <div
      className="flex-1 flex items-center justify-center border-e border-[#ebebeb] py-4.5"
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      <Menu size={14} color="#111" strokeWidth={3} />

      <dialog id="my_modal_1" className="modal modal-start bg-black/50">
        <div className="modal-box w-70/100 transition-all duration-300 delay-200 relative overflow-visible">
          <ul>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">Home</li>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">Shop</li>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">Chairs</li>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">Sofa</li>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">About us</li>
            <li className="text-[16px] text-[#333333] font-semibold py-2 border-b border-solid border-[#111]/10 uppercase">Blog</li>
          </ul>
          <div className="modal-action">
            <form method="dialog" className="absolute top-2 -right-13 bg-white ">
              {/* if there is a button in form, it will close the modal */}
              <button className="p-3 ">
                <ArrowLeftIcon size={20} color="#111" strokeWidth={4} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MenuIcon;

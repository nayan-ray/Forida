import React from "react";
import { Menu } from "lucide-react";

const MenuIcon = () => {
  return (
    <div
      className="flex-1 flex items-center justify-center border-e border-[#ebebeb] py-4.5"
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      <Menu size={14} color="#111" strokeWidth={3} />

      <dialog id="my_modal_1" className="modal modal-end bg-black/50">
        <div className="modal-box  transition-all duration-300 delay-200 relative">
          <div className="p-4 ">Menu</div>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MenuIcon;

import React from 'react'
import { Search, X } from "lucide-react";


const DeskSearch = () => {
  return (
        <div
      className="flex-1 flex items-center justify-center  py-4.5"
      onClick={() => document.getElementById("my_modal_D2").showModal()}
    >
      <Search size={20} color="#fff" strokeWidth={3} />

      <dialog id="my_modal_D2" className="modal modal-end bg-[#333333]/50">
        <div className="modal-box overflow-y-visible transition-all duration-300 delay-200 relative flex gap-1 items-start bg-transparent p-0 shadow-none">
          <div className="modal-action mt-1 items-start transition-all duration-300 ease-in-out">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="p-2.5  bg-[#FFFFFF]">
                <X size={20} color="#111" strokeWidth={5} />
              </button>
            </form>
          </div>

          <div className="flex-1 w-full h-full bg-white p-4 transition-all duration-300 ease-in-out">
            <p className="">
              Press ESC key or click the button below to close
            </p>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default DeskSearch
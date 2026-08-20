import React from 'react'
import { ShoppingCart } from "lucide-react";
const DeskCart = () => {
  return (
      <div
      className="flex-1 flex items-center justify-center  py-4.5"
      onClick={() => document.getElementById("my_modal_D3").showModal()}
    > 
      
        <ShoppingCart size={20} color="#fff" strokeWidth={3}/>
     
      <dialog id="my_modal_D3" className="modal modal-end bg-black/50">
        <div className="modal-box  transition-all duration-300 delay-200 relative">
          <div className="p-4 ">Cart</div>
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
  )
}

export default DeskCart
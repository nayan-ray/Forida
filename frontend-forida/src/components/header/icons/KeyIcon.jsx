import React, { useState } from "react";
import { Key, X } from "lucide-react";

const KeyIcon = () => {
  const [showPassword, setShowPassword] = useState(false);

  const openModal = () => {
  const modal = document.getElementById("my_modal_4");

  modal.showModal();

  requestAnimationFrame(() => {
    if (modal.contains(document.activeElement)) {
      document.activeElement.blur();
    }
  });
};
  return (
    <div className="flex-1 flex items-center justify-center border-e border-[#ebebeb] py-4.5">
      
      <button
        className=""
        onClick={openModal}
      >
       <Key size={14} color="#111" strokeWidth={3} />
      </button>
      <dialog id="my_modal_4" className="modal bg-black/80 content-start md:content-center">
        <div className="modal-box mt-7.5 mx-auto w-[calc(100%-30px)] max-w-228 relative rounded-none">
          <h3 className="font-poppins text-[22px] font-semibold text-center pb-2.5 border-b border-solid border-[#111]/10">
            Login account
          </h3>

          <form className="mt-6.25">
            <fieldset className="fieldset gap-2.5 md:gap-6 md:grid-cols-4">
              <label className="label text-[14px] text-[#232323]  md:flex md:items-end md:pb-1  md:justify-end">Email:</label>
              <input
                type="email"
                autoFocus={false}
                className="input w-full bg-transparent outline-none md:col-start-2 md:col-end-4 focus:border-[#f70b38] 
                  autofill:[-webkit-box-shadow:0_0_0_1000px_#fff_inset]
                  autofill:[-webkit-text-fill-color:#232323]"
              />
            </fieldset>

            <fieldset className="fieldset gap-2.5 mt-6.25 md:gap-6 md:grid-cols-4">
              <label className="label text-[14px] text-[#232323]  md:flex md:items-end md:pb-1  md:justify-end">
                Password:
              </label>
              <div className="flex outline-[0.1875rem] outline-solid outline-transparent md:col-start-2 md:col-end-4 focus-within:outline-[#2fb5d2]">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input w-full outline-none focus:border-[#f70b38] rounded-none flex-1 autofill:[-webkit-box-shadow:0_0_0_1000px_#fff_inset] autofill:[-webkit-text-fill-color:#232323]"
                />
                <button
                  type="button"
                  className="uppercase cursor-pointer px-4 py-2 bg-black/80 text-white text-[11px] "
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </fieldset>
            <div className="flex justify-center mt-6.25">
              <button type="submit" className="cursor-pointer bg-black/80 px-4 py-2 text-white uppercase hover:bg-[#f70b38]">
                Sign In
              </button>
            </div>
          </form>
          
          <div className="flex flex-col items-center gap-1.5 mt-6.25">
              <button type="button " className="text-[14px] cursor-pointer text-[#232323] hover:text-[#f70b38]">
                Forgot your password?
              </button>
              <button type="button" className="text-[14px] cursor-pointer text-[#232323] hover:text-[#f70b38]">
                Go to create account
              </button>
          </div>

          <div className="modal-action">
            <form method="dialog" className="absolute top-0 right-0">
              {/* if there is a button, it will close the modal */}
              <button className="bg-[#bbb] p-1 cursor-pointer hover:bg-[#f70b38]">
                <X size={16} color="#fff" strokeWidth={6} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default KeyIcon;

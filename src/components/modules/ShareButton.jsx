"use client";
import { LuShare2 } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";

function ShareButton() {
  // handlers
  const copyHandler = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("لینک با موفقیت کپی شد");
  };
  return (
    <div className=" flex items-center justify-center  shadow-[0px_4px_15px_#304ffe4a] p-3 rounded-lg mb-5 ">
      <LuShare2 className="ml-3 text-2xl text-[#304ffe]" />
      <button
        onClick={copyHandler}
        className="border-none bg-none text-base text-gray-500 h-5 ease-in duration-100  cursor-pointer hover:text-[#304ffe]"
      >
        اشتراک گذاری
      </button>
      <ToastContainer />
    </div>
  );
}

export default ShareButton;

"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutBtn() {
  return (
    <button
      onClick={signOut}
      className=" bg-none border-none md:self-start text-base text-red-600 cursor-pointer md:mt-5 "
    >
      <div className="flex text-center md:text-right">
        <FiLogOut className="!text-xl ml-1 !text-red-600" />
        <span>خروج</span>
      </div>
    </button>
  );
}

export default LogoutBtn;

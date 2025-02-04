"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

function LogoutBtn() {
  return (
    <button
      onClick={signOut}
      className="flex bg-none border-none mt-5 w-full text-right text-base text-red-600 cursor-pointer"
    >
      <FiLogOut className="!text-xl ml-1 !text-red-600" />
      خروج
    </button>
  );
}

export default LogoutBtn;

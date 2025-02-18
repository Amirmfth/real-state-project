"use client";
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import LogoutBtn from "./LogoutBtn";

export function MobileDashboardSidebar({ email, role }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute md:hidden w-full">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="absolute -top-12 right-4 p-2 bg-[#304ffe] text-white rounded-full focus:outline-none z-30"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Menu */}
      <div
        className={`absolute top-0 left-0 right-0 h-fit w-3/4 rounded-xl  bg-[#304ffe] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${!isOpen ? "invisible" : ""}`}
      >
        <div className="p-4">
          <div className="text-white flex flex-col items-center">
            <CgProfile className="text-5xl " />
            <p>{role === "ADMIN" && "ادمین"}</p>
            <p className="opacity-70 text-lg font-normal mt-3 ">{email}</p>
          </div>
          <p className="w-full h-px bg-white my-4 "></p>
          <ul className="space-y-4">
            <li className=" rounded-xl bg-white  w-2/3 text-center mx-auto py-2">
              <Link onClick={toggleMenu} href="/dashboard" className="block">
                حساب کاربری
              </Link>
            </li>
            <li className=" rounded-xl bg-white  w-2/3 text-center mx-auto py-2">
              <Link
                onClick={toggleMenu}
                href="/dashboard/my-profiles"
                className="block"
              >
                آگهی های من
              </Link>
            </li>
            <li className=" rounded-xl bg-white  w-2/3 text-center mx-auto py-2">
              <Link
                onClick={toggleMenu}
                href="/dashboard/add"
                className="block"
              >
                ثبت آگهی
              </Link>
            </li>
            {role === "ADMIN" && (
              <li className="rounded-xl bg-white w-2/3 text-center mx-auto py-2">
                <Link onClick={toggleMenu} href="/admin" className="block">
                  در انتظار تایید
                </Link>
              </li>
            )}
            <li className="rounded-xl bg-white w-2/3 text-center mx-auto py-1">
              <LogoutBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

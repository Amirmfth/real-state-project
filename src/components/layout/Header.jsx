"use client";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();
  return (
    <header className="flex justify-between items-center p-5 my-5 rounded-xl bg-[#304ffe] text-white">
      <div>
        <ul className="list-none items-center flex space-x-3 space-x-reverse md:space-x-8 md:space-x-reverse">
          <li className="font-bold text-3xl">خونه چی</li>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className="">
          <Link
            className="flex items-center bg-white text-[#304ffe] py-1 px-2 rounded-md ease-in duration-100 hover:bg-[#304ffe] hover:text-white"
            href="/dashboard"
          >
            <FaUserAlt className="text-2xl" />
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="flex items-center bg-white text-[#304ffe] py-1 px-2 rounded-md ease-in duration-100 hover:bg-[#304ffe] hover:text-white"
            href="/login"
          >
            <FiLogIn className="text-2xl" />
            <span className="mr-1">ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

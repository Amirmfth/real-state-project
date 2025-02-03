import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 my-5 rounded-xl bg-[#304ffe] text-white">
      <div>
        <ul className="list-none flex space-x-3 space-x-reverse md:space-x-8">
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link className="flex items-center bg-white text-[#304ffe] py-1 px-2 rounded-md ease-in duration-100 hover:bg-[#304ffe] hover:text-white" href="/login">
          <FiLogIn className="text-2xl" />
          <span className="mr-1">ورود</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

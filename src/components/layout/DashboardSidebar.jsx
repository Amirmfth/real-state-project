import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutBtn from "@/modules/LogoutBtn";
import { getServerSession } from "next-auth";
import { CgProfile } from "react-icons/cg";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-7 px-4 rounded-lg shadow-[0px_4px_15px_#304ffe4a] ml-10 w-56">
        <CgProfile className="text-5xl text-[#304ffe]" />
        <p className="text-gray-400 text-lg font-normal mt-5 ">
          {session?.user.email}
        </p>
        <span className="w-full h-px bg-gray-400 mb-7"></span>
        <Link className="my-1 font-normal w-full" href={"/dashboard"}>
          حساب کاربری
        </Link>
        <Link
          className="my-1 font-normal w-full"
          href={"/dashboard/my-profiles"}
        >
          آگهی های من
        </Link>
        <Link className="my-1 font-normal w-full" href={"/dashboard/add"}>
          ثبت آگهی
        </Link>
        <LogoutBtn />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default DashboardSidebar;


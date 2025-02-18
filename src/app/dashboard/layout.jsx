import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/layout/DashboardSidebar";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export const metadata = {
  title: "پنل کاربری خونه چی | سامانه خرید و فروش ملک",
};

async function DashboardLayout({ children }) {
  const session = await getServerSession();
  if (!session) redirect("/login");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });
  if (!user) <p>کاربر مورد نظر پیدا نشد</p>;

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
}

export default DashboardLayout;

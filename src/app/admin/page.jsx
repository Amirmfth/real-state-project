import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/templates/AdminPage";
import Profile from "@/models/Profile";

export const metadata = {
  title: "پنل ادمین خونه چی | سامانه خرید و فروش ملک",
};

async function Admin() {
  await connectDB();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSidebar email={user.email} role={user.role}>
      <AdminPage profiles={JSON.parse(JSON.stringify(profiles))} />
    </DashboardSidebar>
  );
}

export default Admin;

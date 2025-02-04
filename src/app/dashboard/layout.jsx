import DashboardSidebar from "@/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function DashboardLayout({ children }) {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;

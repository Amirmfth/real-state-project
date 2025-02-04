import User from "@/models/User";
import DashboardPage from "@/templates/DashboardPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function Dashboard() {
  await connectDB();
  const session = await getServerSession();
  const user = await User.findOne({ email: session.user.email });
  return <DashboardPage createdAt={user.createdAt} />;
}

export default Dashboard;

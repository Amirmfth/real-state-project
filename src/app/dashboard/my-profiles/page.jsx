import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import MyProfilesPage from "@/templates/MyProfilesPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "userId",
        as: "profiles",
      },
    },
  ]);

  return (
    <MyProfilesPage profiles={JSON.parse(JSON.stringify(user.profiles))} />
  );
}

export default MyProfiles;

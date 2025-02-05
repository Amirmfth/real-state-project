import Profile from "@/models/Profile";
import AddProfilePage from "@/templates/AddProfilePage";
import connectDB from "@/utils/connectDB";

async function ProfileEdit({ params }) {
  const { profileId } = params;

  await connectDB();

  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>آگهی یافت نشد</h3>;

  return <AddProfilePage profile={JSON.parse(JSON.stringify(profile))} />;
}

export default ProfileEdit;

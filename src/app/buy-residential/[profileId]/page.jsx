import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/templates/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params }) {
  const { profileId } = await params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>آگهی یافت نشد</h3>;

  return <ProfileDetailsPage profile={JSON.parse(JSON.stringify(profile))} />;
}

export default ProfileDetails;

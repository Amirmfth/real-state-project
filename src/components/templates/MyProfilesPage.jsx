import DashboardCard from "@/modules/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="bg-[rgba(219,5,5,0.159)] text-red-500 text-xl py-2 px-4 rounded-xl ">
          هیچ آگهی‌ای ثبت نشده است
        </p>
      )}
      {profiles.map((profile) => (
        <DashboardCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
}

export default MyProfilesPage;

// .text {
//     background-color: rgba(219, 5, 5, 0.159);
//     color: rgb(219, 5, 5);
//     font-size: 1.3rem;
//     padding: 10px 15px;
//     border-radius: 10px;
//   }

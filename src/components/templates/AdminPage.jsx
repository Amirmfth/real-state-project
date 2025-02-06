import AdminCard from "@/modules/AdminCard";

function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="bg-[rgba(219,5,5,0.159)] text-red-500 text-xl py-2 px-4 rounded-xl ">
          هیچ آگهی‌ای ثبت در انتظار تایید وجود ندارد
        </p>
      )}
      {profiles.map((profile) => (
        <AdminCard
          profile={JSON.parse(JSON.stringify(profile))}
          key={profile._id}
        />
      ))}
    </div>
  );
}

export default AdminPage;

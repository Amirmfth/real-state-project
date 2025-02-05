import Card from "@/modules/Card";
import Sidebar from "@/modules/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex justify-between mt-20">
      {/* sidebar */}
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-lg shadow-[0px_4px_15px_#304ffe4a] ml-10 w-56 ">
        <Sidebar />
      </div>
      {/* main */}
      <div className="w-full flex flex-wrap justify-between">
        {data.length === 0 && (
          <p className="bg-[rgba(219,5,5,0.159)] text-red-500 text-xl py-3 px-4 rounded-xl h-12 ">
            هیچ آگهی‌ای ثبت نشده است
          </p>
        )}

        {data.map((profile) => (
          <Card key={profile._id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialPage;

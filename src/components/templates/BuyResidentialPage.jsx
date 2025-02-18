import Card from "@/modules/Card";
import Sidebar from "@/modules/Sidebar";

function BuyResidentialPage({ data }) {
  return (
    <div className="flex flex-col justify-between mt-20 md:flex-row">
      {/* sidebar */}
      <div className="flex flex-col  w-full h-fit py-4 px-4 rounded-lg shadow-[0px_4px_15px_#304ffe4a] ml-10 md:w-56 md:items-center md:py-8 ">
        <Sidebar />
      </div>
      {/* main */}
      <div className="w-full grid grid-cols-2 gap-4 pt-4 md:flex md:flex-wrap md:justify-between">
        {data.length === 0 && (
          <p className="bg-[rgba(219,5,5,0.159)] col-span-2 text-red-500 text-xl py-3 px-4 rounded-xl md:h-12 ">
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

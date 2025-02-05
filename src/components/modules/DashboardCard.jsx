"use client";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Card from "./Card";
import Loader from "./Loader";
import { useState } from "react";

function DashboardCard({ profile }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // handlers
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${profile._id}`);
  };

  const deleteHandler = async () => {
    const confirm = window.confirm("آیا مطمعنید؟");
    if (!confirm) return;
    setLoading(true);
    const res = await axios
      .delete(`/api/profile/delete/${profile._id}`)
      .then((res) => res.data)
      .catch((err) => err.response.data);
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("آگهی حذف شد");
      router.refresh();
    }
  };

  return (
    <div className="flex border-2 border-[#304ffe58] rounded-2xl mb-5">
      <Card profile={profile} />
      <div className="flex items-end justify-between p-3 w-full">
        <button
          onClick={editHandler}
          className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-[rgb(0,168,0)] text-[rgb(0,168,0)]"
        >
          ویرایش
          <FiEdit className="text-lg mr-3" />
        </button>

        <button
          onClick={deleteHandler}
          className="flex justify-center items-center w-[48%] bg-white cursor-pointer h-10 rounded-lg text-base border border-[#db0505] text-[#db0505]"
        >
          {loading ? (
            <Loader />
          ) : (
            <>
              حذف آگهی
              <AiOutlineDelete className="text-lg mr-3" />
            </>
          )}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DashboardCard;

"use client";
import axios from "axios";
import Link from "next/link";
import { sp } from "@/utils/replaceNumber";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

function AdminCard({ profile }) {
  const { _id, title, location, price, description } = profile;
  const router = useRouter();

  //   handlers
  const publishHandler = async () => {
    const confirm = window.confirm("آیا مطمعنید؟");
    if (!confirm) return;
    try {
      const res = await axios
        .patch(`/api/profile/publish/${_id}`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
      if (res.error) {
        toast.error(res.error);
        return;
      }
      toast.success(res.message);
      router.refresh();
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteHandler = async () => {
    const confirm = window.confirm("آیا مطمعنید؟");
    if (!confirm) return;
    try {
      const res = await axios
        .delete(`/api/profile/delete/${_id}`)
        .then((res) => res.data)
        .catch((err) => err.response.data);
      if (res.error) {
        toast.error(res.error);
        return;
      }
      toast.success(res.message);
      router.refresh();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="border-b-2 border-[#304ffe] pb-3 mb-20">
      <h3 className="font-normal text-xl text-[#304ffe] mb-5">{title}</h3>
      <p className="text-justify mb-5">{description}</p>
      <div className="flex mb-5">
        <span className="bg-[#304ffe58] text-[#304ffe] px-3 py-1 rounded-md ml-4">
          {location}
        </span>
        <span className="bg-[#304ffe58] text-[#304ffe] px-3 py-1 rounded-md ml-4">
          {sp(price)}
        </span>
      </div>
      <div className="flex space-x-5 space-x-reverse">
        <button onClick={publishHandler} className="bg-[#00a800] border-none rounded-md px-3 py-1 text-white font-normal text-base cursor-pointer mt-5 ease-in duration-100 hover:text-black">
          انتشار
        </button>
        <Link
          href={`/buy-residential/${_id}`}
          className="bg-[#304ffe] border-none rounded-md px-3 py-1 text-white font-normal text-base cursor-pointer mt-5 ease-in duration-100 hover:text-black"
        >
          دیدن جزییات
        </Link>
        <button
          onClick={deleteHandler}
          className="bg-[#ff0000] border-none rounded-md px-3 py-1 text-white font-normal text-base cursor-pointer mt-5 ease-in duration-100 hover:text-black"
        >
          حذف
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminCard;

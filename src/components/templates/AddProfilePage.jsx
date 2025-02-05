"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import CustomDatePicker from "@/modules/CustomDatePicker";
import RadioList from "@/modules/RadioList";
import TextInput from "@/modules/TextInput";
import TextList from "@/modules/TextList";
import Loader from "@/modules/Loader";

function AddProfilePage({ profile }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "villa",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // effects
  useEffect(() => {
    if (profile) {
      setProfileData(profile);
    }
  }, []);

  // handlers
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await axios
      .post("/api/profile", profileData)
      .then((res) => res.data)
      .catch((err) => err.response.data);
    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success("آگهی شما با موفقیت ثبت شد");
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await axios
      .patch(`/api/profile`, profileData)
      .then((res) => res.data)
      .catch((err) => err.response.data);
    setLoading(false);

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("آگهی شما با موفقیت ویرایش شد");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col mb-36">
      <h3 className="w-full bg-[#304ffe18] py-2 px-4 rounded-md text-[#304ffe] font-normal text-2xl mb-20">
        {profile ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea={true}
      />
      <TextInput
        title="استان / شهر"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title={"امکانات رفاهی"}
        type="amenities"
      />
      <TextList
        profileData={profileData}
        setProfileData={setProfileData}
        title={"قوانین و مقررات"}
        type="rules"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loading ? (
        <Loader />
      ) : profile ? (
        <button
          onClick={editHandler}
          className="p-3 bg-[#304ffe] text-white rounded-md text-base cursor-pointer border-none duration-100 ease-in hover:scale-105"
        >
          ویرایش آگهی
        </button>
      ) : (
        <button
          onClick={submitHandler}
          className="p-3 bg-[#304ffe] text-white rounded-md text-base cursor-pointer border-none duration-100 ease-in hover:scale-105"
        >
          ثبت آگهی
        </button>
      )}
      <ToastContainer />
    </div>
  );
}

export default AddProfilePage;

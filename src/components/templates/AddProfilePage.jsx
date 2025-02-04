import CustomDatePicker from "@/modules/CustomDatePicker";
import RadioList from "@/modules/RadioList";
import TextInput from "@/modules/TextInput";
import TextList from "@/modules/TextList";
import { useState } from "react";

function AddProfilePage() {
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

  // handlers
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(profileData);
  };
  return (
    <div className="flex flex-col mb-36">
      <h3 className="w-full bg-[#304ffe18] py-2 px-4 rounded-md text-[#304ffe] font-normal text-2xl mb-20">
        ثبت آگهی
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
      <CustomDatePicker profileData={profileData} setProfileData={setProfileData} />
      <button
        onClick={submitHandler}
        className="p-3 bg-[#304ffe] text-white rounded-md text-base cursor-pointer border-none duration-100 ease-in hover:scale-105"
      >
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;

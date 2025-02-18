import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiHomebridge } from "react-icons/si";
import { BiCalendarCheck } from "react-icons/bi";
import ItemList from "@/modules/ItemList";
import Title from "@/modules/Title";
import ShareButton from "@/modules/ShareButton";
import { e2p, sp } from "@/utils/replaceNumber";
import { profileDetailsIcons } from "@/constants/icons";
import { categories } from "@/constants/strings";

function ProfileDetailsPage({ profile }) {
  const {
    title,
    description,
    location,
    phone,
    price,
    realState,
    constructionDate,
    category,
    rules,
    amenities,
  } = profile;
  
  // constants
  const icons = profileDetailsIcons;

  return (
    <div className="flex flex-col mt-14 md:flex-row">
      {/* main */}
      <div className="w-full">
        <h1 className="text-xl font-normal text-[#304ffe] mb-3">{title}</h1>
        <span className="flex items-start h-4 mb-12 text-gray-500">
          <HiOutlineLocationMarker className="text-2xl ml-1" />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p className="text-justify mb-12">{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      {/* sidebar */}
      <div className="flex flex-col justify-around md:mr-10 md:w-64">
        {/* realstate */}
        <div className="flex flex-col items-center shadow-[0px_4px_15px_#304ffe4a] p-3 rounded-lg mb-5">
          <SiHomebridge className="text-5xl text-[#304ffe] mt-3 mb-5" />
          <p className="font-normal text-lg">املاک {realState}</p>
          <span className="flex items-center text-gray-500 mb-5">
            <AiOutlinePhone className="text-2xl m-0 ml-1 text-gray-500" />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        {/* price */}
        <div className="flex flex-col items-center !pt-5 shadow-[0px_4px_15px_#304ffe4a] p-3 rounded-lg mb-5">
          <p className="flex items-center text-gray-500 mb-5 h-5">
            {icons[category]("text-2xl text-[#304ffe] ml-1")}{" "}
            {categories[category]}
          </p>
          <p className="flex items-center text-gray-500 mb-5 h-5">
            {sp(price)} تومان
          </p>
          <p className="flex items-center text-gray-500 mb-5 h-5">
            <BiCalendarCheck className="text-2xl text-[#304ffe] ml-1" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsPage;

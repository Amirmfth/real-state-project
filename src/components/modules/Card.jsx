import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";

function Card({ profile }) {
  const { title, location, price, category } = profile;

  const icons = {
    villa: (
      <RiHome3Line className="text-3xl text-[#304ffe] bg-[#304ffe58] p-1 rounded-md" />
    ),
    apartment: (
      <MdApartment className="text-3xl text-[#304ffe] bg-[#304ffe58] p-1 rounded-md" />
    ),
    store: (
      <BiStore className="text-3xl text-[#304ffe] bg-[#304ffe58] p-1 rounded-md" />
    ),
    office: (
      <GiOfficeChair className="text-3xl text-[#304ffe] bg-[#304ffe58] p-1 rounded-md" />
    ),
  };
  return (
    <div className="w-64 border-2 border-[#304ffe58] rounded-xl p-3 m-3">
      <div>
        {icons[category]}
        <p className="font-normal my-3">{title}</p>
        <p className="flex text-gray-500 text-sm ">
          <HiOutlineLocationMarker className="text-base ml-1" />
          {location}
        </p>
        <span className="text-gray-500 block text-sm font-normal mt-3">
          {sp(price)} تومان
        </span>
        <Link
          className="flex items-center justify-between mt-5 text-base font-normal text-[#304ffe]"
          href={`/`}
        >
          مشاهده آگهی
          <BiLeftArrowAlt className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default Card;

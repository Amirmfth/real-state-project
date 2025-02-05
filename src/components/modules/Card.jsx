import Link from "next/link";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { sp } from "@/utils/replaceNumber";
import { cardIcons } from "@/constants/icons";

function Card({ profile }) {
  const { _id, title, location, price, category } = profile;

  const icons = cardIcons;
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
          href={`/buy-residential/${_id}`}
        >
          مشاهده آگهی
          <BiLeftArrowAlt className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}

export default Card;

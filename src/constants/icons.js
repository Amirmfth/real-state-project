import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";

const cardIcons = {
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


const profileDetailsIcons = {
    apartment: (classes) => <MdApartment className={classes} />,
    villa: (classes) => <RiHome3Line className={classes} />,
    store: (classes) => <BiStore className={classes} />,
    office: (classes) => <GiOfficeChair className={classes} />,
  };


export { cardIcons , profileDetailsIcons };

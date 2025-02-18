import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";

function Sidebar() {
  return (
    <div className="flex md:flex-col">
      <p className="flex font-normal text-xl ml-5 md:ml-0 ">
        <HiFilter className="text-xl ml-1 text-[#304ffe]" />
        دسته بندی
      </p>
      <div className="flex md:flex-col">
        <Link className="text-gray-500 m-1" href={"/buy-residential"}>
          همه
        </Link>
        {Object.keys(categories).map((i,index) => (
          <Link
            key={Object.keys(i)[index]}
            className="text-gray-500 m-1"
            href={{
              pathname: "/buy-residential",
              query: { category: i },
            }}
          >
            {categories[i]}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

//   .container a {
//     color: grey;
//     margin: 5px;
//   }

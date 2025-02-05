import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/constants/strings";

function Sidebar() {
  
  return (
    <div className="flex flex-col">
      <p className="flex font-normal text-xl">
        <HiFilter className="text-xl ml-1 text-[#304ffe]" />
        دسته بندی
      </p>
      <Link className="text-gray-500 m-1" href={"/buy-residential"}>
        همه
      </Link>
      {Object.keys(categories).map((i) => (
        <Link
          key={Object.keys(i)}
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
  );
}

export default Sidebar;

//   .container a {
//     color: grey;
//     margin: 5px;
//   }

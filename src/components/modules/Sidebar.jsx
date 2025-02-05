import Link from "next/link";
import { HiFilter } from "react-icons/hi";

function Sidebar() {
  const queries = [
    { villa: "ویلا" },
    { apartment: "اپارتمان" },
    { store: "مغازه" },
    { office: "دفتر" },
  ];
  return (
    <div className="flex flex-col">
      <p className="flex font-normal text-xl">
        <HiFilter className="text-xl ml-1 text-[#304ffe]" />
        دسته بندی
      </p>
      <Link className="text-gray-500 m-1" href={"/buy-residential"}>
        همه
      </Link>
      {queries.map((query) => (
        <Link
          key={Object.keys(query)}
          className="text-gray-500 m-1"
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}
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

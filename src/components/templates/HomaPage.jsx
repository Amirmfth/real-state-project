import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import CategoryCard from "@/modules/CategoryCard";
import { categories, cities, services } from "@/constants/strings";

function HomaPage() {
  return (
    <div>
      {/* banner */}
      <div className="flex flex-col-reverse justify-center items-center rounded-lg p-5 my-24 lg:flex-row">
        <div className="w-full text-center text-[#304ffe]">
          <h1 className="font-bold text-6xl mb-7">خونه چی</h1>
          <h3 className="font-bold text-4xl mb-7 md:text-4xl">
            سامانه خرید و اجاره ملک
          </h3>
          <ul className="list-none flex justify-center flex-wrap">
            {services.map((service) => (
              <li
                className="flex items-center w-20 m-3 bg-[#bbdefb] py-1 px-3 rounded-md"
                key={service}
              >
                <FiCircle />
                <span className="font-normal mr-1 h-5">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* categories */}
      <div className="flex justify-center flex-wrap my-12 md:justify-between">
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      {/* cities */}
      <div className="my-24">
        <h3 className="font-semibold text-3xl text-center text-[#304ffe]">
          شهر های پر بازدید
        </h3>
        <ul className="flex justify-center flex-wrap mt-12 list-none md:justify-between">
          {cities.map((city) => (
            <li
              key={city}
              className="bg-[#bbdefb] text-[#304ffe] text-xl w-64 my-3 flex justify-center  items-center p-3 rounded-lg "
            >
              <FaCity />
              <span className="h-7 mr-4 font-normal">{city}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomaPage;

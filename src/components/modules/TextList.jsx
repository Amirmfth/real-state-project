import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  // handlers
  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  
  return (
    <div className="mb-10">
      <p className="text-xl mb-1">{title}</p>
      {profileData[type].map((item, index) => (
        <div key={index} className="flex my-2">
          <input
            className="w-80 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-3 text-base h-8 ml-2 focus:border-solid focus:outline-none"
            type="text"
            name={type}
            value={item}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            onClick={() => deleteHandler(index)}
            className="m-0 py-1 px-2 text-red-600 bg-white border border-red-600 flex items-center leading-3 rounded-md text-base cursor-pointer ease-in duration-100 hover:scale-105"
          >
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button
        className="flex py-1 px-2 mt-5 border-none bg-[#304ffe] text-white rounded-md text-base cursor-pointer ease-in duration-100 hover:scale-105 "
        onClick={addHandler}
      >
        افزودن
        <MdOutlineLibraryAdd className="mr-1 text-xl" />
      </button>
    </div>
  );
}

export default TextList;

//   .card button {
//     margin: 0;
//     color: #db0505;
//     background-color: #fff;
//     border: 1px #db0505 solid;
//     display: flex;
//     align-items: center;
//     line-height: 10px;
//   }

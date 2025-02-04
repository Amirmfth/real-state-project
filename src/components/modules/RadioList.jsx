function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  // handlers
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };
  return (
    <div className="mb-10">
      <p className="text-xl mb-1">دسته بندی</p>
      <div className="flex">
        <div className="flex w-16 items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-7 py-1 px-1 rounded-md cursor-pointer">
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            id="villa"
            name="category"
            value="villa"
            checked={category === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex w-16 items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-7 py-1 px-1 rounded-md cursor-pointer">
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            id="apartment"
            name="category"
            value="apartment"
            checked={category === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex w-16 items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-7 py-1 px-1 rounded-md cursor-pointer">
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            id="store"
            name="category"
            value="store"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
        <div className="flex w-16 items-center justify-evenly bg-[#304ffe18] text-[#304ffe] ml-7 py-1 px-1 rounded-md cursor-pointer">
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            id="office"
            name="category"
            value="office"
            checked={category === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;

// .container {
//     margin-bottom: 40px;
//   }

//   .container p {
//     font-size: 1.1rem;
//     margin-bottom: 5px;
//   }

//   .main {
//     display: flex;
//   }

//   .main div {
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     background-color: #304ffe18;
//     color: #304ffe;
//     margin-left: 30px;
//     width: 70px;
//     padding: 3px 5px;
//     border-radius: 5px;
//     cursor: pointer;
//   }

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {

  // handlers
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="mb-16">
      <p className="mb-1">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        value={profileData.constructionDate}
        onChange={changeHandler}
        inputClass="w-28 border border-[#304ffe] border-dashed text-gray-600 rounded-md p-3 text-base h-8 ml-3 text-center focus:border-solid focus:outline-none"
      />
    </div>
  );
}

export default CustomDatePicker;

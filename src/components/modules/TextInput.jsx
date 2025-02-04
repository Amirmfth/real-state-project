import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  // handlers
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };

  return (
    <div>
      <p className="mb-1 text-xl">{title}</p>
      {textarea ? (
        <textarea
          className="mb-10 w-80 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-3 text-base h-24 focus:border-solid focus:outline-none"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          className="mb-10 w-80 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-3 text-base h-10 focus:border-solid focus:outline-none"
          type="text"
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;

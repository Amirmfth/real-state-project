"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { signIn } from "next-auth/react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //   handler
  const LoginHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      setEmail("");
      setPassword("");
      toast.error(res.error);
      return;
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="mb-5 text-[#304ffe] font-semibold text-4xl ">فرم ورود</h4>
      <form className="flex flex-col p-10 mb-8 rounded-lg border-2 shadow-lg shadow-[#304ffe96] border-[#304ffe]">
        <label className="mb-3 text-[#304ffe] font-normal" htmlFor="email">
          ایمیل
        </label>
        <input
          dir="ltr"
          className="w-64 mb-10 border border-[#304ffe] border-dashed text-gray-700 rounded-md p-2 text-base h-10 focus:border-solid focus:outline-none "
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="mb-3 text-[#304ffe] font-normal" htmlFor="password">
          رمز عبور
        </label>
        <input
          dir="ltr"
          className="w-64 mb-10 border border-[#304ffe] border-dashed text-gray-700 rounded-md p-2 text-base h-10 focus:border-solid focus:outline-none "
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {loading ? (
          <BeatLoader
            color="#304ffe"
            size={25}
            loading={loading}
            cssOverride={{ margin: "auto" }}
          />
        ) : (
          <button
            className="py-2 border-none bg-[#304ffe] text-white text-lg
          font-normal rounded-md cursor-pointer transition-all ease-in duration-100 hover:scale-105"
            onClick={LoginHandler}
            type="submit"
          >
            ورود
          </button>
        )}
      </form>
      <p className="text-gray-700 text-lg">
        حساب کاربری ندارید؟{" "}
        <Link
          className="mr-3 text-[#304ffe] border-b-2 border-[gray]"
          href="/signup"
        >
          ثبت نام
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;

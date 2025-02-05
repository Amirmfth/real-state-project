"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loader from "@/modules/Loader";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //   handler
  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("رمز و تکرار آن یکسان نیست");
      return;
    }
    setLoading(true);
    const res = await axios
      .post("/api/auth/signup", {
        email,
        password,
      })
      .then((res) => res)
      .catch((err) => err);

    if (res.status === 201) {
      toast.success("ثبت نام با موفقیت انجام شد");
    } else {
      toast.error("خطا در ثبت نام");
      setLoading(false);
      return;
    }

    setLoading(false);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    router.push("/login");
  };
  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="mb-5 text-[#304ffe] font-semibold text-4xl ">
        فرم ثبت نام
      </h4>
      <form className="flex flex-col p-10 mb-8 rounded-lg border-2 shadow-lg shadow-[#304ffe96] border-[#304ffe]">
        <label className="mb-3 text-[#304ffe] font-normal" htmlFor="email">
          ایمیل
        </label>
        <input
          dir="ltr"
          className="w-64 mb-10 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-2 text-base h-10 focus:border-solid focus:outline-none "
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
          className="w-64 mb-10 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-2 text-base h-10 focus:border-solid focus:outline-none "
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label
          className="mb-3 text-[#304ffe] font-normal"
          htmlFor="confirmPassword"
        >
          تکرار رمز عبور
        </label>
        <input
          dir="ltr"
          className="w-64 mb-10 border border-[#304ffe] border-dashed text-gray-400 rounded-md p-2 text-base h-10 focus:border-solid focus:outline-none "
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            className="py-2 border-none bg-[#304ffe] text-white text-lg
          font-normal rounded-md cursor-pointer transition-all ease-in duration-100 hover:scale-105"
            onClick={signupHandler}
            type="submit"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-gray-400 text-lg">
        حساب کاربری دارید؟{" "}
        <Link
          className="mr-3 text-[#304ffe] border-b-2 border-[gray]"
          href="/login"
        >
          ورود
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
}

export default SignupPage;

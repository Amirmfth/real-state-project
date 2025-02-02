"use client";
import { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
        <label htmlFor="email">ایمیل</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="password">رمز عبور</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="confirmPassword">تکرار رمز عبور</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button type="submit">ثبت نام</button>
      </form>
      <p>
        حساب کاربری دارید؟ <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;

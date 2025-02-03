import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginPage from "@/templates/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Login() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <LoginPage />;
}

export default Login;


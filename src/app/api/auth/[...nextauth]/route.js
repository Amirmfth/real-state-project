import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import User from "@/models/User";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          await connectDB();
        } catch (error) {
          throw new Error("خطا در اتصال به DB");
        }

        const { email, password } = credentials;

        if (!email || !password)
          throw new Error("لطفا ایمیل و رمز عبور را وارد کنید");

        const user = await User.findOne({ email });
        if (!user) throw new Error("کاربری با این ایمیل وجود ندارد");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        return {email};
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

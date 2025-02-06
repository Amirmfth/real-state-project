import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const { profileId } = await context.params;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    if (user.role !== "ADMIN")
      return NextResponse.json({ error: "دسترسی غیر مجاز" }, { status: 403 });

    const profile = await Profile.findOne({ _id: profileId });
    if (!profile)
      return NextResponse.json({ error: "آگهی یافت نشد" }, { status: 403 });

    profile.published = true;
    profile.save();

    return NextResponse.json({ message: "آگهی انتشار یافت" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}

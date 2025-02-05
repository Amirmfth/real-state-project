import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const { profileId } = context.params;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    const profile = await Profile.findOne({ _id: profileId, userId: user._id });
    if (!profile)
      return NextResponse.json({ error: "دسترسی غیر مجاز" }, { status: 403 });

    await Profile.deleteOne({ _id: profileId });

    return NextResponse.json({ message: "آگهی حذف شد" }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}

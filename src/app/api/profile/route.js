import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const profiles = await Profile.find().select("-userId");
    return NextResponse.json({ data: profiles } , {status: 200});
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = data;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا تمامی فیلد ها را پر کنید" },
        { status: 422 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آگهی شما با موفقیت ثبت شد", data: newProfile },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    const user = await User.findOne({ email: session.user.email });
    if (!user)
      return NextResponse.json({ error: "لطفا وارد شوید" }, { status: 401 });

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا تمامی فیلد ها را پر کنید" },
        { status: 422 }
      );
    }

    const profile = await Profile.findOne({ _id, userId: user._id });
    if (!profile)
      return NextResponse.json({ error: "دسترسی غیرمجاز" }, { status: 403 });

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.price = price;
    profile.realState = realState;
    profile.constructionDate = constructionDate;
    profile.category = category;
    profile.rules = rules;
    profile.amenities = amenities;

    profile.save();
    return NextResponse.json(
      { message: "آگهی شما با موفقیت ویرایش شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور پیش آمده است" },
      { status: 500 }
    );
  }
}

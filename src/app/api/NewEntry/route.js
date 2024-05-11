import connectDB from "../../lib/mongodb";
import Contact from "../../models/newEntry";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const { fullname, email, std, sec, sex, dob, roll, admno } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, email, std, sec, sex, dob, roll, admno });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}

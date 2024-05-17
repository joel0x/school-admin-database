import connectDB from "../../lib/mongodb";
import Contact from "../../models/newEntry";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, std, sec, gender, dob, roll, admno, totAmt, pendingAmt } = await req.json();

  await connectDB();
  await Contact.create({ fullname, std, sec, gender, dob, roll, admno, totAmt, pendingAmt });
  return NextResponse.json({
    msg: ["Message sent successfully"],
    success: true,
  });
}

export async function GET() {
  await connectDB();

  const Contacts = await Contact.find();
  return NextResponse.json({ Contacts })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");

  await connectDB
  await Contact.findByIdAndDelete(id)
  return NextResponse.json({ msg: "deleted sucessfully" }, { status: 200 })
} 

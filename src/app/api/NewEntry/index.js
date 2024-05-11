// api/NewEntry/index.js

import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/newEntry";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const contacts = await Contact.find();
    return NextResponse.json({
      data: contacts,
      success: true,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ msg: ["Unable to fetch data."] });
  }
}

import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Contact from "../../../models/newEntry";

export async function PUT(request, { params }) {
    const { id } = params;
    const { 
        newTotalAmount: totAmt,
        newPendingAmount: pendingAmt,
        newStandard: std,
        newSection: sec
        } = await request.json();
    await connectDB()
    await Contact.findByIdAndUpdate(id, { totAmt, pendingAmt, std, sec });
    return NextResponse.json({ msg: "data updated succesfully" }, { status: 200 })
}
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userSchema";
import { sendEmail } from "@/helper/mailer";
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log("reqBody", reqBody);

        const { email } = reqBody;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 })
        }
        // const user = await User.findOne({
        //     forgotPasswordToken: token,
        //     forgotPasswordTokenExpiry: { $gt: Date.now() },
        // });
        // if (!user) {
        //     return NextResponse.json({ error: "Invalid or expired token or user not exits" }, { status: 400 });
        // }
        console.log(user);
        //Send Forgot Verification Email
        await sendEmail({ email, emailType: "RESET", userId: user._id })
        return NextResponse.json({
            message: "email forgot",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
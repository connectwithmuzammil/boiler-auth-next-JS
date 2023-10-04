import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connect } from "@src/dbConfig/dbConfig"
import User from "@src/models/userSchema"
import { sendEmail } from "@/helper/mailer"
connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log("reqBody", reqBody);

        // check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ status: 400, body: { message: "User already exists" } })
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const saveUser = await newUser.save();
        console.log("saveUser", saveUser);

        //Send Verification Email
        await sendEmail({ email, emailType: "VERIFY", userId: saveUser._id })

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser
        })
    } catch (error: any) {
        return NextResponse.json({ status: 500, body: { error: error.message } })
    }
}
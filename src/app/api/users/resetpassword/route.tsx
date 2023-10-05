import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userSchema";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs";
import { idText } from "typescript";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { data: { password }, token } = reqBody
        console.log("reqBody", reqBody);
        console.log("password", password)
        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() },
        });
        if (!user) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 });
        }
        console.log(user);
        // Hash New Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({
            message: "Password Reset successfully",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
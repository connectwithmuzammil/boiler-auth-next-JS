import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      status: 200,
      message: "User logged out successfully",
      sucess: true,
    });
    response.cookies.set("token", "", { httpOnly: true });
    return response;
  } catch (error: any) {
    console.log(
      "error",
      error.json({
        error: error.message,
        status: 500,
      })
    );
  }
}

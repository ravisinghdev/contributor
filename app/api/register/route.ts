import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import User from "@/schema/user.schema";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
	await connectDb();
	try {
		const { firstName, lastName, username, email, password, role } =
			await req.json();

		const user = await User.findOne({
			$or: [
				{
					username,
				},
				{ email },
			],
		});

		if (user) {
			return NextResponse.json({
				message: "User already exists",
				success: false,
				user,
			});
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const newUser = new User({
			firstName,
			lastName,
			username,
			email,
			password: hashedPassword,
			role,
		});

		await newUser.save();

		return NextResponse.json({
			message: "User has been created",
			success: true,
			user: newUser,
		});
	} catch (error: any) {
		return NextResponse.json({
			error: error.message,
			success: false,
		});
	}
}

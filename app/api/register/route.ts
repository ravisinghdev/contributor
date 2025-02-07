import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

export async function POST(req: Request) {
	try {
		const { name, email, password, role } = await req.json();

		// Hash the password before storing it
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert user into database
		const result = await pool.query(
			"INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
			[name, email, hashedPassword, role || "USER"]
		);

		return NextResponse.json({
			message: "User created successfully",
			user: result.rows[0],
		});
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.json(
			{ error: "Something went wrong!" },
			{ status: 500 }
		);
	}
}

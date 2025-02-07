import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
	try {
		const result = await pool.query("SELECT * FROM users");
		return NextResponse.json(result.rows);
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.json(
			{ error: "Something went wrong!" },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	try {
		const { name, email, password, role } = await req.json();

		const result = await pool.query(
			"INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
			[name, email, password, role]
		);

		return NextResponse.json(result.rows[0]);
	} catch (error) {
		console.error("Database Error:", error);
		return NextResponse.json(
			{ error: "Something went wrong!" },
			{ status: 500 }
		);
	}
}

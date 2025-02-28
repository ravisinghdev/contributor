import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
	try {
		const { message } = await req.json();

		const response = await axios.post(
			"https://api.openai.com/v1/chat/completions",
			{
				model: "gpt-3.5-turbo", // Change from gpt-4 to gpt-3.5-turbo
				messages: [
					{ role: "system", content: "You are an AI assistant." },
					{ role: "user", content: message },
				],
				temperature: 0.7,
				max_tokens: 100,
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
					"Content-Type": "application/json",
				},
			}
		);

		return NextResponse.json({
			reply: response.data.choices[0].message.content,
		});
	} catch (error: any) {
		console.error("OpenAI API Error:", error.response?.data || error.message);
		return NextResponse.json(
			{ error: error.response?.data || "Something went wrong!" },
			{ status: 500 }
		);
	}
}

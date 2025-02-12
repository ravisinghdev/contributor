import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDb from "@/lib/db";
import User from "@/schema/user.schema";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials: any): Promise<any> {
				await connectDb();
				try {
					const user = await User.findOne({
						email: credentials.email,
					});

					if (!user) {
						throw new Error("No user found with this email");
					}

					const isPasswordCorrect = await bcrypt.compare(
						credentials.password,
						user.password
					);

					if (isPasswordCorrect) {
						return user;
					} else {
						throw new Error("Password didn't match");
					}
				} catch (error: any) {
					throw new Error(error.message || "Something went wrong");
				}
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user._id = token._id;
				session.user.username = token.username;
				session.user.email = token.email;
				session.user.role = token.role;
			}

			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token._id = user._id?.toString();
				token.username = user.username?.toString();
				token.email = user.email?.toString();
				token.role = user.role;
			}

			return token;
		},
	},
	pages: {
		signIn: "/auth/login",
	},
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXT_AUTH_SECRET!,
};

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import pool from "@/lib/db";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Missing email or password");
				}

				const result = await pool.query(
					"SELECT * FROM users WHERE email = $1",
					[credentials.email]
				);
				const user = result.rows[0];

				if (!user) throw new Error("User not found");

				const passwordMatch = await bcrypt.compare(
					credentials.password,
					user.password
				);
				if (!passwordMatch) throw new Error("Invalid credentials");

				return {
					id: user.id,
					name: user.name,
					email: user.email,
					role: user.role,
				};
			},
		}),
	],
	callbacks: {
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
				session.user.role = token.role as "ADMIN" | "USER";
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = user.role;
			}
			return token;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
	},
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

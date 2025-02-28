import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
	const token = await getToken({
		req: request,
		secret: process.env.NEXTAUTH_SECRET,
		raw: true, // Ensures token is returned as a string
	});

	const url = request.nextUrl;
	const isAuthPage =
		url.pathname === "/auth/login" || url.pathname === "/auth/register";
	const isDashboard = url.pathname.startsWith("/dashboard");

	// If authenticated users try to access auth pages, redirect to dashboard
	if (token && isAuthPage) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	// If unauthenticated users try to access the dashboard, redirect to sign-in
	if (!token && isDashboard) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	return NextResponse.next();
}

// Middleware will run on dashboard and auth routes
export const config = {
	matcher: ["/dashboard/:path*", "/dashboard", "/auth/login", "/auth/register"],
};

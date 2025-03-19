import { NextResponse } from "next/server";

export function middleware(req: Request) {
    const allowedOrigin = "http://samriddhagautam.com.np"; // Replace with your actual domain
    const origin = req.headers.get("origin");

    if (origin && origin !== allowedOrigin) {
        return NextResponse.json({ error: "CORS Policy: Unauthorized origin" }, { status: 403 });
    }

    return NextResponse.next();
}

// Apply middleware to /api/contact and all subpaths
export const config = {
    matcher: "/api/contact/:path*",
};

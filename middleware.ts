import { NextResponse } from "next/server";

export function middleware(req: Request) {
    const allowedOrigins = [
        "https://samriddhagautam.com.np",
        "https://www.samriddhagautam.com.np",
        "https://localhost:3000",
        "https://samriddhagautam.vercel.app",
    ];
    const origin = req.headers.get("origin");

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse(null, {
            status: 403,
            headers: {
                "Access-Control-Allow-Origin": origin,
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    }

    return NextResponse.next();
}

// Apply middleware to /api/contact and all subpaths
export const config = {
    matcher: "/api/contact/:path*",
};

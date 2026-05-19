import { NextResponse } from "next/server";

export function middleware(request) {
    const session = request.cookies.get("better-auth.session_token");
    console.log("=== Cookie Debug ===");
    console.log("All cookies:", JSON.stringify(request.cookies.getAll(), null, 2));
    console.log("Session cookie exists:", !!session);
    console.log("Session value:", session?.value || "NOT FOUND");
    console.log("Request URL:", request.url);
    console.log("Request method:", request.method);
    console.log("==================");
    
    if (!session) {
        const loginUrl = new URL("/login", request.url);
        const firstSeg = request.nextUrl.pathname.split("/")[1] || "";
        loginUrl.searchParams.set("from", firstSeg);
        return NextResponse.redirect(loginUrl);
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/profile/:path*", "/products/:path+"]
}

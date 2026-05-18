import { NextResponse } from "next/server";

export function middleware(request) {
    const session = request.cookies.get("session");
    
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

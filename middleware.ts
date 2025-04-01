import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log("Middleware executed for path:", request.nextUrl.pathname); 
    console.log("Request method:", request.method);
    
    // Catch-all route to log all requests
    console.log("All requests:", request.nextUrl.pathname);
    
    if (request.nextUrl.pathname === '/profile') {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }
}

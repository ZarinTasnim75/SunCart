import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request) {

  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (session) {
    return NextResponse.next();
  }
   const DesireUrl = new URL("/login", request.url);

  DesireUrl.searchParams.set("redirect", request.nextUrl.pathname);

  return NextResponse.redirect(DesireUrl);
}

export const config = {
  matcher: "/products/:id*",
};
import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `User-agent: *
  Allow: /
Disallow:
Sitemap: https://mahaballoonadventures.vercel.app/sitemap.xml`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

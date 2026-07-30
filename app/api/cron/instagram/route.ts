import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getValidInstagramToken } from "@/lib/instagram";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  try {
    await getValidInstagramToken();

    return NextResponse.json({
      success: true,
      message: "Instagram token checked and updated if necessary",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error while cron task is running", error);
    return NextResponse.json({ error: "Error while cron task is running" }, { status: 500 });
  }
}

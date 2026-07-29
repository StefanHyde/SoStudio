import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/instagram";

export async function GET() {
  try {
    // Get posts with Prisma handler
    const posts = await getInstagramPosts();

    return NextResponse.json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error) {
    console.error("Erreur API Route Instagram:", error);
    return NextResponse.json({ error: "Impossible de récupérer les posts Instagram" }, { status: 500 });
  }
}

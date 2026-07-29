import { prisma } from "@/lib/prisma";

const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;
const INITIAL_TOKEN = process.env.INSTAGRAM_INITIAL_TOKEN;

export async function getValidInstagramToken(): Promise<string> {
  // 1. Check if a token is present in DB
  let tokenRecord = await prisma.instagramToken.findFirst();

  // 2. Init db with initial token
  if (!tokenRecord) {
    if (!INITIAL_TOKEN) {
      throw new Error("INSTAGRAM_INITIAL_TOKEN missing");
    }

    // Add 30 day expiration for initial token
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    tokenRecord = await prisma.instagramToken.create({
      data: {
        accessToken: INITIAL_TOKEN,
        expiresAt: expiresAt,
      },
    });
  }

  // Check initial token expiation, refresh 7 days before expiration date
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
  const isExpiringSoon = tokenRecord.expiresAt.getTime() - Date.now() < sevenDaysInMs;

  if (isExpiringSoon) {
    try {
      // Refresh token with IG API
      const refreshRes = await fetch(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenRecord.accessToken}`,
      );
      const refreshData = await refreshRes.json();

      if (refreshData.access_token) {
        // Add new token expiration time (60 days)
        const newExpiresAt = new Date(Date.now() + refreshData.expires_in * 1000);

        tokenRecord = await prisma.instagramToken.update({
          where: { id: tokenRecord.id },
          data: {
            accessToken: refreshData.access_token,
            expiresAt: newExpiresAt,
          },
        });
      }
    } catch (error) {
      console.error("Fetching error with IG API:", error);
    }
  }

  return tokenRecord.accessToken;
}

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

// Get IG posts
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  try {
    const token = await getValidInstagramToken();

    const res = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${token}`,
      { next: { revalidate: 3600 } },
    );

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Impossible to load IG data:", error);
    return [];
  }
}

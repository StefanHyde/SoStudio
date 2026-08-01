import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

const RSS_URL = "https://anchor.fm/s/114819c68/podcast/rss";

export async function GET() {
  try {
    const feed = await parser.parseURL(RSS_URL);

    // Retrieve lastest episode
    const latest = feed.items[0];

    return NextResponse.json(
      {
        title: latest.title,
        description: latest.contentSnippet || latest.content,
        link: latest.link,
        pubDate: latest.pubDate,
        cover: latest.itunes?.image || feed.image?.url,
        audioUrl: latest.enclosure?.url,
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate",
        },
      },
    );
  } catch (error) {
    console.error("Erreur RSS Podcast:", error);
    return NextResponse.json({ error: "Impossible to fetch podcast" }, { status: 500 });
  }
}

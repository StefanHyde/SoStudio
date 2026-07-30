import { getInstagramPosts } from "@/lib/instagram";
import Image from "next/image";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 w-1/2 grid grid-cols-3 gap-6">
      {posts.map((post) => {
        const imageUrl = post.display_url || post.thumbnail_url;
        if (!imageUrl) {
          return null;
        }

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block h-60 bg-sable overflow-hidden rounded-lg"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={post.caption || "Post Instagram"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
              <p className="text-white text-sm line-clamp-3 font-medium">Voir sur Instagram →</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

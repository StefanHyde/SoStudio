import { getInstagramPosts } from "@/lib/instagram";
import Image from "next/image";

import { IoLogoInstagram } from "react-icons/io5";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts();

  return (
    <div className="w-full lg:w-3xl  py-12 px-4 grid grid-cols-3 gap-1 lg:gap-6 ">
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
            className="relative group block border-4 md:border-6 border-orange/90 h-48 md:h-60 overflow-hidden rounded-lg"
          >
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={"Post Instagram"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            )}
            <IoLogoInstagram className="absolute bottom-1 left-1 h-6 w-6 duration-300 ease-in-out text-orange/80 opacity-0 group-hover:opacity-100" />
          </a>
        );
      })}
    </div>
  );
}

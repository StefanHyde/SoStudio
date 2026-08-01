import InstagramFeed from "./instagramFeed";
import PodcastPlayer from "./podcastPlayer";
import { socials } from "@/lib/data/socials";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSpotify } from "react-icons/fa6";

export default function NewsSection() {
  const instagramUrl = socials.find((social) => social.name === "Instagram")?.url;
  const spotifyUrl = socials.find((social) => social.name === "Spotify")?.url;
  return (
    <div className="max-w-4xl w-full lg:w-3xl mx-auto py-12 px-4 ">
      <h2 className="font-dm-serif text-center text-4xl md:text-h2 text-palmier mb-8 tracking-wide">Nos actualités</h2>
      <InstagramFeed />
      <div className="flex justify-center">
        <a
          href={instagramUrl}
          className="inline-flex items-center gap-2 text-orange border border-orange p-2 rounded-md  hover:bg-orange hover:text-blanc duration-300 ease-in-out"
        >
          Suivez nous sur Instagram <IoLogoInstagram />
        </a>
      </div>
      <PodcastPlayer />
      <div className="flex justify-center">
        <a
          href={spotifyUrl}
          className="inline-flex items-center gap-2 text-orange border border-orange p-2 rounded-md  hover:bg-orange hover:text-blanc duration-300 ease-in-out"
        >
          Ou écoutez nous en podcast <FaSpotify />
        </a>
      </div>
    </div>
  );
}

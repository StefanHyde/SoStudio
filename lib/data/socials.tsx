import { IconType } from "react-icons";
import { IoLogoInstagram } from "react-icons/io5";
import { SiSubstack } from "react-icons/si";
import { FaSpotify } from "react-icons/fa6";
import { FaPinterest, FaTwitch } from "react-icons/fa";

interface socials {
  name: string;
  url: string;
  icon: IconType;
  iconColor?: string;
}

export const socials: socials[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/so.studio_siteweb",
    icon: IoLogoInstagram,
    iconColor: "text-corail",
  },
  { name: "Spotify", url: "https://www.spotify.com", icon: FaSpotify, iconColor: "text-teal-900" },
  { name: "Pinterest", url: "https://pin.it/PTWSuBbiP", icon: FaPinterest, iconColor: "text-corail" },
  { name: "Twithc", url: "https://www.twitch.tv/soostudio", icon: FaTwitch, iconColor: "text-mer" },
  { name: "Substack", url: "https://substack.com/@sostudio", icon: SiSubstack, iconColor: "text-orange" },
];

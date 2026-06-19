import type { StaticImageData } from "next/image";

import handIcon from "@/images/hand.png";
import iceIcon from "@/images/icecream.png";
import penIcon from "@/images/pen.png";
import phoneIcon from "@/images/phone.png";
import plantIcon from "@/images/plant.png";
import shieldIcon from "@/images/shield.png";
import smileyIcon from "@/images/smiley.png";
import umbrellaIcon from "@/images/umbrella.png";

interface items {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

export const reassuranceItems: items[] = [
  {
    icon: handIcon,
    title: "Prise en main",
    description: "Devenez autonome avec un site facile à reprendre en main, sans prise de tête.",
  },
  {
    icon: umbrellaIcon,
    title: "Conseil",
    description: "Des échanges réguliers et un accompagnement sur vos tunnels de conversion",
  },
  {
    icon: iceIcon,
    title: "Sur-Mesure",
    description: "Vous avez le choix entre deux maquettes sur-mesure pour votre site",
  },
  {
    icon: smileyIcon,
    title: "Humain",
    description: "Avec des mains expertes qui utilisent leurs connaissances et leur sensibilité à votre service.",
  },
  {
    icon: plantIcon,
    title: "Rapidité",
    description: "2 à 4 semaines pour que votre site soit en ligne, toutes clés en main ! ",
  },
  {
    icon: shieldIcon,
    title: "RGPD",
    description: "Pour sécuriser votre site et le rendre conforme aux normes européennes.",
  },
  {
    icon: phoneIcon,
    title: "Adaptabilité",
    description: "Pour un site adapté à tous les écrans mais aussi au besoins spéciaux des utilisateurs.",
  },
  {
    icon: penIcon,
    title: "Rédaction",
    description: "Une rédaction SEO qui encapsule votre univers tout en vous donnant de la visibilité.",
  },
];

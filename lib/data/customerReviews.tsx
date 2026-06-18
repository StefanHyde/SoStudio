import exempleImg from "@/images/logotype1.png";
import exempleImg2 from "@/images/logotype2.png";
import exempleImg3 from "@/images/logotype3.png";
import type { StaticImageData } from "next/image";

interface reviews {
  review: string;
  name: string;
  picture?: string | StaticImageData;
}

export const customerReviews: reviews[] = [
  {
    review:
      "Merci pour le site, il correspond tout à fait à mes besoins. Cce site m’a permis de gagner plus de clients qualifiés, tout en respectant mon univers.",
    name: "Salomé",
    picture: exempleImg,
  },
  {
    review:
      "Léa et Stéphane m'ont accompagnés étape par étape tout le long de la création de mon nouveau site we. Ils sont dynamiques, professionnels, et créatifs. Je ne saurais que vous les recommander.",
    name: "Hélène",
    picture: exempleImg2,
  },
  {
    review:
      "Le résultat est plus que satisfaisant, et je n'hésiterais pas à faire de nouveau appel à So Studio dans le cadre de mon activité libérale.",
    name: "Marie",
    picture: exempleImg3,
  },
];

import exempleImg from "@/images/logotype1.png"; //TODO: Change before deploy !
import type { StaticImageData } from "next/image";

interface reviews {
  review: string;
  name: string;
  picture?: string | StaticImageData;
}

export const customerReviews: reviews[] = [
  {
    review: "Definitely one of the best burgers in town ! ",
    name: "Jack Smith",
    picture: exempleImg,
  },
  {
    review: "Definitely one of the best burgers in town!",
    name: "Jack Smith",
  },
  {
    review: "Definitely one of the best burgers in town!",
    name: "Jack Smith",
  },
];

import { createElement, ReactElement } from "react";

interface socials {
  name: string;
  url: string;
  icon?: ReactElement;
}

export const socials: socials[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/so.studio_siteweb",
  },
];

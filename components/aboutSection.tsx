import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import Button from "@/components/button";

import leaPicture from "@/images/lea_pic.jpeg";
import stephanePicture from "@/images/stepahen_pic.jpg";
import logoOrange from "@/images/logotypebg.png";

interface AboutWishesProps {
  icon?: StaticImageData;
  text?: React.ReactNode;
}

interface AboutProps {
  title: string;
  wishListTitle: string;
  wishListDescription: string;
  children: ReactNode;
  wishesList?: AboutWishesProps[];
  ctaText?: string;
  ctaBtn?: boolean;
  ctaBtnText?: string;
  ctaLink: string;
}

function AboutWishes({ icon, text }: AboutWishesProps) {
  return (
    <div className="flex gap-4  items-center">
      {icon && <Image src={icon} alt="" className="w-4 md:w-8 h-4 md:h-8 shrink-0" />}
      <p>{text}</p>
    </div>
  );
}

export default function AboutSection({
  title,
  wishListTitle,
  children,
  wishesList,
  wishListDescription,
  ctaText,
  ctaBtn,
  ctaBtnText,
  ctaLink,
}: AboutProps) {
  return (
    <div className="flex flex-col w-full  justify-center items-center last:mb-12 py-12 px-8  gap-12">
      <h1 className="font-dm-serif text-5xl md:text-h1 text-palmier text-center">Soo bien accompagné</h1>
      <div className="relative flex  flex-col justify-center items-center w-full md:w-2/3  bg-blanc shadow-md/20 rounded-md p-8 pt-24 lg:p-24 mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="border-4 md:border-6 border-mer rounded-full overflow-hidden h-20 w-20 md:h-32 md:w-32 z-10 -mr-4 md:-mr-6">
            <Image
              src={leaPicture}
              height={120}
              width={120}
              alt={"photo de Lea"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-4 md:border-6 border-mer rounded-full overflow-hidden h-20 w-20 md:h-32 md:w-32 z-0">
            <Image
              src={stephanePicture}
              height={120}
              width={120}
              alt={"photo de Stephane"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h1 className="font-dm-serif text-3xl md:text-h2 text-palmier text-center mb-3 ">{title}</h1>
        <p className="prose text-normal max-w-none text-center">{children}</p>
      </div>
      <div className="flex flex-row justify-center items-center w-full gap-2">
        <div className="flex-col lg:w-1/2">
          <h1 className="font-dm-serif text-3xl md:text-h2 text-palmier text-center lg:text-left mb-3">
            {wishListTitle}
          </h1>
          <p className="text-center lg:text-left text-normal mb-6">{wishListDescription}</p>
          {wishesList && (
            <div className="flex flex-col gap-4">
              {wishesList.map((wish, index) => (
                <AboutWishes key={index} icon={wish.icon} text={wish.text} />
              ))}
            </div>
          )}
          {ctaText && <p className="text-center lg:text-left text-normal my-4">{ctaText}</p>}
          {ctaBtn && (
            <a href={ctaLink} target="_blank" className="flex justify-center lg:justify-start">
              <Button className="text-center " variant="secondary">
                {ctaBtnText}
              </Button>
            </a>
          )}
        </div>
        <div className=" hidden lg:flex">
          <Image className="justify-center" src={logoOrange} width={280} height={280} alt="" />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import corailLogo from "@/images/logotype1.png";
import palmierLogo from "@/images/logotype3.png";

import Button from "@/components/button";

import CalendlyEmbed from "@/components/calendyForm";

import { hero } from "@/lib/data/hero";

export default function Hero() {
  return (
    <div className="relative w-full md:w-2/3 xl:w-1/2 mx-auto flex flex-col justify-center items-center p-8 mt-40 mb-20">
      <Image src={palmierLogo} height={80} alt="Logo Studio Owl" className="absolute right-0 -top-8" />
      <div className=" text-palmier text-center gap-3">
        <h1 className="font-dm-serif text-2xl md:text-h2 ">{hero.heroTitle}</h1>
        <h2 className="font-dm-serif text-5xl md:text-h1">{hero.heroSubtitle}</h2>
        <p className="text-normal md:text-p text-nuit my-6 whitespace-pre-line">{hero.heroDescription}</p>
        <div className="flex justify-center gap-4">
          <CalendlyEmbed>
            <Button variant="primary">{hero.heroCTA}</Button>
          </CalendlyEmbed>
          <Button variant="secondary">{hero.heroBtn}</Button>
        </div>
        <Image src={corailLogo} height={80} alt="Logo Studio Owl" className="absolute left-0 -bottom-8" />
      </div>
    </div>
  );
}

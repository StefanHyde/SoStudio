import Image from "next/image";
import corailLogo from "@/images/logotype1.png";
import palmierLogo from "@/images/logotype3.png";

import Button from "./button";

export default function Hero() {
  return (
    <div className="relative w-full md:w-2/3 xl:w-1/2 mx-auto flex flex-col justify-center items-center p-8 mt-20">
      <Image src={palmierLogo} height={80} alt="Logo Studio Owl" className="absolute right-0 -top-8" />
      <div className=" text-palmier text-center gap-3">
        <h1 className="font-dm-serif text-2xl md:text-h2 ">Et si c’était So facile</h1>
        <h2 className="font-dm-serif text-5xl md:text-h1">De faire un site rentable</h2>
        <p className="text-normal md:text-p text-nuit my-6">
          Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made
          from 100% beef and are served on freshly baked buns.{" "}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">Bouton</Button>
          <Button variant="secondary">Bouton</Button>
        </div>
        <Image src={corailLogo} height={80} alt="Logo Studio Owl" className="absolute left-0 -bottom-8" />
      </div>
    </div>
  );
}

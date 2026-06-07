import Image from "next/image";
import footerLogo from "@/images/logox2.png";
import orangeLogo from "@/images/logotype2.png";

import { socials } from "@/lib/data/socials";

export default function Footer() {
  return (
    <div className="relative w-full flex flex-col justify-center items-center -mt-6 py-20 px-5 bg-palmier rounded-t-4xl">
      <div className="flex justify-center">
        <Image
          src={footerLogo}
          alt="Logo Studio Owl"
          height={74}
          className="object-contain w-1/2 md:w-full md:h-full pb-4"
          priority
        />
      </div>
      <div className="text-center  mb-12">
        <h1 className="font-dm-serif text-2xl md:text-h1 text-plage">Soo Facile</h1>
        <h1 className="font-dm-serif text-2xl md:text-h1 text-plage">Soo Rentable</h1>
      </div>
      <div className="flex justify-center items-center gap-6 mb-12">
        {socials.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <social.icon className={`h-6 w-6 duration-300 ease-in-out hover:opacity-80 ${social.iconColor}`} />
          </a>
        ))}
      </div>
      <p className="text-xs md:text-p text-plage">Copyright &copy; {new Date().getFullYear()} So Studio</p>
      <Image src={orangeLogo} height={52} alt="Logo Studio Owl" className="absolute  bottom-8 right-8" />
    </div>
  );
}

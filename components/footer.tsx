import Image from "next/image";
import footerLogo from "@/images/logox2.png";

export default function Footer() {
  return (
    <div className=" w-full flex flex-col justify-center items-center py-20 px-5 bg-palmier rounded-t-4xl">
      <div className="flex justify-center">
        <Image
          src={footerLogo}
          alt="Logo Studio Owl"
          height={74}
          className="object-contain w-1/2 md:w-full md:h-full pb-4"
          priority
        />
      </div>
      <div className="text-center ">
        <h1 className="font-dm-serif text-h1 text-plage">Soo Facile</h1>
        <h1 className="font-dm-serif text-h1 text-plage">Soo Rentable</h1>
      </div>
    </div>
  );
}

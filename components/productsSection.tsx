import Image, { StaticImageData } from "next/image";
import Button from "./button";
import CalendlyEmbed from "@/components/calendyForm";

interface productItemsProps {
  icon: StaticImageData;
  text: React.ReactNode;
}

interface productProps {
  name: string;
  description: string;
  price: string;
  features: productItemsProps[];
  children: React.ReactNode;
}

function ProductFeature({ icon, text }: productItemsProps) {
  return (
    <div className="flex gap-4 items-start">
      <Image src={icon} alt="" className="w-8 h-8 shrink-0" />
      <p>{text}</p>
    </div>
  );
}

export default function ProductsSection({ name, description, price, features, children }: productProps) {
  return (
    <div className="flex flex-col w-full md:w-4/5 justify-center items-center last:mb-12 py-12 px-8  gap-12">
      <h1 className="font-dm-serif text-5xl md:text-h1 text-palmier text-center">{children}</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 w-full md:w-4/5 justify-center items-center gap-12">
        <div className="flex flex-col justify-center items-center bg-blanc border-orange border rounded-md h-auto w-[300px] py-11 px-5 gap-3">
          <h2 className="font-dm-serif text-h2 text-palmier text-center">{name}</h2>
          <p className="font-normal text-center">{description}</p>
          <h3 className="font-dm-serif text-h2 text-nuit">{price} €</h3>
        </div>
      </div>
    </div>
  );
}

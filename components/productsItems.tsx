import Image from "next/image";
import Button from "./button";
import CalendlyEmbed from "@/components/calendyForm";

import checkIcon from "@/images/check.png";

interface productItemsProps {
  text: React.ReactNode;
}

interface productProps {
  title: string;
  name: string;
  description: string;
  price: string;
  features?: productItemsProps[];
  isBestSell?: boolean;
}

function ProductFeature({ text }: productItemsProps) {
  return (
    <div className="flex gap-4 items-start first:mt-4">
      <Image src={checkIcon} alt="" className="w-8 h-8 shrink-0" />
      <p>{text}</p>
    </div>
  );
}

export default function Productsitems({ name, description, price, features, isBestSell }: productProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-2xl xl:h-180 w-full  lg:w-96 py-6 xl:py-11 px-5 gap-3 border-orange ${
        isBestSell ? "border-4 bg-blanc/50" : "bg-blanc border"
      }`}
    >
      <h2 className="font-dm-serif text-h2 text-palmier text-center">{name}</h2>
      <p className="font-normal text-center">{description}</p>
      <h3 className="font-dm-serif text-h2 text-nuit">{price} €</h3>
      <CalendlyEmbed>
        <Button className="w-full normal-case!" variant={isBestSell ? "primary" : "secondary"}>
          En savoir plus
        </Button>
      </CalendlyEmbed>
      {features && (
        <div className="flex flex-col gap-4">
          {features.map((feat, index) => (
            <ProductFeature key={index} text={feat.text} />
          ))}
        </div>
      )}
    </div>
  );
}

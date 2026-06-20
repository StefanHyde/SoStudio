import Image from "next/image";
import { reassuranceItems } from "@/lib/data/reassuranceItems";
import Button from "./button";
import CalendlyEmbed from "@/components/calendyForm";

export default function ReassuranceSection() {
  return (
    <div className="flex flex-col w-full  justify-center items-center last:mb-12 py-12 px-8  gap-12">
      <h1 className="font-dm-serif text-5xl md:text-h1 text-palmier text-center">Soo plein d’attentions</h1>
      <div className="flex justify-center">
        <CalendlyEmbed>
          <Button className="w-full normal-case!" variant="primary">
            En savoir plus
          </Button>
        </CalendlyEmbed>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-6 *:col-span-1 xl:*:col-span-2 xl:[&>*:nth-child(4)]:col-span-3 xl:[&>*:nth-child(5)]:col-span-3 w-full xl:w-4/5 2xl:w-3/5 justify-center items-center gap-4  2xl:gap-12">
        {reassuranceItems.map((item, index) => (
          <div
            key={index}
            className="flex  flex-col items-center justify-center h-77 md:h-auto p-4 md:p-6 gap-4 bg-blanc shadow-md/20 rounded-md"
          >
            <Image src={item.icon} height={40} width={40} alt={item.title} className="object-cover" />
            <h2 className="font-dm-serif text-center text-xl xl:text-h2 text-palmier">{item.title}</h2>
            <p className="text-center text-normal">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import FreebieForm from "./freebieForm";
import DocImg from "@/images/Doc.png";

export default function FreebieSection() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-3/5  justify-between items-center last:mb-12 py-12 px-8 gap-8">
      <Image
        src={DocImg}
        height={410}
        className="w-32 lg:w-40 xl:w-auto h-auto -rotate-12 rounded-lg lg:rounded-2xl shadow-2xl"
        alt="Illustraton d'un document pdf"
      />
      <div className="flex flex-col ">
        <div className="mb-6">
          <h1 className="font-dm-serif text-h2 text-palmier text-center ">Récupère ton freebie</h1>
          <p className="text-p font-public-sans text-orange text-thin text-center ">Et en plus c&apos;est gratuit !</p>
        </div>
        <FreebieForm />
      </div>
    </div>
  );
}

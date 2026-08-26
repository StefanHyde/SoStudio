import Image from "next/image";
import FreebieForm from "./freebieForm";
import DocImg from "@/images/Doc.png";

export default function FreebieSection() {
  return (
    <div className="flex w-full md:w-3/5 justify-center items-center last:mb-12 py-12 px-8  gap-12">
      <Image
        src={DocImg}
        height={410}
        className="-rotate-12 rounded-2xl shadow-2xl"
        alt="Illustraton d'un document pdf"
      />
      <FreebieForm />
    </div>
  );
}

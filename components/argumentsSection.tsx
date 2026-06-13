import Image, { StaticImageData } from "next/image";
import Button from "@/components/button";
import CalendlyEmbed from "@/components/calendyForm";

interface ArgumentItemProps {
  icon: StaticImageData;
  text: React.ReactNode;
}

interface argumentsProps {
  title: string;
  argumentsList?: ArgumentItemProps[];
  image?: StaticImageData;
  imagePosition?: string;
  children: React.ReactNode;
}

function Argument({ icon, text }: ArgumentItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <Image src={icon} alt="" className="w-8 h-8 shrink-0" />
      <p>{text}</p>
    </div>
  );
}

export default function ArgumentsSection({
  title,
  imagePosition = "right",
  image,
  argumentsList,
  children,
}: argumentsProps) {
  return (
    <div
      className={`${imagePosition === "right" ? "" : "flex-row-reverse"} flex w-full md:w-2/3 justify-center items-center last:mb-12 py-12 px-8  gap-12 `}
    >
      <div className="flex flex-col gap-6 ">
        <h1 className="font-dm-serif text-h2 text-palmier text-center lg:text-left">{title}</h1>
        {children}
        {argumentsList && (
          <div className="flex flex-col gap-4">
            {argumentsList.map((arg, index) => (
              <Argument key={index} icon={arg.icon} text={arg.text} />
            ))}
          </div>
        )}
        {imagePosition === "left" ? (
          <CalendlyEmbed>
            <div className="flex justify-center md:justify-start">
              <Button variant="primary">Prendre RDV</Button>
            </div>
          </CalendlyEmbed>
        ) : (
          ""
        )}
      </div>
      {image && <Image className="justify-center hidden lg:flex w-1/2" src={image} width={570} height={400} alt="" />}
    </div>
  );
}

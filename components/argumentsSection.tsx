import Image, { StaticImageData } from "next/image";

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
    <div className={imagePosition === "right" ? "flex items-center" : "flex items-center flex-row-reverse"}>
      <div className="flex flex-col gap-6">
        <h1 className="font-dm-serif text-h2 text-palmier">{title}</h1>
        {children}
        {argumentsList && (
          <div className="flex flex-col gap-4">
            {argumentsList.map((arg, index) => (
              <Argument key={index} icon={arg.icon} text={arg.text} />
            ))}
          </div>
        )}
      </div>
      {image && <Image className="w-1/2 flex justify-center" src={image} alt="" />}
    </div>
  );
}

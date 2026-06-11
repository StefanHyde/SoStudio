import Image, { StaticImageData } from "next/image";

interface argumentsProps {
  title: string;
  image?: StaticImageData;
  imagePosition?: string;
  children: React.ReactNode;
}

export default function ArgumentsSection({ title, imagePosition = "right", image, children }: argumentsProps) {
  return (
    <div>
      {title}
      {image && <Image className="w-full md:w-1/2 flex justify-center" src={image} alt="" />}
    </div>
  );
}

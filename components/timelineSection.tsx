export function TimelineSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-5xl mx-auto py-12 px-4">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-mer -translate-x-1/2" />
      <div className="space-y-12 md:space-y-0">{children}</div>
    </div>
  );
}

interface StepProps {
  number: string;
  title: string;
  align: "left" | "right";
  children: React.ReactNode;
}

export function Step({ number, title, align, children }: StepProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`relative flex flex-col w-full md:w-2/3 justify-center items-center  md:flex-row  last:mb-12 py-12 px-8  ${!isLeft ? "md:flex-row-reverse" : ""}`}
    >
      <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
        <div className="space-y-4">
          <h2 className="font-dm-serif text-3xl md:text-h2 text-palmier">
            {number}. {title}
          </h2>

          <div className="prose text-normal max-w-none ">{children}</div>
        </div>
      </div>

      <div className="absolute left-4 md:left-1/2 top-2 w-6 h-6 rounded-full bg-mer border-4 border-plage -translate-x-1/2 z-10" />

      <div className="hidden md:block w-1/2" />
    </div>
  );
}

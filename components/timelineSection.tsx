export function TimelineSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-5xl mx-auto py-12 px-4">
      <div>{children}</div>
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
      className={`group relative flex flex-col w-full md:flex-row items-start py-12 ${
        isLeft ? "" : "md:flex-row-reverse"
      }`}
    >
      <div
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:w-2 bg-mer -translate-x-1/2 z-0 
        group-first:top-13 
        group-last:bottom-[calc(100%-64px)]"
      />

      <div className="w-full md:w-1/2 z-10">
        <div className={`space-y-4 pl-12 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
          <h2 className="font-dm-serif text-3xl md:text-h2 text-palmier leading-none">
            {number}. {title}
          </h2>

          <div className="prose text-normal max-w-none text-noir text-left [&_ul]:list-disc [&_ul]:pl-5 [&_li::marker]:text-noir [&_li]:text-noir">
            {children}
          </div>
        </div>
      </div>

      <div className="absolute left-4 md:left-1/2 md:top-13 w-6 md:w-10 h-6 md:h-10 rounded-full bg-mer  -translate-x-1/2 z-20" />

      <div className="hidden md:block w-1/2" />
    </div>
  );
}

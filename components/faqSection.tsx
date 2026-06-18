"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="font-dm-serif text-center text-4xl md:text-h2 text-palmier mb-8 tracking-wide">FAQ</h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {children}
      </Accordion>
    </div>
  );
}

interface FaqItemProps {
  value: string;
  question: string;
  children: React.ReactNode;
}

export function FaqItem({ value, question, children }: FaqItemProps) {
  return (
    <AccordionItem value={value} className="border-none bg-blanc shadow-md/20 rounded-md px-6 md:px-8">
      <AccordionTrigger className="font-dm-serif text-xl md:text-2xl text-palmier text-left py-6 hover:no-underline [&_svg]:text-[#E98A5D] [&_svg]:h-6 [&_svg]:w-6 [&_svg]:bg-transparent">
        {question}
      </AccordionTrigger>

      <AccordionContent className="overflow-hidden text-sm transition-all data-[state=open]:h-auto">
        <div className="prose text-normal text-noir pb-6 w-full  text-left [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

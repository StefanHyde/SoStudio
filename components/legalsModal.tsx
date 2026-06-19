"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import LegalContent from "@/content/legals.mdx";

export function LegalModal() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm font-light text-dark-800 dark:text-almost-white hover:underline transition-all">
        Mentions Légales
      </DialogTrigger>

      <DialogContent className="min-w-1/3 h-[90vh] p-4 overflow-hidden bg-white ring-0 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-dm-serif text-2xl text-center text-palmier dark:text-white border-b pb-4">
            Mentions Légales
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 mt-4">
          <div
            className="prose prose-sm md:prose-base max-w-none text-left font-montserrat text-dark-800 dark:text-almost-white 
            [&_h2]:font-semibold [&_h2]:text-xl [&_h2]:mt-6 [&_h2]:mb-3 [&_h2]:text-palmier
            [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 
            [&_a]:text-[#E98A5D] [&_a]:underline hover:[&_a]:text-opacity-80
            [&_hr]:my-6 [&_hr]:border-zinc-200 dark:[&_hr]:border-zinc-800"
          >
            <LegalContent />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

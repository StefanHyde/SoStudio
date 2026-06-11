"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

interface CalendlyEmbedProps {
  url?: string;
  children?: React.ReactNode;
}

export default function CalendlyEmbed({ url = process.env.NEXT_PUBLIC_CALENDLY_URL, children }: CalendlyEmbedProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="min-w-1/3 h-[90vh] p-4 overflow-hidden bg-white ring-0 shadow-2xl">
        <DialogTitle className="sr-only">Réservez votre RDV</DialogTitle>
        <DialogDescription className="sr-only">
          Sélectionnez un créneau dans mon calendrier Calendly pour discuter de votre projet.
        </DialogDescription>

        <div className="flex-1 h-full overflow-y-auto">
          <div className="calendly-inline-widget" data-url={url} style={{ height: "100%", minHeight: "700px" }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

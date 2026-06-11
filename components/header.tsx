"use client";
import Image from "next/image";
import Button from "@/components/button";
import CalendlyEmbed from "@/components/calendyForm";
import logo from "@/images/logo.png";

export default function Header() {
  return (
    <header
      className="
                 fixed z-50 flex h-18 w-full items-center justify-between px-4  md:px-24.5 py-1 bg-white shadow-md"
    >
      <div className="flex">
        <Image src={logo} alt="Logo Studio Owl" height={38} className="object-contain h-8 md:h-full" priority />
      </div>
      <CalendlyEmbed>
        <Button variant="primary">Prendre RDV</Button>
      </CalendlyEmbed>
    </header>
  );
}

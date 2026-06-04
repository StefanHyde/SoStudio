"use client";
import Image from "next/image";
import Button from "@/components/button";
import logo from "@/images/logo.png";

export default function Header() {
  return (
    <header
      className="
                 fixed z-50 flex h-18 w-full items-center justify-between py-10 bg-white shadow-2xl"
    >
      <div className="flex">
        <Image src={logo} alt="Logo Studio Owl" className="object-contain" priority />
      </div>
      <Button variant="secondary">Prendre RDV</Button>
    </header>
  );
}

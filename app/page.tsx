import Hero from "@/components/hero";
import CustomerReviews from "@/components/customerReviews";
import ArgumentsSection from "@/content/argumentsSection.mdx";
import ProductsSection from "@/content/productsSection.mdx";
import ReassuranceSection from "@/components/reassuranceSection";
import AboutSection from "@/content/aboutSection.mdx";
import TimelineSection from "@/content/timelineSection.mdx";
import FaqSection from "@/content/faqSection.mdx";

import type { Viewport } from "next";

export const viewport: Viewport = { themeColor: "#fcf3e3" };

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-plage">
      <Hero />
      <CustomerReviews />
      <ArgumentsSection />
      <ProductsSection />
      <ReassuranceSection />
      <AboutSection />
      <TimelineSection />
      <FaqSection />
    </div>
  );
}

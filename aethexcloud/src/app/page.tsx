import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CoreServices } from "@/components/sections/CoreServices";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { PricingSection } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "AethexCloud — Where Your Ideas Find a Home",
  description:
    "Reliable cloud infrastructure for websites, VPS, Minecraft servers, Discord bots and Lavalink nodes. Built for creators, developers and growing communities.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <CoreServices />
      <FeatureGrid />
      <Infrastructure />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { CoreServices } from "@/components/sections/CoreServices";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { PricingSection } from "@/components/sections/PricingSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export function HomePage() {
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
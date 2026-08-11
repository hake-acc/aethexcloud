import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";

const websiteHostingFeatures = ["Static and dynamic site hosting", "Instant deployment", "NVMe SSD storage", "Mumbai, India infrastructure", "AMD EPYC processors", "Responsive support"];

export function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6"><div className="mx-auto max-w-[1280px]"><ScrollReveal><div className="flex flex-col items-center text-center gap-4"><SectionLabel>Pricing</SectionLabel><h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">Simple, transparent pricing</h1><p className="max-w-2xl text-lg text-[#A1A1AA]">Every plan runs on AMD EPYC hardware with NVMe SSD storage in Mumbai, India. No hidden fees. No surprises.</p></div></ScrollReveal></div></section>
      <PricingSection />
      <section className="py-24 px-6"><div className="mx-auto max-w-[1280px]"><ScrollReveal><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-[32px] border border-white/[0.08] bg-[#111111] p-10 lg:p-14"><div className="flex flex-col gap-5"><SectionLabel>Website Hosting</SectionLabel><h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Host your website on Aethex Infrastructure</h2><p className="text-[#A1A1AA]">Deploy static sites, portfolios, web apps and more. Contact us to discuss the right plan for your project.</p><Button variant="primary" size="md" href="/contact" className="w-fit">Get in touch<IconArrowRight size={16} stroke={1.5} /></Button></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{websiteHostingFeatures.map((feature) => <div key={feature} className="flex items-center gap-3"><div className="flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5"><IconCheck size={12} stroke={2.5} className="text-white" /></div><span className="text-sm text-[#A1A1AA]">{feature}</span></div>)}</div></div></ScrollReveal></div></section>
      <section className="pb-12 px-6"><div className="mx-auto max-w-[1280px]"><ScrollReveal><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{[{ label: "Processor", value: "AMD EPYC" }, { label: "Storage", value: "NVMe SSD" }, { label: "Network", value: "1 Gbps" }, { label: "Location", value: "Mumbai, India" }].map((spec) => <div key={spec.label} className="flex flex-col gap-1 rounded-[16px] border border-white/[0.08] bg-[#111111] px-5 py-4 text-center"><p className="text-xs text-[#71717A]">{spec.label}</p><p className="text-base font-semibold text-white">{spec.value}</p></div>)}</div></ScrollReveal></div></section>
      <FAQ />
      <CTA />
    </>
  );
}
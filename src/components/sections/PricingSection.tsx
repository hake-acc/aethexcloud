"use client";

import { useState } from "react";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import {
  minecraftPlans,
  discordBotPlans,
  vpsPlans,
  lavalinkPlans,
  type PricingPlan,
} from "@/lib/data";
import { cn } from "@/lib/utils";

type Tab = "minecraft" | "discord" | "vps" | "lavalink";

const tabs: { id: Tab; label: string }[] = [
  { id: "minecraft", label: "Minecraft" },
  { id: "discord", label: "Discord Bot" },
  { id: "vps", label: "VPS India" },
  { id: "lavalink", label: "Lavalink" },
];

const plansByTab: Record<Tab, PricingPlan[]> = {
  minecraft: minecraftPlans,
  discord: discordBotPlans,
  vps: vpsPlans,
  lavalink: lavalinkPlans,
};

const includedFeaturesByTab: Record<Tab, string[]> = {
  minecraft: [
    "AMD EPYC processor",
    "NVMe SSD storage",
    "Instant deployment",
    "KVM virtualisation",
    "Mumbai, India",
    "All server types supported",
  ],
  discord: [
    "AMD EPYC processor",
    "NVMe SSD storage",
    "Instant deployment",
    "Node.js and Python support",
    "24/7 uptime",
    "Mumbai, India",
  ],
  vps: [
    "AMD EPYC processor",
    "NVMe SSD storage",
    "Full root access",
    "KVM virtualisation",
    "1 Gbps network",
    "Mumbai, India",
  ],
  lavalink: [
    "AMD EPYC processor",
    "NVMe SSD storage",
    "Instant deployment",
    "Low latency audio",
    "24/7 uptime",
    "Mumbai, India",
  ],
};

function PricingCard({ plan, features }: { plan: PricingPlan; features: string[] }) {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-6 rounded-3xl border p-8 transition-all duration-300",
        plan.highlighted
          ? "border-white/[0.15] bg-[#151515] hover:border-white/[0.25] shadow-xl shadow-white/[0.02]"
          : "border-white/[0.04] bg-[#111111] hover:border-white/[0.15] hover:bg-[#151515]"
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-b-xl shadow-sm">
          <span className="text-[11px] uppercase tracking-wider font-bold text-black">Most Popular</span>
        </div>
      )}

      {/* Plan name + code */}
      <div>
        <p className="text-xs text-[#71717A] font-medium mb-1 uppercase tracking-wider">{plan.code}</p>
        <p className="text-xl font-semibold text-white">{plan.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white tracking-tight">{plan.price}</span>
        <span className="text-[#71717A] text-sm font-medium">/month</span>
      </div>

      {/* Specs */}
      <div className="flex flex-col gap-3 py-6 border-y border-white/[0.06]">
        {plan.specs.map((spec) => (
          <div key={spec.label} className="flex items-center justify-between">
            <span className="text-sm text-[#A1A1AA]">{spec.label}</span>
            <span className="text-sm font-semibold text-white">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Included features */}
      <div className="flex flex-col gap-3 mb-4">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-3">
            <div className="flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-1">
              <IconCheck size={12} stroke={2.5} className="text-white" />
            </div>
            <span className="text-sm font-medium text-[#A1A1AA]">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant={plan.highlighted ? "primary" : "secondary"}
        size="lg"
        href="/contact"
        className="w-full mt-auto"
      >
        Get started
        <IconArrowRight size={18} stroke={1.5} className="ml-1" />
      </Button>
    </div>
  );
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<Tab>("minecraft");
  const plans = plansByTab[activeTab];
  const features = includedFeaturesByTab[activeTab];

  return (
    <section className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionLabel>Pricing</SectionLabel>
          </ScrollReveal>
          
          <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <h2 className="inline-block">Simple, transparent pricing.</h2>
          </SplitTextReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed">
              No hidden fees. Pay only for the resources you need to scale your project.
            </p>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] p-1.5 overflow-x-auto max-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap",
                    activeTab === tab.id
                      ? "bg-white text-black shadow-sm"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Plans Grid */}
        <div
          className={cn(
            "grid gap-6",
            plans.length <= 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.code} delay={0.1 + (i * 0.05)}>
              <PricingCard plan={plan} features={features} />
            </ScrollReveal>
          ))}

          {/* Custom plan for Lavalink */}
          {activeTab === "lavalink" && (
            <ScrollReveal delay={0.1 + (plans.length * 0.05)}>
              <div className="flex flex-col gap-6 rounded-3xl border border-dashed border-white/[0.12] bg-[#0D0D0D]/50 p-8 h-full">
                <div>
                  <p className="text-xs text-[#71717A] font-medium mb-1 uppercase tracking-wider">Custom</p>
                  <p className="text-xl font-semibold text-white">Custom Plan</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white tracking-tight">40% Off</span>
                </div>
                <p className="text-base text-[#A1A1AA] flex-1 leading-relaxed mt-4">
                  Need a custom configuration? Get 40% promotional discount on
                  custom CPU, RAM and storage specifications.
                </p>
                <Button variant="secondary" size="lg" href="/contact" className="w-full mt-auto">
                  Contact us
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.4}>
          <p className="text-center text-sm font-medium text-[#71717A] mt-16 max-w-xl mx-auto">
            All plans include infrastructure in Mumbai, India — powered by AMD EPYC and NVMe SSD.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

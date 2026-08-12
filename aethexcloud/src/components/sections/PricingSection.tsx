import { useState } from "react";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
        "aethex-surface aethex-border relative flex flex-col gap-6 rounded-[24px] border p-6",
        plan.highlighted
          ? "border-white/25 bg-[#151515]"
          : "border-white/[0.08] bg-[#111111] hover:border-white/[0.15]"
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 bg-white rounded-b-[10px] z-10">
          <span className="text-xs font-semibold text-black">Popular</span>
        </div>
      )}

      {/* Plan name + code */}
      <div>
        <p className="text-xs text-[#71717A] font-medium mb-1">{plan.code}</p>
        <p className="text-lg font-semibold text-white">{plan.name}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        <span className="text-[#71717A] text-sm">/month</span>
      </div>

      {/* Specs */}
      <div className="flex flex-col gap-2 py-4 border-y border-white/[0.06]">
        {plan.specs.map((spec) => (
          <div key={spec.label} className="flex items-center justify-between">
            <span className="text-sm text-[#71717A]">{spec.label}</span>
            <span className="text-sm font-medium text-white">{spec.value}</span>
          </div>
        ))}
      </div>

      {/* Included features */}
      <div className="flex flex-col gap-2.5">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2.5">
            <div className="flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5">
              <IconCheck size={11} stroke={2.5} className="text-white" />
            </div>
            <span className="text-sm text-[#A1A1AA]">{f}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        variant={plan.highlighted ? "primary" : "secondary"}
        size="md"
        href="/contact"
        className="w-full mt-auto"
      >
        Get started
        <IconArrowRight size={16} stroke={1.5} />
      </Button>
    </div>
  );
}

export function PricingSection() {
  const [activeTab, setActiveTab] = useState<Tab>("minecraft");
  const plans = plansByTab[activeTab];
  const features = includedFeaturesByTab[activeTab];

  return (
    <section className="py-24 px-6 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-12">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Simple, transparent pricing
            </h2>
            <p className="max-w-xl text-[#A1A1AA] text-lg">
              No hidden fees. Pay only for the resources you need.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex items-center gap-1 rounded-[16px] border border-white/[0.08] bg-[#111111] p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-5 py-2 rounded-[12px] text-sm font-medium transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-white text-black"
                      : "text-[#A1A1AA] hover:text-white"
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
            "grid gap-4",
            plans.length <= 4
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.code} delay={i * 0.06}>
              <PricingCard plan={plan} features={features} />
            </ScrollReveal>
          ))}

          {/* Custom plan for Lavalink */}
          {activeTab === "lavalink" && (
            <ScrollReveal delay={plans.length * 0.06}>
              <div className="aethex-surface aethex-border flex flex-col gap-6 rounded-[24px] border border-dashed border-white/[0.12] bg-transparent p-6 h-full">
                <div>
                  <p className="text-xs text-[#71717A] font-medium mb-1">Custom</p>
                  <p className="text-lg font-semibold text-white">Custom Plan</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">40% Off</span>
                </div>
                <p className="text-sm text-[#A1A1AA] flex-1">
                  Need a custom configuration? Get 40% promotional discount on
                  custom CPU, RAM and storage specifications.
                </p>
                <Button variant="secondary" size="md" href="/contact" className="w-full">
                  Contact us
                </Button>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-sm text-[#71717A] mt-10">
            All plans include infrastructure in Mumbai, India &mdash; powered by AMD EPYC and NVMe SSD.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

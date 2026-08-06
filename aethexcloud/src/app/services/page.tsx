import type { Metadata } from "next";
import Link from "next/link";
import {
  IconWorld,
  IconServer,
  IconSword,
  IconBrandDiscord,
  IconMusic,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website hosting, VPS India, Minecraft server hosting, Discord bot hosting and Lavalink hosting — all on AMD EPYC infrastructure in Mumbai.",
};

const services = [
  {
    icon: IconWorld,
    tag: "Web",
    title: "Website Hosting",
    description:
      "Deploy your website or web application on fast, reliable infrastructure. Whether it is a portfolio, a blog or a full-stack application, we have you covered.",
    features: [
      "Static and dynamic site support",
      "Instant deployment",
      "NVMe SSD storage",
      "AMD EPYC processors",
      "Mumbai, India location",
      "Responsive support",
    ],
    href: "/contact",
    cta: "Get in touch",
  },
  {
    icon: IconServer,
    tag: "VPS",
    title: "Virtual Private Servers (VPS)",
    description:
      "Full root access virtual private servers powered by AMD EPYC processors and NVMe SSD storage. KVM virtualisation ensures dedicated, isolated resources.",
    features: [
      "AMD EPYC processors",
      "NVMe SSD storage",
      "KVM virtualisation",
      "Full root access",
      "1 Gbps network uplink",
      "Instant setup",
    ],
    href: "/pricing",
    cta: "View VPS plans",
  },
  {
    icon: IconSword,
    tag: "Game",
    title: "Minecraft Server Hosting",
    description:
      "Smooth, lag-free Minecraft server hosting. Plans from 2 GB to 64 GB RAM support any scale — from a private world to a large public server.",
    features: [
      "Vanilla, Paper, Spigot, Forge support",
      "Plans from 2 GB to 64 GB RAM",
      "NVMe SSD storage",
      "Low latency in India",
      "Instant deployment",
      "Starting at ₹10/month",
    ],
    href: "/pricing",
    cta: "View Minecraft plans",
  },
  {
    icon: IconBrandDiscord,
    tag: "Bot",
    title: "Discord Bot Hosting",
    description:
      "Keep your Discord bots running 24/7 with reliable uptime. Supports Node.js, Python and any runtime you need. Plans scale from small bots to production-grade deployments.",
    features: [
      "Node.js and Python support",
      "Plans from 2 GB to 64 GB RAM",
      "Up to 700% CPU on top tier",
      "NVMe SSD storage",
      "24/7 uptime",
      "Starting at ₹20/month",
    ],
    href: "/pricing",
    cta: "View bot plans",
  },
  {
    icon: IconMusic,
    tag: "Audio",
    title: "Lavalink Hosting",
    description:
      "High-performance Lavalink nodes for Discord music bots. Low latency, stable connections and fast NVMe storage for smooth audio streaming.",
    features: [
      "Optimised for Lavalink",
      "Plans from 2 GB to 16 GB RAM",
      "Low latency audio",
      "NVMe SSD storage",
      "Custom plan with 40% discount",
      "Starting at ₹20/month",
    ],
    href: "/pricing",
    cta: "View Lavalink plans",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <SectionLabel>Services</SectionLabel>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
                Five services, one platform
              </h1>
              <p className="max-w-2xl text-lg text-[#A1A1AA]">
                Every service runs on Aethex Infrastructure — AMD EPYC processors
                and NVMe SSD storage in Mumbai, India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px] flex flex-col gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.07}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-[24px] border border-white/[0.08] bg-[#111111] p-8 lg:p-10 hover:border-white/[0.15] transition-colors">
                  {/* Left */}
                  <div className="lg:col-span-3 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.04] p-3">
                        <Icon size={22} stroke={1.5} className="text-white" />
                      </div>
                      <span className="text-xs font-medium text-[#71717A] border border-white/[0.08] rounded-full px-2.5 py-1">
                        {service.tag}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold text-white mb-3">
                        {service.title}
                      </h2>
                      <p className="text-[#A1A1AA] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <Button variant="primary" size="md" href={service.href} className="w-fit">
                      {service.cta}
                      <IconArrowRight size={16} stroke={1.5} />
                    </Button>
                  </div>

                  {/* Right — features */}
                  <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 content-start">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <div className="flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5">
                          <IconCheck size={12} stroke={2.5} className="text-white" />
                        </div>
                        <span className="text-sm text-[#A1A1AA]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}

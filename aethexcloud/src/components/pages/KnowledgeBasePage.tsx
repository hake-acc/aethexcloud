import { IconArrowRight, IconBook2, IconBrandDiscord, IconServer, IconSword, IconWorld } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const guides = [
  {
    id: "website-hosting-guide",
    icon: IconWorld,
    title: "How to choose website hosting in India",
    description: "Match a portfolio, blog or full-stack web app to the right hosting setup without paying for resources you do not need.",
    points: [
      "Static sites and portfolios benefit from simple, fast website hosting.",
      "Dynamic applications need predictable CPU, memory and storage.",
      "NVMe storage, SSL and responsive support are useful baseline checks.",
    ],
    href: "/services#website-hosting",
    cta: "Explore website hosting",
  },
  {
    id: "vps-guide",
    icon: IconServer,
    title: "VPS hosting explained: control, cost and resources",
    description: "Understand when a virtual private server is a better fit than shared hosting and what to check before choosing a plan.",
    points: [
      "KVM virtualization provides isolated virtual server resources.",
      "Root access is useful when you need to install and configure your own stack.",
      "Compare RAM, vCPU, NVMe storage, network capacity and location together.",
    ],
    href: "/pricing",
    cta: "Compare VPS pricing",
  },
  {
    id: "minecraft-guide",
    icon: IconSword,
    title: "Minecraft server hosting checklist",
    description: "Plan a smoother Minecraft server by matching memory, server software and player expectations to the infrastructure.",
    points: [
      "Paper, Spigot, Forge and Fabric have different resource profiles.",
      "Player count, mods and view distance affect memory requirements.",
      "A nearby India location can help reduce latency for local players.",
    ],
    href: "/services#minecraft-hosting",
    cta: "See Minecraft hosting",
  },
  {
    id: "discord-guide",
    icon: IconBrandDiscord,
    title: "Keeping a Discord bot online 24/7",
    description: "A practical starting point for Node.js and Python bot deployments, including uptime, runtime and scaling considerations.",
    points: [
      "Choose a host that supports your bot runtime and dependencies.",
      "Keep secrets outside source code and monitor restarts and logs.",
      "Scale memory and CPU as commands, integrations and guilds grow.",
    ],
    href: "/services#discord-bot-hosting",
    cta: "See Discord bot hosting",
  },
];

export function KnowledgeBasePage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6">
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <SectionLabel>Knowledge Base</SectionLabel>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">
                Practical hosting guides
              </h1>
              <p className="max-w-2xl text-lg text-[#A1A1AA]">
                Clear answers for choosing website hosting, VPS resources, Minecraft
                servers and always-on Discord bot infrastructure in India.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-4">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <ScrollReveal key={guide.id} delay={index * 0.07}>
                <article id={guide.id} className="aethex-surface aethex-border scroll-mt-24 flex h-full flex-col gap-6 rounded-[24px] border border-white/[0.08] p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="aethex-icon rounded-[14px] border border-white/[0.08] bg-white/[0.04] p-3">
                      <Icon size={22} stroke={1.5} className="text-white" />
                    </div>
                    <IconBook2 size={18} stroke={1.5} className="text-[#71717A]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{guide.title}</h2>
                    <p className="mt-3 text-[#A1A1AA] leading-relaxed">{guide.description}</p>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {guide.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-white/50" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button variant="secondary" size="md" href={guide.href} className="mt-auto w-fit">
                    {guide.cta}
                    <IconArrowRight size={16} stroke={1.5} />
                  </Button>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="rounded-[32px] border border-white/[0.08] bg-[#111111] px-8 py-12 text-center sm:px-16">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Still deciding what to deploy?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#A1A1AA]">
                Compare all AethexCloud hosting services, then contact the team if
                you need help sizing a plan.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button variant="primary" size="md" href="/services">
                  Explore services
                  <IconArrowRight size={16} stroke={1.5} />
                </Button>
                <Button variant="secondary" size="md" href="/contact">
                  Contact support
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
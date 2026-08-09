import Link from "next/link";
import {
  IconWorld,
  IconServer,
  IconSword,
  IconBrandDiscord,
  IconMusic,
  IconArrowRight,
  IconBolt,
  IconShieldLock,
  IconCpu,
} from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { coreServices } from "@/lib/data";

const serviceIcons = {
  website: IconWorld,
  vps: IconServer,
  minecraft: IconSword,
  "discord-bot": IconBrandDiscord,
  lavalink: IconMusic,
};

const storytellingFeatures = [
  {
    icon: IconBolt,
    title: "Instant Provisioning",
    description: "Launch your next big idea without waiting. Our automated systems deploy your infrastructure the second your payment clears.",
  },
  {
    icon: IconShieldLock,
    title: "Built-in Security",
    description: "Enterprise-grade DDoS protection and isolated environments keep your projects safe from unexpected attacks and downtime.",
  },
  {
    icon: IconCpu,
    title: "Unmatched Performance",
    description: "Running on AMD EPYC processors with NVMe SSDs, guaranteeing high tick rates, fast load times, and reliable uptime.",
  },
];

export function CoreServices() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#050505]">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1280px] relative z-10">
        
        {/* Storytelling Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <SectionLabel>Your Digital Foundation</SectionLabel>
          </ScrollReveal>
          
          <SplitTextReveal triggerOnScroll delay={0.2} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <h2 className="inline-block">Built for creators who demand more from their infrastructure.</h2>
          </SplitTextReveal>
          
          <ScrollReveal delay={0.3}>
            <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed">
              Whether you're hosting a portfolio, a game server for hundreds of players, or a Discord bot for thousands of guilds, we provide the performance to scale effortlessly.
            </p>
          </ScrollReveal>
        </div>

        {/* Storytelling value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {storytellingFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.2 + (i * 0.1)}>
              <div className="flex flex-col items-center text-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-[#0D0D0D] border border-white/[0.08] flex items-center justify-center mb-2 group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-300">
                  <feature.icon size={28} stroke={1.5} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-[#71717A] leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Services Grid Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-white/[0.08] pb-8">
           <div>
             <h3 className="text-3xl font-semibold text-white mb-3">Explore our services</h3>
             <p className="text-[#A1A1AA] max-w-xl">Five specialized hosting services, all running on Aethex Infrastructure in Mumbai. Choose the perfect environment for your workload.</p>
           </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, i) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            
            return (
              <ScrollReveal
                key={service.id}
                delay={i * 0.1}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col gap-6 rounded-3xl border border-white/[0.08] bg-[#0D0D0D] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/[0.2] hover:bg-[#111111] hover:shadow-2xl hover:shadow-white/[0.02] h-full"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl border border-white/[0.08] bg-[#151515] p-3 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                      {Icon && (
                        <Icon
                          size={24}
                          stroke={1.5}
                          className="text-white group-hover:text-black transition-colors duration-300"
                        />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-[#A1A1AA] border border-white/[0.1] bg-white/[0.02] rounded-full px-3 py-1 tracking-wide uppercase">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <h4 className="text-xl font-semibold text-white">
                      {service.title}
                    </h4>
                    <p className="text-base text-[#71717A] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white opacity-60 group-hover:opacity-100 transition-opacity mt-4">
                    Explore plans
                    <IconArrowRight
                      size={16}
                      stroke={2}
                      className="transition-transform group-hover:translate-x-1.5"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

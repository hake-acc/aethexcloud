import {
  IconWorld,
  IconServer,
  IconSword,
  IconBrandDiscord,
  IconMusic,
  IconArrowRight,
} from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { coreServices } from "@/lib/data";

const serviceIllustrations: Record<string, string> = {
  website: "/illustrations/web-hosting.jpg",
  vps: "/illustrations/vps.jpg",
  minecraft: "/illustrations/minecraft.jpg",
  "discord-bot": "/illustrations/discord-bot.jpg",
  lavalink: "/illustrations/lavalink.jpg",
};

const serviceIcons = {
  website: IconWorld,
  vps: IconServer,
  minecraft: IconSword,
  "discord-bot": IconBrandDiscord,
  lavalink: IconMusic,
};

export function CoreServices() {
  return (
    <section className="py-24 px-6 relative">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
            <SectionLabel>Core Services</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              India cloud hosting for every deployment
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              High-performance website hosting, VPS, game servers, and automated bot hosting, all running on enterprise infrastructure in Mumbai.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, i) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
            const illustration = serviceIllustrations[service.id];
            const isLast = i === coreServices.length - 1;
            const isSecondLast = i === coreServices.length - 2;

            return (
              <ScrollReveal
                key={service.id}
                delay={i * 0.08}
                className={
                  coreServices.length === 5 && isLast
                    ? "sm:col-span-2 lg:col-span-1"
                    : coreServices.length === 5 && isSecondLast
                    ? "lg:col-span-1"
                    : ""
                }
              >
                <a
                  href={service.href}
                  className="aethex-surface aethex-border group relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#111111] p-6 sm:p-7 transition-all duration-400 hover:border-white/[0.2] hover:bg-[#151515] h-full"
                >
                  {/* Top: 3D Illustrated Icon + Category Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-[16px] border border-white/[0.1] bg-black/60 shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition-transform duration-400 group-hover:scale-105 group-hover:border-white/[0.25]">
                        {illustration ? (
                          <img
                            src={illustration}
                            alt={`${service.title} illustrated icon`}
                            width={56}
                            height={56}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          Icon && <Icon size={24} stroke={1.5} className="text-white" />
                        )}
                      </div>

                      <span className="text-xs font-medium text-[#A1A1AA] border border-white/[0.08] bg-white/[0.03] rounded-full px-3 py-1">
                        {service.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-2.5">
                      <h3 className="text-xl font-semibold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#71717A] group-hover:text-white transition-colors pt-6 border-t border-white/[0.05] mt-6">
                    <span>Explore {service.title}</span>
                    <IconArrowRight
                      size={15}
                      stroke={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

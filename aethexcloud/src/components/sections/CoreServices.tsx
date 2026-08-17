import { IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { coreServices } from "@/lib/data";
import {
  WebHostingLineIllustration,
  VpsLineIllustration,
  MinecraftLineIllustration,
  DiscordBotLineIllustration,
  LavalinkLineIllustration,
} from "@/components/illustrations/ServiceLineIllustrations";

const serviceLineIllustrations: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  website: WebHostingLineIllustration,
  vps: VpsLineIllustration,
  minecraft: MinecraftLineIllustration,
  "discord-bot": DiscordBotLineIllustration,
  lavalink: LavalinkLineIllustration,
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
            const LineIllustration = serviceLineIllustrations[service.id];
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
                  {/* Top: 2D Line Illustration + Category Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-13 w-13 items-center justify-center rounded-[16px] border border-white/[0.08] bg-white/[0.03] text-white p-2.5 transition-all duration-300 group-hover:border-white/[0.2] group-hover:bg-white/[0.06] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]">
                        {LineIllustration && (
                          <LineIllustration className="h-full w-full transition-transform duration-400 group-hover:scale-110" />
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

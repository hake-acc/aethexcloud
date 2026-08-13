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

const serviceIcons = {
  website: IconWorld,
  vps: IconServer,
  minecraft: IconSword,
  "discord-bot": IconBrandDiscord,
  lavalink: IconMusic,
};

export function CoreServices() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>Core Services</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              India cloud hosting for every deployment
            </h2>
            <p className="max-w-xl text-[#A1A1AA] text-lg">
              Website hosting, VPS, game servers and bot hosting, all running
              on Aethex Infrastructure in Mumbai.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, i) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons];
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
                  className="group flex flex-col gap-5 rounded-[24px] border border-white/[0.08] bg-[#111111] p-7 transition-all duration-300 hover:border-white/[0.15] hover:bg-[#151515] h-full"
                >
                  {/* Icon + Tag */}
                  <div className="flex items-start justify-between">
                    <div className="rounded-[14px] border border-white/[0.08] bg-white/[0.04] p-3">
                      {Icon && (
                        <Icon
                          size={22}
                          stroke={1.5}
                          className="text-white"
                        />
                      )}
                    </div>
                    <span className="text-xs font-medium text-[#71717A] border border-white/[0.08] rounded-full px-2.5 py-1">
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-[#71717A] group-hover:text-white transition-colors">
                    Learn more
                    <IconArrowRight
                      size={14}
                      stroke={1.5}
                      className="transition-transform group-hover:translate-x-1"
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

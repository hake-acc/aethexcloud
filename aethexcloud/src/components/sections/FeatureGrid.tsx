import {
  IconRocket,
  IconDatabase,
  IconCpu,
  IconTerminal,
  IconArrowsMaximize,
  IconTag,
  IconBolt,
  IconHeadset,
} from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { features } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; stroke?: number; className?: string }>> = {
  IconRocket,
  IconDatabase,
  IconCpu,
  IconTerminal,
  IconArrowsMaximize,
  IconTag,
  IconBolt,
  IconHeadset,
};

export function FeatureGrid() {
  return (
    <section className="py-24 px-6 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>Platform Features</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Built for performance
            </h2>
            <p className="max-w-xl text-[#A1A1AA] text-lg">
              Every service runs on infrastructure designed to be fast,
              reliable and developer-friendly.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div className="aethex-surface aethex-border flex flex-col gap-4 rounded-[24px] p-6 h-full">
                  <div className="aethex-icon rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-2.5 w-fit">
                    {Icon && (
                      <Icon size={20} stroke={1.5} className="text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

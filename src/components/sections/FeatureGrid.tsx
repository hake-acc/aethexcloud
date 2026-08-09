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
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
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
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-2xl mx-auto">
          <ScrollReveal>
            <SectionLabel>Platform Features</SectionLabel>
          </ScrollReveal>
          
          <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <h2 className="inline-block">Built for performance without compromise.</h2>
          </SplitTextReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed">
              Every service runs on infrastructure designed to be fast,
              reliable and incredibly developer-friendly.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={i * 0.05}>
                <div className="group flex flex-col gap-6 rounded-3xl border border-white/[0.04] bg-[#111111] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.02] hover:border-white/[0.1] hover:shadow-2xl hover:shadow-white/[0.02]">
                  <div className="rounded-xl border border-white/[0.08] bg-[#151515] p-3 w-fit group-hover:bg-white group-hover:border-transparent transition-colors duration-300">
                    {Icon && (
                      <Icon size={24} stroke={1.5} className="text-white group-hover:text-black transition-colors duration-300" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#71717A] leading-relaxed">
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

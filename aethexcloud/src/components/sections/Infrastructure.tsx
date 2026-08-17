import { IconMapPin, IconCheck, IconServer, IconCpu, IconShieldCheck, IconBolt } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { infrastructureSpecs } from "@/lib/data";
import { LiveLatencyMonitor } from "@/components/sections/LiveLatencyMonitor";
import { AmdEpycLineIllustration } from "@/components/illustrations/ServiceLineIllustrations";

const performanceHighlights = [
  { icon: IconCpu, title: "AMD EPYC Compute", desc: "Dedicated high-frequency cores delivering steady IPC under load." },
  { icon: IconBolt, title: "Pure NVMe Gen4", desc: "Sub-millisecond disk access speeds for high-I/O databases." },
  { icon: IconShieldCheck, title: "KVM Virtualization", desc: "Strict kernel isolation guarantees dedicated RAM & CPU allocation." },
  { icon: IconServer, title: "Tier-3 Mumbai Facility", desc: "Redundant N+1 power generators and carrier-neutral peering." },
];

export function Infrastructure() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
            <SectionLabel>Infrastructure & Network</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Enterprise Mumbai hardware. Direct Indian routing.
            </h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              Engineered from the ground up for minimal latency across South Asia. All services run on enterprise AMD EPYC architecture in Tier-3 Mumbai facilities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Specs and Architecture Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal direction="left">
              <div className="aethex-surface aethex-border rounded-[24px] border border-white/[0.08] p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="aethex-icon rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-2.5">
                      <IconMapPin size={20} stroke={1.5} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">CtrlS DC, Mumbai</p>
                      <p className="text-xs text-[#71717A]">Primary South Asia Node (IN-BOM-1)</p>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-white/[0.08] bg-white/[0.03] text-white p-2">
                    <AmdEpycLineIllustration className="h-full w-full" />
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {infrastructureSpecs.map((spec) => (
                    <div
                      key={spec.label}
                      className="rounded-[14px] border border-white/[0.06] bg-black/40 px-3.5 py-3"
                    >
                      <p className="text-[11px] text-[#71717A] font-medium uppercase tracking-wider">
                        {spec.label}
                      </p>
                      <p className="text-sm text-white font-semibold mt-0.5">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Architecture Highlights */}
                <div className="flex flex-col gap-3.5 border-t border-white/[0.06] pt-5">
                  {performanceHighlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 rounded-[8px] border border-white/[0.08] bg-white/[0.03] p-1.5 text-white">
                          <Icon size={15} stroke={1.5} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">{item.title}</p>
                          <p className="text-xs text-[#71717A] leading-relaxed mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Live Interactive Latency Radar */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.1}>
              <LiveLatencyMonitor />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { IconMapPin, IconCheck } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { infrastructureSpecs } from "@/lib/data";

const performanceMetrics = [
  { label: "Server uptime target", value: "99.9%" },
  { label: "Network uplink", value: "1 Gbps" },
  { label: "Storage type", value: "NVMe SSD" },
  { label: "Deployment time", value: "Instant" },
];

export function Infrastructure() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <ScrollReveal direction="left">
              <SectionLabel>Infrastructure</SectionLabel>
            </ScrollReveal>
            
            <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              <h2 className="inline-block">Built on Aethex Infrastructure.</h2>
            </SplitTextReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed">
                All services run on modern, enterprise-grade hardware located in
                Mumbai, India. We use AMD EPYC processors and NVMe SSD storage
                to deliver consistently fast performance.
              </p>
            </ScrollReveal>

            {/* Spec list */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {infrastructureSpecs.map((spec, i) => (
                <ScrollReveal direction="up" delay={0.3 + (i * 0.05)} key={spec.label}>
                  <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.04] bg-[#0D0D0D] px-5 py-4 hover:bg-white/[0.02] transition-colors duration-300">
                    <p className="text-xs text-[#71717A] font-semibold uppercase tracking-wider">
                      {spec.label}
                    </p>
                    <p className="text-base text-white font-semibold">
                      {spec.value}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.2} className="h-full">
            <div className="flex flex-col gap-6 h-full justify-center">
              {/* Location card */}
              <div className="rounded-3xl border border-white/[0.04] bg-[#0D0D0D] p-8 shadow-2xl hover:border-white/[0.1] transition-all duration-300">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/[0.06]">
                  <div className="rounded-xl border border-white/[0.08] bg-[#151515] p-3 w-fit">
                    <IconMapPin size={24} stroke={1.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xl text-white font-semibold mb-1">Mumbai, India</p>
                    <p className="text-sm text-[#71717A] uppercase tracking-wider font-medium">
                      Primary data center
                    </p>
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold text-[#71717A] uppercase tracking-widest mb-2">
                    Performance metrics
                  </p>
                  {performanceMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between py-2 group"
                    >
                      <span className="text-sm font-medium text-[#A1A1AA] group-hover:text-white transition-colors duration-300">
                        {metric.label}
                      </span>
                      <span className="text-base font-semibold text-white">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  "KVM virtualisation",
                  "Full root access",
                  "Scalable resources",
                  "Instant provisioning",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 bg-[#0D0D0D] border border-white/[0.04] rounded-xl px-4 py-3">
                    <div className="flex-shrink-0 rounded-full bg-white/[0.04] p-1 border border-white/[0.08]">
                      <IconCheck size={14} stroke={2} className="text-white" />
                    </div>
                    <p className="text-sm font-medium text-[#A1A1AA]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

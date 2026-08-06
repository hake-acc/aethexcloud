import { IconMapPin, IconCheck } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          {/* Left */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <SectionLabel>Infrastructure</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                Aethex Infrastructure
              </h2>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                All services run on modern, enterprise-grade hardware located in
                Mumbai, India. We use AMD EPYC processors and NVMe SSD storage
                to deliver consistently fast performance.
              </p>

              {/* Spec list */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                {infrastructureSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 rounded-[16px] border border-white/[0.08] bg-[#111111] px-4 py-3"
                  >
                    <p className="text-xs text-[#71717A] font-medium">
                      {spec.label}
                    </p>
                    <p className="text-sm text-white font-semibold">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal direction="right" delay={0.15}>
            <div className="flex flex-col gap-6">
              {/* Location card */}
              <div className="rounded-[24px] border border-white/[0.08] bg-[#111111] p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-2.5">
                    <IconMapPin size={20} stroke={1.5} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Mumbai, India</p>
                    <p className="text-sm text-[#71717A]">
                      Primary data center
                    </p>
                  </div>
                </div>

                {/* Performance metrics */}
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-medium text-[#71717A] uppercase tracking-wider mb-1">
                    Performance metrics
                  </p>
                  {performanceMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0"
                    >
                      <span className="text-sm text-[#A1A1AA]">
                        {metric.label}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-col gap-3">
                {[
                  "KVM virtualisation for full resource isolation",
                  "Full root access on all VPS plans",
                  "Scalable resources without downtime",
                  "Instant provisioning on order confirmation",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] p-0.5">
                      <IconCheck size={12} stroke={2} className="text-white" />
                    </div>
                    <p className="text-sm text-[#A1A1AA]">{point}</p>
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

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";
import {
  IconBox,
  IconCpu,
  IconDatabase,
  IconMapPin,
  IconRocket,
  IconTag,
} from "@tabler/icons-react";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#0D0D0D]">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#71717A]">
                Aethex Infrastructure
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                The foundation for everything you build.
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-[#A1A1AA]">
                Reliable hardware, fast deployment and the resources to keep
                your ideas running without compromise.
              </p>
            </div>

            <div className="flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-[#A1A1AA]">
              <IconMapPin size={16} stroke={1.5} className="text-white" />
              <span>Mumbai, India</span>
              <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              <span className="text-xs text-[#71717A]">Online</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => {
            const icons = [
              IconTag,
              IconCpu,
              IconDatabase,
              IconRocket,
              IconBox,
              IconMapPin,
            ];
            const Icon = icons[i];

            return (
              <ScrollReveal key={stat.label} delay={i * 0.06}>
                <div className="group relative flex min-h-[168px] flex-col justify-between overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#111111] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-[#151515]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/[0.08] bg-white/[0.04] text-[#A1A1AA] transition-colors duration-300 group-hover:border-white/[0.16] group-hover:bg-white/[0.08] group-hover:text-white">
                      <Icon size={19} stroke={1.5} />
                    </div>
                    <span className="text-xs font-medium tracking-wider text-white/[0.2]">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <p className="text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                      <span className="ml-0.5 text-base font-medium text-[#A1A1AA]">
                        {stat.suffix}
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-[#71717A]">{stat.label}</p>
                  </div>

                  <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-white/40 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

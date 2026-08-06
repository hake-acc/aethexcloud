import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-white/[0.06] bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6 bg-white/[0.06] rounded-[24px] overflow-hidden">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.06}>
              <div className="flex flex-col items-center justify-center gap-1 bg-[#0D0D0D] px-6 py-8 text-center">
                <p className="text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                  <span className="text-[#A1A1AA] text-base font-medium">
                    {stat.suffix}
                  </span>
                </p>
                <p className="text-sm text-[#71717A]">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

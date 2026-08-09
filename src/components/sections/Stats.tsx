import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-y border-white/[0.04] bg-[#050505] relative z-20">
      <div className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6 overflow-hidden">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.05}>
              <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-6 text-center group">
                <p className="text-3xl font-bold tracking-tight text-white group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[#71717A] text-lg font-medium ml-0.5">
                      {stat.suffix}
                    </span>
                  )}
                </p>
                <p className="text-sm font-medium text-[#71717A] uppercase tracking-wider">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

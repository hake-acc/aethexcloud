import { IconQuote } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <ScrollReveal>
            <SectionLabel>Testimonials</SectionLabel>
          </ScrollReveal>
          
          <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            <h2 className="inline-block">Trusted by creators and developers.</h2>
          </SplitTextReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="group flex flex-col gap-6 rounded-3xl border border-white/[0.04] bg-[#111111] p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.1] hover:bg-[#151515] hover:shadow-2xl hover:shadow-white/[0.02]">
                <IconQuote
                  size={32}
                  stroke={1.5}
                  className="text-white/[0.15] group-hover:text-white/[0.25] transition-colors duration-300 flex-shrink-0"
                />
                <p className="text-[#A1A1AA] text-lg leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/[0.06]">
                  <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
                    <span className="text-base font-bold text-white group-hover:text-black transition-colors duration-300">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{t.name}</p>
                    <p className="text-sm font-medium text-[#71717A] uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

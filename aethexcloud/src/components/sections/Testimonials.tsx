import { IconQuote } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Trusted by creators and developers
            </h2>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="flex flex-col gap-6 rounded-[24px] border border-white/[0.08] bg-[#111111] p-7 h-full">
                <IconQuote
                  size={24}
                  stroke={1.5}
                  className="text-white/20 flex-shrink-0"
                />
                <p className="text-[#A1A1AA] text-base leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                  <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-white">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-[#71717A]">{t.role}</p>
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

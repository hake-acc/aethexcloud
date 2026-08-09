import { IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <div className="rounded-[40px] border border-white/[0.04] bg-[#0D0D0D] px-8 py-24 sm:px-16 flex flex-col items-center text-center gap-10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
            
            <div className="flex flex-col gap-6 max-w-2xl relative z-10">
              <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                <h2 className="inline-block">Ready to launch your next project?</h2>
              </SplitTextReveal>
              <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed mt-2">
                Deploy your website, VPS, Minecraft server or Discord bot on
                infrastructure built for speed and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
              <Button variant="primary" size="lg" href="/pricing">
                Deploy Now
                <IconArrowRight size={18} stroke={1.5} className="ml-1" />
              </Button>
              <Button variant="secondary" size="lg" href="/pricing">
                View Pricing
              </Button>
            </div>

            {/* Bottom label */}
            <p className="text-sm font-medium text-[#71717A] tracking-wide relative z-10">
              Instant setup — no waiting, no manual provisioning
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

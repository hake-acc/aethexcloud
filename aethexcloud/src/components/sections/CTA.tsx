import { IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <ScrollReveal>
          <div className="rounded-[32px] border border-white/[0.08] bg-[#111111] px-8 py-16 sm:px-16 flex flex-col items-center text-center gap-8">
            {/* Decorative top line */}
            <div className="w-16 h-px bg-white/20" />

            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
                Ready to launch your next project?
              </h2>
              <p className="text-[#A1A1AA] text-lg">
                Deploy your website, VPS, Minecraft server or Discord bot on
                infrastructure built for speed and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button variant="primary" size="lg" href="/pricing">
                Deploy Now
                <IconArrowRight size={18} stroke={1.5} />
              </Button>
              <Button variant="secondary" size="lg" href="/pricing">
                View Pricing
              </Button>
            </div>

            {/* Bottom label */}
            <p className="text-sm text-[#71717A]">
              Instant setup &mdash; no waiting, no manual provisioning
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

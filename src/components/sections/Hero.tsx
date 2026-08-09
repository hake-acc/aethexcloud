"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";

export function Hero() {
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65 },
          "+=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          brandRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          decorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          0
        );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Responsive orbital artwork */}
      <picture className="absolute inset-0 pointer-events-none select-none">
        <source media="(max-width: 767px)" srcSet="/backgrounds/hero-mobile-dark.png" />
        <img
          src="/backgrounds/hero-desktop-dark.png"
          alt=""
          width={1024}
          height={1536}
          fetchPriority="high"
          className="h-full w-full object-cover object-center opacity-75"
        />
      </picture>

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,transparent_15%,rgba(5,5,5,0.28)_62%,#050505_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505]/35 via-transparent to-[#050505]" aria-hidden="true" />

      {/* Decorative geometric elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/[0.04]" />
        <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        <div className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full border border-white/[0.03]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #050505 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 text-center">
        {/* Eyebrow */}
        <div ref={labelRef} className="flex justify-center mb-8">
          <SectionLabel>Cloud Infrastructure</SectionLabel>
        </div>

        {/* Main Heading */}
        <SplitTextReveal delay={0.2} className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6">
          <h1 className="inline-block">Host Anything.<br />Build Everything.</h1>
        </SplitTextReveal>

        {/* Subheading */}
        <p ref={subRef} className="mx-auto max-w-2xl text-lg text-[#A1A1AA] leading-[1.6] mb-10">
          Reliable cloud infrastructure for websites, VPS, Minecraft servers, Discord bots and Lavalink nodes. Built for creators, developers and growing communities.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="/pricing">
            Get Started
            <IconArrowRight size={18} stroke={1.5} />
          </Button>
          <Button variant="secondary" size="lg" href="/pricing">
            Explore Plans
          </Button>
        </div>

        {/* Brand line */}
        <p ref={brandRef} className="text-sm text-[#71717A] tracking-wide">
          Where Your Ideas Find a Home.
        </p>
      </div>
    </section>
  );
}

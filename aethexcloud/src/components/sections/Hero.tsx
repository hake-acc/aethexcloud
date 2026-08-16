import { useRef, useEffect } from "react";
import gsap from "gsap";
import { IconArrowRight, IconServer } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HeroMotionCanvas } from "@/components/animations/HeroMotionCanvas";

type SplitTypeResult = {
  lines: HTMLElement[];
  revert: () => void;
};

function SplitType(element: HTMLElement): SplitTypeResult {
  const originalMarkup = element.innerHTML;
  const lineNodes: Node[][] = [[]];

  element.childNodes.forEach((node) => {
    if (node.nodeName === "BR") {
      lineNodes.push([]);
    } else {
      lineNodes[lineNodes.length - 1].push(node.cloneNode(true));
    }
  });

  const lines = lineNodes.map((nodes) => {
    const mask = document.createElement("span");
    const line = document.createElement("span");

    mask.className = "block overflow-hidden";
    line.className = "block will-change-transform";
    line.textContent = nodes.map((node) => node.textContent ?? "").join("");
    mask.appendChild(line);
    element.appendChild(mask);

    return line;
  });

  element.replaceChildren(
    ...lines.map((line) => line.parentElement as HTMLElement)
  );

  return {
    lines,
    revert: () => {
      element.innerHTML = originalMarkup;
    },
  };
}

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const splitHeading = SplitType(heading);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(splitHeading.lines, {
        transform: "translate3d(0, 110%, 0)",
        force3D: true,
        willChange: "transform",
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .to(
          splitHeading.lines,
          {
            transform: "translate3d(0, 0%, 0)",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.07,
            clearProps: "willChange",
          },
          "-=0.3"
        )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.4"
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
      splitHeading.revert();
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Responsive orbital artwork */}
      <picture className="absolute inset-0 pointer-events-none select-none">
        <source
          media="(max-width: 767px)"
          srcSet="/backgrounds/hero-mobile-dark.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet="/backgrounds/hero-mobile-dark.png"
        />
        <source
          srcSet="/backgrounds/hero-desktop-dark.webp"
          type="image/webp"
        />
        <img
          src="/backgrounds/hero-desktop-dark.png"
          alt=""
          width={1024}
          height={1536}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-60"
        />
      </picture>

      {/* Atmospheric lighting layers */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,transparent_15%,rgba(5,5,5,0.35)_62%,#050505_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]"
        aria-hidden="true"
      />

      {/* Real-time GPU Motion Topology Canvas */}
      <HeroMotionCanvas />

      {/* Decorative geometric elements */}
      <div
        ref={decorRef}
        className="aethex-grid absolute inset-0 pointer-events-none opacity-50"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/[0.04] animate-[aethex-drift_18s_ease-in-out_infinite]" />
        <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-white/[0.03]" />
        <div className="absolute -bottom-48 -left-48 w-[700px] h-[700px] rounded-full border border-white/[0.03] animate-[aethex-drift_22s_ease-in-out_infinite_reverse]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #050505 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 sm:py-20 text-center">
        {/* Eyebrow / Node Status */}
        <div ref={labelRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <SectionLabel>Cloud Hosting in India</SectionLabel>
          <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs text-[#A1A1AA]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Mumbai IN-BOM-1</span>
            <span className="text-[#71717A]">•</span>
            <span className="font-mono text-[11px] text-white">99.99% Uptime</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] text-white mb-6"
        >
          Cloud Hosting in India.
          <br />
          Build Everything.
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="mx-auto max-w-2xl text-lg text-[#A1A1AA] leading-[1.6] mb-10"
        >
          Fast, reliable infrastructure for websites, VPS, Minecraft servers,
          Discord bots and Lavalink nodes. Deploy from Mumbai for creators,
          developers and growing communities.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
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

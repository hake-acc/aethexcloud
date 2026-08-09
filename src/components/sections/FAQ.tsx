"use client";

import { useState, useRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = contentRef.current;
    if (!el) return;

    if (!open) {
      gsap.set(el, { height: "auto", opacity: 1 });
      const h = el.offsetHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power3.inOut" });
    }
    setOpen((v) => !v);
  };

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-white/[0.04] last:border-0">
        <button
          onClick={toggle}
          className="flex items-center justify-between w-full py-6 text-left gap-6 group"
          aria-expanded={open}
        >
          <span
            className={cn(
              "text-lg font-medium transition-colors duration-300",
              open ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
            )}
          >
            {question}
          </span>
          <div className={cn(
            "w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300",
            open ? "border-white/[0.2] bg-white/[0.04]" : "border-transparent bg-transparent group-hover:bg-white/[0.02] group-hover:border-white/[0.08]"
          )}>
            <IconChevronDown
              size={18}
              stroke={1.5}
              className={cn(
                "text-[#71717A] transition-transform duration-300",
                open && "rotate-180 text-white"
              )}
            />
          </div>
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        >
          <p className="pb-8 pr-12 text-base text-[#71717A] leading-relaxed">{answer}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FAQ() {
  return (
    <section className="py-32 px-6 bg-[#050505]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left header */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
            <ScrollReveal direction="left">
              <SectionLabel>FAQ</SectionLabel>
            </ScrollReveal>
            
            <SplitTextReveal triggerOnScroll delay={0.1} className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              <h2 className="inline-block">Frequently asked questions</h2>
            </SplitTextReveal>
            
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-[#A1A1AA] text-lg">
                Can&apos;t find an answer? Reach out to us.
              </p>
            </ScrollReveal>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-2 rounded-3xl border border-white/[0.04] bg-[#0D0D0D] p-6 sm:p-10">
            {faqItems.map((item, i) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

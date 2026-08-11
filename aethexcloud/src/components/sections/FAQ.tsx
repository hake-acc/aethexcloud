import { useState, useRef } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
        { height: h, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in" });
    }
    setOpen((v) => !v);
  };

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-white/[0.06] last:border-0">
        <button
          onClick={toggle}
          className="flex items-center justify-between w-full py-5 text-left gap-6 group"
          aria-expanded={open}
        >
          <span
            className={cn(
              "text-base font-medium transition-colors",
              open ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
            )}
          >
            {question}
          </span>
          <IconChevronDown
            size={18}
            stroke={1.5}
            className={cn(
              "flex-shrink-0 text-[#71717A] transition-transform duration-200",
              open && "rotate-180"
            )}
          />
        </button>
        <div
          ref={contentRef}
          className="overflow-hidden"
          style={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        >
          <p className="pb-5 text-sm text-[#A1A1AA] leading-relaxed">{answer}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left header */}
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-4 lg:sticky lg:top-28">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Frequently asked questions
              </h2>
              <p className="text-[#A1A1AA]">
                Can&apos;t find an answer? Reach out to us.
              </p>
            </div>
          </ScrollReveal>

          {/* Right accordion */}
          <div className="lg:col-span-2">
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

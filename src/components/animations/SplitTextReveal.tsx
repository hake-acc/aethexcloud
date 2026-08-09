"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SplitTextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerOnScroll?: boolean;
};

function SplitType(element: HTMLElement) {
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
    line.className = "block will-change-transform opacity-0";
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

export function SplitTextReveal({
  children,
  className,
  delay = 0,
  triggerOnScroll = false,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const split = SplitType(container);

    const ctx = gsap.context(() => {
      const animationProps = {
        y: "110%",
        opacity: 0,
      };

      gsap.set(split.lines, animationProps);

      const targetProps = {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
        delay,
        clearProps: "willChange",
      };

      if (triggerOnScroll) {
        gsap.to(split.lines, {
          ...targetProps,
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      } else {
        gsap.to(split.lines, targetProps);
      }
    }, containerRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, [delay, triggerOnScroll]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}

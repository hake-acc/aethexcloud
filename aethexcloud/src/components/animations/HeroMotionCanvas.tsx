import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  highlighted?: boolean;
}

export function HeroMotionCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = { x: -1000, y: -1000, active: false };

    // Initialize network nodes
    const nodeCount = Math.min(Math.floor((width * height) / 28000), 32);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
        baseRadius: Math.random() * 1.5 + 1.2,
      });
    }

    // Central Mumbai anchor node
    const mumbaiNode: Node = {
      x: width * 0.5,
      y: height * 0.48,
      vx: 0,
      vy: 0,
      radius: 3,
      baseRadius: 3,
      highlighted: true,
    };
    nodes.push(mumbaiNode);

    // Pulse rings from Mumbai hub
    let pulseRadius = 0;
    const maxPulse = Math.min(width, height) * 0.45;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      mumbaiNode.x = width * 0.5;
      mumbaiNode.y = height * 0.48;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Observer to halt rendering when out of viewport (0% CPU when not viewing hero)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animationFrameId) {
            render();
          }
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const maxDistance = 140;

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Pulse animation from Mumbai hub
      pulseRadius += 0.45;
      if (pulseRadius > maxPulse) pulseRadius = 0;
      const pulseOpacity = (1 - pulseRadius / maxPulse) * 0.22;

      ctx.beginPath();
      ctx.arc(mumbaiNode.x, mumbaiNode.y, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${pulseOpacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Second lagging pulse
      if (pulseRadius > maxPulse * 0.5) {
        const p2 = pulseRadius - maxPulse * 0.5;
        const op2 = (1 - p2 / maxPulse) * 0.16;
        ctx.beginPath();
        ctx.arc(mumbaiNode.x, mumbaiNode.y, p2, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${op2})`;
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Motion physics
        if (!nodeA.highlighted) {
          nodeA.x += nodeA.vx;
          nodeA.y += nodeA.vy;

          if (nodeA.x <= 0 || nodeA.x >= width) nodeA.vx *= -1;
          if (nodeA.y <= 0 || nodeA.y >= height) nodeA.vy *= -1;

          // Mouse subtle repulsion
          if (mouse.active) {
            const dx = nodeA.x - mouse.x;
            const dy = nodeA.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 100 && dist > 0) {
              const force = (100 - dist) / 100;
              nodeA.x += (dx / dist) * force * 1.5;
              nodeA.y += (dy / dist) * force * 1.5;
            }
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.highlighted
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.35)";
        ctx.fill();

        if (nodeA.highlighted) {
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, nodeA.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}

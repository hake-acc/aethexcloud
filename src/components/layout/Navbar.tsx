"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  IconChevronDown,
  IconMenu2,
  IconX,
  IconWorld,
  IconServer,
  IconSword,
  IconBrandDiscord,
  IconMusic,
  IconHome,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { serviceLinks, navLinks } from "@/lib/data";

const serviceIcons = {
  "Website Hosting": IconWorld,
  "VPS India": IconServer,
  "Minecraft Hosting": IconSword,
  "Discord Bot Hosting": IconBrandDiscord,
  "Lavalink Hosting": IconMusic,
};

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    if (servicesOpen) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -8, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power3.out" }
      );
    }
  }, [servicesOpen]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (mobileOpen) {
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.04] shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-xl bg-white/[0.04] p-1.5 border border-white/[0.08] group-hover:bg-white/[0.08] transition-colors">
                 <Image
                  src="/aethex_cloud_logo.png"
                  alt="AethexCloud"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-white font-semibold tracking-tight text-lg group-hover:opacity-90 transition-opacity">
                AethexCloud
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <Link
                  href="/"
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    pathname === "/"
                      ? "text-white bg-white/[0.08]"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  <IconHome size={16} stroke={1.5} />
                  Home
              </Link>
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    servicesOpen ? "text-white bg-white/[0.08]" : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <IconChevronDown
                    size={14}
                    stroke={1.5}
                    className={cn(
                      "transition-transform duration-300",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 rounded-2xl border border-white/[0.08] bg-[#050505]/95 backdrop-blur-xl p-3 shadow-2xl"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      {serviceLinks.map((service) => {
                        const Icon =
                          serviceIcons[service.label as keyof typeof serviceIcons];
                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.06] group"
                          >
                            {Icon && (
                              <div className="mt-0.5 rounded-lg border border-white/[0.08] bg-white/[0.02] p-2 flex-shrink-0 group-hover:bg-white/[0.06] transition-colors">
                                <Icon
                                  size={18}
                                  stroke={1.5}
                                  className="text-[#A1A1AA] group-hover:text-white transition-colors"
                                />
                              </div>
                            )}
                            <div>
                              <p className="text-sm font-semibold text-white mb-0.5">
                                {service.label}
                              </p>
                              <p className="text-xs text-[#71717A] leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    pathname === link.href
                      ? "text-white bg-white/[0.08]"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" size="sm" href="/login">
                Log in
              </Button>
              <Button variant="primary" size="sm" href="/pricing">
                Get Started
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#A1A1AA] hover:text-white hover:bg-white/[0.08] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <IconX size={20} stroke={1.5} />
              ) : (
                <IconMenu2 size={20} stroke={1.5} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-xl pt-24 pb-8 px-6 overflow-y-auto flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white hover:bg-white/[0.06] transition-colors font-medium text-lg"
            >
              <IconHome size={22} stroke={1.5} className="text-[#A1A1AA]" />
              Return Home
            </Link>
            
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-[#71717A] uppercase tracking-widest mb-3 px-4">
                Services
              </p>
              {serviceLinks.map((service) => {
                const Icon =
                  serviceIcons[service.label as keyof typeof serviceIcons];
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] transition-colors"
                  >
                    <div className="rounded-lg bg-white/[0.04] p-2 border border-white/[0.04]">
                        {Icon && <Icon size={20} stroke={1.5} />}
                    </div>
                    <span className="font-medium text-base">{service.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent w-full my-2" />

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-3 rounded-xl text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] transition-colors font-medium text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="max-w-md mx-auto w-full flex flex-col gap-3 mt-8">
            <Button variant="secondary" size="lg" href="/login" className="w-full text-base">
              Log in
            </Button>
            <Button variant="primary" size="lg" href="/pricing" className="w-full text-base">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useEffect, useRef } from "react";
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
  IconHome2,
  IconTag,
  IconBook2,
  IconActivity,
  IconMail,
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

const navIcons = {
  "/": IconHome2,
  "/pricing": IconTag,
  "/knowledge-base": IconBook2,
  "/status": IconActivity,
  "/contact": IconMail,
};

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    if (!dropdown) return;
    if (servicesOpen) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [servicesOpen]);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (mobileOpen) {
      gsap.fromTo(
        menu,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" }
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#050505]/95 backdrop-blur-sm border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/aethex_cloud_logo.png"
                alt="AethexCloud"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-semibold text-lg tracking-tight">
                AethexCloud
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(
                    "flex items-center gap-1.5 px-2.5 py-2 text-sm font-medium rounded-[12px] transition-all duration-300",
                    "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <IconChevronDown
                    size={14}
                    stroke={1.5}
                    className={cn(
                      "transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div
                    ref={dropdownRef}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="aethex-border absolute top-full left-0 mt-2 w-72 rounded-[20px] border border-white/[0.08] bg-[#0D0D0D] p-2 shadow-xl"
                  >
                    {serviceLinks.map((service) => {
                      const Icon =
                        serviceIcons[service.label as keyof typeof serviceIcons];
                      return (
                  <a
                          key={service.href}
                          href={service.href}
                    className="flex items-start gap-3 rounded-[14px] p-3 transition-all duration-300 hover:bg-white/[0.06] hover:translate-x-1 group"
                        >
                          {Icon && (
                            <div className="mt-0.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] p-1.5">
                              <Icon
                                size={16}
                                stroke={1.5}
                                className="text-[#A1A1AA] group-hover:text-white transition-colors"
                              />
                            </div>
                          )}
                          <div>
                            <p className="text-sm font-medium text-white">
                              {service.label}
                            </p>
                            <p className="text-xs text-[#71717A] mt-0.5">
                              {service.description}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                (() => {
                  const Icon = navIcons[link.href as keyof typeof navIcons];
                  const isActive = pathname === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-2 px-2.5 py-2 text-sm font-medium rounded-[12px] transition-colors duration-150",
                        isActive
                          ? "text-white bg-white/[0.06]"
                          : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                      )}
                    >
                      {Icon && <Icon size={15} stroke={1.5} />}
                      {link.label}
                    </a>
                  );
                })()
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
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[12px] text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] transition-colors"
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
          className="fixed inset-0 z-40 bg-[#050505] pt-16 overflow-y-auto"
        >
          <div className="px-6 py-8 flex flex-col gap-2">
            <p className="text-xs font-medium text-[#71717A] uppercase tracking-wider mb-2 px-3">
              Services
            </p>
            {serviceLinks.map((service) => {
              const Icon =
                serviceIcons[service.label as keyof typeof serviceIcons];
              return (
                <a
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-[14px] text-[#A1A1AA] hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  {Icon && <Icon size={18} stroke={1.5} />}
                  <span className="font-medium">{service.label}</span>
                </a>
              );
            })}

            <div className="h-px bg-white/[0.06] my-4" />

            {navLinks.map((link) => (
              (() => {
                const Icon = navIcons[link.href as keyof typeof navIcons];
                const isActive = pathname === link.href;
                return (
                <a
                key={link.href}
                href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-[14px] transition-colors font-medium",
                    isActive
                      ? "text-white bg-white/[0.06]"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]"
                  )}
              >
                  {Icon && <Icon size={18} stroke={1.5} />}
                {link.label}
                </a>
                );
              })()
            ))}

            <div className="h-px bg-white/[0.06] my-4" />

            <div className="flex flex-col gap-3">
              <Button variant="secondary" size="md" href="/login" className="w-full">
                Log in
              </Button>
              <Button variant="primary" size="md" href="/pricing" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

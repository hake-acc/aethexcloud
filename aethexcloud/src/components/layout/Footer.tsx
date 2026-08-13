import {
  IconBrandDiscord,
  IconBrandX,
  IconBrandGithub,
} from "@tabler/icons-react";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Website Hosting", href: "/services#website-hosting" },
      { label: "VPS India", href: "/services#vps-hosting" },
      { label: "Minecraft Hosting", href: "/services#minecraft-hosting" },
      { label: "Discord Bot Hosting", href: "/services#discord-bot-hosting" },
      { label: "Lavalink Hosting", href: "/services#lavalink-hosting" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Status", href: "/status" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socialLinks = [
  { label: "Discord", href: "#", icon: IconBrandDiscord },
  { label: "X", href: "#", icon: IconBrandX },
  { label: "GitHub", href: "#", icon: IconBrandGithub },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0D0D0D]">
      <div className="mx-auto max-w-[1280px] px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="/" className="flex items-center gap-3 w-fit">
              <img
                src="/aethex_cloud_logo.png"
                alt="AethexCloud"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-white font-semibold text-base tracking-tight">
                AethexCloud
              </span>
            </a>
            <p className="text-[#71717A] text-sm leading-relaxed max-w-xs">
              Where Your Ideas Find a Home. Reliable cloud infrastructure for
              creators, developers and growing communities.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 rounded-[12px] border border-white/[0.08] text-[#71717A] hover:text-white hover:border-white/[0.15] transition-colors"
                  >
                    <Icon size={16} stroke={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.heading} className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#71717A]">
                  {group.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-[#A1A1AA] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#71717A]">
            &copy; {new Date().getFullYear()} AethexCloud. All rights reserved.
          </p>
          <p className="text-sm text-[#71717A]">
            Built on{" "}
            <span className="text-[#A1A1AA]">Aethex Infrastructure</span> &mdash;
            Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}

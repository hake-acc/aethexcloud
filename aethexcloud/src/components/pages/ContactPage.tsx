import { IconBrandDiscord, IconMail, IconBook, IconCircleDot } from "@tabler/icons-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactForm } from "@/components/sections/ContactForm";

const channels = [
  { icon: IconBrandDiscord, title: "Discord", description: "Join our community server for real-time support and updates.", action: "Join Discord", href: "#" },
  { icon: IconMail, title: "Email", description: "Send us an email and we will respond as quickly as possible.", action: "Send email", href: "mailto:support@aethexcloud.com" },
  { icon: IconBook, title: "Knowledge Base", description: "Browse our documentation for guides and troubleshooting.", action: "Open docs", href: "/knowledge-base" },
  { icon: IconCircleDot, title: "Status", description: "Check real-time service status and incident reports.", action: "View status", href: "/status" },
];

export function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6"><div className="mx-auto max-w-[1280px]"><ScrollReveal><div className="flex flex-col items-center text-center gap-4"><SectionLabel>Contact</SectionLabel><h1 className="text-5xl sm:text-6xl font-bold tracking-[-0.04em] text-white">Get in touch</h1><p className="max-w-xl text-lg text-[#A1A1AA]">Have a question or need help with a service? We are here to assist you.</p></div></ScrollReveal></div></section>
      <section className="px-6 pb-16"><div className="mx-auto max-w-[1280px]"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{channels.map((channel, i) => { const Icon = channel.icon; return <ScrollReveal key={channel.title} delay={i * 0.07}><div className="flex flex-col gap-4 rounded-[24px] border border-white/[0.08] bg-[#111111] p-6 h-full hover:border-white/[0.15] transition-colors"><div className="rounded-[12px] border border-white/[0.08] bg-white/[0.04] p-2.5 w-fit"><Icon size={20} stroke={1.5} className="text-white" /></div><div className="flex flex-col gap-1.5 flex-1"><h3 className="text-base font-semibold text-white">{channel.title}</h3><p className="text-sm text-[#A1A1AA]">{channel.description}</p></div><a href={channel.href} className="text-sm font-medium text-white/60 hover:text-white transition-colors">{channel.action} &rarr;</a></div></ScrollReveal>; })}</div></div></section>
      <section className="px-6 pb-24"><div className="mx-auto max-w-[1280px]"><div className="grid grid-cols-1 lg:grid-cols-5 gap-12"><ScrollReveal direction="left" className="lg:col-span-2"><div className="flex flex-col gap-5"><h2 className="text-3xl font-semibold tracking-tight text-white">Send us a message</h2><p className="text-[#A1A1AA]">Fill out the form and we will get back to you as soon as possible. For urgent issues, please use Discord for a faster response.</p><div className="flex flex-col gap-3 mt-2">{["Service questions", "Plan upgrades", "Technical support", "General enquiries"].map((item) => <div key={item} className="flex items-center gap-2.5 text-sm text-[#A1A1AA]"><div className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />{item}</div>)}</div></div></ScrollReveal><ScrollReveal direction="right" delay={0.1} className="lg:col-span-3"><ContactForm /></ScrollReveal></div></div></section>
    </>
  );
}
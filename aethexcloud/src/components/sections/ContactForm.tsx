"use client";

import { useState } from "react";
import { IconSend } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const subjects = [
  "Website Hosting",
  "VPS India",
  "Minecraft Hosting",
  "Discord Bot Hosting",
  "Lavalink Hosting",
  "Plan Upgrade",
  "Technical Support",
  "General Enquiry",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-[24px] border border-white/[0.08] bg-[#111111] p-12 text-center min-h-[400px]">
        <div className="rounded-full border border-white/[0.08] bg-white/[0.04] p-4">
          <IconSend size={24} stroke={1.5} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Message sent</h3>
          <p className="text-[#A1A1AA] text-sm">
            We have received your message and will get back to you shortly.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-[#71717A] hover:text-white transition-colors mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-[24px] border border-white/[0.08] bg-[#111111] p-8"
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[#A1A1AA]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={cn(
              "h-11 w-full rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-[#71717A]",
              "focus:outline-none focus:border-white/25 transition-colors"
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[#A1A1AA]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className={cn(
              "h-11 w-full rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white placeholder-[#71717A]",
              "focus:outline-none focus:border-white/25 transition-colors"
            )}
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-[#A1A1AA]">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className={cn(
            "h-11 w-full rounded-[16px] border border-white/[0.08] bg-[#111111] px-4 text-sm text-white",
            "focus:outline-none focus:border-white/25 transition-colors appearance-none cursor-pointer"
          )}
        >
          <option value="" disabled className="text-[#71717A]">
            Select a subject
          </option>
          {subjects.map((s) => (
            <option key={s} value={s} className="bg-[#111111] text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-[#A1A1AA]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your question or issue..."
          className={cn(
            "w-full rounded-[16px] border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-[#71717A] resize-none",
            "focus:outline-none focus:border-white/25 transition-colors"
          )}
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === "sending"}
        className="w-full"
      >
        {status === "sending" ? "Sending..." : "Send message"}
        {status !== "sending" && <IconSend size={16} stroke={1.5} />}
      </Button>
    </form>
  );
}

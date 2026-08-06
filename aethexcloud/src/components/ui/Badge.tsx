import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "warning" | "error" | "info";
}

const variantClasses = {
  default: "bg-white/[0.06] text-[#A1A1AA] border-white/[0.08]",
  success: "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20",
  warning: "bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/20",
  error: "bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20",
  info: "bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20",
};

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

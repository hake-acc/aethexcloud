import Link from "next/link";
import { IconArrowLeft, IconHome } from "@tabler/icons-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white px-6">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        <div className="rounded-full bg-white/[0.04] p-4 border border-white/[0.08] mb-4">
          <IconHome size={32} stroke={1.5} className="text-[#A1A1AA]" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight">404</h1>
        <h2 className="text-xl text-[#A1A1AA] font-medium">Page not found</h2>
        <p className="text-[#71717A] text-center mb-4">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg" href="/" className="w-full sm:w-auto">
          <IconArrowLeft size={18} stroke={1.5} className="mr-2" />
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}

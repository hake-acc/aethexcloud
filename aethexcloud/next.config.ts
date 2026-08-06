import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "dd113fa0-fa91-4856-a51b-b8600d271d25-00-2v001raanua2n.sisko.replit.dev",
    "*.replit.dev",
    "*.repl.co",
  ],
};

export default nextConfig;

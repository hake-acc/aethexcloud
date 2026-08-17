import { useState } from "react";
import {
  IconCheck,
  IconServer,
  IconCpu,
  IconShieldLock,
  IconWorld,
  IconDatabase,
  IconBolt,
} from "@tabler/icons-react";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  uptimePercentage: string;
  latencyAvg: string;
  status: "operational" | "degraded" | "maintenance";
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "panel",
    name: "Control Panel & User Portal",
    category: "Management (https://ap.riptodevelops.xyz)",
    uptimePercentage: "99.98%",
    latencyAvg: "38ms",
    status: "operational",
    description: "Pelican control panel interface, account management, and server orchestration.",
  },
  {
    id: "node-bom-1",
    name: "Mumbai Node 1 (IN-BOM-01)",
    category: "Compute & KVM (CtrlS Mumbai)",
    uptimePercentage: "99.99%",
    latencyAvg: "1.8ms",
    status: "operational",
    description: "Enterprise AMD EPYC host node running KVM VPS and dedicated compute containers.",
  },
  {
    id: "wings-daemon",
    name: "Wings Daemon & Container Runtime",
    category: "Virtualization Layer",
    uptimePercentage: "100.00%",
    latencyAvg: "2.1ms",
    status: "operational",
    description: "Docker & KVM container provisioning daemon for Minecraft, Lavalink, and bots.",
  },
  {
    id: "network-uplink",
    name: "Mumbai Subsea Transit & BGP Uplink",
    category: "1 Gbps Direct Peering",
    uptimePercentage: "100.00%",
    latencyAvg: "< 5ms",
    status: "operational",
    description: "Low-latency NIXI internet exchange routing with carrier-neutral fiber uplink.",
  },
  {
    id: "edge-ddos",
    name: "Anycast Edge & DDoS Mitigation",
    category: "Cloudflare Edge",
    uptimePercentage: "100.00%",
    latencyAvg: "8ms",
    status: "operational",
    description: "L3/L4/L7 automated traffic scrubbing and SSL edge termination.",
  },
  {
    id: "database-storage",
    name: "NVMe Gen4 Storage Pool & Backups",
    category: "High-IOPS Storage",
    uptimePercentage: "99.99%",
    latencyAvg: "0.2ms",
    status: "operational",
    description: "Enterprise Samsung & Solidigm NVMe array with redundant RAID-10 mirrors.",
  },
];

export function ServiceStatusList() {
  const [hoveredDay, setHoveredDay] = useState<{ serviceId: string; dayIndex: number } | null>(null);

  // Generate 90 days of uptime bars
  const days = Array.from({ length: 90 }, (_, i) => 89 - i);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white">System Components</h2>
        <div className="flex items-center gap-4 text-xs text-[#71717A]">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Operational
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-400" /> Degraded
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="aethex-surface aethex-border rounded-[20px] border border-white/[0.08] bg-[#111111] p-5 sm:p-6 transition-all duration-300 hover:border-white/[0.18]"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-semibold text-white">{service.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                    <IconCheck size={11} stroke={2.5} />
                    Operational
                  </span>
                </div>
                <p className="text-xs text-[#71717A] mt-0.5">{service.category}</p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="text-right">
                  <span className="text-[#71717A] block text-[11px]">90-Day Uptime</span>
                  <span className="font-semibold font-mono text-white text-sm">{service.uptimePercentage}</span>
                </div>
                <div className="text-right pl-4 border-l border-white/[0.08]">
                  <span className="text-[#71717A] block text-[11px]">Avg Response</span>
                  <span className="font-semibold font-mono text-white text-sm">{service.latencyAvg}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              {service.description}
            </p>

            {/* 90-Day Interactive Uptime Bar Graph */}
            <div>
              <div className="flex items-center justify-between text-[11px] text-[#71717A] mb-2 font-mono">
                <span>90 days ago</span>
                <span>Today (100%)</span>
              </div>

              <div className="flex items-center gap-0.5 sm:gap-1">
                {days.map((dayAgo) => {
                  const isHovered = hoveredDay?.serviceId === service.id && hoveredDay?.dayIndex === dayAgo;
                  return (
                    <div
                      key={dayAgo}
                      onMouseEnter={() => setHoveredDay({ serviceId: service.id, dayIndex: dayAgo })}
                      onMouseLeave={() => setHoveredDay(null)}
                      className="group relative flex-1 h-7 rounded-[2px] bg-emerald-400/85 hover:bg-emerald-300 transition-all duration-150 cursor-pointer"
                    >
                      {isHovered && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[8px] border border-white/20 bg-black px-2 py-1 text-[10px] font-mono text-white shadow-xl z-20 pointer-events-none">
                          {dayAgo === 0 ? "Today" : `${dayAgo}d ago`}: 100% operational
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

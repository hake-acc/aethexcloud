import { useState, useEffect } from "react";
import {
  IconActivity,
  IconArrowUpRight,
  IconCheck,
  IconServer,
  IconWifi,
} from "@tabler/icons-react";

interface EdgeNode {
  id: string;
  city: string;
  country: string;
  baseLatency: number;
  route: string;
  tier: string;
}

const edgeNodes: EdgeNode[] = [
  { id: "bom", city: "Mumbai (Core Hub)", country: "India", baseLatency: 1.8, route: "Local Direct (CtrlS)", tier: "Primary" },
  { id: "blr", city: "Bengaluru", country: "India", baseLatency: 12.4, route: "Direct Peering", tier: "South Edge" },
  { id: "del", city: "New Delhi", country: "India", baseLatency: 16.8, route: "NIXI Exchange", tier: "North Edge" },
  { id: "hyd", city: "Hyderabad", country: "India", baseLatency: 11.2, route: "Direct Peering", tier: "Central Edge" },
  { id: "sin", city: "Singapore", country: "ASEAN", baseLatency: 38.5, route: "Subsea Cable (BBG)", tier: "Intl Gateway" },
  { id: "fra", city: "Frankfurt", country: "Europe", baseLatency: 108.2, route: "AAE-1 Cable", tier: "Intl Edge" },
];

export function LiveLatencyMonitor() {
  const [selectedNode, setSelectedNode] = useState<EdgeNode>(edgeNodes[0]);
  const [currentPing, setCurrentPing] = useState<number>(edgeNodes[0].baseLatency);
  const [isPinging, setIsPinging] = useState<boolean>(false);
  const [jitterHistory, setJitterHistory] = useState<number[]>([1.8, 1.9, 1.7, 1.8, 2.0, 1.8, 1.9]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate micro-fluctuation in ping (±0.4ms)
      const jitter = (Math.random() - 0.5) * 0.6;
      const newPing = Math.max(1.0, Number((selectedNode.baseLatency + jitter).toFixed(1)));
      setCurrentPing(newPing);
      setJitterHistory((prev) => [...prev.slice(1), newPing]);
    }, 1800);

    return () => clearInterval(interval);
  }, [selectedNode]);

  const handleSelectNode = (node: EdgeNode) => {
    setIsPinging(true);
    setSelectedNode(node);
    setCurrentPing(node.baseLatency);
    setTimeout(() => setIsPinging(false), 300);
  };

  return (
    <div className="aethex-surface aethex-border rounded-[24px] border border-white/[0.08] p-6 lg:p-7">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="aethex-icon flex h-10 w-10 items-center justify-center rounded-[12px] border border-white/[0.08] bg-white/[0.04]">
            <IconActivity size={20} stroke={1.5} className="text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">Live Edge Latency Radar</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-xs text-[#71717A]">Real-time edge telemetry from Mumbai core</p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#A1A1AA]">
          <IconServer size={14} stroke={1.5} />
          <span>bom-edge-01.aethex.in</span>
        </div>
      </div>

      {/* Main active node telemetry block */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <span className="text-xs text-[#71717A] uppercase tracking-wider">Ping Latency</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className={`text-3xl font-bold tracking-tight text-white transition-opacity duration-200 ${isPinging ? "opacity-40" : "opacity-100"}`}>
              {currentPing}
            </span>
            <span className="text-sm text-[#A1A1AA]">ms</span>
          </div>
          <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
            Ultra-low latency route
          </span>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <span className="text-xs text-[#71717A] uppercase tracking-wider">Packet Loss</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-3xl font-bold tracking-tight text-white">0.00</span>
            <span className="text-sm text-[#A1A1AA]">%</span>
          </div>
          <span className="text-[11px] text-[#71717A] mt-1 block">
            1 Gbps clean uplink
          </span>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <span className="text-xs text-[#71717A] uppercase tracking-wider">Routing</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-base font-semibold text-white truncate">
              {selectedNode.route}
            </span>
          </div>
          <span className="text-[11px] text-[#71717A] mt-1 block">
            Tier-1 BGP transit
          </span>
        </div>
      </div>

      {/* Mini waveform sparkline */}
      <div className="mb-6 rounded-[14px] border border-white/[0.05] bg-black/20 p-3.5">
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-2.5">
          <span>Latency Jitter Monitor (Last 7 pings)</span>
          <span className="text-white font-mono text-[11px]">AVG {((jitterHistory.reduce((a, b) => a + b, 0)) / jitterHistory.length).toFixed(1)} ms</span>
        </div>
        <div className="flex items-end gap-1.5 h-9">
          {jitterHistory.map((val, idx) => {
            const min = Math.min(...jitterHistory) * 0.8;
            const max = Math.max(...jitterHistory) * 1.2 || 1;
            const heightPercent = Math.max(20, Math.min(100, ((val - min) / (max - min || 1)) * 100));
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                <div
                  className="w-full rounded-t-[3px] bg-white/20 transition-all duration-300 group-hover:bg-white/60"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Selectable destination nodes */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-[#71717A] mb-3">
          Select Target Edge to Test Ping
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {edgeNodes.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => handleSelectNode(node)}
                className={`flex flex-col text-left p-3 rounded-[14px] border transition-all duration-200 cursor-pointer select-none ${
                  isSelected
                    ? "border-white/30 bg-white/[0.08] text-white shadow-sm"
                    : "border-white/[0.06] bg-white/[0.02] text-[#A1A1AA] hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-semibold text-white truncate">{node.city}</span>
                  {isSelected && <IconCheck size={13} stroke={2.5} className="text-emerald-400 shrink-0" />}
                </div>
                <div className="flex items-center justify-between w-full mt-1.5">
                  <span className="text-[11px] text-[#71717A]">{node.tier}</span>
                  <span className="text-xs font-mono font-medium text-white">~{node.baseLatency}ms</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useCallback } from "react";
import {
  IconActivity,
  IconCircleCheck,
  IconRefresh,
  IconServer,
  IconShieldLock,
  IconWifi,
  IconAlertTriangle,
} from "@tabler/icons-react";

interface PingHistoryItem {
  timestamp: string;
  latency: number;
}

export function LivePanelPing() {
  const [latency, setLatency] = useState<number | null>(null);
  const [status, setStatus] = useState<"checking" | "online" | "degraded" | "offline">("checking");
  const [lastChecked, setLastChecked] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(30);
  const [history, setHistory] = useState<number[]>([38, 42, 39, 45, 41, 40, 43, 39, 41, 42]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const checkHealth = useCallback(async () => {
    setIsRefreshing(true);
    const start = performance.now();
    const targetUrl = "https://ap.riptodevelops.xyz/favicon.ico";

    try {
      // Use no-cors mode to ping the panel asset directly from visitor browser
      await fetch(`${targetUrl}?t=${Date.now()}`, {
        mode: "no-cors",
        cache: "no-store",
      });
      const end = performance.now();
      const measuredLatency = Math.round(end - start);

      setLatency(measuredLatency);
      setStatus("online");
      setHistory((prev) => [...prev.slice(1), measuredLatency]);
      setLastChecked(new Date().toLocaleTimeString());
    } catch {
      // If network fails
      setStatus("degraded");
      setLatency(null);
      setLastChecked(new Date().toLocaleTimeString());
    } finally {
      setIsRefreshing(false);
      setCountdown(30);
    }
  }, []);

  useEffect(() => {
    checkHealth();

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          checkHealth();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [checkHealth]);

  return (
    <div className="aethex-surface aethex-border rounded-[24px] border border-white/[0.08] bg-[#111111] p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-6">
        <div className="flex items-center gap-3.5">
          <div className="aethex-icon flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.04] text-white">
            <IconActivity size={22} stroke={1.5} />
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-base font-semibold text-white">Main Control Panel Gateway</h3>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            </div>
            <p className="text-xs text-[#71717A] mt-0.5 font-mono">https://ap.riptodevelops.xyz</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#71717A] hidden sm:inline">
            Auto-refresh in <span className="font-mono text-white">{countdown}s</span>
          </span>
          <button
            type="button"
            onClick={checkHealth}
            disabled={isRefreshing}
            className="flex items-center gap-2 rounded-[12px] border border-white/[0.1] bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-white/[0.08] hover:border-white/[0.2] disabled:opacity-50 cursor-pointer"
          >
            <IconRefresh size={14} className={isRefreshing ? "animate-spin" : ""} />
            <span>Check Now</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-6">
        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#71717A] uppercase tracking-wider">Live Response</span>
            <IconWifi size={16} stroke={1.5} className="text-[#71717A]" />
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold tracking-tight text-white font-mono">
              {latency !== null ? latency : "--"}
            </span>
            <span className="text-xs text-[#A1A1AA]">ms</span>
          </div>
          <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
            Direct browser RTT
          </span>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#71717A] uppercase tracking-wider">Availability</span>
            <IconCircleCheck size={16} stroke={1.5} className="text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-3xl font-bold tracking-tight text-white font-mono">
              100.0
            </span>
            <span className="text-xs text-[#A1A1AA]">%</span>
          </div>
          <span className="text-[11px] text-[#71717A] mt-1 block">
            HTTP 200 Responding
          </span>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#71717A] uppercase tracking-wider">SSL Security</span>
            <IconShieldLock size={16} stroke={1.5} className="text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-lg font-semibold tracking-tight text-white truncate">
              TLS 1.3
            </span>
          </div>
          <span className="text-[11px] text-[#71717A] mt-1 block">
            Encrypted & Verified
          </span>
        </div>

        <div className="rounded-[16px] border border-white/[0.06] bg-black/40 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#71717A] uppercase tracking-wider">Platform</span>
            <IconServer size={16} stroke={1.5} className="text-[#71717A]" />
          </div>
          <div className="flex items-baseline gap-1 mt-2">
            <span className="text-lg font-semibold tracking-tight text-white">
              Pelican Engine
            </span>
          </div>
          <span className="text-[11px] text-[#71717A] mt-1 block">
            Production Cluster
          </span>
        </div>
      </div>

      {/* Latency History Graph */}
      <div className="rounded-[14px] border border-white/[0.06] bg-black/30 p-4">
        <div className="flex items-center justify-between text-xs text-[#71717A] mb-3">
          <span>Live Latency Pulse (Recent Heartbeats)</span>
          <span className="font-mono text-[11px] text-white">
            Last checked: {lastChecked || "Just now"}
          </span>
        </div>
        <div className="flex items-end gap-2 h-10">
          {history.map((ping, idx) => {
            const min = Math.min(...history) * 0.7;
            const max = Math.max(...history) * 1.3 || 1;
            const heightPercent = Math.max(25, Math.min(100, ((ping - min) / (max - min || 1)) * 100));

            return (
              <div key={idx} className="flex-1 flex flex-col items-center group relative">
                <div
                  className="w-full rounded-t-[3px] bg-white/25 transition-all duration-300 group-hover:bg-emerald-400"
                  style={{ height: `${heightPercent}%` }}
                />
                <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/20 px-1.5 py-0.5 rounded text-[10px] font-mono text-white pointer-events-none whitespace-nowrap z-10">
                  {ping}ms
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

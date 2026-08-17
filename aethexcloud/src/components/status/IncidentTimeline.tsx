import { IconCircleCheck, IconInfoCircle, IconTool } from "@tabler/icons-react";

interface Incident {
  id: string;
  title: string;
  date: string;
  status: "resolved" | "completed" | "scheduled";
  type: "maintenance" | "incident" | "notice";
  description: string;
  updates: { time: string; text: string }[];
}

const pastIncidents: Incident[] = [
  {
    id: "inc-03",
    title: "Mumbai Edge Transit & NIXI Peering Optimization",
    date: "August 14, 2026",
    status: "completed",
    type: "maintenance",
    description: "Scheduled routing optimization and BGP route tuning at the Mumbai CtrlS facility.",
    updates: [
      { time: "18:30 IST", text: "Maintenance window completed successfully. All routes verified with zero packet loss." },
      { time: "18:00 IST", text: "Starting BGP route filter updates and direct peering switch." },
    ],
  },
  {
    id: "inc-02",
    title: "Pelican Control Panel Security & Framework Update",
    date: "August 02, 2026",
    status: "completed",
    type: "maintenance",
    description: "Applied latest security patches and database indexing optimizations to the panel core.",
    updates: [
      { time: "04:15 IST", text: "Database migrations and cache warm-up completed. Panel fully operational." },
      { time: "04:00 IST", text: "Initiating seamless daemon update." },
    ],
  },
  {
    id: "inc-01",
    title: "NVMe Gen4 Storage Pool Expansion (IN-BOM-01)",
    date: "July 24, 2026",
    status: "completed",
    type: "maintenance",
    description: "Added dedicated enterprise Samsung Gen4 NVMe arrays to increase storage throughput.",
    updates: [
      { time: "22:00 IST", text: "New storage pools online and added to active volume group." },
    ],
  },
];

export function IncidentTimeline() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white">Incident & Maintenance History</h2>
        <span className="text-xs text-[#71717A]">Past 90 Days</span>
      </div>

      <div className="flex flex-col gap-4">
        {pastIncidents.map((item) => (
          <div
            key={item.id}
            className="aethex-surface aethex-border rounded-[20px] border border-white/[0.08] bg-[#111111] p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <IconCircleCheck size={16} stroke={2} />
                </div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <span className="text-xs font-mono text-[#71717A]">{item.date}</span>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-4 pl-9">
              {item.description}
            </p>

            {/* Updates list */}
            <div className="pl-9 space-y-2 border-l border-white/[0.08] ml-3.5">
              {item.updates.map((update, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 text-xs">
                  <span className="font-mono text-white font-medium shrink-0">{update.time}</span>
                  <span className="text-[#71717A]">{update.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

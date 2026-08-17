interface IconProps {
  className?: string;
  size?: number;
}

export function WebHostingLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer orbital ring */}
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-30" />
      {/* Core globe */}
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.5" />
      {/* Latitudes and longitudes */}
      <path d="M10 24H38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M24 10C27.5 14.5 29.5 19 29.5 24C29.5 29 27.5 33.5 24 38C20.5 33.5 18.5 29 18.5 24C18.5 19 20.5 14.5 24 10Z" stroke="currentColor" strokeWidth="1.5" />
      {/* Tilted orbital ring */}
      <ellipse cx="24" cy="24" rx="22" ry="7" stroke="currentColor" strokeWidth="1.4" transform="rotate(-25 24 24)" className="opacity-60" />
      {/* Data packet nodes */}
      <circle cx="39" cy="17" r="2" fill="currentColor" />
      <circle cx="9" cy="31" r="1.5" fill="currentColor" className="opacity-70" />
    </svg>
  );
}

export function VpsLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Server Rack Enclosure */}
      <rect x="9" y="6" width="30" height="36" rx="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Modular Blade Compartments */}
      <line x1="9" y1="18" x2="39" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <line x1="9" y1="30" x2="39" y2="30" stroke="currentColor" strokeWidth="1.5" />
      {/* Bay 1 Status LEDs & Grip */}
      <circle cx="15" cy="12" r="1.5" fill="currentColor" />
      <circle cx="20" cy="12" r="1.5" fill="currentColor" className="opacity-40" />
      <line x1="27" y1="12" x2="33" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bay 2 Status LEDs & Grip */}
      <circle cx="15" cy="24" r="1.5" fill="currentColor" />
      <circle cx="20" cy="24" r="1.5" fill="currentColor" className="opacity-40" />
      <line x1="27" y1="24" x2="33" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bay 3 Status LEDs & Grip */}
      <circle cx="15" cy="36" r="1.5" fill="currentColor" />
      <circle cx="20" cy="36" r="1.5" fill="currentColor" className="opacity-40" />
      <line x1="27" y1="36" x2="33" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MinecraftLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 2D Isometric Voxel Cube Outline */}
      <path d="M24 6L40 15V33L24 42L8 33V15L24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Internal Axis Edges */}
      <path d="M24 6V24L40 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 24L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M24 24V42" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Voxel Microgrid Detail */}
      <path d="M16 10.5L32 19.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-40" />
      <path d="M32 10.5L16 19.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" className="opacity-40" />
      {/* Diamond Sword Rune */}
      <path d="M24 16L27 19L24 22L21 19Z" stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

export function DiscordBotLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Autonomous Bot Chassis */}
      <rect x="10" y="16" width="28" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
      {/* Neural Antenna & Signal Beacon */}
      <path d="M24 16V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Optic Visor Slit & Dual Eyes */}
      <rect x="16" y="22" width="16" height="6" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="25" r="1" fill="currentColor" />
      <circle cx="28" cy="25" r="1" fill="currentColor" />
      {/* Stabilizer Pods */}
      <path d="M15 38V42M33 38V42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Signal Emission Arcs */}
      <path d="M5 23C4 25 4 27 5 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-60" />
      <path d="M43 23C44 25 44 27 43 29" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="opacity-60" />
    </svg>
  );
}

export function LavalinkLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Concentric Acoustic Waves */}
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" className="opacity-30" />
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.4" className="opacity-50" />
      {/* Audio Spectrum Frequency Bars */}
      <path d="M12 24V24M16 20V28M20 16V32M24 11V37M28 16V32M32 20V28M36 24V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AmdEpycLineIllustration({ className = "w-8 h-8", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Silicon Package Boundary */}
      <rect x="10" y="10" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Central Integrated Core Die */}
      <rect x="17" y="17" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
      <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.4" />
      {/* Precision Micro-pins Matrix */}
      <path d="M16 5V10M24 5V10M32 5V10M16 38V43M24 38V43M32 38V43M5 16H10M5 24H10M5 32H10M38 16H43M38 24H43M38 32H43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

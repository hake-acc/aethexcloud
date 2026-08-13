// ─── Navigation ────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Knowledge Base", href: "/knowledge-base" },
  { label: "Status", href: "/status" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks = [
  {
    label: "Website Hosting",
    href: "/services#website-hosting",
    description: "Deploy websites and web apps instantly",
  },
  {
    label: "VPS India",
    href: "/services#vps-hosting",
    description: "Full root access. AMD EPYC power.",
  },
  {
    label: "Minecraft Hosting",
    href: "/services#minecraft-hosting",
    description: "Optimised for smooth, lag-free gameplay",
  },
  {
    label: "Discord Bot Hosting",
    href: "/services#discord-bot-hosting",
    description: "Keep your bots online and responsive 24/7",
  },
  {
    label: "Lavalink Hosting",
    href: "/services#lavalink-hosting",
    description: "High-performance music node hosting",
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────

export const stats = [
  { value: "₹10", suffix: "/mo", label: "Starting price" },
  { value: "AMD", suffix: "", label: "EPYC processors" },
  { value: "NVMe", suffix: "", label: "SSD storage" },
  { value: "1 Gbps", suffix: "", label: "Network uplink" },
  { value: "KVM", suffix: "", label: "Virtualization" },
  { value: "Instant", suffix: "", label: "Deployment" },
];

// ─── Core Services ─────────────────────────────────────────────────────────────

export const coreServices = [
  {
    id: "website",
    title: "Website Hosting",
    description:
      "Deploy your websites, portfolios and web apps on fast, reliable infrastructure. Get online in minutes.",
    href: "/services#website-hosting",
    tag: "Web",
  },
  {
    id: "vps",
    title: "VPS India",
    description:
      "Full root access virtual private servers powered by AMD EPYC and NVMe SSD storage, located in Mumbai.",
    href: "/services#vps-hosting",
    tag: "VPS",
  },
  {
    id: "minecraft",
    title: "Minecraft Hosting",
    description:
      "Smooth, lag-free Minecraft server hosting. Supports all major server types — Vanilla, Paper, Forge and more.",
    href: "/services#minecraft-hosting",
    tag: "Game",
  },
  {
    id: "discord-bot",
    title: "Discord Bot Hosting",
    description:
      "Keep your Discord bots running 24/7 with guaranteed uptime. Supports Node.js, Python and more.",
    href: "/services#discord-bot-hosting",
    tag: "Bot",
  },
  {
    id: "lavalink",
    title: "Lavalink Hosting",
    description:
      "High-performance Lavalink nodes for your music bots. Low latency, reliable connections.",
    href: "/services#lavalink-hosting",
    tag: "Audio",
  },
];

// ─── Platform Features ─────────────────────────────────────────────────────────

export const features = [
  {
    title: "Instant Deployment",
    description: "Your server is live the moment your order is confirmed. No waiting, no delays.",
    icon: "IconRocket",
  },
  {
    title: "NVMe SSD Storage",
    description: "Ultra-fast NVMe solid state drives for maximum read/write performance.",
    icon: "IconDatabase",
  },
  {
    title: "AMD EPYC Infrastructure",
    description: "Enterprise-grade AMD EPYC processors with high core counts and efficiency.",
    icon: "IconCpu",
  },
  {
    title: "Full Root Access",
    description: "Complete control over your VPS. Install any software, configure anything.",
    icon: "IconTerminal",
  },
  {
    title: "Scalable Resources",
    description: "Start small and upgrade your plan as your project grows. No downtime.",
    icon: "IconArrowsMaximize",
  },
  {
    title: "Affordable Pricing",
    description: "Premium infrastructure at prices accessible to creators and developers.",
    icon: "IconTag",
  },
  {
    title: "Low Latency",
    description: "Mumbai-based infrastructure for minimal latency across India and South Asia.",
    icon: "IconBolt",
  },
  {
    title: "Responsive Support",
    description: "Real support from people who understand the platform and your needs.",
    icon: "IconHeadset",
  },
];

// ─── Infrastructure ────────────────────────────────────────────────────────────

export const infrastructureSpecs = [
  { label: "Location", value: "Mumbai, India" },
  { label: "Processor", value: "AMD EPYC" },
  { label: "Storage", value: "NVMe SSD" },
  { label: "Virtualization", value: "KVM" },
  { label: "Root Access", value: "Full Root" },
  { label: "Network", value: "1 Gbps" },
  { label: "Deployment", value: "Instant Setup" },
  { label: "Infrastructure", value: "Aethex Infrastructure" },
];

// ─── Pricing ───────────────────────────────────────────────────────────────────

export type PricingPlan = {
  name: string;
  code: string;
  price: string;
  specs: { label: string; value: string }[];
  highlighted?: boolean;
};

export const minecraftPlans: PricingPlan[] = [
  {
    name: "Nitwit",
    code: "VT-2GB",
    price: "₹10",
    specs: [{ label: "RAM", value: "2 GB" }],
  },
  {
    name: "Farmer",
    code: "VT-4GB",
    price: "₹20",
    specs: [{ label: "RAM", value: "4 GB" }],
  },
  {
    name: "Fletcher",
    code: "VT-8GB",
    price: "₹40",
    specs: [{ label: "RAM", value: "8 GB" }],
    highlighted: true,
  },
  {
    name: "Librarian",
    code: "VT-16GB",
    price: "₹80",
    specs: [{ label: "RAM", value: "16 GB" }],
  },
  {
    name: "Cleric",
    code: "VT-32GB",
    price: "₹160",
    specs: [{ label: "RAM", value: "32 GB" }],
  },
  {
    name: "Armorer",
    code: "VT-48GB",
    price: "₹240",
    specs: [{ label: "RAM", value: "48 GB" }],
  },
  {
    name: "Iron Golem",
    code: "VT-64GB",
    price: "₹320",
    specs: [{ label: "RAM", value: "64 GB" }],
  },
];

export const discordBotPlans: PricingPlan[] = [
  {
    name: "Script",
    code: "BT-2GB",
    price: "₹20",
    specs: [
      { label: "CPU", value: "100%" },
      { label: "RAM", value: "2 GB" },
      { label: "Storage", value: "10 GB SSD" },
    ],
  },
  {
    name: "Junior",
    code: "BT-4GB",
    price: "₹40",
    specs: [
      { label: "CPU", value: "200%" },
      { label: "RAM", value: "4 GB" },
      { label: "Storage", value: "20 GB SSD" },
    ],
    highlighted: true,
  },
  {
    name: "Senior",
    code: "BT-8GB",
    price: "₹80",
    specs: [
      { label: "CPU", value: "300%" },
      { label: "RAM", value: "8 GB" },
      { label: "Storage", value: "30 GB SSD" },
    ],
  },
  {
    name: "Architect",
    code: "BT-16GB",
    price: "₹160",
    specs: [
      { label: "CPU", value: "400%" },
      { label: "RAM", value: "16 GB" },
      { label: "Storage", value: "40 GB SSD" },
    ],
  },
  {
    name: "DevOps",
    code: "BT-32GB",
    price: "₹320",
    specs: [
      { label: "CPU", value: "450%" },
      { label: "RAM", value: "32 GB" },
      { label: "Storage", value: "40 GB SSD" },
    ],
  },
  {
    name: "Mainframe",
    code: "BT-48GB",
    price: "₹480",
    specs: [
      { label: "CPU", value: "500%" },
      { label: "RAM", value: "48 GB" },
      { label: "Storage", value: "50 GB SSD" },
    ],
  },
  {
    name: "Root",
    code: "BT-64GB",
    price: "₹640",
    specs: [
      { label: "CPU", value: "700%" },
      { label: "RAM", value: "64 GB" },
      { label: "Storage", value: "60 GB SSD" },
    ],
  },
];

export const vpsPlans: PricingPlan[] = [
  {
    name: "Starter",
    code: "VPS-2GB",
    price: "₹49",
    specs: [
      { label: "RAM", value: "2 GB" },
      { label: "vCPU", value: "1 core" },
      { label: "Storage", value: "20 GB NVMe" },
    ],
  },
  {
    name: "Basic",
    code: "VPS-4GB",
    price: "₹99",
    specs: [
      { label: "RAM", value: "4 GB" },
      { label: "vCPU", value: "2 cores" },
      { label: "Storage", value: "50 GB NVMe" },
    ],
    highlighted: true,
  },
  {
    name: "Standard",
    code: "VPS-8GB",
    price: "₹199",
    specs: [
      { label: "RAM", value: "8 GB" },
      { label: "vCPU", value: "4 cores" },
      { label: "Storage", value: "100 GB NVMe" },
    ],
  },
  {
    name: "Pro",
    code: "VPS-16GB",
    price: "₹399",
    specs: [
      { label: "RAM", value: "16 GB" },
      { label: "vCPU", value: "8 cores" },
      { label: "Storage", value: "200 GB NVMe" },
    ],
  },
];

export const lavalinkPlans: PricingPlan[] = [
  {
    name: "Parrot",
    code: "LT-2GB",
    price: "₹20",
    specs: [{ label: "RAM", value: "2 GB" }],
  },
  {
    name: "Allay",
    code: "LT-4GB",
    price: "₹40",
    specs: [{ label: "RAM", value: "4 GB" }],
    highlighted: true,
  },
  {
    name: "Goat",
    code: "LT-8GB",
    price: "₹80",
    specs: [{ label: "RAM", value: "8 GB" }],
  },
  {
    name: "Ghast",
    code: "LT-16GB",
    price: "₹160",
    specs: [{ label: "RAM", value: "16 GB" }],
  },
];

// ─── Testimonials ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "I host my Discord music bot here. It has been running non-stop for months without a single issue. The price is unbeatable for what you get.",
    name: "Arjun K.",
    role: "Bot Developer",
  },
  {
    quote:
      "We run a Minecraft survival server for over 200 players. Zero lag, zero downtime. AethexCloud just works.",
    name: "Rohan M.",
    role: "Server Administrator",
  },
  {
    quote:
      "Migrated my portfolio and three client sites to AethexCloud. Setup was instant and the servers are noticeably faster.",
    name: "Priya S.",
    role: "Web Developer",
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────

export const faqItems = [
  {
    question: "Where are your servers located?",
    answer:
      "All of our servers are located in Mumbai, India. This means low latency for users across India and South Asia.",
  },
  {
    question: "What virtualization technology do you use?",
    answer:
      "We use KVM (Kernel-based Virtual Machine) virtualization for all VPS plans. This provides dedicated resources and full isolation between instances.",
  },
  {
    question: "Do VPS plans include full root access?",
    answer:
      "Yes. All VPS plans come with complete root access, giving you full control to install any software, configure your environment and manage your server.",
  },
  {
    question: "How quickly will my server be deployed?",
    answer:
      "All services are deployed instantly after your order is confirmed. There is no manual provisioning — your server is ready to use immediately.",
  },
  {
    question: "Which Minecraft server types are supported?",
    answer:
      "We support all major Minecraft server types including Vanilla, Paper, Spigot, Forge, Fabric, Bungeecord and more. Full root access means you can run any server software you need.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can upgrade your plan at any time as your project grows. Contact our support team and we will help you scale without any unnecessary downtime.",
  },
];

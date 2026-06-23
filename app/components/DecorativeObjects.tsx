import type { CSSProperties } from "react";

type DecorativeObjectProps = {
  variant?: "sphere" | "ring" | "cube" | "capsule";
  className?: string;
};

const variants = {
  sphere: "metal-sphere",
  ring: "metal-ring",
  cube: "metal-cube",
  capsule: "metal-capsule"
};

function revealStyle(order: number): CSSProperties {
  return { "--reveal-delay": `${80 + order * 72}ms` } as CSSProperties;
}

export function DecorativeObject({
  variant = "sphere",
  className = ""
}: DecorativeObjectProps) {
  return (
    <span
      aria-hidden="true"
      className={`metal-object ${variants[variant]} object-drift ${className}`}
    />
  );
}

export function HeroObjectCluster() {
  const heroIcons = [
    {
      label: "Manual Task",
      detail: "Repeated work",
      icon: <MessageIcon />,
      className: "hidden md:flex left-[6%] top-[25%] sm:left-[8%] lg:left-[10%] lg:top-[28%]"
    },
    {
      label: "AI Agent",
      detail: "Understands intent",
      icon: <BrainIcon />,
      className: "hidden md:flex right-[7%] top-[23%] sm:right-[9%] lg:right-[11%] lg:top-[27%]"
    },
    {
      label: "System Update",
      detail: "CRM / ERP / sheets",
      icon: <DatabaseIcon />,
      className: "left-[4%] bottom-[24%] hidden md:flex lg:left-[15%]"
    },
    {
      label: "Report / Alert",
      detail: "Visibility in real time",
      icon: <BellIcon />,
      className: "right-[6%] bottom-[25%] hidden md:flex lg:right-[15%]"
    },
    {
      label: "Action",
      detail: "Work gets done",
      icon: <CheckOrderIcon />,
      className: "left-[50%] top-[8%] hidden -translate-x-1/2 lg:flex xl:top-[9%]"
    }
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
      <div className="absolute left-[12%] right-[12%] top-[29%] hidden h-px bg-gradient-to-r from-transparent via-black/20 to-transparent lg:block" />
      <div className="absolute bottom-[30%] left-[18%] right-[18%] hidden h-px bg-gradient-to-r from-transparent via-black/15 to-transparent lg:block" />
      <div className="absolute left-[50%] top-[20%] hidden h-[54%] w-px bg-gradient-to-b from-transparent via-black/12 to-transparent lg:block" />

      {heroIcons.map((item, index) => (
        <div
          key={item.label}
          className={`automation-icon-node hero-desktop-node object-drift ${item.className}`}
          style={{ animationDelay: `${index * 0.45}s` }}
        >
          <span className="automation-icon-core">{item.icon}</span>
          <span className="hidden min-w-0 lg:block">
            <span className="block text-sm font-semibold text-ink">{item.label}</span>
            <span className="mt-0.5 block text-xs text-steel">{item.detail}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function MobileHeroBadges() {
  const items = [
    { key: "manual", label: "Manual Task", detail: "Repeated work", icon: <MessageIcon /> },
    { key: "ai", label: "AI Agent", detail: "Intent", icon: <BrainIcon /> },
    { key: "action", label: "Action", detail: "Done", icon: <CheckOrderIcon /> },
    { key: "system", label: "System Update", detail: "CRM / ERP", icon: <DatabaseIcon /> },
    { key: "report", label: "Report / Alert", detail: "Visibility", icon: <BellIcon /> }
  ];

  return (
    <div
      aria-hidden="true"
      className="mx-auto mt-10 flex w-full max-w-[22rem] flex-wrap items-center justify-center gap-2 sm:max-w-[28rem] md:hidden"
    >
      {items.map((item, index) => (
        <div
          key={item.key}
          className="mobile-hero-badge-row automation-icon-node object-drift scroll-reveal-card"
          style={{ animationDelay: `${index * 0.55}s`, ...revealStyle(index) }}
        >
          <span className="automation-icon-core">{item.icon}</span>
          <span className="mobile-hero-badge-copy">
            <span className="mobile-hero-badge-label">{item.label}</span>
            <span className="mobile-hero-badge-detail">{item.detail}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 6.5h13a2 2 0 0 1 2 2v6.25a2 2 0 0 1-2 2H11l-4.6 3v-3H5.5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5.5" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5.2a3.2 3.2 0 0 0-5.1 2.6 3.5 3.5 0 0 0 .9 6.8 3.7 3.7 0 0 0 4.2 4.1V5.2Z" />
      <path d="M15 5.2a3.2 3.2 0 0 1 5.1 2.6 3.5 3.5 0 0 1-.9 6.8 3.7 3.7 0 0 1-4.2 4.1V5.2Z" />
      <path d="M9 8.5H7.6" />
      <path d="M15 8.5h1.4" />
      <path d="M9 13.2H7.2" />
      <path d="M15 13.2h1.8" />
      <path d="M12 5.4v13.2" />
    </svg>
  );
}

function CheckOrderIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 4.5h9l2 3.5v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8l2-3.5Z" />
      <path d="M5.8 8h12.4" />
      <path d="m9.2 13.5 2 2 4-4.25" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6.5" rx="6.5" ry="3" />
      <path d="M5.5 6.5v5c0 1.65 2.9 3 6.5 3s6.5-1.35 6.5-3v-5" />
      <path d="M5.5 11.5v5c0 1.65 2.9 3 6.5 3s6.5-1.35 6.5-3v-5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" role="img" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 9.8a6 6 0 0 0-12 0c0 6-2.3 6.5-2.3 6.5h16.6S18 15.8 18 9.8Z" />
      <path d="M10 19a2.2 2.2 0 0 0 4 0" />
      <path d="M19.4 5.8 21 4.2" />
      <path d="M4.6 5.8 3 4.2" />
    </svg>
  );
}

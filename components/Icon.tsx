type IconName =
  | "bolt"
  | "taxi"
  | "car"
  | "building"
  | "hub"
  | "bus"
  | "check"
  | "arrow"
  | "shield"
  | "leaf"
  | "spark";

const paths: Record<IconName, JSX.Element> = {
  bolt: <path d="M13 2 5 14h6l-2 8 10-13h-7l1-7z" />,
  taxi: (
    <>
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
      <rect x="3" y="11" width="18" height="7" rx="2" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
      <path d="M9 3h6" />
    </>
  ),
  car: (
    <>
      <path d="M5 12l1.5-4A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 12" />
      <rect x="3" y="12" width="18" height="6" rx="2" />
      <circle cx="7.5" cy="18" r="1.5" />
      <circle cx="16.5" cy="18" r="1.5" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  hub: (
    <>
      <circle cx="12" cy="12" r="3" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="20" cy="12" r="2" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="M12 7v2M12 15v2M7 12h2M15 12h2" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M4 11h16M9 5v12M15 5v12" />
      <circle cx="8" cy="19" r="1.5" />
      <circle cx="16" cy="19" r="1.5" />
    </>
  ),
  check: <path d="M5 12l4 4 10-10" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  shield: (
    <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
  ),
  leaf: (
    <>
      <path d="M5 19c0-9 6-14 15-14-1 9-5 15-14 15a8 8 0 0 1-1-1z" />
      <path d="M5 19c4-4 7-7 13-12" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}

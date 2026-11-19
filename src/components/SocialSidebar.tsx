const items = [
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

function SocialRail({ side }: { side: "left" | "right" }) {
  return (
    <aside
      aria-label={side === "left" ? "Social media" : "Social media (right)"}
      className="hidden md:block fixed top-0 z-[60] h-screen"
      style={{
        width: 86,
        background: "#FFFFFF",
        ...(side === "left"
          ? { left: 0, borderRight: "1px solid #e6e6e6" }
          : { right: 0, borderLeft: "1px solid #e6e6e6" }),
      }}
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "100%", gap: 40 }}
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="hover:opacity-60 transition-opacity"
            style={{
              color: "#333333",
              textDecoration: "none",
              fontFamily: "var(--font-raleway)",
              fontSize: 13,
              fontWeight: 400,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              whiteSpace: "nowrap",
              background: "transparent",
              border: "none",
              padding: 0,
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

export default function SocialSidebar() {
  return (
    <>
      <SocialRail side="left" />
      <SocialRail side="right" />
    </>
  );
}

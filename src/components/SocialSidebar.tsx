const items = [
  { label: "Pinterest", href: "https://pinterest.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

function SocialRail({ side }: { side: "left" | "right" }) {
  return (
    <aside
      aria-label="Social media"
      className={`hidden md:block absolute top-0 z-[60] h-screen ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        width: 90,
        background: "#FFFFFF",
        [side === "left" ? "borderRight" : "borderLeft"]: "1px solid #e6e6e6",
      }}
    >
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "calc(100% - 105px)", gap: 40 }}
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
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#333333",
              textDecoration: "none",
              fontFamily: "var(--font-raleway)",
              fontSize: 12.5,
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

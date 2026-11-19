export default function SocialSidebar() {
  const items = [
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <aside
      aria-label="Social media"
      className="hidden md:block fixed left-0 top-0 z-[60] h-screen"
      style={{
        width: 86,
        background: "#FFFFFF",
        borderRight: "1px solid #e6e6e6",
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

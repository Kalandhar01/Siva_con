const contactRows = [
  {
    text: "411 University St, Seattle, USA",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    text: "theratio_interior@mail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
        <path d="m3 6.5 9 7 9-7" />
      </svg>
    ),
  },
  {
    text: "+1 800 456 789 123",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
];

const projects = [
  "Stylish Family Appartment",
  "Modern Villa in Belgium",
  "Private House in Spain",
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.6c0-.9.2-1.4 1.5-1.4H17V2.1A20 20 0 0 0 14.7 2C12.3 2 10.6 3.5 10.6 6.2v2.3H7.8v3.3h2.8V22H14V11.8h3l.4-3.3H14Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.9 2h6.4l4.4 5.8L18.9 2Zm-1.1 18.1h1.7L7.4 3.8H5.6l12.2 16.3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.8H2.9V22h3.6V8.8ZM4.7 2A2.1 2.1 0 1 0 4.7 6.2 2.1 2.1 0 0 0 4.7 2ZM22 14.4c0-3.5-1.9-5.9-5.1-5.9a4.4 4.4 0 0 0-4 2.2V8.8H9.3V22h3.6v-6.6c0-1.7.7-2.9 2.3-2.9s2.2 1.2 2.2 2.9V22H22v-7.6Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#1A1A1A", width: "100%" }}>
      {/* Main 3-column content */}
      <div
        style={{
          borderTop: "1px solid #2C2C2C",
          borderBottom: "1px solid #2C2C2C",
          padding: "80px 0",
        }}
      >
        <div className="mx-auto grid grid-cols-1 gap-14 px-6 md:pl-[110px] md:pr-[110px] lg:grid-cols-[1fr_1.4fr_1fr] lg:gap-10 lg:pl-[146px] lg:pr-[146px]">
          {/* Left — Contacts */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 20,
                fontWeight: 400,
                color: "#FFFFFF",
                marginBottom: 26,
              }}
            >
              Contacts
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {contactRows.map((row) => (
                <li
                  key={row.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    color: "#8E8E8E",
                    fontSize: 14,
                    lineHeight: 1.5,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ display: "inline-flex", flexShrink: 0, color: "#8E8E8E" }}>{row.icon}</span>
                  <span>{row.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center — Brand, tagline, socials */}
          <div style={{ textAlign: "center" }}>
            <div
              className="flex items-center justify-center"
              style={{ gap: 16 }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 58,
                  height: 58,
                  background: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/theratio-mark.svg"
                  alt="Theratio mark"
                  width={42}
                  height={42}
                  style={{ display: "block", width: 42, height: 42 }}
                />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#D0D0D0",
                  letterSpacing: "0.18em",
                  lineHeight: 1.35,
                  textTransform: "uppercase",
                  textAlign: "left",
                }}
              >
                Theratio
                <br />
                Interior
                <br />
                Studio
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-raleway)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "#8E8E8E",
                maxWidth: 440,
                margin: "28px auto 0",
              }}
            >
              The secret is a smoothly working team of disparate
              <br className="hidden sm:block" /> people who are each endowed with some special talent...
            </p>

            <div
              className="flex items-center justify-center"
              style={{ gap: 12, marginTop: 28 }}
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:border-[#8E8E8E] hover:text-white transition-colors"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid #4A4A4A",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#CCCCCC",
                    background: "transparent",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Latest Projects */}
          <div style={{ textAlign: "right" }}>
            <h4
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 20,
                fontWeight: 400,
                color: "#FFFFFF",
                marginBottom: 26,
              }}
            >
              Latest Projects
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {projects.map((project) => (
                <li key={project} style={{ marginBottom: 16 }}>
                  <a
                    href="#portfolio"
                    className="hover:text-white transition-colors"
                    style={{
                      fontFamily: "var(--font-raleway)",
                      fontSize: 15,
                      color: "#8E8E8E",
                    }}
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: "relative", padding: "22px 24px" }}>
        <p
          style={{
            fontFamily: "var(--font-raleway)",
            fontSize: 13,
            color: "#777777",
            textAlign: "center",
            margin: 0,
            padding: "0 56px",
          }}
        >
          Copyright © 2026 Theratio by{" "}
          <a
            href="https://themeforest.net/user/oceanthemes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#CCCCCC] transition-colors"
            style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: 2 }}
          >
            OceanThemes
          </a>
          . All Rights Reserved.
        </p>

        <a
          href="#home"
          aria-label="Scroll to top"
          className="right-6 md:right-[110px] hover:bg-[#8E8E8E] transition-colors"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            background: "#7D7D7D",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#D8D8D8",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 19V5" />
            <path d="m5 12 7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

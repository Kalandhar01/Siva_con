import "./Footer.css";

const mapsLink = "https://share.google/60NN9PWCanCh5kqy0";

const contactRows = [
  {
    label: "Visit Us",
    text: "2102/4 Public Office Road, Velipalayam, Nagapattinam 611001, Tamil Nadu",
    href: mapsLink,
    wrap: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    text: "support@sivraconstructions.com",
    href: "mailto:support@sivraconstructions.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
        <path d="m3 6.5 9 7 9-7" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    text: "+91 84899 83007",
    href: "tel:+918489983007",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    text: "Mon – Sat: 9:00 AM – 6:00 PM",
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

const services = [
  "Premium Constructions",
  "Interiors",
  "Architectural Design",
  "2D / 3D Plan Approval",
  "Real Estate - promoters",
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.6c0-.9.2-1.4 1.5-1.4H17V2.1A20 20 0 0 0 14.7 2C12.3 2 10.6 3.5 10.6 6.2v2.3H7.8v3.3h2.8V22H14V11.8h3l.4-3.3H14Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.9 2h6.4l4.4 5.8L18.9 2Zm-1.1 18.1h1.7L7.4 3.8H5.6l12.2 16.3Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 8.8H2.9V22h3.6V8.8ZM4.7 2A2.1 2.1 0 1 0 4.7 6.2 2.1 2.1 0 0 0 4.7 2ZM22 14.4c0-3.5-1.9-5.9-5.1-5.9a4.4 4.4 0 0 0-4 2.2V8.8H9.3V22h3.6v-6.6c0-1.7.7-2.9 2.3-2.9s2.2 1.2 2.2 2.9V22H22v-7.6Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const headingStyle = {
  fontSize: 24,
  fontWeight: 400,
  lineHeight: 1.2,
  color: "#FFFFFF",
} as const;

export default function Footer() {
  return (
    <footer id="contact" className="tf-footer">
      {/* Full-height structural guide lines */}
      <span aria-hidden="true" className="tf-guide tf-guide-left" />
      <span aria-hidden="true" className="tf-guide tf-guide-right" />

      {/* Empty band above the main footer area */}
      <div aria-hidden="true" className="tf-top-band" />

      {/* Main 3-column area */}
      <div className="tf-main">
        <div className="tf-grid">
          {/* Left — Contacts */}
          <div className="tf-left-column">
            <h4 className="tf-heading" style={headingStyle}>
              Contacts
            </h4>
            <ul className="tf-contact-list">
              {contactRows.map((row) => (
                <li
                  key={row.text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                  }}
                >
                  <span style={{ display: "inline-flex", flexShrink: 0, color: "#8E8E8E", marginTop: 8 }}>{row.icon}</span>
                  <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#6E6E6E",
                        lineHeight: 1.3,
                        marginBottom: 2,
                      }}
                    >
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          color: "#8E8E8E",
                          textDecoration: "none",
                          whiteSpace: row.wrap ? "normal" : "nowrap",
                          fontSize: 16.5,
                          lineHeight: 1.5,
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {row.text}
                      </a>
                    ) : (
                      <span
                        style={{
                          color: "#8E8E8E",
                          whiteSpace: "nowrap",
                          fontSize: 16.5,
                          lineHeight: 1.5,
                        }}
                      >
                        {row.text}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center — Brand lockup, quote, socials */}
          <div className="tf-center-column" style={{ textAlign: "center" }}>
            <div className="tf-lockup">
              <span
                style={{
                  display: "inline-flex",
                  width: 180,
                  height: 92,
                  background: "transparent",
                  flexShrink: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="tf-brand-logo"
                  src="/sivra/Brand_Name-logo.png"
                  alt="SIVRA Buildcon"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    padding: 12,
                  }}
                />
              </span>
            </div>

            <p
              className="tf-quote"
              style={{
                fontSize: 16.5,
                lineHeight: 2,
                color: "#8E8E8E",
              }}
            >
              The secret is a smoothly working team of disparate
              <br className="tf-quote-break" />{" "}
              people who are each endowed with some special talent...
            </p>

            <div className="tf-social-row">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="tf-social-link"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid #4A4A4A",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D8D8D8",
                    background: "transparent",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Services */}
          <div className="tf-right-column">
            <h4 className="tf-heading" style={headingStyle}>
              Services
            </h4>
            <ul className="tf-project-list">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                    className="tf-project-link"
                    style={{
                      fontSize: 16.5,
                      lineHeight: 1.5,
                      color: "#8E8E8E",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="tf-bottom">
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#777777",
            textAlign: "center",
            margin: 0,
          }}
        >
          Copyright © 2026 SIVRA Buildcon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

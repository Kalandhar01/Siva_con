import { footerProjects } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative"
      style={{ background: "#0f0f0f", color: "#ffffff", paddingTop: 120 }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1260, padding: "0 30px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ paddingBottom: 80 }}>
          {/* Contacts */}
          <div>
            <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 28 }}>
              Contacts
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 2, color: "rgba(255,255,255,0.6)" }}>
              <li>411 University St, Seattle, USA</li>
              <li>hello@sivrabuildcon.com</li>
              <li>+1 800 456 789 123</li>
            </ul>
          </div>

          {/* Center logo + tagline */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 90,
                height: 90,
                background: "#ffffff",
                margin: "0 auto 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M24 3L45 15v18L24 45 3 33V15Z" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
                <path d="M31 16h-10l-5 6 12 4-5 6H16" stroke="#1a1a1a" strokeWidth="1.8" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "2px",
                color: "#ffffff",
                marginBottom: 16,
              }}
            >
              SIVRA BUILDCON
            </div>
            <p style={{ fontSize: 14, lineHeight: "24px", color: "rgba(255,255,255,0.5)", maxWidth: 320, margin: "0 auto" }}>
              The secret is a smoothly working team of disparate people who are each endowed with some special talent.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 24 }}>
              {["f", "t", "in", "ig"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Latest Projects */}
          <div style={{ textAlign: "right" }}>
            <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 28 }}>
              Latest Projects
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerProjects.map((p) => (
                <li key={p.title} style={{ marginBottom: 10 }}>
                  <a
                    href="#portfolio"
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", transition: "color 0.2s ease" }}
                    className="hover:text-white"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub footer */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="relative mx-auto" style={{ maxWidth: 1260, padding: "20px 30px", textAlign: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-titillium)", letterSpacing: "1px" }}>
            Copyright © 2026 SIVRA Buildcon. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

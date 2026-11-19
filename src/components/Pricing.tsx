import { pricing } from "@/lib/site-data";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative"
      style={{ background: "#ffffff", padding: "120px 0 100px" }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1260, padding: "0 30px" }}>
        <div className="text-center" data-reveal>
          <span className="eyebrow reveal">[ Pricing Plans ]</span>
          <h2 className="section-title reveal" style={{ marginTop: 18 }}>
            Choose Your Perfect Plan
          </h2>
          <div className="dot-sep mx-auto" style={{ marginTop: 22 }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ marginTop: 60 }}>
          {pricing.map((p) => (
            <div
              key={p.name}
              className="reveal"
              data-reveal
              style={{
                background: p.featured ? "#1a1a1a" : "#ffffff",
                color: p.featured ? "#ffffff" : "#1a1a1a",
                border: p.featured ? "1px solid #1a1a1a" : "1px solid #e6e6e6",
                position: "relative",
                boxShadow: p.featured ? "none" : "12px 12px 0 -1px #f0f0f0",
              }}
            >
              <div className={p.featured ? "pricing-tab featured" : "pricing-tab"}>{p.name}</div>
              <div style={{ padding: "36px 32px 32px", textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 6 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-titillium)",
                      fontSize: 60,
                      fontWeight: 300,
                      lineHeight: 1,
                      color: p.featured ? "#ffffff" : "#1a1a1a",
                    }}
                  >
                    $ {p.price}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: p.featured ? "rgba(255,255,255,0.5)" : "#888888",
                    marginTop: 8,
                  }}
                >
                  per m2
                </div>
                <div style={{ height: 1, background: p.featured ? "rgba(255,255,255,0.15)" : "#e6e6e6", margin: "28px 0" }} />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
                  {p.features.map((f, idx) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        fontSize: 14,
                        color: p.featured
                          ? idx >= p.features.length - 2
                            ? "rgba(255,255,255,0.35)"
                            : "rgba(255,255,255,0.85)"
                          : idx >= p.features.length - 2
                          ? "#c0c0c0"
                          : "#555555",
                        borderBottom: p.featured ? "1px solid rgba(255,255,255,0.08)" : "1px solid #f0f0f0",
                      }}
                    >
                      <span>{f}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 30 }}>
                  <a href="#" className={p.featured ? "btn btn-white" : "btn btn-outline"}>
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

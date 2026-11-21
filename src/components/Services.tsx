import { services } from "@/lib/site-data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative"
      style={{ background: "#ffffff", padding: "120px 0 40px" }}
    >
      <div className="relative mx-auto px-6 md:px-[150px]" style={{ maxWidth: "none" }}>
        <div className="text-center" data-reveal>
          <span className="eyebrow reveal">[ Our Services ]</span>
          <h2 className="section-title reveal" style={{ marginTop: 18 }}>
            What Can We Offer
          </h2>
          <div className="dot-sep mx-auto" style={{ marginTop: 22 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" style={{ marginTop: 60 }}>
          {services.map((s, i) => (
            <div key={s.title} className="service-card card" data-reveal style={{ minHeight: 315 }}>
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${s.bg})`, opacity: 0.12 }}
              />
              <div
                className="service-bg-hover"
                style={{ backgroundImage: `url(${s.hover})` }}
              />
              <div className="service-content" style={{ padding: "40px 32px", textAlign: "center" }}>
                <h4
                  className="service-title"
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    marginBottom: 14,
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </h4>
                <p className="service-text" style={{ fontSize: 14, lineHeight: "24px", color: "#555555", marginBottom: 22 }}>
                  {s.text}
                </p>
                <a href="#" className="link-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

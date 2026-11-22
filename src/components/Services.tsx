import { services } from "@/lib/site-data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative"
      style={{ background: "#ffffff", padding: "120px 0 40px" }}
    >
      <div className="relative mx-auto px-6 md:px-[210px]" style={{ maxWidth: "none" }}>
        <div className="text-center" data-reveal>
          <span className="eyebrow reveal">[ Our Services ]</span>
          <h2 className="section-title reveal" style={{ marginTop: 18 }}>
            What Can We Offer
          </h2>
          <div className="dot-sep mx-auto" style={{ marginTop: 22 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" style={{ marginTop: 60 }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-visible transition-all duration-300 ease-linear before:content-[''] before:absolute before:bg-[#1a1a1a] before:transition-all before:duration-300 before:ease-linear before:w-0 before:h-px before:bottom-[-10px] before:left-[10px] after:content-[''] after:absolute after:bg-[#1a1a1a] after:transition-all after:duration-300 after:ease-linear after:w-px after:h-0 after:top-[10px] after:right-[-11px] hover:before:w-[calc(100%+5px)] hover:after:h-[calc(100%+5px)] hover:bg-[#1a1a1a]!"
              data-reveal
              style={{
                padding: "37px 60px",
                backgroundColor: "#f4f4f4",
                backgroundImage: `url(${s.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <img
                  src={s.icon}
                  alt=""
                  width={74}
                  height={84}
                  style={{ display: "block", marginBottom: 17 }}
                />
              </div>
              <div style={{ marginBottom: 15 }}>
                <h5
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    marginBottom: 15,
                    lineHeight: 1.4,
                    transition: "0.3s linear",
                  }}
                  className="group-hover:!text-white"
                >
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      transition: "0.3s linear",
                    }}
                  >
                    {s.title}
                  </a>
                </h5>
              </div>
              <p
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontSize: 16,
                  lineHeight: "30px",
                  color: "#555555",
                  marginBottom: 13,
                  transition: "0.3s linear",
                }}
                className="group-hover:!text-[#a3a3a3]"
              >
                {s.text}
              </p>
              <div style={{ position: "relative" }}>
                <a
                  href="#"
                  className="btn-details group-hover:opacity-90 group-hover:!text-white group-hover:before:!bg-[#808080]"
                  style={{
                    position: "relative",
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    textTransform: "uppercase",
                    zIndex: 0,
                    letterSpacing: "0.5px",
                    textDecoration: "none",
                    opacity: 1,
                    transition: "0.3s linear",
                    display: "inline-block",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      content: "",
                      background: "#dddddd",
                      bottom: -3,
                      left: -7,
                      width: 20,
                      height: 12,
                      zIndex: -1,
                      transition: "width 0.3s linear",
                    }}
                    className="group-hover:!w-[calc(100%+14px)] group-hover:!transition-[width_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
                  />
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

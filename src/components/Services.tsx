"use client";

import { useState } from "react";
import { services } from "@/lib/site-data";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative"
      style={{ background: "#ffffff", padding: "120px 0 40px" }}
    >
      <div className="relative mx-auto px-6 md:px-[90px]" style={{ maxWidth: "none" }}>
        <div className="text-center reveal" data-reveal>
          <span className="eyebrow">[ Our Services ]</span>
          <h2 className="section-title" style={{ marginTop: 18 }}>
            What Can We Offer
          </h2>
          <div className="dot-sep mx-auto" style={{ marginTop: 22 }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 md:px-16 lg:px-24" style={{ marginTop: 60 }}>
          {services.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={s.title}
                className="group relative overflow-visible transition-all duration-300 ease-linear"
                data-reveal
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "37px 80px",
                  textAlign: "center",
                  backgroundColor: isHovered ? "#1a1a1a" : "#f4f4f4",
                  backgroundImage: `url(${s.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  transition: "background-color 0.3s linear",
                }}
              >
                {/* line-hover pseudo via spans */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    background: "#1a1a1a",
                    bottom: -10,
                    left: 10,
                    width: isHovered ? "calc(100% + 5px)" : 0,
                    height: 1,
                    transition: "width 0.3s linear",
                  }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    background: "#1a1a1a",
                    top: 10,
                    right: -11,
                    width: 1,
                    height: isHovered ? "calc(100% + 5px)" : 0,
                    transition: "height 0.3s linear",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={s.icon}
                    alt=""
                    width={74}
                    height={84}
                    style={{
                      display: "block",
                      marginBottom: 17,
                      filter: isHovered ? "brightness(0) invert(1)" : "none",
                      transition: "filter 0.3s linear",
                    }}
                  />
                </div>
                <div style={{ marginBottom: 15 }}>
                  <h5
                    style={{
                      fontFamily: '"Titillium Web", sans-serif',
                      fontSize: 24,
                      fontWeight: 400,
                      color: isHovered ? "#ffffff" : "#1a1a1a",
                      marginBottom: 15,
                      lineHeight: 1.4,
                      textAlign: "center",
                      transition: "color 0.3s linear",
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
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
                    color: isHovered ? "#a3a3a3" : "#555555",
                    marginBottom: 13,
                    textAlign: "center",
                    transition: "color 0.3s linear",
                  }}
                >
                  {s.text}
                </p>
                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                  <a
                    href="#"
                    style={{
                      position: "relative",
                      fontFamily: '"Titillium Web", sans-serif',
                      fontSize: 13,
                      fontWeight: 600,
                      color: isHovered ? "#ffffff" : "#1a1a1a",
                      textTransform: "uppercase",
                      zIndex: 0,
                      letterSpacing: "0.5px",
                      textDecoration: "none",
                      opacity: isHovered ? 0.9 : 1,
                      transition: "color 0.3s linear, opacity 0.3s linear",
                      display: "inline-block",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        background: isHovered ? "#808080" : "#dddddd",
                        bottom: -3,
                        left: -7,
                        width: isHovered ? "calc(100% + 14px)" : 20,
                        height: 12,
                        zIndex: -1,
                        transition: isHovered
                          ? "width 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), background 0.3s linear"
                          : "width 0.3s linear, background 0.3s linear",
                      }}
                    />
                    READ MORE
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="dot-sep mx-auto" style={{ marginTop: 60 }} />
      </div>
    </section>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" style={{ marginTop: 60 }}>
          {services.map((s, i) => {
            const isHovered = hovered === i;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden transition-all duration-300 ease-linear"
                data-reveal
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "37px 100px",
                  backgroundColor: "#F2F2F2",
                  backgroundImage: `url(${s.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  transition: "background-color 0.3s linear",
                }}
              >
                {/* black overlay that fades in on hover */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#1a1a1a",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s linear",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />
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
                    zIndex: 1,
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
                    zIndex: 1,
                  }}
                />

                <div style={{ position: "relative", zIndex: 2 }}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={s.icon}
                      alt=""
                      width={68}
                      height={78}
                      style={{
                        display: "block",
                        filter: isHovered ? "brightness(0) invert(1)" : "none",
                        transition: "filter 0.3s linear",
                      }}
                    />
                  </div>
                  <h5
                    style={{
                      fontFamily: '"Titillium Web", sans-serif',
                      fontSize: 30,
                      fontWeight: 400,
                      color: isHovered ? "#ffffff" : "#222222",
                      marginTop: 18,
                      marginBottom: 10,
                      lineHeight: 1.2,
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
                  <p
                    style={{
                      fontFamily: '"Raleway", sans-serif',
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: isHovered ? "#ffffff" : "#555555",
                      maxWidth: 340,
                      margin: "0 auto 8px",
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
                        fontWeight: 500,
                        color: isHovered ? "#ffffff" : "#111111",
                        textTransform: "uppercase",
                        zIndex: 0,
                        letterSpacing: "0.14em",
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
                          background: isHovered ? "#808080" : "#DCDCDC",
                          bottom: -4,
                          left: -8,
                          width: 36,
                          height: 18,
                          zIndex: -1,
                          transition: "background 0.3s linear",
                        }}
                      />
                      READ MORE
                    </a>
                  </div>
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

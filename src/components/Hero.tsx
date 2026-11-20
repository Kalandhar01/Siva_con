"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/sivra/hero-2.jpg", title: ["Create Unique", "Exterior Designs"] },
  { image: "/sivra/hero-1.jpg", title: ["Simple. Authentic.", "Close to Nature"] },
  { image: "/sivra/hero-3.jpg", title: ["Aesthetically", "Stunning Solutions"] },
];

const S = 1440 / 1660;
const SIDEBAR_W = Math.round(87 * S);
const TEXT_X = Math.round(217 * S);
const IMG_X = 850;
const IMG_W = 760;
const IMG_H = 752;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setIndex((i) => (i + d + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: 808, background: "#ffffff" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Blueprint background watermark */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/sivra/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
        }}
        aria-hidden
      />

      {/* Left social sidebar */}
      <aside
        className="hidden md:flex flex-col items-center justify-center"
        style={{
          position: "absolute",
          left: 0,
          top: 92,
          width: SIDEBAR_W,
          height: 808 - 92,
          borderRight: "1px solid rgba(0,0,0,0.08)",
          zIndex: 20,
        }}
        aria-label="Social media"
      >
        <div className="flex flex-col items-center justify-center" style={{ gap: 44 }}>
          {["Pinterest", "Twitter", "Facebook", "Instagram"].map((label) => (
            <a
              key={label}
              href="#"
              className="hover:opacity-60 transition-opacity"
              style={{
                color: "#1a1a1a",
                textDecoration: "none",
                fontFamily: "var(--font-titillium)",
                fontSize: 11,
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </aside>

      <div className="relative h-full" style={{ paddingTop: 92 }}>
        {/* Text column */}
        <div
          className="absolute z-20"
          style={{
            left: TEXT_X,
            top: 92 + 70,
            width: 660,
          }}
        >
          <div key={`t-${index}`} className="hero-slide-enter" style={{ position: "relative" }}>
            {/* Circular badge stamp */}
            <div
              className="circle-text absolute"
              style={{ right: -20, top: -30, width: 100, height: 100, zIndex: 5 }}
            >
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circ2" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                </defs>
                <text style={{ fontFamily: "var(--font-titillium)", fontSize: 9, fontWeight: 500, letterSpacing: "2px", fill: "#B8B8B8" }}>
                  <textPath href="#circ2" startOffset="0">
                    theratio interior studio  •  since 2012  •  theratio interior studio  •
                  </textPath>
                </text>
              </svg>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 60,
                fontWeight: 300,
                lineHeight: 1.12,
                color: "#1A1A1A",
                letterSpacing: 0,
                margin: 0,
              }}
            >
              {slides[index].title[0]}
              <br />
              {slides[index].title[1]}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 15,
                lineHeight: 1.6,
                color: "#7A7A7A",
                marginTop: 40,
                maxWidth: Math.round(530 * S),
              }}
            >
              Our goal is to create reliable relations with customers, that is
              <br />
              why, from the first day of the activity of the studio.
            </p>
            <div style={{ marginTop: 44 }}>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-titillium)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  background: "#1E1E1E",
                  padding: "14px 26px",
                  position: "relative",
                  border: "1px solid #1E1E1E",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                }}
              >
                View Projects
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 6,
                    left: 6,
                    width: "100%",
                    height: "100%",
                    border: "1px solid #CCCCCC",
                    zIndex: -1,
                    pointerEvents: "none",
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          key={`i-${index}`}
          className="hero-image-enter absolute z-10 hidden md:block"
          style={{
            right: 0,
            top: 0,
            width: 740,
            height: 790,
            overflow: "hidden",
          }}
        >
          <Image
            src={slides[index].image}
            alt=""
            width={868}
            height={860}
            priority
            className="w-full h-full object-cover"
            style={{ objectPosition: "right center" }}
          />

          {/* Circle text badge */}
          <div
            className="circle-text absolute"
            style={{ left: -180, top: 107, width: 112, height: 112 }}
          >
            <svg viewBox="0 0 112 112" width="112" height="112">
              <defs>
                <path id="circ" d="M 56,56 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0" />
              </defs>
              <text
                style={{ fontFamily: "var(--font-titillium)", fontSize: 11, fontWeight: 600, letterSpacing: "2px", fill: "#555555" }}
              >
                <textPath href="#circ" startOffset="0">
                  SIVRA BUILDCON  •  SINCE 2012  •  SIVRA BUILDCON  •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Arrows - bottom-left of image */}
          <div className="absolute z-10 flex gap-0" style={{ left: 0, bottom: 0 }}>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              style={{
                width: 70,
                height: 70,
                background: "#FFFFFF",
                border: "none",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "none",
                padding: 0,
                transition: "0.3s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              style={{
                width: 70,
                height: 70,
                background: "#FFFFFF",
                border: "none",
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "none",
                padding: 0,
                transition: "0.3s",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

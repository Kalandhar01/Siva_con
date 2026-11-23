"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";

const slides = [
  { image: "/sivra/hero-1.jpg", title: ["Simple. Authentic.", "Close to Nature"] },
  { image: "/sivra/hero-2.jpg", title: ["Create Unique", "Exterior Designs"] },
  { image: "/sivra/hero-3.jpg", title: ["Aesthetically", "Stunning Solutions"] },
];

const S = 1440 / 1660;
const SIDEBAR_W = Math.round(87 * S);
const TEXT_X = 215;
const IMG_X = 850;
const IMG_W = 760;
const IMG_H = 752;

type Slide = (typeof slides)[number];

function MobileHeroCopy({ slide, slideIndex, active }: { slide: Slide; slideIndex: number; active: boolean }) {
  const segments = [
    slide.title[0],
    slide.title[1],
    "Our goal is to create reliable relations with customers, that is",
    "why, from the first day of the activity of the studio.",
    "View Projects",
  ];
  const offsets = segments.map((_, i) =>
    segments.slice(0, i).reduce((sum, s) => sum + s.length + 1, 0)
  );
  const full = segments.join("\n");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    if (!active) return;

    let interval = 0;
    interval = window.setInterval(() => {
      setCount((c) => {
        if (c >= full.length) {
          window.clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, 28);

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [slideIndex, full, active]);

  const parts = full.slice(0, count).split("\n");
  const current = parts.length - 1;
  const done = count >= full.length;
  const caret = (i: number) => !done && current === i
    ? <span className="type-caret" aria-hidden="true" />
    : null;
  const started = (i: number) => count > offsets[i];

  return (
    <>
      <h1
        key={`title-${slideIndex}`}
        className="mobile-hero-title"
        style={{
          fontFamily: "var(--font-titillium), 'Titillium Web', sans-serif",
          fontSize: 32,
          fontWeight: 300,
          lineHeight: 1.15,
          letterSpacing: 0.2,
          color: "#1A1A1A",
          margin: 0,
          minHeight: 76,
        }}
      >
        <span>{parts[0] ?? ""}{caret(0)}</span>
        <br />
        <span>{parts[1] ?? ""}{caret(1)}</span>
      </h1>

      {started(2) && (
        <p
          style={{
            fontFamily: "var(--font-titillium), 'Titillium Web', sans-serif",
            fontSize: 14,
            lineHeight: 1.55,
            color: "#666666",
            marginTop: 14,
            marginBottom: 0,
            minHeight: 44,
          }}
        >
          <span>{parts[2] ?? ""}{caret(2)}</span>
          <br />
          <span>{parts[3] ?? ""}{caret(3)}</span>
        </p>
      )}

      {started(4) && (
        <div style={{ marginTop: 20 }}>
          <Button href="#portfolio">
            <span>{parts[4] ?? ""}</span>
            {caret(4)}
          </Button>
        </div>
      )}
    </>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    setCardVisible(false);
    const show = window.setTimeout(() => setCardVisible(true), 1000);
    return () => window.clearTimeout(show);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => {
    setButtonVisible(false);
    setTimeout(() => {
      setIndex((i) => (i + d + slides.length) % slides.length);
      setButtonVisible(true);
    }, 400);
  };

  return (
    <section
      id="home"
      className="relative"
      style={{ background: "#ffffff" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Mobile hero (<=768px) */}
      <div className="md:hidden">
        <div className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 520 }}>
          {slides.map((slide, i) => (
            <Image
              key={slide.image}
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className={`object-cover mobile-hero-slide${i === index ? " is-active" : ""}`}
              style={{ objectPosition: "center", zIndex: i === index ? 2 : 1 }}
            />
          ))}
          {/* Frosted content card */}
          <div
            className="absolute left-4 right-4"
            style={{
              top: "38%",
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              padding: "32px 26px",
              borderRadius: 0,
              boxShadow: "0 18px 50px rgba(0,0,0,0.18)",
              zIndex: 10,
              opacity: cardVisible ? 1 : 0,
              transform: cardVisible ? "none" : "translateY(12px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              pointerEvents: cardVisible ? "auto" : "none",
            }}
          >
            <MobileHeroCopy slide={slides[index]} slideIndex={index} active={cardVisible} />
          </div>
          {/* Slider indicator */}
          <div
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            style={{ bottom: 20, gap: 10, zIndex: 10 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
            <span
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.75)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffffff" }} />
            </span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.6)" }} />
          </div>
        </div>
      </div>

      {/* Desktop hero */}
      <div className="hidden md:block" style={{ height: 808, position: "relative", overflow: "hidden" }}>
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

        <div className="relative h-full" style={{ paddingTop: 92 }}>
          {/* Text column */}
          <div
            className="absolute z-20"
            style={{
              left: TEXT_X,
              top: 92 + 90,
              width: "min(950px, calc(100vw - 928px))",
            }}
          >
            <div key={`t-${index}`} className="hero-slide-enter" style={{ position: "relative" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                {/* Circular badge stamp - top right of headline */}
                <div
                  className="circle-text absolute"
                  style={{ right: -20, top: -75, width: 175, height: 175, zIndex: 20 }}
                >
                  <svg viewBox="0 0 175 175" width="175" height="175">
                    <defs>
                      <path id="circ2" d="M 17.5,87.5 A 70,70 0 1 1 137,137" />
                    </defs>
                    <text style={{ fontFamily: "var(--font-titillium)", fontSize: 13, fontWeight: 400, letterSpacing: "2px", fill: "#A6A6A6" }}>
                      <textPath href="#circ2" startOffset="0">
                        theratio interior studio     since 2012
                      </textPath>
                    </text>
                  </svg>
                </div>

                <h1
                  className="hero-stagger-1"
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 60,
                    fontWeight: 300,
                    lineHeight: 1.12,
                    color: "#1A1A1A",
                    letterSpacing: 0,
                    margin: 0,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {slides[index].title[0]}
                  <br />
                  {slides[index].title[1]}
                </h1>
              </div>
              <p
                className="hero-stagger-2"
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
              <div style={{ marginTop: 44, marginLeft: 0, paddingBottom: 24, opacity: buttonVisible ? 1 : 0, transition: "opacity 0.4s ease" }}>
                <Button href="#portfolio">View Projects</Button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            key={`i-${index}`}
            className="hero-image-enter absolute z-10 hidden md:block"
            data-img-reveal
            style={{
              right: 0,
              top: 0,
              width: 840,
              height: 750,
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
      </div>
    </section>
  );
}

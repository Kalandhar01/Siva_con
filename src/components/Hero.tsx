"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  { image: "/sivra/hero-1.jpg", title: ["Simple. Authentic.", "Close to Nature"] },
  { image: "/sivra/hero-2.jpg", title: ["Create Unique", "Exterior Designs"] },
  { image: "/sivra/hero-3.jpg", title: ["Aesthetically", "Stunning Solutions"] },
];

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
      style={{ height: 833, background: "#ffffff" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Blueprint background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/sivra/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }}
        aria-hidden
      />

      {/* Vertical socials (left of frame) */}
      <div className="hero-socials absolute left-[30px] top-1/2 z-20 hidden md:flex flex-col gap-28 text-[10px] font-semibold uppercase tracking-[2px] text-[#1a1a1a]">
        <a href="#" className="hover:opacity-60 transition-opacity">Pinterest</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Twitter</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Facebook</a>
        <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
      </div>

      <div className="relative mx-auto h-full" style={{ maxWidth: 1260, paddingTop: 0 }}>
        {/* Text column */}
        <div className="absolute left-[113px] top-[166px] z-20 w-[550px] max-w-[90%]">
          <div key={`t-${index}`} className="hero-slide-enter">
            <h1
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 72,
                fontWeight: 300,
                lineHeight: "80px",
                color: "#1a1a1a",
                letterSpacing: 0,
              }}
            >
              {slides[index].title[0]}
              <br />
              {slides[index].title[1]}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-raleway)",
                fontSize: 18,
                lineHeight: "32px",
                color: "#555555",
                marginTop: 30,
                maxWidth: 530,
              }}
            >
              Our goal is to create reliable relations with customers, that is why, from the first day of the activity of the studio.
            </p>
            <div style={{ marginTop: 44 }}>
              <a href="#portfolio" className="btn">
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          key={`i-${index}`}
          className="hero-image-enter absolute right-[10px] top-[-19px] z-10 hidden md:block"
          style={{ width: 616, height: 584, overflow: "hidden" }}
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
        </div>

        {/* Arrows */}
        <div className="absolute z-20 hidden md:flex gap-6" style={{ left: 654, top: 530 }}>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ width: 40, height: 28 }}
          >
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
              <path d="M12 6H0M0 6l5-5M0 6l5 5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="flex items-center justify-center transition-opacity hover:opacity-60"
            style={{ width: 40, height: 28 }}
          >
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
              <path d="M16 6h12M28 6l-5-5M28 6l-5 5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: simple image below text */}
      <div className="md:hidden absolute inset-0 pointer-events-none" aria-hidden />
    </section>
  );
}

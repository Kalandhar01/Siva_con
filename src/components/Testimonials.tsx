"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const go = (d: number) => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i + d + testimonials.length) % testimonials.length);
      setFade(true);
    }, 200);
  };

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative"
      style={{
        background: "#ffffff",
        padding: "120px 0 100px",
        backgroundImage: "url(/sivra/sketch-bg.png)",
        backgroundSize: "auto",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
        opacity: 1,
      }}
    >
      <div className="relative mx-auto px-6 md:px-[150px]" style={{ maxWidth: "none" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div />
          <div
            data-reveal
            className="reveal relative"
            style={{
              background: "#ffffff",
              backgroundImage: "url(/sivra/marble-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "60px 50px 50px",
              minHeight: 520,
              boxShadow: "0 0 0 1px #e6e6e6",
            }}
          >
            <span className="eyebrow">[ Testimonials ]</span>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              What People Say
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />

            <div
              style={{
                marginTop: 30,
                opacity: fade ? 1 : 0,
                transform: fade ? "none" : "translateY(10px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <p className="testimonial-quote" style={{ color: "#555555" }}>
                “{t.quote}”
              </p>
              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#888888",
                    marginTop: 4,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>

            <div className="flex gap-4" style={{ marginTop: 30 }}>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
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
                aria-label="Next testimonial"
                className="flex items-center justify-center transition-opacity hover:opacity-60"
                style={{ width: 40, height: 28 }}
              >
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none" stroke="#1a1a1a" strokeWidth="1.2">
                  <path d="M16 6h12M28 6l-5-5M28 6l-5 5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

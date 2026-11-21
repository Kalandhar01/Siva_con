"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

  const formattedQuote =
    index === 0
      ? "You will never fake the feeling of being in such a place.\nThe live minimalism base on the natural materials and\nalive unprocessed textures — true, authentic, close to\nnature. It has memory and appreciates to the culture,\nroots, archetypes."
      : t.quote;

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
      }}
    >
      <div className="relative mx-auto px-6 md:px-[210px]" style={{ maxWidth: "none" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-8 items-start">
          {/* Left — wide landscape photo, positioned higher */}
          <div className="reveal" data-reveal>
            <div style={{ aspectRatio: "16 / 10.5", overflow: "hidden" }}>
              <Image
                src="/sivra/testimonial-left.jpg"
                alt=""
                width={716}
                height={466}
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>
          </div>

          {/* Right — marble testimonial panel, shifted down */}
          <div
            data-reveal
            className="reveal relative lg:mt-12"
            style={{
              background: "#F7F7F7",
              backgroundImage: "url(/sivra/marble-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "56px 64px",
              minHeight: 520,
            }}
          >
            <span
              style={{
                fontFamily: '"Titillium Web", sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#888888",
                display: "block",
                marginBottom: 14,
              }}
            >
              [ TESTIMONIALS ]
            </span>
            <h2
              style={{
                fontFamily: '"Titillium Web", sans-serif',
                fontSize: 40,
                fontWeight: 400,
                color: "#1A1A1A",
                lineHeight: 1.2,
                marginBottom: 18,
              }}
            >
              What People Say
            </h2>
            <div
              style={{
                width: 44,
                height: 1,
                borderTop: "1px dashed #999999",
                marginBottom: 28,
              }}
            />

            <div
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "none" : "translateY(10px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <p
                style={{
                  fontFamily: '"Titillium Web", sans-serif',
                  fontSize: 15,
                  color: "#7A7A7A",
                  lineHeight: 1.75,
                  margin: 0,
                  whiteSpace: "pre-line",
                }}
              >
                “{formattedQuote}”
              </p>
            </div>

            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  fontFamily: '"Titillium Web", sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#1A1A1A",
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: '"Titillium Web", sans-serif',
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

            <div className="flex gap-4" style={{ marginTop: 28, justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#222222",
                  fontSize: 16,
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  color: "#222222",
                  fontSize: 16,
                  padding: 0,
                  lineHeight: 1,
                  marginLeft: 18,
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

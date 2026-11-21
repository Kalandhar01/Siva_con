"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const dur = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return (
    <span ref={ref} className="counter-value">
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div
      className="relative w-full"
      style={{ background: "#ffffff", padding: "60px 0 80px" }}
    >
      <div className="relative mx-auto px-6 md:px-[150px]" style={{ maxWidth: "none" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center" data-reveal>
              <div className="reveal flex items-center justify-center gap-2">
                <span className="counter-bracket">[</span>
                <Counter value={s.value} suffix={s.suffix} />
                <span className="counter-bracket">]</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "#1a1a1a",
                  marginTop: 14,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

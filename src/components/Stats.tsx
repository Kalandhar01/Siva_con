"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site-data";

function Counter({ value }: { value: number }) {
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
    <span ref={ref} className="counter-value" style={{ color: "#c2c2c2" }}>
      {n}
    </span>
  );
}

export default function Stats() {
  return (
    <div
      className="relative w-full"
      style={{ background: "#ffffff", padding: "80px 0 110px" }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1200, padding: "0 30px" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {stats.map((s) => (
            <div key={s.label} className="text-center reveal" data-reveal>
              <div className="reveal flex items-center justify-center gap-2" data-reveal>
                <span className="counter-bracket">[</span>
                <Counter value={s.value} />
                <span className="counter-bracket">+]</span>
              </div>
              <h6
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#555555",
                  lineHeight: "30px",
                  marginTop: 14,
                  textAlign: "center",
                }}
              >
                {s.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

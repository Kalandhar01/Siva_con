"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { label: "Interior Sketch", value: 65 },
  { label: "3D Modeling", value: 85 },
  { label: "2D Planning", value: 55 },
];

export default function ProgressBars() {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {items.map((it) => (
        <div key={it.label} className="progress-row">
          <div className="progress-label">
            <span>{it.label}</span>
            <span>{it.value}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar" style={{ width: active ? `${it.value}%` : "0%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

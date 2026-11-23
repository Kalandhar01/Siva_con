"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/site-data";
import "./Portfolio.css";

const TILE = 315;
const TILE_HEIGHT = 420;
const INTERVAL = 5000;
const DURATION = 1500;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const count = projects.length;
  // Repeat the set 3x so the loop point is always reachable, even on ultrawide screens.
  const slides = [...projects, ...projects, ...projects];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animating = false;
    let paused = false;
    let lastInteraction = 0;
    let raf: number | null = null;
    const loopWidth = count * TILE;

    const animateTo = (target: number, onDone?: () => void) => {
      if (raf !== null) cancelAnimationFrame(raf);
      const start = el.scrollLeft;
      const delta = target - start;
      if (Math.abs(delta) < 1) {
        onDone?.();
        return;
      }
      const t0 = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / DURATION);
        el.scrollLeft = start + delta * easeInOutCubic(p);
        if (p < 1) {
          raf = requestAnimationFrame(step);
        } else {
          raf = null;
          onDone?.();
        }
      };
      raf = requestAnimationFrame(step);
    };

    const advance = () => {
      if (paused || animating || document.hidden) return;
      // Let the visitor's own scrolling settle before taking over again.
      if (Date.now() - lastInteraction < 3000) return;

      // Slides repeat every loopWidth, so dropping back into the first copy
      // is pixel-identical and keeps the next glide short.
      if (el.scrollLeft >= loopWidth) {
        el.scrollLeft = el.scrollLeft % loopWidth;
      }

      const next = Math.round(el.scrollLeft / TILE) + 1;
      animating = true;

      if (next >= count) {
        // Glide onto the identical repeated set, then snap back invisibly.
        animateTo(loopWidth, () => {
          el.scrollLeft = 0;
          animating = false;
        });
      } else {
        animateTo(next * TILE, () => {
          animating = false;
        });
      }
    };

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };
    const onInteract = () => {
      lastInteraction = Date.now();
    };

    const timer = window.setInterval(advance, INTERVAL);

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("pointerdown", onInteract);
    el.addEventListener("touchstart", onInteract, { passive: true });
    el.addEventListener("wheel", onInteract, { passive: true });

    return () => {
      window.clearInterval(timer);
      if (raf !== null) cancelAnimationFrame(raf);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("pointerdown", onInteract);
      el.removeEventListener("touchstart", onInteract);
      el.removeEventListener("wheel", onInteract);
    };
  }, [count]);

  return (
    <div className="portfolio-shell">
      <div ref={scrollRef} className="portfolio-scroll relative w-full overflow-x-auto pb-2">
        <div className="flex" style={{ gap: 0, minWidth: "max-content" }}>
          {slides.map((p, i) => {
            const clone = i >= count;
            return (
              <a
                key={`${p.title}-${i}`}
                href="#"
                aria-hidden={clone || undefined}
                tabIndex={clone ? -1 : undefined}
                className="portfolio-item relative block shrink-0"
                style={{ width: TILE, height: TILE_HEIGHT, overflow: "hidden" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="portfolio-overlay">
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.category}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = () => Array.from(document.querySelectorAll("[data-reveal]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els().forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

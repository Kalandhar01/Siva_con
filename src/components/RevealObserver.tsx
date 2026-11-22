"use client";

import { useEffect } from "react";

export function RevealObserver() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = () => Array.from(document.querySelectorAll("[data-reveal], [data-img-reveal]"));
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
    els().forEach((el) => {
      if (el.hasAttribute("data-img-reveal")) el.classList.add("img-reveal");
      else el.classList.add("reveal");
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return null;
}

"use client";

import { useEffect, useState } from "react";

export function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      type="button"
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-[90] flex h-11 w-11 items-center justify-center bg-[#7D7D7D] text-[#EDEDED] transition-all duration-300 hover:bg-[#8E8E8E] md:bottom-11 md:right-11 md:h-12 md:w-12 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ border: 0, cursor: "pointer" }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}

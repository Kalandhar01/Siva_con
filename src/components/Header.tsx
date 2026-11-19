"use client";

import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home", chevron: true, active: true },
  { label: "PAGES", href: "#about", chevron: true, active: false },
  { label: "SERVICES", href: "#services", chevron: true, active: false },
  { label: "PORTFOLIO", href: "#portfolio", chevron: true, active: false },
  { label: "BLOG", href: "#blog", chevron: true, active: false },
  { label: "CONTACTS", href: "#contact", chevron: false, active: false },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      <header
        className="w-full sticky top-0 z-[100]"
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #EAEAEA",
          height: 92,
        }}
      >
        <div className="flex items-stretch" style={{ width: "100%", height: 92, margin: 0, padding: 0 }}>
          {/* LEFT – Brand identity (flush left) */}
          <div className="flex items-stretch" style={{ width: "20%", minWidth: 260, padding: 0, margin: 0 }}>
            {/* Logo square */}
            <div
              className="flex items-center justify-center shrink-0 w-[92px] md:w-[86px]"
              style={{ height: 92, background: "#1A1A1A", margin: 0, padding: 0 }}
            >
              <img
                src="/sivra/brand-logo.png"
                alt="SIVRA Buildcon"
                style={{ height: 50, width: "auto", objectFit: "contain" }}
              />
            </div>
            {/* Brand name area with blueprint watermark */}
            <div
              className="flex items-center flex-1 relative"
              style={{ paddingLeft: 18 }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "url(/sivra/sketch-bg.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.08,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "2.5px",
                  color: "#222222",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                SIVRA
                <br />
                BUILDCON
              </div>
            </div>
          </div>

          {/* CENTER – Navigation */}
          <nav
            className="hidden lg:flex items-center justify-center"
            style={{ flex: 1, gap: 0, background: "#FFFFFF" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative flex items-center gap-1.5"
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 14,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0",
                  color: "#333333",
                  padding: "0 17px",
                  height: 92,
                  display: "flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  position: "relative",
                }}
              >
                {l.label}
                {l.chevron && (
                  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginTop: 1 }}>
                    <path d="M1 1l3 3 3-3" stroke="#333333" strokeWidth="1.2" />
                  </svg>
                )}
                {l.active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: -1,
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: 8,
                      lineHeight: 1,
                      color: "#000000",
                      pointerEvents: "none",
                    }}
                  >
                    ▲
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* RIGHT – Action icons */}
          <div className="flex items-stretch justify-end ml-auto" style={{ width: "20%", minWidth: 220, background: "#FFFFFF" }}>
            <a
              href="#contact"
              aria-label="Cart"
              className="relative flex items-center"
              style={{ margin: "0 30px 0 0", color: "#1A1A1A", alignSelf: "center" }}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span
                className="absolute w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px]"
                style={{ background: "#000000", color: "#ffffff", bottom: -15, left: "calc(50% - 8px)", transform: "translateX(-50%)" }}
              >
                0
              </span>
            </a>
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="flex items-center"
              style={{ margin: "0 30px 0 0", color: "#555555", alignSelf: "center" }}
            >
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <div
              className="flex items-center"
              style={{ borderLeft: "1px solid rgba(0,0,0,0.1)", paddingLeft: 33, paddingRight: 34, alignSelf: "center" }}
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex flex-col gap-[6px] w-[24px]"
                style={{ color: "#1A1A1A" }}
              >
                <span style={{ height: 2, width: "100%", background: "#1A1A1A" }} />
                <span style={{ height: 2, width: "70%", background: "#1A1A1A" }} />
                <span style={{ height: 2, width: "100%", background: "#1A1A1A" }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Side menu overlay + drawer */}
      <div className={`side-menu-overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`side-menu ${open ? "is-open" : ""}`}>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" style={{ position: "absolute", top: 24, right: 24, color: "#ffffff" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
        <div style={{ marginBottom: 40 }}>
          <img src="/sivra/brand-logo.png" alt="SIVRA Buildcon" style={{ height: 60, width: "auto", marginBottom: 16 }} />
          <div style={{ fontFamily: "var(--font-titillium)", fontSize: 13, fontWeight: 700, letterSpacing: "2px", color: "#ffffff" }}>SIVRA BUILDCON</div>
        </div>
        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Our Gallery</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 40 }}>
          {[1, 2, 4, 5, 6, 9].map((n) => (
            <a key={n} href="#portfolio" style={{ display: "block", aspectRatio: "1/1", overflow: "hidden" }}>
              <img src={`/sivra/project-${n}.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          ))}
        </div>
        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Contact Info</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
          <li style={{ marginBottom: 12 }}>411 University St, Seattle, USA</li>
          <li style={{ marginBottom: 12 }}>hello@sivrabuildcon.com</li>
          <li style={{ marginBottom: 12 }}>+1 800 456 789 123</li>
        </ul>
      </aside>

      {/* Search overlay */}
      <div className={`search-overlay ${search ? "is-open" : ""}`} onClick={() => setSearch(false)}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 720, padding: "0 24px", position: "relative" }}>
          <button type="button" onClick={() => setSearch(false)} aria-label="Close search" style={{ position: "absolute", top: -60, right: 24, color: "#ffffff" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <input className="search-input" placeholder="Type keywords and hit enter" autoFocus={search} />
        </div>
      </div>
    </>
  );
}

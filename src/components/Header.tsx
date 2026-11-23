"use client";

import { useEffect, useState } from "react";
import { services } from "@/lib/site-data";

const navLinks = [
  { label: "HOME", href: "#home", chevron: true },
  { label: "PAGES", href: "#about", chevron: true },
  { label: "SERVICES", href: "/services", chevron: true },
  { label: "PORTFOLIO", href: "#portfolio", chevron: true },
  { label: "BLOG", href: "#blog", chevron: true },
  { label: "CONTACTS", href: "/contacts", chevron: false },
];

export default function Header({
  transparent = false,
  contactTheme = false,
  mobileTransparent = false,
}: {
  transparent?: boolean;
  contactTheme?: boolean;
  mobileTransparent?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent && !mobileTransparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent, mobileTransparent]);

  const transparentMode = transparent && !scrolled;
  const solidDark = transparent && scrolled;
  const lightText = transparent || contactTheme;
  const headerHeight = contactTheme ? 80 : 92;
  const headerBg = transparentMode
    ? "transparent"
    : contactTheme || solidDark
      ? "#202020"
      : "#FFFFFF";
  const mobileTopTransparent = mobileTransparent && !scrolled;
  const mobileBrandColor = mobileTransparent
    ? mobileTopTransparent ? "#1A1A1A" : "#FFFFFF"
    : "#D8D8D8";
  const mobileIconColor = mobileTransparent && mobileTopTransparent ? "#1A1A1A" : "#FFFFFF";

  return (
    <>
      {/* Mobile header bar (<=768px) */}
      <header
        className={`md:hidden ${
          transparent || mobileTransparent ? "fixed left-0 right-0" : "sticky"
        } top-0 z-[100] h-[64px] box-border flex items-center`}
        style={{
          background: mobileTransparent
            ? scrolled
              ? "#202020"
              : "transparent"
            : transparentMode
              ? "transparent"
              : contactTheme || solidDark
                ? "#202020"
                : "#232323",
          transition: "background 0.3s ease",
        }}
      >
        {/* White square emblem tile */}
        <div
          className="flex items-center justify-center shrink-0 w-[64px] h-[64px]"
          style={{ background: "#FFFFFF" }}
        >
          <img
            src="/sivra/brand-logo.png"
            alt="SIVRA Buildcon"
            className="h-[36px] w-auto object-contain"
            style={{ filter: "brightness(0)" }}
          />
        </div>
        {/* Stacked brand label */}
        <div
          className="flex flex-col justify-center"
          style={{ marginLeft: 12, lineHeight: 1.2 }}
        >
          <span
            style={{
              fontFamily: "var(--font-titillium)",
              fontSize: 11,
              fontWeight: 500,
              color: mobileBrandColor,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              lineHeight: 1.2,
            }}
          >
            SIVRA
          </span>
          <span
            style={{
              fontFamily: "var(--font-titillium)",
              fontSize: 11,
              fontWeight: 500,
              color: mobileBrandColor,
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              lineHeight: 1.2,
            }}
          >
            BUILDCON
          </span>
        </div>

        <div className="flex-1" />

        {/* Right icons */}
        <div className="flex items-center" style={{ gap: 18, paddingRight: 16 }}>
          <a
            href="#contact"
            aria-label="Cart"
            className="relative flex items-center"
            style={{ color: mobileIconColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
            <span
              className="absolute flex items-center justify-center rounded-full"
              style={{
                width: 16,
                height: 16,
                background: "#FFFFFF",
                color: "#1A1A1A",
                fontSize: 10,
                fontWeight: 600,
                bottom: -4,
                left: -4,
              }}
            >
              0
            </span>
          </a>
          <button
            type="button"
            onClick={() => setSearch(true)}
            aria-label="Search"
            className="flex items-center"
            style={{ color: mobileIconColor }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col"
            style={{ gap: 5, color: mobileIconColor }}
          >
            <span style={{ height: 2, width: 20, background: mobileIconColor }} />
            <span style={{ height: 2, width: 20, background: mobileIconColor }} />
            <span style={{ height: 2, width: 20, background: mobileIconColor }} />
          </button>
        </div>
      </header>

      {/* Desktop header */}
      <header
        className={`hidden md:flex w-full ${
          transparent ? "fixed left-0 right-0" : "sticky"
        } top-0 z-[100] ${contactTheme ? "h-[80px]" : "h-[92px]"} box-border`}
        style={{
          background: headerBg,
          borderBottom: transparentMode
            ? "none"
            : solidDark
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid #EAEAEA",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="flex items-stretch" style={{ width: "100%", height: "100%", margin: 0, padding: 0 }}>
          {/* LEFT – Brand identity (flush left) */}
          <div className="flex items-stretch" style={{ width: "auto", minWidth: 0, padding: 0, margin: 0, flex: "0 0 auto" }}>
            {/* Logo square */}
            <div
              className={`flex items-center justify-center shrink-0 w-[64px] h-[64px] ${
                contactTheme ? "md:w-[80px] md:h-[80px]" : "md:w-[92px] md:h-[92px]"
              }`}
              style={{
                background: contactTheme ? "#FFFFFF" : "#1A1A1A",
                margin: 0,
                padding: 0,
              }}
            >
              <img
                src="/sivra/brand-logo.png"
                alt="SIVRA Buildcon"
                className="h-[44px] md:h-[56px] w-auto object-contain object-center"
                style={contactTheme ? { filter: "brightness(0)" } : undefined}
              />
            </div>
            {/* Brand name area with blueprint watermark */}
            <div
              className="flex items-center flex-1 relative"
              style={{ paddingLeft: 10 }}
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
              {/* Mobile: brand name image */}
              <img
                src="/sivra/brand-name-logo.png"
                alt="SIVRA Buildcon"
                className="md:hidden h-[28px] w-auto object-contain"
                style={{ filter: "brightness(0)" }}
              />
              {/* Desktop: brand name text */}
              <div
                className="hidden md:block text-[11px] tracking-[3px]"
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontWeight: 500,
                  color: lightText ? "#FFFFFF" : "#222222",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {contactTheme ? (
                  <>
                    THERATIO
                    <br />
                    INTERIOR
                    <br />
                    STUDIO
                  </>
                ) : (
                  <>
                    SIVRA
                    <br />
                    BUILDCON
                  </>
                )}
              </div>
            </div>
          </div>

          {/* CENTER – Navigation (desktop only) */}
          <nav
            className="hidden lg:flex items-center justify-center"
            style={{
              flex: 1,
              gap: 0,
              background: headerBg,
              transition: "background 0.3s ease",
            }}
          >
            {navLinks.map((l) => (
              <div key={l.label} className="dropdown-parent relative" style={{ display: "flex", alignItems: "center", height: headerHeight }}>
                <a
                  href={l.href}
                  className="relative flex items-center gap-1.5 header-link"
                  style={{
                    fontFamily: "var(--font-titillium)",
                    fontSize: 12,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    padding: "0 15px",
                    height: headerHeight,
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    position: "relative",
                    color: lightText ? "#FFFFFF" : "#333333",
                    boxShadow:
                      contactTheme && l.label === "CONTACTS"
                        ? "inset 0 -2px 0 rgba(255,255,255,0.75)"
                        : undefined,
                  }}
                >
                  {l.label}
                  {l.chevron && (
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginTop: 1 }}>
                      <path d="M1 1l3 3 3-3" stroke={lightText ? "#FFFFFF" : "#333333"} strokeWidth="1.2" />
                    </svg>
                  )}
                </a>
                {l.chevron && (
                  <div className="dropdown dropdown-dark dropdown-animated">
                    {l.label === "SERVICES"
                      ? services.map((s) => (
                          <a key={s.slug} href={`/services/${s.slug}`}>{s.title}</a>
                        ))
                      : (
                          <a href={l.href}>Sample Page</a>
                        )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Spacer for mobile to push icons right */}
          <div className="flex-1 lg:hidden" />

          {/* RIGHT – Action icons */}
          <div
            className="flex items-stretch justify-end"
            style={{
              width: "auto",
              minWidth: 0,
              background: headerBg,
              alignSelf: "stretch",
              transition: "background 0.3s ease",
            }}
          >
            <a
              href="#contact"
              aria-label="Cart"
              className="relative flex items-center nav-icon"
              style={{ margin: "0 20px 0 0", color: lightText ? "#FFFFFF" : "#1A1A1A", alignSelf: "center", paddingLeft: 10 }}
            >
              <svg className="w-[18px] h-[18px] md:w-[25px] md:h-[25px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
              <span
                className="absolute w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] cart-badge"
                style={{ background: "#000000", color: "#ffffff", bottom: -15, left: "calc(50% - 8px)", transform: "translateX(-50%)" }}
              >
                0
              </span>
            </a>
            <button
              type="button"
              onClick={() => setSearch(true)}
              aria-label="Search"
              className="flex items-center nav-icon"
              style={{ margin: "0 20px 0 0", color: lightText ? "#FFFFFF" : "#555555", alignSelf: "center" }}
            >
              <svg className="w-[18px] h-[18px] md:w-[25px] md:h-[25px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
            <div
              className="flex items-center"
              style={{
                borderLeft: lightText ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(0,0,0,0.1)",
                paddingLeft: 32,
                paddingRight: 20,
                alignSelf: "center",
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex flex-col gap-[5px] w-[18px] md:w-[24px]"
                style={{ color: lightText ? "#FFFFFF" : "#1A1A1A" }}
              >
                <span style={{ height: 2, width: "100%", background: lightText ? "#FFFFFF" : "#1A1A1A" }} />
                <span style={{ height: 2, width: "70%", background: lightText ? "#FFFFFF" : "#1A1A1A" }} />
                <span style={{ height: 2, width: "100%", background: lightText ? "#FFFFFF" : "#1A1A1A" }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`side-menu-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        style={{ zIndex: 199 }}
      />
      <aside className={`side-menu ${open ? "is-open" : ""}`}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          style={{ position: "absolute", top: 24, right: 24, color: "#ffffff" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile nav links */}
        <nav style={{ marginBottom: 40, marginTop: 20 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {navLinks.map((l) => (
              <li key={l.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "16px 0",
                    fontFamily: "var(--font-titillium)",
                    fontSize: 16,
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0",
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Gallery */}
        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Our Gallery</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 40 }}>
          {[1, 2, 4, 5, 6, 9].map((n) => (
            <a key={n} href="#portfolio" style={{ display: "block", aspectRatio: "1/1", overflow: "hidden" }}>
              <img src={`/sivra/project-${n}.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Contact Info</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
          <li style={{ marginBottom: 12 }}>2102/4 Public Office Road, Velipalayam, Nagapattinam 611001, Tamil Nadu</li>
          <li style={{ marginBottom: 12 }}>support@sivraconstructions.com</li>
          <li style={{ marginBottom: 12 }}>+91 84899 83007</li>
        </ul>
      </aside>

      {/* Search overlay */}
      <div className={`search-overlay ${search ? "is-open" : ""}`} onClick={() => setSearch(false)}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 720, padding: "0 24px", position: "relative" }}>
          <button type="button" onClick={() => setSearch(false)} aria-label="Close search" style={{ position: "absolute", top: -60, right: 24, color: "#ffffff" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <input className="search-input" placeholder="Type keywords and hit enter" autoFocus={search} />
        </div>
      </div>
    </>
  );
}

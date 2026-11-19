"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open || search) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open, search]);

  const links = [
    { label: "Home", href: "#home", children: ["Main Home", "Interior Design", "Studio Home", "Architecture Agency"] },
    { label: "Pages", href: "#about", children: ["About Us", "Our Services", "Our Team", "Our Process", "Our Studio"] },
    { label: "Services", href: "#services", children: ["Design & Planning", "Exterior Design", "Custom Solutions", "Furniture & Decor"] },
    { label: "Portfolio", href: "#portfolio", children: ["Portfolio Grid", "Portfolio Classic", "Portfolio Slider", "Single Project"] },
    { label: "Blog", href: "#blog", children: ["Blog List", "Blog Grid", "Blog Format", "Single Post"] },
    { label: "Contacts", href: "#contact", children: [] },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "#ffffff" : "transparent",
          borderBottom: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <div className="relative mx-auto" style={{ maxWidth: 1440 }}>
          <div className="flex items-center justify-between h-[92px]">
            {/* Logo */}
            <a href="#home" className="flex items-center" style={{ height: 92 }}>
              <img
                src="/sivra/brand-name-logo.png"
                alt="SIVRA Buildcon"
                style={{ height: 44, width: "auto", display: "block" }}
              />
            </a>

            {/* Nav */}
            <nav className="hidden lg:flex items-center" style={{ gap: 0 }}>
              {links.map((l) => (
                <div key={l.label} className="dropdown-parent relative">
                  <a href={l.href} className="header-link flex items-center gap-1">
                    {l.label}
                    {l.children.length > 0 && (
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" style={{ marginTop: 1 }}>
                        <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    )}
                  </a>
                  {l.children.length > 0 && (
                    <div className="dropdown">
                      {l.children.map((c) => (
                        <a key={c} href={l.href}>{c}</a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center">
              <a href="#contact" className="relative hidden sm:flex items-center" aria-label="Cart" style={{ margin: "0 30px 0 0" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                </svg>
                <span
                  className="absolute -top-2 -left-2 w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px] font-normal"
                  style={{ background: "#000000", color: "#ffffff" }}
                >
                  0
                </span>
              </a>
              <button
                type="button"
                onClick={() => setSearch(true)}
                aria-label="Search"
                className="hidden sm:flex items-center"
                style={{ margin: "0 30px 0 0", color: "#555555" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
              <div style={{ borderLeft: "1px solid rgba(0,0,0,0.1)", padding: "0 0 0 33px", margin: "0 34px 0 0", display: "flex", alignItems: "center" }}>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-label="Open menu"
                  className="flex flex-col gap-[5px] w-[22px]"
                >
                  <span style={{ height: 1.5, width: "100%", background: "#1a1a1a" }} />
                  <span style={{ height: 1.5, width: "70%", background: "#1a1a1a" }} />
                  <span style={{ height: 1.5, width: "100%", background: "#1a1a1a" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Side menu overlay + drawer */}
      <div className={`side-menu-overlay ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
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
        <div style={{ marginBottom: 40 }}>
          <img src="/sivra/brand-logo.png" alt="SIVRA Buildcon" style={{ height: 60, width: "auto", marginBottom: 16 }} />
          <div style={{ fontFamily: "var(--font-titillium)", fontSize: 13, fontWeight: 700, letterSpacing: "2px", color: "#ffffff" }}>SIVRA BUILDCON</div>
        </div>

        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Our Gallery</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 40 }}>
          {[1, 2, 4, 5, 6, 9].map((n) => (
            <a key={n} href="#portfolio" style={{ display: "block", aspectRatio: "1/1", overflow: "hidden" }}>
              <img src={`/sivra/project-${n}.jpg`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }} />
            </a>
          ))}
        </div>

        <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#ffffff", marginBottom: 20 }}>Contact Info</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.75)" }}>
          <li style={{ marginBottom: 12 }}>411 University St, Seattle, USA</li>
          <li style={{ marginBottom: 12 }}>hello@sivrabuildcon.com</li>
          <li style={{ marginBottom: 12 }}>+1 800 456 789 123</li>
        </ul>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          {["Facebook-f", "Twitter", "Linkedin-in", "Instagram"].map((s) => (
            <a key={s} href="#" style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", fontSize: 12 }}>
              {s === "Facebook-f" ? "f" : s === "Twitter" ? "t" : s === "Linkedin-in" ? "in" : "ig"}
            </a>
          ))}
        </div>
      </aside>

      {/* Search overlay */}
      <div className={`search-overlay ${search ? "is-open" : ""}`} onClick={() => setSearch(false)}>
        <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 720, padding: "0 24px", position: "relative" }}>
          <button
            type="button"
            onClick={() => setSearch(false)}
            aria-label="Close search"
            style={{ position: "absolute", top: -60, right: 24, color: "#ffffff" }}
          >
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

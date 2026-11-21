import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-0" style={{ background: "#ffffff" }}>
      <div className="relative px-6 md:px-[90px]" style={{ maxWidth: "none", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image (bleeds left) */}
          <div className="relative" style={{ minHeight: 611 }}>
            <Image
              src="/sivra/about-collage.png"
              alt=""
              width={716}
              height={611}
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>

          {/* Content */}
          <div
            data-reveal
            className="reveal px-6 lg:px-0 flex flex-col justify-center"
            style={{ padding: "80px 10px 80px 10px" }}
          >
            <span className="eyebrow">[ Main Principes ]</span>
            <h2 className="section-title" style={{ marginTop: 18, fontSize: 40 }}>
              A Sketch of Each Detail
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />
            <p style={{ marginTop: 26, maxWidth: 460 }}>
              The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" style={{ marginTop: 40 }}>
              <div>
                <div style={{ width: 46, height: 46, marginBottom: 18 }}>
                  <svg viewBox="0 0 46 46" fill="none" width="46" height="46">
                    <rect x="3" y="3" width="40" height="40" stroke="#1a1a1a" strokeWidth="1.2" />
                    <path d="M3 23h40M23 3v40" stroke="#1a1a1a" strokeWidth="1.2" />
                    <circle cx="23" cy="23" r="8" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
                  </svg>
                </div>
                <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#1a1a1a", marginBottom: 10 }}>
                  3D Visualization
                </h4>
                <p style={{ fontSize: 14, lineHeight: "24px" }}>3D sketch of each detail of your future interior.</p>
                <a href="#" className="link-more" style={{ marginTop: 16 }}>Read More</a>
              </div>
              <div>
                <div style={{ width: 46, height: 46, marginBottom: 18 }}>
                  <svg viewBox="0 0 46 46" fill="none" width="46" height="46">
                    <rect x="3" y="8" width="40" height="30" stroke="#1a1a1a" strokeWidth="1.2" />
                    <path d="M3 18h40M13 8v30M33 8v30" stroke="#1a1a1a" strokeWidth="1.2" />
                  </svg>
                </div>
                <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#1a1a1a", marginBottom: 10 }}>
                  Individual Project
                </h4>
                <p style={{ fontSize: 14, lineHeight: "24px" }}>The basic philosophy of studio is to create individual design.</p>
                <a href="#" className="link-more" style={{ marginTop: 16 }}>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

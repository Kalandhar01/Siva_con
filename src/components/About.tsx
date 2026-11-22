import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-0" style={{ background: "#ffffff" }}>
      <div className="relative px-6 md:px-[90px]" style={{ maxWidth: "none", margin: "0 auto" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image (bleeds left) */}
          <div className="relative" style={{ minHeight: 611 }}>
            <Image
              src="/sivra/about-ref.png"
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
            className="reveal px-6 lg:px-0 flex flex-col justify-center pt-11 md:pt-20"
            style={{ paddingRight: 10, paddingBottom: 80, paddingLeft: 0 }}
          >
            <span
              style={{
                fontFamily: "var(--font-titillium)",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "none",
                letterSpacing: "2.5px",
                color: "#888888",
                display: "block",
                marginBottom: 18,
              }}
            >
              [ main principes ]
            </span>
            <h2 className="section-title text-[26px]! md:text-[40px]!" style={{ marginTop: 0 }}>
              A Sketch of Each Detail
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />
            <p style={{ marginTop: 26, maxWidth: 460, fontSize: 15, lineHeight: 1.6 }}>
              The basic philosophy of our studio is to create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique styles.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" style={{ marginTop: 40 }}>
              <div>
                <span className="ot-flaticon-3d" style={{ display: "block", marginBottom: 28 }} />
                <h4 style={{ fontFamily: "var(--font-titillium)", fontSize: 20, fontWeight: 400, color: "#1a1a1a", marginBottom: 10 }}>
                  3D Visualization
                </h4>
                <p style={{ fontSize: 14, lineHeight: "24px" }}>3D sketch of each detail of your future interior.</p>
                <a href="#" className="link-more" style={{ marginTop: 16 }}>Read More</a>
              </div>
              <div>
                <span className="ot-flaticon-blueprint" style={{ display: "block", marginBottom: 28 }} />
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

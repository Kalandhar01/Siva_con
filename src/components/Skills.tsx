import Image from "next/image";
import ProgressBars from "./ProgressBars";
import Partners from "./Partners";
import Portfolio from "./Portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative"
      style={{
        background: "#ffffff",
        backgroundImage: "url(/sivra/sketch-bg.png)",
        backgroundSize: "auto",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        paddingTop: 120,
        paddingBottom: 0,
      }}
    >
      <div className="relative mx-auto" style={{ maxWidth: 1260, padding: "0 30px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start" data-reveal>
          <div className="reveal">
            <span className="eyebrow">[ Our Skills ]</span>
            <h2 className="section-title" style={{ marginTop: 18 }}>
              The Core Company Values
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />
            <p style={{ marginTop: 26, maxWidth: 460 }}>
              We are constantly growing, learning, and improving and our partners are steadily increasing. 200 projects is a sizable number.
            </p>
            <div style={{ marginTop: 36, maxWidth: 460 }}>
              <ProgressBars />
            </div>
          </div>

          <div className="reveal" style={{ justifySelf: "end" }}>
            <Image
              src="/sivra/skills-plan.jpg"
              alt=""
              width={630}
              height={520}
              className="w-full h-auto"
              style={{ filter: "grayscale(30%)", maxWidth: 630 }}
            />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 80 }}>
        <Partners />
      </div>

      <div style={{ marginTop: 0 }}>
        <Portfolio />
      </div>
    </section>
  );
}

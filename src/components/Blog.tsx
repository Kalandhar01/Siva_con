import Image from "next/image";
import { posts } from "@/lib/site-data";

const titleLines = [
  ["Top 10 Tips for Your Kitchen", "Interior Design"],
  ["The Golden Ratio Rule for Best", "2D Sketch"],
  ["Use Pastel Colors & Natural", "Materials"],
];

const badgeLabels = ["INTERIOR", "ACHITECTURE", "INTERIOR"];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative"
      style={{
        background: "#ffffff",
        padding: "120px 0 100px",
        backgroundImage: "url(/sivra/marble-bg.png)",
        backgroundSize: "auto",
        backgroundPosition: "right bottom",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="relative mx-auto px-6 md:px-[90px]" style={{ maxWidth: "none" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6" data-reveal>
          <div className="reveal">
            <span
              style={{
                fontFamily: '"Titillium Web", sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#888888",
              }}
            >
              [ OUR BLOG ]
            </span>
            <h2
              className="section-title"
              style={{
                marginTop: 18,
                fontSize: 42,
                fontWeight: 400,
                fontFamily: '"Titillium Web", sans-serif',
              }}
            >
              Read Our Latest News
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />
          </div>
          <div className="reveal" style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                position: "absolute",
                top: 6,
                left: 6,
                width: "100%",
                height: "100%",
                border: "1px solid #CCCCCC",
                zIndex: 0,
              }}
            />
            <a
              href="#"
              style={{
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#1E1E1E",
                color: "#ffffff",
                border: "1px solid #1E1E1E",
                padding: "10px 22px",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontFamily: '"Titillium Web", sans-serif',
                textDecoration: "none",
              }}
            >
              VIEW ALL
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7" style={{ marginTop: 60 }}>
          {posts.map((p, i) => (
            <article
              key={p.title}
              className="blog-card"
              data-reveal
              style={{
                background: "#FFFFFF",
                border: "1px solid #EAEAEA",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16 / 10" }}>
                <a href="#" style={{ display: "block", width: "100%", height: "100%" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={790}
                    height={510}
                    className="blog-img"
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </a>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    background: "#222222",
                    color: "#ffffff",
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 10,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "8px 14px",
                  }}
                >
                  {badgeLabels[i]}
                </span>
              </div>
              <div style={{ padding: "24px" }}>
                <div
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 10,
                    color: "#999999",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 14,
                  }}
                >
                  {p.date.toUpperCase()} &nbsp;••&nbsp; {p.author.toUpperCase()}
                </div>
                <h4
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#1A1A1A",
                    lineHeight: 1.35,
                    marginBottom: 12,
                  }}
                >
                  <a href="#" className="hover:opacity-70 transition-opacity" style={{ textDecoration: "none", color: "inherit" }}>
                    {titleLines[i].map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < titleLines[i].length - 1 && <br />}
                      </span>
                    ))}
                  </a>
                </h4>
                <p style={{ fontSize: 13, lineHeight: "20px", color: "#888888", fontFamily: '"Titillium Web", sans-serif' }}>
                  A faceting effect livens up and....
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

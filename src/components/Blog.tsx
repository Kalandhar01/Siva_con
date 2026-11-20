import Image from "next/image";
import { posts } from "@/lib/site-data";

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
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#9F9E9E",
              }}
            >
              [ Our Blog ]
            </span>
            <h2 className="section-title" style={{ marginTop: 18, fontSize: 42, fontWeight: 400 }}>
              Read Our Latest News
            </h2>
            <div className="dot-sep" style={{ marginTop: 22 }} />
          </div>
          <div className="reveal">
            <a href="#" className="btn">
              View All
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: 60 }}>
          {posts.map((p) => (
            <article key={p.title} className="blog-card" data-reveal>
              <div className="reveal" style={{ overflow: "hidden", position: "relative" }}>
                <a href="#" style={{ display: "block", overflow: "hidden" }}>
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={790}
                    height={510}
                    className="blog-img w-full h-auto"
                    style={{ display: "block" }}
                  />
                </a>
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 20,
                    background: "#1a1a1a",
                    color: "#ffffff",
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    padding: "8px 14px",
                  }}
                >
                  {p.category}
                </span>
              </div>
              <div style={{ padding: "24px 0" }}>
                <div
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 12,
                    color: "#888888",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: 14,
                  }}
                >
                  {p.date} &nbsp;•&nbsp; {p.author} &nbsp;•&nbsp; 0 Comments
                </div>
                <h4
                  style={{
                    fontFamily: '"Titillium Web", sans-serif',
                    fontSize: 24,
                    fontWeight: 400,
                    color: "#1a1a1a",
                    lineHeight: "36px",
                    marginBottom: 12,
                  }}
                >
                  <a href="#" className="hover:opacity-70 transition-opacity">{p.title}</a>
                </h4>
                <p style={{ fontSize: 14, lineHeight: "24px", color: "#555555" }}>
                  A faceting effect livens up and...
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

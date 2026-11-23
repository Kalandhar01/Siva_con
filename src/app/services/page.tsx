import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollTop } from "@/components/ScrollTop";
import SocialSidebar from "@/components/SocialSidebar";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Our Services — SIVRA Buildcon",
};

export default function ServicesPage() {
  return (
    <>
      <RevealObserver />
      <div className="relative">
        <div className="site-frame" aria-hidden />
        <SocialSidebar />
        <Header />
        <main>
          <section className="relative bg-white py-[120px]">
            <div className="relative mx-auto max-w-[1260px] px-[30px]">
              <div className="text-center reveal" data-reveal>
                <span className="eyebrow">[ Our Services ]</span>
                <h1 className="section-title" style={{ marginTop: 18 }}>
                  What Can We Offer
                </h1>
                <div className="dot-sep mx-auto" style={{ marginTop: 22 }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[60px]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group relative overflow-hidden block"
                    style={{
                      padding: "45px 60px",
                      backgroundColor: "#f4f4f4",
                      backgroundImage: `url(${s.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ position: "relative", zIndex: 2 }}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <img src={s.icon} alt="" width={60} height={68} style={{ display: "block" }} />
                      </div>
                      <h2
                        style={{
                          fontFamily: '"Titillium Web", sans-serif',
                          fontSize: 24,
                          fontWeight: 400,
                          color: "#1a1a1a",
                          marginBottom: 15,
                          lineHeight: 1.4,
                          textAlign: "center",
                        }}
                      >
                        {s.title}
                      </h2>
                      <p
                        style={{
                          fontFamily: '"Raleway", sans-serif',
                          fontSize: 16,
                          lineHeight: "30px",
                          color: "#555555",
                          marginBottom: 13,
                          textAlign: "center",
                        }}
                      >
                        {s.text}
                      </p>
                      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                        <span
                          style={{
                            fontFamily: '"Titillium Web", sans-serif',
                            fontSize: 13,
                            fontWeight: 600,
                            color: "#1a1a1a",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                        >
                          READ MORE
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="dot-sep mx-auto" style={{ marginTop: 60 }} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}
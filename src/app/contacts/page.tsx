import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollTop } from "@/components/ScrollTop";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacts — SIVRA Buildcon",
};

export default function ContactsPage() {
  return (
    <>
      <RevealObserver />
      <div className="relative">
        <Header contactTheme transparent />
        <main>
          {/* Page header */}
          <section
            className="relative flex items-center justify-center text-center"
            style={{
              height: 500,
              backgroundImage: "url(/sivra/bg-pheader.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
              }}
            />
            <div className="relative z-10">
              <h1
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 48,
                  fontWeight: 400,
                  color: "#ffffff",
                  margin: 0,
                  letterSpacing: 0,
                }}
              >
                Contacts
              </h1>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "18px 0 0",
                  display: "flex",
                  gap: 8,
                  justifyContent: "center",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-titillium)",
                }}
              >
                <li>
                  <a href="/" style={{ color: "#ffffff", textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li style={{ opacity: 0.6 }}>/</li>
                <li style={{ color: "#ffffff" }}>Contacts</li>
              </ul>
            </div>
          </section>

          {/* Contact section */}
          <section style={{ padding: "80px 0", background: "#ffffff" }}>
            <div
              style={{
                width: "100%",
                maxWidth: 1260,
                margin: "0 auto",
                padding: "0 30px",
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_450px] gap-0">
                {/* Left: form */}
                <div className="md:pr-[40px] mb-12 md:mb-0">
                  <h2
                    style={{
                      fontFamily: "var(--font-titillium)",
                      fontSize: 30,
                      fontWeight: 400,
                      color: "#1A1A1A",
                      margin: "0 0 20px",
                    }}
                  >
                    Get in Touch
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-titillium)",
                      fontSize: 14,
                      color: "#555555",
                      margin: "0 0 24px",
                    }}
                  >
                    Your email address will not be published. Required fields are
                    marked *
                  </p>
                  <ContactForm />
                </div>

                {/* Right: contact details */}
                <div
                  style={{
                    backgroundColor: "#202020",
                    backgroundImage:
                      "linear-gradient(rgba(32,32,32,0.78), rgba(32,32,32,0.78)), url(/sivra/hero-bg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    zIndex: 2,
                    alignSelf: "start",
                    width: "100%",
                    maxWidth: 450,
                    minHeight: 580,
                    marginTop: -35,
                    marginLeft: 0,
                    marginRight: 0,
                  }}
                >
                  <div className="contact-widget-wrap elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-6a183e2 elementor-widget elementor-widget-iheading">
                      <div className="elementor-widget-container">
                        <div className="ot-heading">
                          <span>[ our contact details ]</span>
                          <h2 className="main-heading">Let&apos;s Start a Project</h2>
                        </div>
                      </div>
                    </div>

                    <div className="elementor-element elementor-element-c6c295b elementor-widget elementor-widget-text-editor">
                      <div className="elementor-widget-container text-editor">
                        <p>
                          Give us a call or drop by anytime, we endeavour to answer
                          all enquiries within 24 hours on business days. We will be
                          happy to answer your questions.
                        </p>
                      </div>
                    </div>

                    {[
                      {
                        icon: "ot-flaticon-place",
                        label: "OUR ADDRESS:",
                        value: "411 University St, Seattle, USA",
                        href: null as string | null,
                      },
                      {
                        icon: "ot-flaticon-mail",
                        label: "OUR MAILBOX:",
                        value: "theratio_interior@mail.com",
                        href: "mailto:theratio_interior@mail.com",
                      },
                      {
                        icon: "ot-flaticon-phone-call",
                        label: "OUR PHONE:",
                        value: "+1 800 456 789 123",
                        href: "tel:+1800456789123",
                      },
                    ].map((item) => (
                      <div
                        className="elementor-element elementor-widget elementor-widget-icontact_info"
                        key={item.label}
                      >
                        <div className="elementor-widget-container">
                          <div className="contact-info">
                            <i className={item.icon} aria-hidden="true" />
                            <div className="info-text">
                              <h6>{item.label}</h6>
                              <p>
                                {item.href ? (
                                  <a href={item.href}>{item.value}</a>
                                ) : (
                                  item.value
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="elementor-element elementor-element-6d3148f elementor-widget elementor-widget-social-icons">
                      <div className="elementor-widget-container">
                        <div
                          className="elementor-social-icons-wrapper elementor-grid"
                          role="list"
                        >
                          {[
                            { name: "x-twitter", label: "X-twitter", icon: "fa-x-twitter" },
                            { name: "facebook-f", label: "Facebook-f", icon: "fa-facebook-f" },
                            { name: "linkedin-in", label: "Linkedin-in", icon: "fa-linkedin-in" },
                            { name: "instagram", label: "Instagram", icon: "fa-instagram" },
                          ].map((s) => (
                            <span
                              className="elementor-grid-item"
                              role="listitem"
                              key={s.name}
                            >
                              <a
                                className={`elementor-icon elementor-social-icon elementor-social-icon-${s.name}`}
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <span className="elementor-screen-only">{s.label}</span>
                                <i className={`fab ${s.icon}`} aria-hidden="true" />
                              </a>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section style={{ position: "relative", lineHeight: 0 }}>
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=2102/4+Public+Office+Road,+Velipalayam,+Nagapattinam+611001,+Tamil+Nadu&ll=10.779991,79.84239&z=16&output=embed"
              width="100%"
              height={522}
              style={{
                border: 0,
                filter: "grayscale(100%)",
                display: "block",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              style={{
                position: "absolute",
                left: 24,
                bottom: 24,
                zIndex: 1,
                background: "#ffffff",
                padding: "16px 20px",
                maxWidth: 260,
                lineHeight: 1.5,
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-titillium)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#1a1a1a",
                }}
              >
                SIVRA Buildcon
              </p>
              <p
                style={{
                  margin: "4px 0 10px",
                  fontFamily: "var(--font-titillium)",
                  fontSize: 12,
                  color: "#777777",
                }}
              >
                2102/4 Public Office Road, Velipalayam, Nagapattinam 611001, Tamil Nadu
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=10.779991,79.84239"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-titillium)",
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#1a1a1a",
                  textDecoration: "none",
                  borderBottom: "1px solid #1a1a1a",
                  paddingBottom: 2,
                }}
              >
                Open in Maps
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { ScrollTop } from "@/components/ScrollTop";
import SocialSidebar from "@/components/SocialSidebar";
import ServiceImageCarousel from "@/components/ServiceImageCarousel";
import ServiceTestimonials from "@/components/ServiceTestimonials";
import { serviceDetails, serviceTestimonials, services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return {
    title: service ? `${service.title} — SIVRA Buildcon` : "Service — SIVRA Buildcon",
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const detail = serviceDetails[slug];

  if (!service || !detail) notFound();

  return (
    <>
      <RevealObserver />
      <div className="service-detail-page relative">
        <div className="site-frame" aria-hidden />
        <SocialSidebar />
        <Header transparent />

        <main id="content" className="site-content">
          {/* Theratio-style page header */}
          <section
            className="page-header dtable text-center header-transparent"
            style={{ backgroundImage: "url(/sivra/reference/pheader-service-detail1.jpg)" }}
          >
            <div className="dcell">
              <div className="container">
                <h1 className="page-title">{service.title}</h1>
                <ul id="breadcrumbs" className="breadcrumbs none-style">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Our Services</Link>
                  </li>
                  <li className="active" aria-current="page">
                    {service.title}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="service-detail-elementor">
            <section className="service-detail-section elementor-section elementor-top-section">
              <div className="service-detail-container elementor-container">
                {/* 25% numbered service menu */}
                <aside className="service-detail-sidebar">
                  <section id="nav_menu-2" className="widget widget_nav_menu">
                    <div className="menu-menu-service-container">
                      <ul id="menu-menu-service" className="menu">
                        {services.map((item, index) => (
                          <li
                            key={item.slug}
                            className={item.slug === slug ? "current-menu-item" : undefined}
                          >
                            <Link href={`/services/${item.slug}`}>
                              <span>{String(index + 1).padStart(2, "0")}.</span> {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>
                </aside>

                {/* 75% service content */}
                <div className="service-detail-content">
                  <div className="service-ot-heading">
                    <span>{detail.eyebrow}</span>
                    <h2 className="main-heading">{detail.heading}</h2>
                  </div>

                  <div className="service-text-editor service-intro">
                    <p>{detail.intro}</p>
                  </div>

                  <ServiceImageCarousel images={detail.carousel} />

                  <div className="service-text-editor service-body-copy">
                    {detail.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="service-wide-image">
                    <img src={detail.wideImage} alt="" />
                  </div>

                  <section className="service-progress-row">
                    {detail.stats.map((stat) => (
                      <div className="service-progress-col" key={stat.label}>
                        <div className="circle-progress tbottom">
                          <div
                            className="inner-bar"
                            style={{
                              background: `conic-gradient(#939393 ${stat.value}%, rgba(10, 10, 10, 0.1) 0)`,
                            }}
                          >
                            <span>
                              <span className="percent">{stat.value}</span>
                            </span>
                          </div>
                          <h4>{stat.label}</h4>
                        </div>
                        <div className="service-text-editor service-progress-copy">
                          <p>
                            {stat.text.map((line, index) => (
                              <span key={line}>
                                {index > 0 && <br />}
                                {line}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    ))}
                  </section>

                  <div className="service-ot-heading is-dots service-testimonials-heading">
                    <span>[ testimonials ]</span>
                    <h2 className="main-heading">What People Say</h2>
                  </div>

                  <ServiceTestimonials items={serviceTestimonials} />
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Partners from "./Partners";
import Portfolio from "./Portfolio";

const skills = [
  { label: "interior sketch", value: 65 },
  { label: "3D Modeling", value: 85 },
  { label: "2D Planning", value: 55 },
];

function AnimatedPercent({ value, active }: { value: number; active: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1000;
    let raf = 0;
    const timer = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setN(Math.round(value * eased));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, 500);

    return () => {
      window.clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [active, value]);

  return <span className="ppercent">{n}%</span>;
}

export default function Skills() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = progressRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section
        id="skills"
        className="elementor-section elementor-inner-section elementor-element elementor-element-3430630 elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
        data-id="3430630"
        data-element_type="section"
        style={{ background: "transparent", padding: "160px 0 150px" }}
      >
        <div
          className="elementor-container elementor-column-gap-extended mx-auto flex flex-wrap items-center"
          style={{ maxWidth: 1200, padding: "0 15px", gap: 30 }}
        >
          {/* Left column */}
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-db459a5 ot-flex-column-vertical w-full lg:w-auto lg:flex-1 min-w-0"
            data-id="db459a5"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-3213f7f theratio-mobile-align-left elementor-widget elementor-widget-iheading"
                data-id="3213f7f"
                data-element_type="widget"
                data-widget_type="iheading.default"
              >
                <div className="elementor-widget-container">
                  <div className="ot-heading is-dots">
                    <span>[ our skills ]</span>
                    <h2 className="main-heading">The Core Company Values</h2>
                  </div>
                </div>
              </div>

              <div
                className="elementor-element elementor-element-1ce8de1 elementor-widget elementor-widget-text-editor"
                data-id="1ce8de1"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p>
                    We are constantly growing, learning, and improving and our
                    partners are steadily increasing. 200 projects is a sizable
                    number.
                  </p>
                </div>
              </div>

              <div ref={progressRef}>
                {skills.map((item, index) => {
                  const ids = ["0d6f56c", "f5c97fc", "3ff9a90"];
                  return (
                    <div
                      key={item.label}
                      className="elementor-element elementor-widget elementor-widget-iprogress"
                      data-id={ids[index]}
                      data-element_type="widget"
                      data-widget_type="iprogress.default"
                    >
                      <div className="elementor-widget-container">
                        <div
                          className="ot-progress"
                          data-percent={item.value}
                          data-processed={active ? "true" : "false"}
                        >
                          <div className="overflow">
                            <span className="pname f-left">{item.label}</span>
                          </div>
                          <div className="iprogress">
                            <div
                              className="progress-bar"
                              style={{ width: active ? `${item.value}%` : "0%" }}
                            >
                              <AnimatedPercent value={item.value} active={active} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f628b63 ot-flex-column-vertical w-full lg:w-auto lg:flex-1 min-w-0"
            data-id="f628b63"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-c91ef3d elementor-widget elementor-widget-image"
                data-id="c91ef3d"
                data-element_type="widget"
                data-widget_type="image.default"
              >
                <div className="elementor-widget-container">
                  <Image
                    decoding="async"
                    width={630}
                    height={520}
                    src="/sivra/skills-plan.jpg"
                    alt=""
                    sizes="(max-width: 630px) 100vw, 630px"
                    className="attachment-full size-full wp-image-3672 entered lazyloaded w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: 80 }}>
        <Partners />
      </div>

      <div style={{ marginTop: 0 }}>
        <Portfolio />
      </div>
    </>
  );
}
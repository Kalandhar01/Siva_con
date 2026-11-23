import Partners from "./Partners";
import Portfolio from "./Portfolio";

const skills = [
  { label: "interior sketch", percent: 65, width: 325.014 },
  { label: "3D Modeling", percent: 85, width: 425.018 },
  { label: "2D Planning", percent: 55, width: 275.012 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <section
        className="elementor-section elementor-inner-section elementor-element elementor-element-3430630 elementor-section-content-middle elementor-section-boxed elementor-section-height-default"
        data-id="3430630"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-extended">
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-db459a5 ot-flex-column-vertical"
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
                    We are constantly growing, learning, and improving and our partners are steadily increasing. 200 projects is a sizable number.
                  </p>
                </div>
              </div>
              {skills.map((s) => (
                <div
                  key={s.label}
                  className={`elementor-element elementor-widget elementor-widget-iprogress ${
                    s.percent === 65
                      ? "elementor-element-0d6f56c"
                      : s.percent === 85
                        ? "elementor-element-f5c97fc"
                        : "elementor-element-3ff9a90"
                  }`}
                  data-element_type="widget"
                  data-widget_type="iprogress.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ot-progress" data-percent={s.percent} data-processed="true">
                      <div className="overflow">
                        <span className="pname f-left">{s.label}</span>
                      </div>
                      <div className="iprogress">
                        <div className="progress-bar" style={{ width: `${s.width}px` }}>
                          <span className="ppercent">{s.percent}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f628b63 ot-flex-column-vertical"
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
                  <img
                    decoding="async"
                    width={630}
                    height={520}
                    className="attachment-full size-full wp-image-3672 entered lazyloaded"
                    alt=""
                    src="/sivra/skills-plan.jpg"
                    data-lazy-src="/sivra/skills-plan.jpg"
                    data-ll-status="loaded"
                    sizes="(max-width: 630px) 100vw, 630px"
                  />
                  <noscript>
                    <img
                      decoding="async"
                      width={630}
                      height={520}
                      className="attachment-full size-full wp-image-3672"
                      alt=""
                      src="/sivra/skills-plan.jpg"
                      sizes="(max-width: 630px) 100vw, 630px"
                    />
                  </noscript>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="partner-block" style={{ marginTop: 0 }}>
        <Partners />
      </div>

      <div style={{ marginTop: 0 }}>
        <Portfolio />
      </div>
    </section>
  );
}

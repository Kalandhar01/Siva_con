"use client";

import { projects } from "@/lib/site-data";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-shell">
      <div className="portfolio-scroll relative w-full overflow-x-auto pb-2">
        <div className="flex" style={{ gap: 0, minWidth: "max-content" }}>
          {projects.map((p) => (
            <a
              key={p.title}
              href="#"
              className="portfolio-item relative block shrink-0"
              style={{ width: 315, height: 315, overflow: "hidden" }}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <div>
                  <h5>{p.title}</h5>
                  <p>{p.category}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

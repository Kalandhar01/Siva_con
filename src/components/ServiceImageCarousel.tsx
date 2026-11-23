"use client";

import { useState } from "react";

export default function ServiceImageCarousel({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const visible = [
    images[active % images.length],
    images[(active + 1) % images.length],
  ];

  return (
    <div className="service-image-carousel image-carousel swiper swiper-container">
      <div className="swiper-wrapper">
        {visible.map((src, index) => (
          <div className="swiper-slide" key={`${src}-${index}`}>
            <div className="img-item">
              <figure>
                <img src={src} alt="" />
              </figure>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="octf-swiper-button-prev"
        aria-label="Previous image"
        onClick={() => setActive((current) => (current - 1 + images.length) % images.length)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      <button
        type="button"
        className="octf-swiper-button-next"
        aria-label="Next image"
        onClick={() => setActive((current) => (current + 1) % images.length)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
    </div>
  );
}

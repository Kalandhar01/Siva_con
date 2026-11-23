"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export default function ServiceTestimonials({ items }: { items: Testimonial[] }) {
  const [start, setStart] = useState(0);

  if (items.length === 0) return null;

  const visible = [
    items[start % items.length],
    items[(start + 1) % items.length],
  ];

  return (
    <div className="ot-testimonials v-light">
      <div className="testimonial-inner ot-testimonials-slider-s1">
        <div className="swiper-wrapper">
          {visible.map((item, index) => (
            <div className="swiper-slide" key={`${item.name}-${index}`}>
              <div className="testi-item">
                <div className="ttext">
                  <div className="layer-behind" />
                  <span />
                  {item.quote}
                </div>
                <div className="t-head flex-middle">
                  <img src={item.image} alt="" width={80} height={80} />
                  <div className="tinfo">
                    <h6>{item.name}</h6>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="octf-swiper-pagination">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`swiper-pagination-bullet ${index === start ? "swiper-pagination-bullet-active" : ""}`}
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === start}
              onClick={() => setStart(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="main-form" onSubmit={onSubmit}>
      <p style={{ margin: "0 0 18px" }}>
        <input
          type="text"
          name="your-name"
          placeholder="YOUR NAME *"
          aria-required="true"
          required
        />
      </p>
      <p style={{ margin: "0 0 18px" }}>
        <input
          type="email"
          name="your-email"
          placeholder="YOUR EMAIL *"
          aria-required="true"
          required
        />
      </p>
      <p style={{ margin: "0 0 18px" }}>
        <textarea name="your-message" placeholder="MESSAGE..." rows={10} />
      </p>
      <p style={{ margin: 0 }}>
        <button
          type="submit"
          className="octf-btn"
          style={{ width: 158, height: 50, padding: 0 }}
        >
          {submitted ? "Sent" : "Send Message"}
        </button>
      </p>
      {submitted && (
        <p style={{ marginTop: 16, fontSize: 14, color: "#555555" }}>
          Thank you. Your message has been sent.
        </p>
      )}
    </form>
  );
}

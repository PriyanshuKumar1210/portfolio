import { useState } from "react";
import "./contact.css";
import SocialMediaLinks from "../SocialMedia/SocialMedia";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Save form reference before async operation
    const form = event.currentTarget;

    setIsSending(true);
    setStatus("Sending your message…");

    const formData = new FormData(form);
    formData.append("access_key", "c507f54c-6a7d-4744-bbab-73457a7285a8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to send message.");
      }

      setStatus("Thanks! Your message has been sent successfully.");

      // Reset form safely
      form.reset();
    } catch (error) {
      setStatus(
        error.message || "Something went wrong. Please email me directly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-page section-shell">
      <div className="section-intro">
        <p className="section-kicker">GET IN TOUCH</p>
        <h1 className="section-heading">
          Let's build something{" "}
          <span className="gradient-text">meaningful.</span>
        </h1>
        <p className="section-copy">
          Have a role, project or interesting problem in mind? I'd be happy to
          hear from you.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Start a conversation.</h2>
          <p>
            I'm open to full-time opportunities and conversations around web
            development, software engineering and building useful products.
          </p>
          <a
            className="contact-method"
            href="mailto:priyanshukumar23933@gmail.com"
          >
            <span>✉</span>
            <div>
              <small>Email me</small>
              <strong>priyanshukumar23933@gmail.com</strong>
            </div>
          </a>
          <div className="contact-method">
            <span>⌖</span>
            <div>
              <small>Location</small>
              <strong>Sec 59, Noida, India</strong>
            </div>
          </div>
          <SocialMediaLinks />
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
          />
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
          />
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell me a little about what you have in mind…"
            required
          />
          <button className="primary-button" type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send message ↗"}
          </button>
          {status && (
            <p className="form-status" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

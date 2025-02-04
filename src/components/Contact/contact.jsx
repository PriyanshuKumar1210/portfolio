
import { useState } from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import SocialMediaLinks from "../SocialMedia/SocialMedia";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "c507f54c-6a7d-4744-bbab-73457a7285a8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console(error);
      alert("An error occurred. Please check your network and try again.");
    }
  };

  const handleCall = () => {
    const isMobile = /iphone|Android|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "tel:+91 8340181676";
    } else {
      alert("To call, use Skype or VoIP or dial manually.");
    }
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText("+91 8340181676");
    alert("Phone number copied!");
  };

  const handleEmail = () => {
    window.location.href = "mailto:priyanshukumar23933@gmail.com";
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            Hey there! If you’re looking for a developer who’s passionate about
            building great digital experiences, I’d love to hear from you.
          </p>

          <div className="contact-details">
            <div className="contact-detail" onClick={handleEmail}>
              <img src={mail_icon} alt="Email Icon" />
              <p>priyanshukumar23933@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p onClick={handleCall}>8340181676</p>
              <button onClick={copyToClipBoard}>Copy</button>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Modinagar, Ghaziabad</p>
            </div>
          </div>

          <SocialMediaLinks />
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" name="email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

          <button type="submit" className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

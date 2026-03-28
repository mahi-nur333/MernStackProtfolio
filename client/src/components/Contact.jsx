import "./Contact.css";
import { useEffect, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const EMAIL = "mahi.pamel@email.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [statusVisible, setStatusVisible] = useState(false);
  const [statusTick, setStatusTick] = useState(0);

  useEffect(() => {
    if (!status) return undefined;

    setStatusVisible(true);

    const fadeTimer = setTimeout(() => {
      setStatusVisible(false);
    }, 3400);

    const removeTimer = setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [status, statusTick]);

  const showStatus = (message, type) => {
    setStatus(message);
    setStatusType(type);
    setStatusTick((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      showStatus("Message sent successfully!", "contactStatus--success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      showStatus("Something went wrong. Please try again.", "contactStatus--error");
    }
  };

  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <h4>Get In Touch</h4>
        <p>Feel free to reach out.</p>
        <div className="contactLinks">
          <div className="contactItem">
            <FaEnvelope className="contactIcon" />
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">{EMAIL}</a>
          </div>
          <div className="contactItem">
            <FaMapMarkerAlt className="contactIcon" />
            <span>Sylhet, Bangladesh</span>
          </div>
          <div className="contactItem">
            <FaGithub className="contactIcon" />
            <a href="https://github.com/mahi-nur333" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="contactItem">
            <FaLinkedin className="contactIcon" />
            <a href="https://www.linkedin.com/in/mahi-nur333" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="contactItem">
            <FaFacebook className="contactIcon" />
            <a href="https://www.facebook.com/mahi333.pamel/" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <div className="contactItem">
            <FaInstagram className="contactIcon" />
            <a href="https://instagram.com/mahi_nur333" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Send Message</button>
        {status && <p className={`contactStatus ${statusType} ${statusVisible ? "contactStatus--visible" : ""}`}>{status}</p>}
      </form>
    </div>
  );
}
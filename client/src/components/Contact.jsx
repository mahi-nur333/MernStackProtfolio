import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const EMAIL = "mahi.pamel@email.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL,
)}`;

export default function Contact() {
  return (
    <div className="contactContainer">
      <div className="contactInfo">
        <h4>Get In Touch</h4>
        <p>
        Feel free to reach out.
        </p>

        <div className="contactLinks">
          <div className="contactItem">
            <FaEnvelope className="contactIcon" />
            <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">
              {EMAIL}
            </a>
          </div>

          <div className="contactItem">
            <FaMapMarkerAlt className="contactIcon" />
            <span>Sylhet, Bangladesh</span>
          </div>

          <div className="contactItem">
            <FaGithub className="contactIcon" />
            <a
              href="https://github.com/mahi-nur333"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="contactItem">
            <FaLinkedin className="contactIcon" />
            <a
              href="https://www.linkedin.com/in/mahi-nur333"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="contactItem">
            <FaFacebook className="contactIcon" />
            <a
              href="https://www.facebook.com/mahi333.pamel/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          <div className="contactItem">
            <FaInstagram className="contactIcon" />
            <a
              href="https://instagram.com/mahi_nur333"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <form className="contactForm">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Your Message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
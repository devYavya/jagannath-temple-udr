import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../../Styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Temple Info */}
        <div>
          <h3>Jagannath Temple</h3>
          <p>
            Dedicated to Lord Jagannath, this temple is a spiritual center of
            devotion, peace, and community. Join us in daily prayers and
            festivities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/donate">Donate</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/about">About Temple</a>
            </li>
          </ul>
        </div>

        {/* Social + Contact */}
        <div>
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
            <a href="https://youtube.com">
              <FaYoutube />
            </a>
          </div>
          <p>Email: contact@jagannathtemple.org</p>
          <p>Phone: +91 12345 67890</p>
        </div>
      </div>

      <hr />

      <p className="footer-bottom">
        © {new Date().getFullYear()} Jagannath Temple, Udaipur. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;

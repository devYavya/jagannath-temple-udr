import React, { useState } from "react";
import "../../Styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Jagannath Logo" />
          <span>
            जगन्नाथ धाम" मंदिर गुप्तेश्वर नगर, सेक्टर 7 उदयपुर (राजस्थान)
          </span>
        </a>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          {/* <li>
            <a href="/events" onClick={() => setMenuOpen(false)}>
              Events
            </a>
          </li> */}
          {/* <li>
            <a href="/timings" onClick={() => setMenuOpen(false)}>
              Timings
            </a>
          </li> */}
          {/* <li>
            <a
              href="/donate"
              className="donate-btn"
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

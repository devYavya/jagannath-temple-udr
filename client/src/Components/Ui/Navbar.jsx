import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 
import "../../Styles/Navbar.css";
import logo from "../assets/logo.jpg";
import i18n from "./i18n";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const isAboutPage = location.pathname === "/about"; 

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
            <a href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
            {isAboutPage && (
  <div className="language-switcher">
    <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
    <button onClick={() => i18n.changeLanguage("hi")}>🇮🇳 हिंदी</button>
  </div>
)}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

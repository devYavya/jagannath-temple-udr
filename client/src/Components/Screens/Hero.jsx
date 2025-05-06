import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import templeBg from "../assets/jagganath-temple.jpg";
import shlokasData from "../assets/shlokas.json";
import "../../Styles/Hero.css";
import GallerySection from "../Ui/GallerySection";

// ✅ Utility functions moved outside component for stability
const sendPushNotification = (shloka) => {
  const title = "Today's Shloka from Bhagavad Gita";
  const options = {
    body: `${shloka.shloka}\n\n${shloka.translation}`,
    timestamp: Date.now(),
  };
  new Notification(title, options);
};

const requestNotificationPermission = (shloka) => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        sendPushNotification(shloka);
      }
    });
  }
};

function Hero() {
  const [dailyShloka, setDailyShloka] = useState({});

  const getDailyShloka = () => {
    const today = new Date();
    const dayOfYear = today.getDate(); // Can be improved with a proper day-of-year calc
    const shlokaIndex = dayOfYear % shlokasData.length;
    return shlokasData[shlokaIndex];
  };

  useEffect(() => {
    const shloka = getDailyShloka();
    setDailyShloka(shloka);
    requestNotificationPermission(shloka);
  }, []); // ✅ Stable, clean dependency array

  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${templeBg})` }}
    >
      <div className="hero-overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">जय जगन्नाथ</h1>

        <motion.blockquote
          className="hero-shloka"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          "{dailyShloka.shloka}"<br />
          <span className="text-sm">{dailyShloka.translation}</span>
          <br />
          <span className="text-sm">~ {dailyShloka.source}</span>
        </motion.blockquote>

        <p className="hero-subtext">
          A sacred journey to peace and enlightenment at Lord Jagannath’s divine
          abode.
        </p>

        <Link to="/donate" className="hero-donate-button">
          Make a Donation
        </Link>
        <GallerySection />
        
        <motion.div
          className="hero-info-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="info-container">
            <div className="timing-section">
              <h2>Temple Timings</h2>
              <ul>
                <li>
                  <strong>Opening:</strong> 5:00 AM
                </li>
                <li>
                  <strong>Mangala Aarti:</strong> 5:30 AM
                </li>
                <li>
                  <strong>Darshan Starts:</strong> 6:00 AM
                </li>
                <li>
                  <strong>Bhog Offering:</strong> 12:00 PM
                </li>
                <li>
                  <strong>Evening Aarti:</strong> 6:30 PM
                </li>
                <li>
                  <strong>Closing:</strong> 9:00 PM
                </li>
              </ul>
            </div>

            <div className="events-section">
              <h2>Upcoming Events</h2>
              <ul>
                <li>
                  🌸 <strong>Rath Yatra:</strong> July 7, 2025
                </li>
                <li>
                  🪔 <strong>Chandan Yatra:</strong> May 15–25, 2025
                </li>
                <li>
                  🎉 <strong>Snana Purnima:</strong> June 20, 2025
                </li>
                <li>
                  🌕 <strong>Kartik Purnima:</strong> November 5, 2025
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;

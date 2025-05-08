import React, { useState } from "react";

const PopupSettings = () => {
  const [popups, setPopups] = useState({
    donation: true,
    festival: false,
    darshan: true,
  });

  const togglePopup = (key) => {
    setPopups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Popup Controls</h2>
      <div className="popup-grid">
        {Object.entries(popups).map(([key, value]) => (
          <div className="popup-item" key={key}>
            <span>{key.charAt(0).toUpperCase() + key.slice(1)} Popup</span>
            <button
              className={`toggle-btn ${value ? "enabled" : "disabled"}`}
              onClick={() => togglePopup(key)}
            >
              {value ? "Enabled" : "Disabled"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopupSettings;

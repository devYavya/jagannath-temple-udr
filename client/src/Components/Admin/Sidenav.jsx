import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css"; 
const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-header">
        {/* <img src="/om-symbol.png" alt="Om" className="sidenav-logo" /> */}
        <h2 className="sidenav-title">Admin Panel</h2>
      </div>
      <nav className="sidenav-links">
        <NavLink to="/admin/dashboard" activeclassname="active">
          📊 Dashboard
        </NavLink>
        <NavLink to="/admin/donations" activeclassname="active">
          💰 Donations
        </NavLink>
        <NavLink to="/admin/events" activeclassname="active">
          📅 Events
        </NavLink>
        <NavLink to="/admin/settings" activeclassname="active">
          ⚙️ Settings
        </NavLink>
        <NavLink to="/" activeclassname="active">
          🚪 Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidenav;

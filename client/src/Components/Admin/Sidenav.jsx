import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css"; 

function Sidenav() {
  return (
    <div className="sidenav">
      <h3>Admin Panel</h3>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/manage-events">Manage Events</Link>
        </li>
        <li>
          <Link to="/admin/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;

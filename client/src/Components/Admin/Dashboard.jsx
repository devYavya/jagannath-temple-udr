import React from "react";
import Sidenav from "./Sidenav";
import "./Admin.css";

const Dashboard = () => {
  return (
    <div className="admin-layout">
      <Sidenav />
      <main className="dashboard-container">
        <h1 className="dashboard-title">🙏 Welcome, Admin</h1>
        <p className="dashboard-subtitle">
          May your service be guided by divinity 🌸
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <h2>💰 Total Donations</h2>
            <p>₹1,25,000</p>
          </div>
          <div className="card">
            <h2>📅 Upcoming Events</h2>
            <p>5 Events</p>
          </div>
          <div className="card">
            <h2>👥 Total Visitors</h2>
            <p>12,340</p>
          </div>
          <div className="card">
            <h2>🕉️ Active Volunteers</h2>
            <p>27</p>
          </div>
        </div>

        <div className="recent-activities">
          <h2>📜 Recent Donations</h2>
          <ul>
            <li>Yavya Sharma donated ₹2,000 for Prasad</li>
            <li>Rohit Mehra donated ₹1,000 for Lighting</li>
            <li>Suman Verma donated ₹5,000 for Annadan</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

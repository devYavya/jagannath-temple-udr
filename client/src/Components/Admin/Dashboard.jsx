import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [donations, setDonations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Replace with actual API calls for events and donations
        setEvents(response.data.events || []);
        setDonations(response.data.donations || []);
      } catch (error) {
        console.error("Error fetching admin data", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div>
        <h3>Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event._id}>{event.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Donations</h3>
        <ul>
          {donations.map((donation) => (
            <li key={donation._id}>
              {donation.name} donated {donation.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

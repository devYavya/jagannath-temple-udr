import React, { useState } from "react";
import "./Admin.css"; // Import the main CSS for admin
import Sidenav from "./Sidenav"; // Import the sidebar

const DonationManagement = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      name: "Yavya Sharma",
      amount: 2000,
      date: "2025-04-01",
      status: "Completed",
    },
    {
      id: 2,
      name: "Rohit Mehra",
      amount: 1000,
      date: "2025-04-02",
      status: "Pending",
    },
    {
      id: 3,
      name: "Suman Verma",
      amount: 5000,
      date: "2025-04-03",
      status: "Completed",
    },
  ]);

  const handleGenerateReceipt = (donation) => {
    const receiptData = `Donation Receipt:
      Name: ${donation.name}
      Amount: ₹${donation.amount}
      Date: ${donation.date}
      Status: ${donation.status}
    `;
    alert(receiptData);
  };

  const handleMarkComplete = (id) => {
    const updatedDonations = donations.map((donation) =>
      donation.id === id ? { ...donation, status: "Completed" } : donation
    );
    setDonations(updatedDonations);
  };

  return (
    <div className="admin-container">
      <Sidenav /> {/* Sidebar */}
      <div className="main-content">
        <h1 className="donation-management-title">🙏 Manage Donations</h1>
        <p className="donation-management-subtitle">
          May your efforts be blessed 🙌
        </p>

        <table className="donations-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr
                key={donation.id}
                className={
                  donation.status === "Completed" ? "completed" : "pending"
                }
              >
                <td>{donation.name}</td>
                <td>₹{donation.amount}</td>
                <td>{donation.date}</td>
                <td>{donation.status}</td>
                <td className="donation-actions">
                  <button
                    className="generate-receipt"
                    onClick={() => handleGenerateReceipt(donation)}
                  >
                    View Receipt
                  </button>
                  {donation.status === "Pending" && (
                    <button
                      className="mark-complete"
                      onClick={() => handleMarkComplete(donation.id)}
                    >
                      Mark as Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationManagement;

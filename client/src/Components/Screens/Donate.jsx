import React, { useState } from "react";
import axios from "axios";
import donationBg from "../assets/donation.webp";
import "../../Styles/Donate.css";

function Donate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!name || !email || !amount) return alert("All fields required!");

    const { data } = await axios.post("/api/donate/create-order", {
      name,
      email,
      amount,
    });

    const options = {
      key: "RAZORPAY_KEY", 
      amount: data.amount,
      currency: "INR",
      name: "Jagannath Temple Donation",
      description: "Thank you for your divine support",
      order_id: data.order_id,
      handler: function (response) {
        axios.post("/api/donate/verify", {
          ...response,
          name,
          email,
          amount,
        });
        alert("🙏 Donation successful! Receipt will be emailed shortly.");
        setName("");
        setEmail("");
        setAmount("");
      },
      prefill: {
        name,
        email,
      },
      theme: {
        color: "#facc15",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <section
      className="donate-section"
      style={{ backgroundImage: `url(${donationBg})` }}
    >
      <div className="donate-box">
        <h2 className="donate-heading">🕉️ Make a Divine Donation</h2>
        <p className="donate-shloka">
          “यज्ञदानतप: कर्म न त्याज्यं कार्यमेव तत्।” — Bhagavad Gita
        </p>
        <form onSubmit={handleDonate} className="donate-form">
          <input
            type="text"
            placeholder="Your Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="donate-input"
          />
          <input
            type="email"
            placeholder="Email for Receipt"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="donate-input"
          />
          <input
            type="number"
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="donate-input"
          />
          <button type="submit" className="donate-button">
            🙏 Donate Now
          </button>
        </form>
        <h2>OR</h2>
      </div>
    </section>
  );
}

export default Donate;

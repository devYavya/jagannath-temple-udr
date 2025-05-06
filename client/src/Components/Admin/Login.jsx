import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded admin credentials
  const adminUsername = "admin";
  const adminPassword = "password123"; // You can change this to your desired password

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the credentials match the hardcoded admin credentials
    if (username === adminUsername && password === adminPassword) {
      // Store a dummy JWT token in localStorage (in a real scenario, you would get this from the backend)
      const token = "sample-jwt-token";
      localStorage.setItem("adminToken", token);

      // Redirect to admin dashboard
      navigate("/admin/dashboard");
    } else {
      // Display an error if credentials are incorrect
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

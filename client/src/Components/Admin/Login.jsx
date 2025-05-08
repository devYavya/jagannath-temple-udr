import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAdminAuthenticated }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAdminAuthenticated(true);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* <img src="/om-symbol.png" alt="Om Symbol" className="login-symbol" /> */}
        <h2 className="login-title">Admin Login</h2>
        <p className="shloka">"ॐ सर्वे भवन्तु सुखिनः"</p>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Enter Sanctum
        </button>
      </div>
    </div>
  );
};

export default Login;

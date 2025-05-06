import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Ui/Navbar";
import Hero from "./Components/Screens/Hero";
import Donate from "./Components/Screens/Donate";
import Login from "./Components/Admin/Login";
import Dashboard from "./Components/Admin/Dashboard";
import SideNav from "./Components/Admin/Sidenav";
import Footer from "./Components/Ui/Footer";
import About from "./Components/Ui/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Footer />
              </>
            }
          />
          <Route
            path="/donate"
            element={
              <>
                <Navbar />
                <Donate />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin/*"
            element={
              <>
                <SideNav />
                <Routes>
                  <Route path="login" element={<Login />} />
                  <Route path="dashboard" element={<Dashboard />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

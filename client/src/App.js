import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Ui/Navbar";
import Hero from "./Components/Screens/Hero";
import Donate from "./Components/Screens/Donate";
import Login from "./Components/Admin/Login";
import Dashboard from "./Components/Admin/Dashboard";
// import SideNav from "./Components/Admin/Sidenav";
import Footer from "./Components/Ui/Footer";
import About from "./Components/Ui/About";
import ProtectedRoute from "./Components/Admin/ProtectedRoute";
import DonationManagement from "./Components/Admin/DonationManagement";
import EventManagement from "./Components/Admin/EventManagement";
import Setting from "./Components/Admin/Setting";
import Gallery from "./Components/Screens/Gallery";

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

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
            path="/gallery"
            element={
              <>
                <Navbar />
                <Gallery/>
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

          {/* Admin Routes */}
          <Route
            path="/admin/login"
            element={
              <Login setIsAdminAuthenticated={setIsAdminAuthenticated} />
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <>
                  <Dashboard />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/donations"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <>
                  <DonationManagement />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/events"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <>
                  <EventManagement />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute isAuthenticated={isAdminAuthenticated}>
                <>
                  <Setting />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

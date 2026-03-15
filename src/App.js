import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BenefitsLookup from './pages/BenefitsLookup';
import VAFacilities from './pages/VAFacilities';
import LocationCompare from './pages/LocationCompare';
import PropertyTaxLookup from "./pages/PropertyTaxLookup";
import GunLaws from "./pages/GunLaws";
import MilitaryTax from "./pages/MilitaryTax";
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [taxMenuOpen, setTaxMenuOpen] = useState(false);
  return (
    <Router>
      <div className="app">
<nav className="navbar">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Link to="/" className="nav-brand" style={{ textDecoration: 'none', color: 'inherit' }}>⭐ VetLocate</Link>
    <div className="nav-links">
      <Link to="/">Lookup Benefits</Link>
      <Link to="/facilities">VA Facilities</Link>
      <Link to="/compare">Compare Locations</Link>
      <div
        style={{ position: "relative", display: "inline-block" }}
        onMouseEnter={() => setTaxMenuOpen(true)}
        onMouseLeave={() => setTaxMenuOpen(false)}
      >
        <span style={{
          cursor: "pointer",
          padding: "0 12px",
          color: "#1a3a5c",
          fontWeight: "600",
          fontSize: "0.95em"
        }}>
          💲 Tax Benefits ▾
        </span>
        {taxMenuOpen && (
          <div style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            minWidth: "180px",
            zIndex: 1000,
            padding: "8px 0"
          }}>
            <Link
              to="/property-tax"
              onClick={() => setTaxMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 16px",
                color: "#1a3a5c",
                textDecoration: "none",
                fontSize: "0.9em",
                fontWeight: "500"
              }}
            >
              🏠 Property Tax
            </Link>
            <Link
              to="/military-tax"
              onClick={() => setTaxMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 16px",
                color: "#1a3a5c",
                textDecoration: "none",
                fontSize: "0.9em",
                fontWeight: "500"
              }}
            >
              💰 Military Retirement Tax
            </Link>
          </div>
        )}
      </div>
      <Link to="/gun-laws">Gun Laws</Link>
    </div>
  </div>
  <div className="nav-right">
    <Link to="/profile" className="nav-profile-btn">👤 My Profile</Link>
  </div>
</nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<BenefitsLookup />} />
            <Route path="/facilities" element={<VAFacilities />} />
            <Route path="/compare" element={<LocationCompare />} />
              <Route path="/property-tax" element={<PropertyTaxLookup />} />
              <Route path="/gun-laws" element={<GunLaws />} />
              <Route path="/military-tax" element={<MilitaryTax />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

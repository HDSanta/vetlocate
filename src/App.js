import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BenefitsLookup from './pages/BenefitsLookup';
import VAFacilities from './pages/VAFacilities';
import LocationCompare from './pages/LocationCompare';
import PropertyTaxLookup from "./pages/PropertyTaxLookup";
import Profile from './pages/Profile';
import './App.css';

function App() {
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
      <Link to="/property-tax">Property Tax</Link>
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

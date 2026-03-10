import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BenefitsLookup from './pages/BenefitsLookup';
import VAFacilities from './pages/VAFacilities';
import LocationCompare from './pages/LocationCompare';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
<nav className="navbar">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div className="nav-brand">⭐ VetLocate</div>
    <div className="nav-links">
      <Link to="/">Benefits Lookup</Link>
      <Link to="/facilities">VA Facilities</Link>
      <Link to="/compare">Compare Locations</Link>
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
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
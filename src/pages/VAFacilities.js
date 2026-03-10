import React, { useState, useEffect, useRef } from "react";
import { getNearbyFacilities } from "../services/vaApi";

function VAFacilities() {
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [radius, setRadius] = useState(50);
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (location.length < 3) {
      setSuggestions([]);
      return;
    }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          "https://nominatim.openstreetmap.org/search?q=" + encodeURIComponent(location) + "&format=json&limit=5&countrycodes=us"
        );
        const data = await res.json();
        setSuggestions(data.map((item) => item.display_name));
        setShowSuggestions(true);
      } catch {
        setSuggestions([]);
      }
    }, 400);
  }, [location]);

  const handleSelect = (suggestion) => {
    setLocation(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (!location.trim()) {
      setError("Please enter a city, state, or ZIP code.");
      return;
    }
    setError("");
    setLoading(true);
    setFacilities([]);
    setShowSuggestions(false);
    try {
      const result = await getNearbyFacilities(location, radius);
      setFacilities(result.facilities);
      setSearched(true);
    } catch (err) {
      setError("Error finding facilities. Please try again.");
    }
    setLoading(false);
  };

  const getRadiusLabel = (r) => {
    if (r <= 25) return r + " miles (local)";
    if (r <= 50) return r + " miles (~1 hr)";
    if (r <= 100) return r + " miles (~2 hrs)";
    return r + " miles (~3+ hrs)";
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>VA Facilities Finder</h1>
      <p style={{ color: "#555" }}>Find VA Medical Centers, Clinics, and Vet Centers near any location.</p>

      <div style={{ marginBottom: "20px", position: "relative" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>Location (City, State or ZIP)</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Prescott AZ or 86301"
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "6px", listStyle: "none", margin: 0, padding: 0, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
            {suggestions.map((s, i) => (
              <li key={i} onClick={() => handleSelect(s)}
                style={{ padding: "10px 14px", cursor: "pointer", borderBottom: "1px solid #eee", fontSize: "14px", color: "#333" }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f4f8"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
              >
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}>
          Search Radius: <span style={{ color: "#1a3a5c" }}>{getRadiusLabel(radius)}</span>
        </label>
        <input
          type="range"
          min="10"
          max="150"
          step="10"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          style={{ width: "100%", accentColor: "#1a3a5c" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#888", marginTop: "4px" }}>
          <span>10 mi</span>
          <span>50 mi</span>
          <span>100 mi</span>
          <span>150 mi</span>
        </div>
      </div>

      <button onClick={handleSearch} disabled={loading} style={{ backgroundColor: "#1a3a5c", color: "white", padding: "12px 30px", fontSize: "16px", borderRadius: "6px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
        {loading ? "Searching..." : "Find VA Facilities"}
      </button>

      {error && <p style={{ color: "red", marginTop: "16px" }}>{error}</p>}

      {searched && facilities.length === 0 && !loading && (
        <p style={{ marginTop: "20px", color: "#555" }}>No facilities found. Try increasing your search radius.</p>
      )}

      {facilities.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#1a3a5c" }}>Facilities near {location} ({facilities.length} found within {radius} miles)</h2>
          {facilities.map((f) => (
            <div key={f.id} style={{ backgroundColor: "#f0f4f8", borderRadius: "8px", padding: "16px", marginBottom: "16px", borderLeft: "4px solid #1a3a5c" }}>
              <h3 style={{ margin: "0 0 8px 0", color: "#1a3a5c" }}>{f.attributes.name}</h3>
              <p style={{ margin: "4px 0", color: "#444" }}>Type: {f.attributes.facilityType || "VA Facility"}</p>
              <p style={{ margin: "4px 0", color: "#444" }}>
                Address: {f.attributes.address?.physical?.address1}, {f.attributes.address?.physical?.city}, {f.attributes.address?.physical?.state} {f.attributes.address?.physical?.zip}
              </p>
              {f.attributes.phone?.main && (
                <p style={{ margin: "4px 0", color: "#444" }}>Phone: {f.attributes.phone.main}</p>
              )}
              {f.attributes.distance && (
                <p style={{ margin: "4px 0", color: "#888", fontSize: "14px" }}>Distance: {f.attributes.distance.toFixed(1)} miles away</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VAFacilities;

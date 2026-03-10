import React, { useState, useEffect, useRef } from "react";
import { getBenefits } from "../services/claudeApi";

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function renderBenefits(text) {
  const lines = text.split("\n");
  const elements = [];
  let key = 0;
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("# ")) {
      elements.push(<h2 key={key++} style={{ color: "#1a3a5c", fontSize: "22px", marginTop: "24px", marginBottom: "8px", borderBottom: "2px solid #1a3a5c", paddingBottom: "6px" }}>{trimmed.replace(/^# /, "")}</h2>);
    } else if (trimmed.match(/^#{2,3} /)) {
      elements.push(<h3 key={key++} style={{ color: "#1a3a5c", fontSize: "15px", marginTop: "20px", marginBottom: "6px", backgroundColor: "#e8f0fa", padding: "8px 12px", borderRadius: "6px", borderLeft: "4px solid #1a3a5c" }}>{trimmed.replace(/^#{2,3} /, "")}</h3>);
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const cnt = trimmed.replace(/^[-*] /, "").replace(/\*\*/g, "");
      elements.push(<div key={key++} style={{ display: "flex", gap: "10px", marginBottom: "6px", paddingLeft: "8px" }}><span style={{ color: "#1a3a5c", fontWeight: "bold", flexShrink: 0 }}>✓</span><span style={{ fontSize: "14px", color: "#333", lineHeight: "1.5" }}>{cnt}</span></div>);
    } else if (trimmed.match(/^\d+\./)) {
      const cnt = trimmed.replace(/^\d+\.\s*/, "").replace(/\*\*/g, "");
      const num = trimmed.match(/^(\d+)/)[1];
      elements.push(<div key={key++} style={{ display: "flex", gap: "10px", marginBottom: "8px", paddingLeft: "8px" }}><span style={{ backgroundColor: "#1a3a5c", color: "white", borderRadius: "50%", width: "22px", height: "22px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold", flexShrink: 0 }}>{num}</span><span style={{ fontSize: "14px", color: "#333", lineHeight: "1.5" }}>{cnt}</span></div>);
    } else if (trimmed.startsWith("---")) {
      elements.push(<hr key={key++} style={{ border: "none", borderTop: "1px solid #ddd", margin: "16px 0" }} />);
    } else {
      elements.push(<p key={key++} style={{ fontSize: "14px", color: "#444", lineHeight: "1.6", marginBottom: "4px" }}>{trimmed.replace(/\*\*/g, "")}</p>);
    }
  }
  return elements;
}

function LocationInput({ value, onChange, placeholder }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef(null);

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    clearTimeout(debounceRef.current);
    if (val.length < 3) { setSuggestions([]); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(val)}&countrycodes=us&limit=5`);
        const data = await res.json();
        const cleaned = data.map(item => {
          const parts = item.display_name.split(", ");
          const city = parts[0];
          const state = parts[parts.length - 2];
          return { label: `${city}, ${state}`, full: item.display_name };
        });
        setSuggestions(cleaned);
        setShowSuggestions(true);
      } catch {}
    }, 400);
  };

  const handleSelect = (label) => {
    onChange(label);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder={placeholder}
        style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "6px", zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          {suggestions.map((s, i) => (
            <div key={i} onMouseDown={() => handleSelect(s.label)} style={{ padding: "10px 14px", cursor: "pointer", fontSize: "14px", borderBottom: i < suggestions.length - 1 ? "1px solid #f0f0f0" : "none" }}
              onMouseEnter={e => e.target.style.backgroundColor = "#f0f4f8"}
              onMouseLeave={e => e.target.style.backgroundColor = "white"}>
              {s.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BenefitsLookup() {
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(100);
  const [ptStatus, setPtStatus] = useState(true);
  const [benefits, setBenefits] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!location.trim()) { setError("Please enter a city, state, or ZIP code."); return; }
    setError(""); setLoading(true); setBenefits("");
    try {
      const result = await getBenefits(location, rating, ptStatus);
      setBenefits(result);
    } catch (err) {
      setError("Error fetching benefits. Check your API key and try again.");
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>🎖️ Veteran Benefits Lookup</h1>
      <p style={{ color: "#555" }}>Enter a location and your VA disability rating to see available benefits.</p>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>Location (City, State or ZIP)</label>
        <LocationInput value={location} onChange={setLocation} placeholder="e.g. Prescott, AZ" />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}>VA Disability Rating: <span style={{ color: "#1a3a5c" }}>{rating}%</span></label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {RATINGS.map((r) => (<button key={r} onClick={() => setRating(r)} style={{ padding: "8px 14px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: rating === r ? "#1a3a5c" : "white", color: rating === r ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer" }}>{r}%</button>))}
        </div>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}>Permanent & Total (P&T) Status</label>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button onClick={() => setPtStatus(true)} style={{ padding: "8px 20px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: ptStatus ? "#1a3a5c" : "white", color: ptStatus ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer" }}>✅ Yes — P&T</button>
          <button onClick={() => setPtStatus(false)} style={{ padding: "8px 20px", borderRadius: "6px", border: "2px solid #aaa", backgroundColor: !ptStatus ? "#666" : "white", color: !ptStatus ? "white" : "#666", fontWeight: "bold", cursor: "pointer" }}>No</button>
          <span style={{ fontSize: "13px", color: ptStatus ? "#2e7d32" : "#888" }}>{ptStatus ? "P&T benefits included" : "Standard benefits only"}</span>
        </div>
      </div>

      <button onClick={handleSearch} disabled={loading} style={{ backgroundColor: "#1a3a5c", color: "white", padding: "12px 30px", fontSize: "16px", borderRadius: "6px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
        {loading ? "Searching..." : "Find Benefits"}
      </button>

      {error && <p style={{ color: "red", marginTop: "16px" }}>{error}</p>}

      {loading && (
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
          <p style={{ color: "#555" }}>Researching benefits for {location}...</p>
        </div>
      )}

      {benefits && !loading && (
        <div style={{ marginTop: "30px", backgroundColor: "white", borderRadius: "12px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", border: "1px solid #e0e8f0" }}>
          <div style={{ backgroundColor: "#1a3a5c", borderRadius: "8px", padding: "16px 20px", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>📍 {location}</div>
              <div style={{ color: "#a8c8f0", fontSize: "13px", marginTop: "2px" }}>VA Disability Rating: {rating}% {ptStatus ? "| P&T" : ""}</div>
            </div>
            <div style={{ backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "8px", padding: "8px 16px", color: "white", fontWeight: "bold", fontSize: "20px" }}>{rating}%</div>
          </div>
          {renderBenefits(benefits)}
        </div>
      )}
    </div>
  );
}

export default BenefitsLookup;

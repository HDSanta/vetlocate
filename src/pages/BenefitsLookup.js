import React, { useState } from 'react';
import { getBenefits } from '../services/claudeApi';

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function BenefitsLookup() {
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(100);
  const [benefits, setBenefits] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!location.trim()) {
      setError('Please enter a city, state, or ZIP code.');
      return;
    }
    setError('');
    setLoading(true);
    setBenefits('');
    try {
      const result = await getBenefits(location, rating);
      setBenefits(result);
    } catch (err) {
      setError('Error fetching benefits. Check your API key and try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>Veteran Benefits Lookup</h1>
      <p style={{ color: "#555" }}>Enter a location and your VA disability rating to see available benefits.</p>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>Location (City, State or ZIP)</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Prescott AZ or 86301"
          style={{ width: "100%", padding: "10px", fontSize: "16px", borderRadius: "6px", border: "1px solid #ccc" }}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}>
          VA Disability Rating: <span style={{ color: "#1a3a5c" }}>{rating}%</span>
        </label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {RATINGS.map((r) => (
            <button key={r} onClick={() => setRating(r)} style={{ padding: "8px 14px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: rating === r ? "#1a3a5c" : "white", color: rating === r ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer" }}>
              {r}%
            </button>
          ))}
        </div>
      </div>
      <button onClick={handleSearch} disabled={loading} style={{ backgroundColor: "#1a3a5c", color: "white", padding: "12px 30px", fontSize: "16px", borderRadius: "6px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
        {loading ? "Searching..." : "Find Benefits"}
      </button>
      {error && <p style={{ color: "red", marginTop: "16px" }}>{error}</p>}
      {benefits && (
        <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f0f4f8", borderRadius: "8px", borderLeft: "4px solid #1a3a5c", whiteSpace: "pre-wrap", lineHeight: "1.7" }}>
          <h2 style={{ color: "#1a3a5c", marginTop: 0 }}>Benefits for {location} - {rating}% Rating</h2>
          {benefits}
        </div>
      )}
    </div>
  );
}

export default BenefitsLookup;

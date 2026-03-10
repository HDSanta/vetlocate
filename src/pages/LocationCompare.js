import React, { useState, useEffect, useRef } from "react";
import { getBenefits } from "../services/claudeApi";

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function shortName(loc) {
  if (!loc) return loc;
  const parts = loc.split(",");
  if (parts.length >= 2) return parts[0].trim() + "," + parts[1].trim();
  return loc;
}

function LocationInput({ label, value, onChange, onSelect }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (value.length < 3) { setSuggestions([]); return; }
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch("https://nominatim.openstreetmap.org/search?q=" + encodeURIComponent(value) + "&format=json&limit=5&countrycodes=us");
        const data = await res.json();
        setSuggestions(data.map((item) => item.display_name));
        setShowSuggestions(true);
      } catch { setSuggestions([]); }
    }, 400);
  }, [value]);

  return (
    <div style={{ position: "relative", flex: 1 }}>
      <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="City, State or ZIP (e.g. Prescott AZ)"
        style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "2px solid #1a3a5c", boxSizing: "border-box" }}
        onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "6px", listStyle: "none", margin: 0, padding: 0, zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}>
          {suggestions.map((s, i) => (
            <li key={i} onClick={() => { onSelect(s); setSuggestions([]); setShowSuggestions(false); }}
              style={{ padding: "10px 14px", cursor: "pointer", borderBottom: "1px solid #eee", fontSize: "13px", color: "#333" }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f4f8"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "white"}
            >{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function parseCategories(text) {
  const categories = {};
  const lines = text.split("\n");
  let current = "General";
  categories[current] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("##") || trimmed.startsWith("#")) {
      current = trimmed.replace(/^#+\s*/, "");
      categories[current] = [];
    } else if (trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("*")) {
      categories[current] = categories[current] || [];
      categories[current].push(trimmed.replace(/^[•\-*]\s*/, "").replace(/\*\*/g, ""));
    }
  }
  return categories;
}

function ScoreBar({ label, scoreA, scoreB }) {
  const total = scoreA + scoreB;
  const pctA = total === 0 ? 50 : Math.round((scoreA / total) * 100);
  const pctB = 100 - pctA;
  const winner = scoreA > scoreB ? "A" : scoreB > scoreA ? "B" : "tie";
  return (
    <div style={{ marginBottom: "14px", backgroundColor: "white", borderRadius: "8px", padding: "12px 16px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ fontSize: "13px", fontWeight: "bold", color: "#1a3a5c", minWidth: "30px" }}>{scoreA}</span>
        <span style={{ fontSize: "12px", color: "#555", textAlign: "center", flex: 1, padding: "0 8px" }}>
          {label.length > 35 ? label.substring(0, 35) + "..." : label}
          {winner !== "tie" && <span style={{ marginLeft: "6px", fontSize: "11px", backgroundColor: winner === "A" ? "#1a3a5c" : "#2e7d32", color: "white", padding: "1px 6px", borderRadius: "10px" }}>
            {winner === "A" ? "▲ A wins" : "▲ B wins"}
          </span>}
        </span>
        <span style={{ fontSize: "13px", fontWeight: "bold", color: "#2e7d32", minWidth: "30px", textAlign: "right" }}>{scoreB}</span>
      </div>
      <div style={{ display: "flex", height: "8px", borderRadius: "4px", overflow: "hidden", backgroundColor: "#eee" }}>
        <div style={{ width: pctA + "%", backgroundColor: "#1a3a5c", transition: "width 0.6s ease" }} />
        <div style={{ width: pctB + "%", backgroundColor: "#2e7d32", transition: "width 0.6s ease" }} />
      </div>
    </div>
  );
}

function BenefitsList({ categories, color }) {
  return (
    <div>
      {Object.entries(categories).map(([cat, items]) =>
        items.length > 0 && cat !== "General" ? (
          <div key={cat} style={{ marginBottom: "18px" }}>
            <h3 style={{ color: color, fontSize: "13px", fontWeight: "bold", marginBottom: "8px", borderBottom: "1px solid #eee", paddingBottom: "4px" }}>{cat}</h3>
            {items.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "5px", fontSize: "13px", color: "#333", lineHeight: "1.4" }}>
                <span style={{ color: color, fontWeight: "bold", flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
}

function LocationCompare() {
  const [locA, setLocA] = useState("Prescott AZ");
  const [locB, setLocB] = useState("Cape Cod MA");
  const [rating, setRating] = useState(100);
  const [resultsA, setResultsA] = useState(null);
  const [resultsB, setResultsB] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!locA.trim() || !locB.trim()) {
      setError("Please enter both locations.");
      return;
    }
    setError("");
    setLoading(true);
    setResultsA(null);
    setResultsB(null);
    try {
      const [a, b] = await Promise.all([getBenefits(locA, rating), getBenefits(locB, rating)]);
      setResultsA(parseCategories(a));
      setResultsB(parseCategories(b));
    } catch (err) {
      setError("Error fetching comparison. Please try again.");
    }
    setLoading(false);
  };

  const allCategories = resultsA && resultsB
    ? [...new Set([...Object.keys(resultsA), ...Object.keys(resultsB)])]
        .filter(k => k !== "General")
    : [];

  const totalA = resultsA ? Object.values(resultsA).flat().length : 0;
  const totalB = resultsB ? Object.values(resultsB).flat().length : 0;
  const nameA = shortName(locA);
  const nameB = shortName(locB);

  return (
    <div style={{ maxWidth: "960px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>⚖️ Compare Locations</h1>
      <p style={{ color: "#555" }}>Compare veteran benefits side by side for two locations.</p>

      <div style={{ display: "flex", gap: "16px", marginBottom: "20px", alignItems: "flex-start" }}>
        <LocationInput label="📍 Location A" value={locA} onChange={setLocA} onSelect={setLocA} />
        <div style={{ padding: "32px 8px 0", fontWeight: "bold", color: "#888", fontSize: "18px" }}>VS</div>
        <LocationInput label="📍 Location B" value={locB} onChange={setLocB} onSelect={setLocB} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "8px" }}>
          VA Disability Rating: <span style={{ color: "#1a3a5c" }}>{rating}%</span>
        </label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {RATINGS.map((r) => (
            <button key={r} onClick={() => setRating(r)} style={{ padding: "7px 12px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: rating === r ? "#1a3a5c" : "white", color: rating === r ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}>
              {r}%
            </button>
          ))}
        </div>
      </div>

      <button onClick={handleCompare} disabled={loading} style={{ backgroundColor: "#1a3a5c", color: "white", padding: "12px 36px", fontSize: "16px", borderRadius: "6px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, marginBottom: "30px" }}>
        {loading ? "Comparing both locations..." : "Compare Now"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {resultsA && resultsB && (
        <>
          <div style={{ backgroundColor: "#1a3a5c", borderRadius: "10px", padding: "20px", marginBottom: "24px", color: "white" }}>
            <h2 style={{ margin: "0 0 16px 0", fontSize: "16px", opacity: 0.8 }}>OVERALL SCORE — {rating}% VA Rating</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold" }}>{totalA}</div>
                <div style={{ fontSize: "13px", opacity: 0.8 }}>{nameA}</div>
              </div>
              <div style={{ fontSize: "24px", opacity: 0.5 }}>vs</div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", fontWeight: "bold", color: "#81c784" }}>{totalB}</div>
                <div style={{ fontSize: "13px", opacity: 0.8 }}>{nameB}</div>
              </div>
            </div>
            <div style={{ display: "flex", height: "16px", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ width: (totalA/(totalA+totalB)*100) + "%", backgroundColor: "rgba(255,255,255,0.9)", transition: "width 0.6s ease" }} />
              <div style={{ width: (totalB/(totalA+totalB)*100) + "%", backgroundColor: "#81c784", transition: "width 0.6s ease" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", marginTop: "6px", opacity: 0.7 }}>
              <span>■ {nameA}</span>
              <span>■ {nameB}</span>
            </div>
            <div style={{ marginTop: "14px", padding: "10px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "6px", fontSize: "13px" }}>
              {totalA > totalB
                ? `✅ ${nameA} has ${totalA - totalB} more identified benefits for ${rating}% veterans`
                : totalB > totalA
                ? `✅ ${nameB} has ${totalB - totalA} more identified benefits for ${rating}% veterans`
                : `🤝 Both locations have equal benefits identified`}
            </div>
          </div>

          <div style={{ backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "16px 20px", marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "12px", fontWeight: "bold" }}>
              <span style={{ color: "#1a3a5c" }}>◀ {nameA}</span>
              <span style={{ color: "#555" }}>Benefits by Category</span>
              <span style={{ color: "#2e7d32" }}>{nameB} ▶</span>
            </div>
            {allCategories.map((cat) => (
              <ScoreBar
                key={cat}
                label={cat}
                scoreA={(resultsA[cat] || []).length}
                scoreB={(resultsB[cat] || []).length}
              />
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ backgroundColor: "#f8faff", borderRadius: "10px", padding: "16px", border: "2px solid #1a3a5c" }}>
              <h2 style={{ color: "#1a3a5c", borderBottom: "2px solid #1a3a5c", paddingBottom: "8px", marginTop: 0, fontSize: "15px" }}>📍 {nameA}</h2>
              <BenefitsList categories={resultsA} color="#1a3a5c" />
            </div>
            <div style={{ backgroundColor: "#f8fff8", borderRadius: "10px", padding: "16px", border: "2px solid #2e7d32" }}>
              <h2 style={{ color: "#2e7d32", borderBottom: "2px solid #2e7d32", paddingBottom: "8px", marginTop: 0, fontSize: "15px" }}>📍 {nameB}</h2>
              <BenefitsList categories={resultsB} color="#2e7d32" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LocationCompare;

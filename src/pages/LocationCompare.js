import React, { useState, useRef } from "react";
import { getBenefits } from "../services/claudeApi";

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const GOLD = "#D4A017";
const GOLD_LIGHT = "#F5D060";
const GRAY = "#9CA3AF";
const COBALT = "#1a3a5c";
const COBALT_LIGHT = "#1e4a7a";

const CATEGORY_LINKS = {
  "Federal VA Benefits": { text: "VA Benefits Overview", url: "https://www.va.gov/benefits/" },
  "State Tax": { text: "State Tax Info", url: "https://www.militaryonesource.mil/financial-legal/taxes/state-income-tax-information/" },
  "Property Tax": { text: "VA Property Tax Info", url: "https://www.benefits.va.gov/homeloans/resources_veteran.asp" },
  "Healthcare": { text: "VA Healthcare", url: "https://www.va.gov/health-care/" },
  "Education": { text: "VA Education Benefits", url: "https://www.va.gov/education/" },
  "Employment": { text: "VA Employment", url: "https://www.va.gov/careers-employment/" },
  "Housing": { text: "VA Home Loans", url: "https://www.va.gov/housing-assistance/" },
  "CHAMPVA": { text: "CHAMPVA Info", url: "https://www.va.gov/health-care/family-caregiver-benefits/champva/" },
  "default": { text: "VA Benefits", url: "https://www.va.gov/benefits/" }
};

function getLink(label) {
  for (const key of Object.keys(CATEGORY_LINKS)) {
    if (label.toLowerCase().includes(key.toLowerCase())) return CATEGORY_LINKS[key];
  }
  return CATEGORY_LINKS["default"];
}

function shortName(loc) {
  if (!loc) return loc;
  const parts = loc.split(",");
  if (parts.length >= 2) return parts[0].trim() + ", " + parts[1].trim();
  return loc;
}

function parseCategories(text) {
  const result = {};
  let current = "General";
  result[current] = [];
  for (const line of text.split("\n")) {
    const t = line.trim();
    if (!t) continue;
    if (t.match(/^#{1,3} /)) { current = t.replace(/^#{1,3} /, ""); result[current] = []; }
    else if (t.startsWith("- ") || t.startsWith("* ")) result[current].push(t.replace(/^[-*] /, "").replace(/\*\*/g, ""));
  }
  return result;
}

function getScoreLabel(score, max = 60) {
  const pct = Math.round((score / max) * 100);
  if (pct >= 70) return { tier: "Excellent", desc: `${score} verified veteran benefits — among the best available.` };
  if (pct >= 50) return { tier: "Strong", desc: `${score} veteran benefits — a solid package with good coverage.` };
  return { tier: "Moderate", desc: `${score} veteran benefits — good baseline with room to grow.` };
}

function LocationInput({ value, onChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [show, setShow] = useState(false);
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
          return { label: parts[0].trim() + ", " + parts[parts.length - 2].trim() };
        });
        setSuggestions(cleaned);
        setShow(true);
      } catch {}
    }, 400);
  };

  return (
    <div style={{ position: "relative" }}>
      <input type="text" value={value} onChange={handleChange}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        placeholder="e.g. Prescott, AZ"
        style={{ width: "100%", padding: "10px 14px", fontSize: "15px", borderRadius: "8px", border: "2px solid #1a3a5c", boxSizing: "border-box" }} />
      {show && suggestions.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, backgroundColor: "white", border: "1px solid #ccc", borderRadius: "6px", zIndex: 100, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          {suggestions.map((s, i) => (
            <div key={i} onMouseDown={() => { onChange(s.label); setSuggestions([]); setShow(false); }}
              style={{ padding: "10px 14px", cursor: "pointer", fontSize: "14px", borderBottom: i < suggestions.length - 1 ? "1px solid #f0f0f0" : "none" }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = "#f0f4f8"}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = "white"}>
              {s.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Bar({ value, max, isWinner }) {
  const heightPct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, width: 48 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: isWinner ? GOLD : GRAY, fontFamily: "monospace" }}>{value}</span>
      <div style={{ height: 64, width: 28, background: "rgba(255,255,255,0.2)", borderRadius: 6, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ width: "100%", height: `${heightPct}%`, borderRadius: 6, background: isWinner ? `linear-gradient(to top, ${GOLD}, ${GOLD_LIGHT})` : "#8aafd4", boxShadow: isWinner ? `0 0 10px ${GOLD}88` : "none", transition: "height 0.6s ease" }} />
      </div>
    </div>
  );
}

function CategoryRow({ cat, nameA, nameB, itemsA, itemsB, idx }) {
  const [open, setOpen] = useState(false);
  const max = Math.max(cat.a, cat.b, 1);
  const aWins = cat.a > cat.b;
  const bWins = cat.b > cat.a;
  const tie = cat.a === cat.b;
  const link = getLink(cat.label);
  const winnerName = aWins ? shortName(nameA) : shortName(nameB);
  const winnerItems = aWins ? itemsA : itemsB;
  const loserItems = aWins ? itemsB : itemsA;

  return (
    <div onClick={() => setOpen(o => !o)} style={{ background: `linear-gradient(135deg, ${COBALT} 0%, ${COBALT_LIGHT} 100%)`, borderRadius: 12, padding: "16px 20px", cursor: "pointer", border: `1.5px solid ${open ? GOLD : "rgba(255,255,255,0.15)"}`, boxShadow: open ? `0 0 0 3px ${GOLD}33` : "0 2px 8px rgba(0,0,0,0.2)", marginBottom: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <Bar value={cat.a} max={max} isWinner={aWins || tie} />
        </div>
        <div style={{ textAlign: "center", minWidth: 160 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "white" }}>{cat.label}</div>
          {!tie && (
            <div style={{ marginTop: 4, display: "inline-block", padding: "2px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, color: "#1a1a1a", letterSpacing: "0.05em" }}>
              ★ {winnerName} WINS
            </div>
          )}
          {tie && <div style={{ marginTop: 4, display: "inline-block", padding: "2px 10px", borderRadius: 20, fontSize: 11, background: "rgba(255,255,255,0.2)", color: "white" }}>TIE</div>}
          <div style={{ marginTop: 4, fontSize: 11, color: "rgba(255,255,255,0.5)" }}>tap for details</div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <Bar value={cat.b} max={max} isWinner={bWins || tie} />
        </div>
      </div>

      {open && (
        <div style={{ marginTop: 14, padding: "14px 16px", background: "rgba(0,0,0,0.25)", borderRadius: 10, borderLeft: `3px solid ${GOLD}` }}>
          {!tie && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: GOLD, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>
                ★ Why {winnerName} wins this category:
              </div>
              {winnerItems.slice(0, 3).map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: GOLD, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "white", fontSize: 13, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          )}
          {loserItems.length > 0 && !tie && (
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600, fontSize: 12, marginBottom: 6 }}>
                {aWins ? shortName(nameB) : shortName(nameA)} has:
              </div>
              {loserItems.slice(0, 2).map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
                  <span style={{ color: GRAY, flexShrink: 0 }}>–</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          )}
          {tie && itemsA.slice(0, 3).map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, marginBottom: 4 }}>
              <span style={{ color: GOLD, flexShrink: 0 }}>✓</span>
              <span style={{ color: "white", fontSize: 13, lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
          <a href={link.url} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ display: "inline-block", marginTop: 10, padding: "6px 14px", background: GOLD, color: "#1a1a1a", borderRadius: 6, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
            🔗 {link.text} →
          </a>
        </div>
      )}
    </div>
  );
}

function LocationCompare() {
  const [locA, setLocA] = useState("");
  const [locB, setLocB] = useState("");
  const [rating, setRating] = useState(100);
  const [ptStatus, setPtStatus] = useState(true);
  const [resultsA, setResultsA] = useState(null);
  const [resultsB, setResultsB] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!locA.trim() || !locB.trim()) { setError("Please enter both locations."); return; }
    setError(""); setLoading(true); setResultsA(null); setResultsB(null);
    try {
      const [a, b] = await Promise.all([getBenefits(locA, rating, ptStatus), getBenefits(locB, rating, ptStatus)]);
      setResultsA(parseCategories(a));
      setResultsB(parseCategories(b));
    } catch { setError("Error fetching benefits. Try again."); }
    setLoading(false);
  };

  const allCategories = resultsA && resultsB
    ? [...new Set([...Object.keys(resultsA), ...Object.keys(resultsB)])].filter(c => c !== "General")
    : [];

  const totalA = resultsA ? Object.values(resultsA).flat().length : 0;
  const totalB = resultsB ? Object.values(resultsB).flat().length : 0;
  const aWins = totalA > totalB;
  const bWins = totalB > totalA;
  const nameA = shortName(locA);
  const nameB = shortName(locB);
  const aLabel = getScoreLabel(totalA);
  const bLabel = getScoreLabel(totalB);

  const catData = allCategories.map(cat => ({
    label: cat,
    a: (resultsA[cat] || []).length,
    b: (resultsB[cat] || []).length
  }));

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#F8F9FB", minHeight: "100vh", padding: "32px 20px" }}>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 0 0 ${GOLD}44; } 50% { box-shadow: 0 0 20px 6px ${GOLD}44; } }
      `}</style>

      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.15em", color: GOLD, fontFamily: "monospace", marginBottom: 6 }}>⚖️ VETERAN BENEFITS COMPARISON</div>
          <h1 style={{ fontSize: 28, color: "#111827", margin: 0 }}>Compare Locations</h1>
          <p style={{ color: "#6B7280", fontSize: 14, marginTop: 6 }}>Enter two locations to compare veteran benefits side by side</p>
        </div>

        <div style={{ background: "white", borderRadius: 14, padding: "24px", marginBottom: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 12, alignItems: "center", marginBottom: 20 }}>
            <div>
              <label style={{ display: "block", fontWeight: "bold", color: COBALT, marginBottom: 6, fontSize: 13 }}>📍 Location A</label>
              <LocationInput value={locA} onChange={setLocA} />
            </div>
            <div style={{ textAlign: "center", fontWeight: "bold", color: "#aaa", fontSize: 18 }}>VS</div>
            <div>
              <label style={{ display: "block", fontWeight: "bold", color: "#555", marginBottom: 6, fontSize: 13 }}>📍 Location B</label>
              <LocationInput value={locB} onChange={setLocB} />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 8, fontSize: 13 }}>VA Disability Rating: <span style={{ color: COBALT }}>{rating}%</span></label>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {RATINGS.map(r => <button key={r} onClick={() => setRating(r)} style={{ padding: "6px 12px", borderRadius: "6px", border: `2px solid ${COBALT}`, backgroundColor: rating === r ? COBALT : "white", color: rating === r ? "white" : COBALT, fontWeight: "bold", cursor: "pointer", fontSize: 13 }}>{r}%</button>)}
            </div>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 8, fontSize: 13 }}>Permanent & Total (P&T) Status</label>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <button onClick={() => setPtStatus(true)} style={{ padding: "8px 20px", borderRadius: "6px", border: `2px solid ${COBALT}`, backgroundColor: ptStatus ? COBALT : "white", color: ptStatus ? "white" : COBALT, fontWeight: "bold", cursor: "pointer" }}>✅ Yes — P&T</button>
              <button onClick={() => setPtStatus(false)} style={{ padding: "8px 20px", borderRadius: "6px", border: "2px solid #aaa", backgroundColor: !ptStatus ? "#666" : "white", color: !ptStatus ? "white" : "#666", fontWeight: "bold", cursor: "pointer" }}>No</button>
              <span style={{ fontSize: 13, color: ptStatus ? "#2e7d32" : "#888" }}>{ptStatus ? "P&T benefits included" : "Standard benefits only"}</span>
            </div>
          </div>

          <button onClick={handleCompare} disabled={loading} style={{ backgroundColor: COBALT, color: "white", padding: "12px 36px", fontSize: 15, borderRadius: "8px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, fontWeight: "bold" }}>
            {loading ? "⏳ Comparing..." : "⚖️ Compare Now"}
          </button>
          {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: "40px", color: "#555" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>⚖️</div>
            <p>Researching benefits for both locations...</p>
          </div>
        )}

        {resultsA && resultsB && !loading && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "stretch", marginBottom: 24 }}>
              <div style={{ background: `linear-gradient(135deg, ${COBALT} 0%, ${COBALT_LIGHT} 100%)`, borderRadius: 16, padding: "24px 20px", textAlign: "center", border: `2px solid ${aWins ? GOLD : "rgba(255,255,255,0.2)"}`, boxShadow: aWins ? `0 0 24px ${GOLD}44` : "none", animation: aWins ? "pulse-gold 3s ease-in-out infinite" : "none", opacity: bWins ? 0.7 : 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: aWins ? GOLD : "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: 4 }}>{aWins ? "★ WINNER" : ""}</div>
                <div style={{ fontSize: 52, fontWeight: 700, color: aWins ? GOLD : "rgba(255,255,255,0.6)", lineHeight: 1 }}>{totalA}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginTop: 6 }}>{nameA}</div>
                <div style={{ marginTop: 10, padding: "8px 12px", background: "rgba(0,0,0,0.2)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                  <strong style={{ color: aWins ? GOLD : "rgba(255,255,255,0.5)" }}>{aLabel.tier}</strong><br />{aLabel.desc}
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 8px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#D1D5DB", fontFamily: "monospace" }}>VS</div>
                  <div style={{ width: 1, height: 40, background: "#E5E7EB", margin: "8px auto" }} />
                  <div style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "monospace" }}>{Math.abs(totalB - totalA)}<br />more<br />benefits</div>
                </div>
              </div>

              <div style={{ background: `linear-gradient(135deg, ${COBALT} 0%, ${COBALT_LIGHT} 100%)`, borderRadius: 16, padding: "24px 20px", textAlign: "center", border: `2px solid ${bWins ? GOLD : "rgba(255,255,255,0.2)"}`, boxShadow: bWins ? `0 0 24px ${GOLD}44` : "none", animation: bWins ? "pulse-gold 3s ease-in-out infinite" : "none", opacity: aWins ? 0.7 : 1 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: bWins ? GOLD : "rgba(255,255,255,0.4)", fontFamily: "monospace", marginBottom: 4 }}>{bWins ? "★ WINNER" : ""}</div>
                <div style={{ fontSize: 52, fontWeight: 700, color: bWins ? GOLD : "rgba(255,255,255,0.6)", lineHeight: 1 }}>{totalB}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "white", marginTop: 6 }}>{nameB}</div>
                <div style={{ marginTop: 10, padding: "8px 12px", background: "rgba(0,0,0,0.2)", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                  <strong style={{ color: bWins ? GOLD : "rgba(255,255,255,0.5)" }}>{bLabel.tier}</strong><br />{bLabel.desc}
                </div>
              </div>
            </div>

            <div style={{ background: `linear-gradient(135deg, #0f1f33 0%, #1a3a5c 100%)`, borderRadius: 14, padding: "20px 24px", marginBottom: 24, borderLeft: `4px solid ${GOLD}` }}>
              <div style={{ fontSize: 12, color: GOLD, fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: 8 }}>💡 WHAT DOES THE SCORE MEAN?</div>
              <p style={{ color: "#E5E7EB", fontSize: 14, margin: 0, lineHeight: 1.7 }}>
                The score counts <strong style={{ color: GOLD }}>verified veteran benefits</strong> — tax breaks, healthcare, employment preference, housing grants, and more.
                A higher score means <strong style={{ color: GOLD }}>more money in your pocket.</strong>{" "}
                {aWins ? nameA : bWins ? nameB : "Both locations"}{aWins || bWins ? ` leads with ${Math.abs(totalA - totalB)} more identified benefits` : " are equal"} — potentially worth thousands annually.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 160px 1fr", marginBottom: 12 }}>
              <div style={{ textAlign: "right", paddingRight: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: aWins ? GOLD : GRAY, fontFamily: "monospace", letterSpacing: "0.08em" }}>{nameA.toUpperCase()}</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "monospace" }}>CATEGORY</span>
              </div>
              <div style={{ textAlign: "left", paddingLeft: 12 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: bWins ? GOLD : GRAY, fontFamily: "monospace", letterSpacing: "0.08em" }}>{nameB.toUpperCase()}</span>
              </div>
            </div>

            {catData.map((cat, i) => (
              <CategoryRow key={i} cat={cat} nameA={locA} nameB={locB}
                itemsA={resultsA[cat.label] || []}
                itemsB={resultsB[cat.label] || []}
                idx={i} />
            ))}

            <div style={{ textAlign: "center", marginTop: 20, color: "#9CA3AF", fontSize: 12, fontFamily: "monospace" }}>
              ★ gold = winner · gray = runner-up · tap any row for details & links
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LocationCompare;

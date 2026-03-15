import React, { useState } from "react";
import gunLawsData from "../data/gunLawsData";

const states = Object.keys(gunLawsData).sort();

const friendlyColor = {
  green: { bg: "#e6f4ea", text: "#1a7a3a", label: "✅" },
  yellow: { bg: "#fff8e1", text: "#b36b00", label: "⚠️" },
  red: { bg: "#fdecea", text: "#b00020", label: "🚫" }
};

export default function GunLaws() {
  const [selectedState, setSelectedState] = useState("");
  const data = selectedState ? gunLawsData[selectedState] : null;

  const renderCard = (title, info) => {
    const colors = friendlyColor[info.friendly] || friendlyColor.yellow;
    return (
      <div style={{
        backgroundColor: colors.bg,
        border: `1px solid ${colors.text}`,
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "16px"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong style={{ fontSize: "1em", color: "#1a3a5c" }}>{title}</strong>
          <span style={{ fontSize: "1.2em" }}>{colors.label}</span>
        </div>
        <div style={{ marginTop: "8px", fontWeight: "700", color: colors.text, fontSize: "1em" }}>
          {info.status}
        </div>
        <div style={{ marginTop: "6px", color: "#444", fontSize: "0.9em" }}>
          {info.notes}
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "30px 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>🔫 Gun Laws by State</h1>
      <p style={{ color: "#555", marginBottom: "24px" }}>
        Research firearm laws before you relocate. Select a state to see concealed carry, open carry, suppressor, and magazine laws.
      </p>

      <div style={{ marginBottom: "28px" }}>
        <label style={{ fontWeight: "600", display: "block", marginBottom: "8px" }}>Select a State</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1em"
          }}
        >
          <option value="">-- Choose a state --</option>
          {states.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {data && (
        <div>
          <h2 style={{ color: "#1a3a5c", marginBottom: "20px" }}>{selectedState} Firearm Laws</h2>
          {renderCard("Concealed Carry (CCW)", data.ccw)}
          {renderCard("Open Carry", data.openCarry)}
          {renderCard("Suppressors / NFA", data.suppressors)}
          {renderCard("Magazine Capacity", data.magazineLimit)}
          <div style={{ marginTop: "20px", padding: "14px", backgroundColor: "#f0f4f8", borderRadius: "8px" }}>
            <strong>Official Source:</strong>{" "}
            <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ color: "#1a3a5c" }}>
              {selectedState} Firearms Authority
            </a>
          </div>
          <p style={{ marginTop: "16px", fontSize: "0.8em", color: "#888" }}>
            ⚠️ Laws change frequently. Always verify with official state sources before making decisions.
          </p>
        </div>
      )}
    </div>
  );
}
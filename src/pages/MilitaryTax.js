import React, { useState } from "react";
import militaryTaxData from "../data/militaryTaxData";

const states = Object.keys(militaryTaxData).sort();

const friendlyColor = {
  green: { bg: "#e6f4ea", text: "#1a7a3a", label: "✅" },
  yellow: { bg: "#fff8e1", text: "#b36b00", label: "⚠️" },
  red: { bg: "#fdecea", text: "#b00020", label: "🚫" }
};

export default function MilitaryTax() {
  const [selectedState, setSelectedState] = useState("");
  const data = selectedState ? militaryTaxData[selectedState] : null;

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "30px 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>💰 Military Retirement Tax by State</h1>
      <p style={{ color: "#555", marginBottom: "24px" }}>
        See whether your state taxes military retirement pay. Critical information for relocation decisions.
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
          <h2 style={{ color: "#1a3a5c", marginBottom: "20px" }}>{selectedState} Military Tax Info</h2>

          <div style={{
            backgroundColor: friendlyColor[data.friendly].bg,
            border: `1px solid ${friendlyColor[data.friendly].text}`,
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "16px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong style={{ fontSize: "1em", color: "#1a3a5c" }}>Military Retirement Pay</strong>
              <span style={{ fontSize: "1.2em" }}>{friendlyColor[data.friendly].label}</span>
            </div>
            <div style={{ marginTop: "8px", fontWeight: "700", color: friendlyColor[data.friendly].text, fontSize: "1em" }}>
              {data.retirementTaxed === "No" ? "Not Taxed" : data.retirementTaxed === "Partial" ? "Partially Taxed" : "Taxed"}
            </div>
            <div style={{ marginTop: "6px", color: "#444", fontSize: "0.9em" }}>
              {data.retirementNotes}
            </div>
          </div>

          <div style={{
            backgroundColor: "#f0f4f8",
            borderRadius: "10px",
            padding: "16px",
            marginBottom: "16px"
          }}>
            <strong style={{ color: "#1a3a5c" }}>State Income Tax Rate:</strong>
            <span style={{ marginLeft: "8px", fontSize: "1em" }}>{data.stateTaxRate}</span>
          </div>

          <div style={{
            backgroundColor: "#e6f4ea",
            border: "1px solid #1a7a3a",
            borderRadius: "10px",
            padding: "16px",
            marginBottom: "16px"
          }}>
            <strong style={{ color: "#1a7a3a" }}>✅ VA Disability Compensation is Always Tax Free</strong>
            <p style={{ marginTop: "8px", color: "#444", fontSize: "0.9em" }}>
              VA disability compensation is exempt from federal and all state income taxes by federal law. No state can tax your VA disability pay regardless of where you live.
            </p>
          </div>

          <div style={{ marginTop: "20px", padding: "14px", backgroundColor: "#f0f4f8", borderRadius: "8px" }}>
            <strong>Official Source:</strong>{" "}
            <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ color: "#1a3a5c" }}>
              {data.sourceName}
            </a>
            <div style={{ marginTop: "6px", fontSize: "0.85em", color: "#666" }}>
              <strong>Law Reference:</strong> {data.lawReference}
            </div>
            <div style={{ marginTop: "4px", fontSize: "0.85em", color: "#666" }}>
              <strong>Last Verified:</strong> {data.lastVerified}
            </div>
          </div>

          <p style={{ marginTop: "16px", fontSize: "0.8em", color: "#888" }}>
            ⚠️ Tax laws change frequently. Always verify with official state sources or a tax professional before making relocation decisions.
          </p>
        </div>
      )}
    </div>
  );
}
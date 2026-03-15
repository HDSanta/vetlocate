import React, { useState } from "react";
import propertyTaxData from "../data/propertyTaxData";
import usCounties from "../data/usCounties";

function PropertyTaxLookup() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [isPT, setIsPT] = useState(false);
  const [countySearch, setCountySearch] = useState("");
  
  const countyList = selectedState ? usCounties[selectedState] || [] : [];
  const exactCountyMatch = countyList.find(
    (county) => county.toLowerCase() === countySearch.trim().toLowerCase()
  );
  const filteredCountyList = countyList.filter((county) =>
    county.toLowerCase().includes(countySearch.trim().toLowerCase())
  );
  const countyBenefitData = exactCountyMatch
    ? propertyTaxData?.[selectedState]?.[exactCountyMatch]
    : null;
  const stateBenefitData = selectedState
    ? propertyTaxData?.[selectedState]?.statewide || null
    : null;
  const benefitData = countyBenefitData || stateBenefitData;

  const stateAbbreviations = {
    Alabama: "AL",
    Alaska: "AK",
    Arizona: "AZ",
    Arkansas: "AR",
    California: "CA",
    Colorado: "CO",
    Connecticut: "CT",
    Delaware: "DE",
    Florida: "FL",
    Georgia: "GA",
    Hawaii: "HI",
    Idaho: "ID",
    Illinois: "IL",
    Indiana: "IN",
    Iowa: "IA",
    Kansas: "KS",
    Kentucky: "KY",
    Louisiana: "LA",
    Maine: "ME",
    Maryland: "MD",
    Massachusetts: "MA",
    Michigan: "MI",
    Minnesota: "MN",
    Mississippi: "MS",
    Missouri: "MO",
    Montana: "MT",
    Nebraska: "NE",
    Nevada: "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    Ohio: "OH",
    Oklahoma: "OK",
    Oregon: "OR",
    Pennsylvania: "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    Tennessee: "TN",
    Texas: "TX",
    Utah: "UT",
    Vermont: "VT",
    Virginia: "VA",
    Washington: "WA",
    "West Virginia": "WV",
    Wisconsin: "WI",
    Wyoming: "WY"
  };

  const mapRows = [
    [null, null, null, null, null, null, null, null, null, null, null, "Maine"],
    ["Washington", "Idaho", "Montana", "North Dakota", "Minnesota", "Wisconsin", "Michigan", null, null, "Vermont", "New Hampshire", null],
    ["Oregon", "Nevada", "Wyoming", "South Dakota", "Iowa", "Illinois", "Indiana", "Ohio", "Pennsylvania", "New York", "Massachusetts", null],
    ["California", "Utah", "Colorado", "Nebraska", "Missouri", "Kentucky", "West Virginia", "Virginia", "Maryland", "Delaware", "New Jersey", "Connecticut"],
    ["Arizona", "New Mexico", "Kansas", "Oklahoma", "Arkansas", "Tennessee", "North Carolina", "South Carolina", null, null, "Rhode Island", null],
    [null, "Texas", null, null, "Louisiana", "Mississippi", "Alabama", "Georgia", null, null, null, null],
    ["Alaska", null, null, null, null, null, null, "Florida", null, null, null, "Hawaii"]
  ];
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>Property Tax Exemption Lookup</h1>


      <p style={{ color: "#555" }}>
        Search property tax exemptions available to disabled veterans by state and county.
      </p>

      <div style={{ marginTop: "24px" }}>
        <div style={{ fontWeight: "600", marginBottom: "10px", color: "#1a3a5c" }}>
          Select a state from the map or use the dropdown below
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
            gap: "6px",
            backgroundColor: "#f8fafc",
            border: "1px solid #dbe4ee",
            borderRadius: "10px",
            padding: "14px"
          }}
        >
          {mapRows.flat().map((state, index) => {
            if (!state) {
              return <div key={`empty-${index}`} />;
            }

            const isSelected = selectedState === state;

            return (
              <button
                key={state}
                type="button"
                title={state}
                onClick={() => {
                  setSelectedState(state);
                  setCountySearch("");
                }}
                style={{
                  minHeight: "38px",
                  borderRadius: "8px",
                  border: isSelected ? "2px solid #1a3a5c" : "1px solid #cbd5e1",
                  backgroundColor: isSelected ? "#1a3a5c" : "white",
                  color: isSelected ? "white" : "#1a3a5c",
                  fontWeight: "700",
                  fontSize: "12px",
                  cursor: "pointer",
                  padding: "6px 4px"
                }}
              >
                {stateAbbreviations[state]}
              </button>
            );
          })}
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "12px",
          alignItems: "flex-end",
          flexWrap: "wrap"
        }}
      >
        <div style={{ flex: "1 1 320px", minWidth: "260px" }}>
          <label style={{ fontWeight: "600" }}>State</label>

          <select
            value={selectedState}
              onChange={(e) => {
                 setSelectedState(e.target.value);
                 setCountySearch("");
               }}
            style={{
              display: "block",
              marginTop: "8px",
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          >
            <option value="">Select a state</option>
                {Object.keys(usCounties).map((state) => (
                <option key={state} value={state}>
                    {state}
                </option>
            ))}
          </select>
        </div>

        <div style={{ width: "160px" }}>
          <label style={{ fontWeight: "600" }}>Rating</label>

          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            style={{
              display: "block",
              marginTop: "8px",
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          >
            <option value="">Select %</option>
            <option>10%</option>
            <option>20%</option>
            <option>30%</option>
            <option>40%</option>
            <option>50%</option>
            <option>60%</option>
            <option>70%</option>
            <option>80%</option>
            <option>90%</option>
            <option>100%</option>
          </select>
        </div>
        <div style={{ width: "140px" }}>
          <label style={{ fontWeight: "600", display: "block", marginBottom: "12px" }}>P&amp;T</label>

          <label
            style={{
              position: "relative",
              display: "inline-block",
              width: "58px",
              height: "32px"
            }}
          >
            <input
              type="checkbox"
              checked={isPT}
              onChange={(e) => setIsPT(e.target.checked)}
              style={{ opacity: 0, width: 0, height: 0 }}
            />
            <span
              style={{
                position: "absolute",
                cursor: "pointer",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: isPT ? "#1a3a5c" : "#cbd5e1",
                borderRadius: "999px",
                transition: "0.2s"
              }}
            >
              <span
                style={{
                  position: "absolute",
                  height: "24px",
                  width: "24px",
                  left: isPT ? "30px" : "4px",
                  top: "4px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  transition: "0.2s",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.25)"
                }}
              />
            </span>
          </label>
        </div>
        <div style={{ flex: "1 1 100%", minWidth: "100%" }}>
          <label style={{ fontWeight: "600" }}>County</label>

          <input
            type="text"
            value={countySearch}
            onChange={(e) => setCountySearch(e.target.value)}
            placeholder="Type county name for more specific results"
            disabled={!selectedState || countyList.length === 0}
            style={{
              display: "block",
              marginTop: "8px",
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc",
              backgroundColor: !selectedState || countyList.length === 0 ? "#f5f5f5" : "white",
              color: !selectedState || countyList.length === 0 ? "#777" : "#000"
            }}
          />

          {selectedState && countySearch.trim() && (
            <div style={{ marginTop: "10px" }}>
              {exactCountyMatch ? (
                <div style={{ fontSize: "14px", color: "#555" }}>
                  Matched county: <strong>{exactCountyMatch}</strong>
                </div>
              ) : filteredCountyList.length > 0 ? (
                <>
                  <div style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
                    Matching counties:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {filteredCountyList.slice(0, 8).map((county) => (
                      <button
                        key={county}
                        type="button"
                        onClick={() => setCountySearch(county)}
                        style={{
                          padding: "6px 10px",
                          borderRadius: "999px",
                          border: "1px solid #cbd5e1",
                          backgroundColor: "white",
                          color: "#1a3a5c",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: "600"
                        }}
                      >
                        {county}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div style={{ fontSize: "14px", color: "#555" }}>
                  No county match found yet. You can still search by state and rating only.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {selectedState && selectedRating && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            backgroundColor: "#f9fbfd"
          }}
        >
          <h3 style={{ marginTop: 0, color: "#1a3a5c" }}>
            Property Tax Benefit Result
          </h3>

          <p style={{ margin: "6px 0" }}>
            <strong>State:</strong> {selectedState}
          </p>

          <p style={{ margin: "6px 0" }}>
            <strong>County:</strong> {exactCountyMatch || "Statewide result"}
          </p>

          <p style={{ margin: "6px 0" }}>
            <strong>VA Rating:</strong> {selectedRating}
          </p>

          <p style={{ margin: "6px 0" }}>
            <strong>P&T:</strong> {isPT ? "Yes" : "No"}
          </p>

          {benefitData ? (
            <>
              <p style={{ margin: "10px 0" }}>
                <strong>Benefit:</strong> {benefitData.benefit}
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Exemption Amount:</strong> {benefitData.exemptionAmount}
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Eligibility:</strong> {benefitData.eligibility}
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Primary Residence Required:</strong> {benefitData.primaryResidence}
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Surviving Spouse Eligible:</strong> {benefitData.survivingSpouse}
              </p>

              <p style={{ margin: "10px 0" }}>
                <strong>Application:</strong> {benefitData.application}
              </p>
<p style={{ marginTop: "12px" }}>
                <strong>Official Source:</strong>{" "}
                <a href={benefitData.link} target="_blank" rel="noopener noreferrer">
                  {benefitData.sourceName ? benefitData.sourceName : "View Official Source"}
                </a>
              </p>

              {benefitData.lawReference && (
                <p style={{ margin: "10px 0" }}>
                  <strong>Law Reference:</strong> {benefitData.lawReference}
                </p>
              )}

              {benefitData.lastVerified && (
                <p style={{ margin: "10px 0", color: "#666", fontSize: "0.85em" }}>
                  <strong>Last Verified:</strong> {benefitData.lastVerified}
                </p>
              )}
            </>
          ) : (
            <p style={{ marginTop: "14px", color: "#444" }}>
              VetLocate does not yet have verified property tax exemption data for this exact search. Try selecting another state, or enter a county if county-level data exists.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default PropertyTaxLookup;
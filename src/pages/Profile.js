import React, { useState } from "react";

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const SPOUSE_RATINGS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const BTN = (active) => ({
  padding: "8px 14px",
  borderRadius: "6px",
  border: "2px solid #1a3a5c",
  backgroundColor: active ? "#1a3a5c" : "white",
  color: active ? "white" : "#1a3a5c",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "13px",
});

const LABEL = {
  display: "block",
  fontWeight: "bold",
  marginBottom: "6px",
  color: "#1a3a5c",
};

const INPUT = {
  width: "100%",
  padding: "10px",
  fontSize: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const WARN = {
  marginTop: "8px",
  padding: "8px 12px",
  backgroundColor: "#fff8e1",
  border: "1px solid #f9a825",
  borderRadius: "6px",
  color: "#b45309",
  fontSize: "13px",
};

function Profile() {
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("vetlocate_profile");
    return stored
      ? JSON.parse(stored)
      : {
          name: "",
          branch: "",
          yearsServed: "",
          rating: 100,
          ptStatus: true,
          maritalStatus: "",       // "Single" | "Married" | "Married — Both Veterans"
          spouseRating: null,      // number or null
          spousePT: false,
          dependents: 0,
          aidAttendance: false,
          housebound: false,
          homeLocation: "",
          consideringLocation: "",
          notes: "",
        };
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("vetlocate_profile", JSON.stringify(profile));
    setSaved(true);
  };

  const branches = ["Air Force", "Army", "Navy", "Marine Corps", "Coast Guard", "Space Force"];
  const isMarried = profile.maritalStatus === "Married" || profile.maritalStatus === "Married — Both Veterans";
  const isBothVets = profile.maritalStatus === "Married — Both Veterans";

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>My Veteran Profile</h1>
      <p style={{ color: "#555" }}>Save your information to personalize your VetLocate experience.</p>

      <div style={{ backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "24px", marginTop: "20px" }}>

        {/* Full Name */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Full Name</label>
          <input type="text" value={profile.name} onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Hector Santaella" style={INPUT} />
        </div>

        {/* Branch */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Branch of Service</label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {branches.map((b) => (
              <button key={b} onClick={() => handleChange("branch", b)} style={BTN(profile.branch === b)}>{b}</button>
            ))}
          </div>
        </div>

        {/* Years Served */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Years Served</label>
          <input type="number" value={profile.yearsServed} onChange={(e) => handleChange("yearsServed", e.target.value)}
            placeholder="e.g. 21" style={INPUT} />
        </div>

        {/* VA Rating */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>VA Disability Rating: <span>{profile.rating}%</span></label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {RATINGS.map((r) => (
              <button key={r} onClick={() => handleChange("rating", r)} style={BTN(profile.rating === r)}>{r}%</button>
            ))}
          </div>
        </div>

        {/* P&T Status */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>P&T Status</label>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => handleChange("ptStatus", true)} style={BTN(profile.ptStatus)}>✅ Yes — P&T</button>
            <button onClick={() => handleChange("ptStatus", false)} style={BTN(!profile.ptStatus)}>No</button>
          </div>
        </div>

        {/* ── NEW: Marital Status ── */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Marital Status</label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Single", "Married", "Married — Both Veterans"].map((s) => (
              <button key={s} onClick={() => handleChange("maritalStatus", s)} style={BTN(profile.maritalStatus === s)}>{s}</button>
            ))}
          </div>
        </div>

        {/* ── NEW: Spouse VA Info (conditional) ── */}
        {isMarried && (
          <div style={{ marginBottom: "18px", padding: "16px", backgroundColor: "#e8eef5", borderRadius: "8px", borderLeft: "4px solid #1a3a5c" }}>
            <label style={LABEL}>Spouse VA Disability Rating</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
              {SPOUSE_RATINGS.map((r) => (
                <button key={r} onClick={() => handleChange("spouseRating", r)} style={BTN(profile.spouseRating === r)}>{r}%</button>
              ))}
            </div>

            <label style={LABEL}>Spouse P&T Status</label>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={() => handleChange("spousePT", true)} style={BTN(profile.spousePT)}>✅ Yes — P&T</button>
              <button onClick={() => handleChange("spousePT", false)} style={BTN(!profile.spousePT)}>No</button>
            </div>

            {isBothVets && (
              <div style={WARN}>
                ⚠️ <strong>Dual-veteran household:</strong> CHAMPVA does not apply — each spouse has their own VA healthcare eligibility.
                Some states (including AZ) allow both veterans to claim property tax exemptions on jointly owned property.
              </div>
            )}
          </div>
        )}

        {/* ── NEW: Dependent Children ── */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Dependent Children</label>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => handleChange("dependents", Math.max(0, profile.dependents - 1))}
              style={{ width: "38px", height: "38px", borderRadius: "50%", border: "2px solid #1a3a5c", backgroundColor: "white", color: "#1a3a5c", fontSize: "22px", cursor: "pointer", fontWeight: "bold", lineHeight: "1" }}>
              −
            </button>
            <span style={{ fontSize: "26px", fontWeight: "bold", minWidth: "32px", textAlign: "center", color: "#1a3a5c" }}>
              {profile.dependents}
            </span>
            <button
              onClick={() => handleChange("dependents", Math.min(10, profile.dependents + 1))}
              style={{ width: "38px", height: "38px", borderRadius: "50%", border: "2px solid #1a3a5c", backgroundColor: "#1a3a5c", color: "white", fontSize: "22px", cursor: "pointer", fontWeight: "bold", lineHeight: "1" }}>
              +
            </button>
          </div>
          <p style={{ color: "#666", fontSize: "13px", marginTop: "6px" }}>
            Affects VA compensation tier and DEA eligibility calculations.
          </p>
        </div>

        {/* ── NEW: Aid & Attendance / Housebound ── */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Additional VA Designations</label>
          {[
            { key: "aidAttendance", label: "Aid & Attendance", note: "Adds supplemental amount to monthly compensation" },
            { key: "housebound", label: "Housebound", note: "Adds supplemental amount to monthly compensation" },
          ].map(({ key, label, note }) => (
            <label key={key} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px", cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={profile[key] || false}
                onChange={(e) => handleChange(key, e.target.checked)}
                style={{ width: "18px", height: "18px", marginTop: "2px", flexShrink: 0 }}
              />
              <span>
                <strong>{label}</strong>
                <span style={{ color: "#666", fontSize: "13px" }}> — {note}</span>
              </span>
            </label>
          ))}
          {profile.aidAttendance && profile.ptStatus && (
            <div style={WARN}>
              ⚠️ If you are 100% P&T, Aid & Attendance may already be factored into your rating. Verify your exact rate at{" "}
              <a href="https://www.va.gov/disability/compensation-rates/veteran-rates/" target="_blank" rel="noreferrer" style={{ color: "#b45309" }}>
                va.gov/disability/compensation-rates
              </a>.
            </div>
          )}
        </div>

        {/* Current Location */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Current Location</label>
          <input type="text" value={profile.homeLocation} onChange={(e) => handleChange("homeLocation", e.target.value)}
            placeholder="e.g. Prescott AZ" style={INPUT} />
        </div>

        {/* Considering Relocating To */}
        <div style={{ marginBottom: "18px" }}>
          <label style={LABEL}>Considering Relocating To</label>
          <input type="text" value={profile.consideringLocation} onChange={(e) => handleChange("consideringLocation", e.target.value)}
            placeholder="e.g. Cape Cod MA" style={INPUT} />
        </div>

        {/* Notes */}
        <div style={{ marginBottom: "24px" }}>
          <label style={LABEL}>Notes</label>
          <textarea value={profile.notes} onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Any additional notes about your relocation or benefits needs..."
            rows={4} style={{ ...INPUT, resize: "vertical" }} />
        </div>

        <button onClick={handleSave} style={{ backgroundColor: "#1a3a5c", color: "white", padding: "12px 36px", fontSize: "16px", borderRadius: "6px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
          Save Profile
        </button>

        {saved && (
          <div style={{ marginTop: "16px", padding: "12px 16px", backgroundColor: "#e8f5e9", borderRadius: "6px", color: "#2e7d32", fontWeight: "bold", borderLeft: "4px solid #2e7d32" }}>
            ✅ Profile saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;


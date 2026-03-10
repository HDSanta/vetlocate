import React, { useState } from "react";

const RATINGS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function Profile() {
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    branch: "",
    yearsServed: "",
    rating: 100,
    ptStatus: true,
    homeLocation: "",
    consideringLocation: "",
    notes: ""
  });

  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("vetlocate_profile", JSON.stringify(profile));
    setSaved(true);
  };

  const branches = ["Air Force", "Army", "Navy", "Marine Corps", "Coast Guard", "Space Force"];

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      <h1 style={{ color: "#1a3a5c" }}>My Veteran Profile</h1>
      <p style={{ color: "#555" }}>Save your information to personalize your VetLocate experience.</p>

      <div style={{ backgroundColor: "#f0f4f8", borderRadius: "10px", padding: "24px", marginTop: "20px" }}>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="e.g. Hector Santaella"
            style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Branch of Service</label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {branches.map((b) => (
              <button key={b} onClick={() => handleChange("branch", b)} style={{ padding: "8px 14px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: profile.branch === b ? "#1a3a5c" : "white", color: profile.branch === b ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}>
                {b}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Years Served</label>
          <input
            type="number"
            value={profile.yearsServed}
            onChange={(e) => handleChange("yearsServed", e.target.value)}
            placeholder="e.g. 21"
            style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>
            VA Disability Rating: <span style={{ color: "#1a3a5c" }}>{profile.rating}%</span>
          </label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {RATINGS.map((r) => (
              <button key={r} onClick={() => handleChange("rating", r)} style={{ padding: "8px 14px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: profile.rating === r ? "#1a3a5c" : "white", color: profile.rating === r ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer", fontSize: "13px" }}>
                {r}%
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>P&T Status</label>
          <div style={{ display: "flex", gap: "12px" }}>
            <button onClick={() => handleChange("ptStatus", true)} style={{ padding: "8px 20px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: profile.ptStatus ? "#1a3a5c" : "white", color: profile.ptStatus ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer" }}>
              Yes — P&T
            </button>
            <button onClick={() => handleChange("ptStatus", false)} style={{ padding: "8px 20px", borderRadius: "6px", border: "2px solid #1a3a5c", backgroundColor: !profile.ptStatus ? "#1a3a5c" : "white", color: !profile.ptStatus ? "white" : "#1a3a5c", fontWeight: "bold", cursor: "pointer" }}>
              No
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Current Location</label>
          <input
            type="text"
            value={profile.homeLocation}
            onChange={(e) => handleChange("homeLocation", e.target.value)}
            placeholder="e.g. Prescott AZ"
            style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "18px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Considering Relocating To</label>
          <input
            type="text"
            value={profile.consideringLocation}
            onChange={(e) => handleChange("consideringLocation", e.target.value)}
            placeholder="e.g. Cape Cod MA"
            style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "6px", color: "#1a3a5c" }}>Notes</label>
          <textarea
            value={profile.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
            placeholder="Any additional notes about your relocation or benefits needs..."
            rows={4}
            style={{ width: "100%", padding: "10px", fontSize: "15px", borderRadius: "6px", border: "1px solid #ccc", boxSizing: "border-box", resize: "vertical" }}
          />
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

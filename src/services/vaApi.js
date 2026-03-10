export async function getNearbyFacilities(location, radius = 50) {
  const geoRes = await fetch(
    "https://nominatim.openstreetmap.org/search?q=" + encodeURIComponent(location) + "&format=json&limit=1"
  );
  const geoData = await geoRes.json();
  if (!geoData || geoData.length === 0) throw new Error("Location not found");

  const { lat, lon } = geoData[0];

  const res = await fetch(
    "https://sandbox-api.va.gov/services/va_facilities/v1/facilities?lat=" + lat + "&long=" + lon + "&radius=" + radius + "&type=health&per_page=25",
    {
      headers: {
        "apikey": "fmZjZoG2wIHYEv0N1Hd6EL01KEmw9Q9s"
      }
    }
  );
  const data = await res.json();
  return { facilities: data.data || [], lat, lon };
}

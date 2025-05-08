const API_BASE_URL = "https://localhost:5001/api"; // Adjust as needed

export async function processDonation(donationData) {
  const response = await fetch(`${API_BASE_URL}/donations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donationData),
  });

  if (!response.ok) {
    throw new Error("Failed to process donation");
  }

  return await response.json();
}

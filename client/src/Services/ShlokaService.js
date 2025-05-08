const API_BASE_URL = "https://localhost:5001/api"; // Adjust the base URL as needed

export async function getShlokaById(shlokaId) {
  const response = await fetch(`${API_BASE_URL}/shloka/${shlokaId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch shloka");
  }
  return await response.json();
}

export async function getAllShlokas() {
  const response = await fetch(`${API_BASE_URL}/shloka`);
  if (!response.ok) {
    throw new Error("Failed to fetch shlokas");
  }
  return await response.json();
}

export async function createShloka(shlokaData) {
  const response = await fetch(`${API_BASE_URL}/shloka`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shlokaData),
  });
  if (!response.ok) {
    throw new Error("Failed to create shloka");
  }
  return await response.json();
}

export async function updateShloka(shlokaId, shlokaData) {
  const response = await fetch(`${API_BASE_URL}/shloka/${shlokaId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shlokaData),
  });
  if (!response.ok) {
    throw new Error("Failed to update shloka");
  }
  return await response.json();
}

export async function deleteShloka(shlokaId) {
  const response = await fetch(`${API_BASE_URL}/shloka/${shlokaId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete shloka");
  }
  return true;
}

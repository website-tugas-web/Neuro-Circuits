const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export async function getHealth() {
  try {
    const res = await fetch(`${API_URL}/health`);
    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch health:", error);
    throw error;
  }
}

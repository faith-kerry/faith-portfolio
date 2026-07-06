const API_URL = "http://127.0.0.1:5000/api/portfolio";

export async function getPortfolio() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch portfolio data");
  }

  return response.json();
}
const API_URL = "https://xaus.com/api/v1/spot";

export async function fetchSpotPrices() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("HTTP error :" + response.status);
}
  const data = await response.json();
  return data; 
}
fetchSpotPrices();

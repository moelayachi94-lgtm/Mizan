import("./src/js/api.js")
    .then(module => module.fetchSpotPrices())
    .then(data => console.log(data))
    .catch(error => console.error(error));

const API_URL = "https://xaus.com/api/v1/spot";

async function fetchSpotPrices() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("HTTP error :" + response.status);
}
  const data = await response.json();
  return data; 
}
fetchSpotPrices();

const pricesContainer = document.getElementById("prices-container");
const lastUpdated = document.getElementById("last-updated");

export function displayPrices(data) {
  const goldCard = document.createElement("div");
  const silverCard = document.createElement("div");

  goldCard.textContent = `gold ${data.xau.price}`;
  silverCard.textContent = data.silver_usd_oz;

  pricesContainer.append(goldCard, silverCard);
}

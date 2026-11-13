import { fetchSpotPrices } from "./api.js";
import { displayPrices } from "./ui.js";

async function startApp() {
  try {
    const data = await fetchSpotPrices();
    displayPrices(data);
  } catch (error) {
  }
}
startApp()

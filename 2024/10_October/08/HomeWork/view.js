//imports
import { utils } from "./utils.js";
const map = L.map("map").setView([32.0, 35.0], 8); // Default view
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);
//https://api.thecatapi.com/v1/images/0XYvRd7oD
//https://bible-api.com/john 3:16
const img = document.getElementById("img");
const p = document.getElementById("p");
fetch(`https://cataas.com/cat`)
  .then((response) => response.json())
  .then(async (data) => {
    img.src = data;
    console.log("img");
  })
  .catch((error) => console.error("Error fetching array:", error));
fetch(`https://bible-api.com/john%203:16`)
  .then((response) => response.json())
  .then(async (data) => {
    p.textContent = data.text;
    console.log("p");
  })
  .catch((error) => console.error("Error fetching array:", error));

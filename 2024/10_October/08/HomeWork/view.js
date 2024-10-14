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
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
fetch(`https://picsum.photos/id/0/info`)
  .then((response) => response.json())
  .then(async (data) => {
    console.log(data);

    img.src = data.download_url;
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

fetch(`https://fakestoreapi.com/products/1`)
  .then((response) => response.json())
  .then(async (data) => {
    p1.textContent = data.title;
    console.log("p1");
  })
  .catch((error) => console.error("Error fetching array:", error));

fetch(`https://api.adviceslip.com/advice`)
  .then((response) => response.json())
  .then(async (data) => {
    p2.textContent = data.slip.advice;
    console.log("p2");
  })
  .catch((error) => console.error("Error fetching array:", error));

fetch(`http://api.citybik.es/v2/networks`)
  .then((response) => response.json())
  .then(async (data) => {
    p3.textContent = data.networks[0].name;
    console.log("p3");
  })
  .catch((error) => console.error("Error fetching array:", error));

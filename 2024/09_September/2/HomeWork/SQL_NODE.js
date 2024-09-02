const axios = require("axios");
const express = require(`express`);
const app = express();
axios
  .get("https://simple-grocery-store-api.glitch.me/products")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

axios
  .post("http://simple-grocery-store-api.online/carts", {})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//imports
import { utils } from "./utils.js";

const lat = "33";
const lon = "33";
const APIKey = `ee97b04a747bf9d781756c80e59bb04f`;
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error(err));

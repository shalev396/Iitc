console.log("main.js");

const formElement = document.querySelector("form");
const containerElement = document.querySelector(".container");
const listBtnElement = document.querySelector("#get-list");
const ulElement = document.getElementById("name-list");

// console.log(formElement);
// console.log(containerElement);
// console.log(listBtnElement);
console.log(ulElement);

function formSubmit(formObejct) {
  // console.log(formObejct.number);
  const url = `https://random-d.uk/api/v2/${formObejct.number}.jpg`;
  console.log(url);

  // Insert image

  const imageElement = document.createElement("img");
  imageElement.src = url;
  containerElement.innerHTML = "";
  containerElement.appendChild(imageElement);
}

const renderNames = (namesArray) => {
  namesArray.forEach((name, index) => {
    console.log(index);

    const liElement = document.createElement("li");
    liElement.innerText = name;
    const img = document.createElement("img");
    img.src = `https://random-d.uk/api/v2/${name}`;
    img.id = `id${index}`;
    img.style.display = "none";
    liElement.addEventListener("click", function () {
      let that = false;
      if (img.style.display === "none") {
        that = true;
      } else that = false;
      for (let i = 0; i < namesArray.length; i++) {
        if (index !== i) {
          const unimg = document.getElementById(`id${i}`);
          unimg.style.display = "none";
        }
      }
      if (that) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });

    ulElement.appendChild(liElement);
    ulElement.appendChild(img);
    // console.log(name);
  });
};

const getDuckList = () => {
  const proxyUrl = "https://corsproxy.io/?";
  const targetUrl = "https://random-d.uk/api/v2/list";

  fetch(proxyUrl + encodeURIComponent(targetUrl))
    .then((response) => response.json())
    .then((data) => {
      // console.log('Images:', data.images);
      // console.log('GIFs:', data.gifs);
      renderNames(data.gifs);
    })
    .catch((error) => {
      console.error("Error fetching duck list:", error);
    });
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  // console.log(formData);

  const formObject = Object.fromEntries(formData);
  // console.log(formObject);

  formSubmit(formObject);
});

listBtnElement.addEventListener("click", () => {
  getDuckList();
});

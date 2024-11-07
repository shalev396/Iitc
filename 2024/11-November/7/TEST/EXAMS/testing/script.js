const allDiv = document.getElementsByClassName("card");
const div1 = allDiv[0];
div1.classList.add("active");
const allBut = document.getElementsByClassName("button");
const but = allBut[0];

// but.addEventListener("click", clicked); //error fix

function clicked() {
  console.log("Button clicked!");
}
function findLongestWord(words) {
  let maxLetters = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLetters.length) {
      maxLetters = words[i];
    }
  }
  return maxLetters;
}
const words = ["a", "bb", "ccc", "aa"];
console.log(findLongestWord(words));
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 23, 4, 5, 6, 8]));
function capitalizeWords(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0 || sentence[i - 1] === " ") {
      sentence[i] = sentence[i].toUpperCase();
    }
  }
  return sentence;
}
console.log(capitalizeWords("hello there how are you doing"));

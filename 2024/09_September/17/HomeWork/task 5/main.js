"use strict";

for (let i = 1; i <= 5; i++) {
  document.getElementById(`button${i}`).addEventListener("click", function () {
    alert(i);
  });
}

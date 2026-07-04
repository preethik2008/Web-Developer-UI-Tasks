
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

box.addEventListener("click", () => {

alert(box.querySelector("h3").textContent);

});

});
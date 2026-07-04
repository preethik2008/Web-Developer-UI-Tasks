const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

alert(button.textContent + " button clicked!");

});

});
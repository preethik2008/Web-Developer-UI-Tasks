const cards = document.querySelectorAll(".icon-card");

cards.forEach(card => {

card.addEventListener("click", () => {

const iconName = card.querySelector("p").textContent;

alert(iconName + " selected!");

});

});
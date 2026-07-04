// JavaScript goes here.
const colors = document.querySelectorAll(".color");

colors.forEach(card=>{

card.addEventListener("click",()=>{

alert(card.querySelector("span").textContent);

});

});
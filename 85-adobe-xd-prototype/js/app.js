const button = document.getElementById("nextBtn");

button.addEventListener("click", function(){

alert("Prototype Navigation Successful!");

});

const navItems = document.querySelectorAll(".nav");

navItems.forEach(item =>{

item.addEventListener("click",function(){

navItems.forEach(nav=>nav.classList.remove("active"));

this.classList.add("active");

});

});
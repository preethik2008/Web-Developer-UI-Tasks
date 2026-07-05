const installBtn = document.getElementById("installBtn");

installBtn.addEventListener("click",function(){

alert("PWA Install Prompt (Demo)");

});

const items = document.querySelectorAll(".nav-item");

items.forEach(item=>{

item.addEventListener("click",function(){

items.forEach(i=>i.classList.remove("active"));

this.classList.add("active");

});

});
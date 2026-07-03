const modal = document.getElementById("modal");

const openBtn = document.getElementById("openBtn");

const closeBtn = document.getElementById("closeBtn");

const okBtn = document.getElementById("okBtn");

openBtn.onclick = function(){

modal.style.display = "flex";

}

closeBtn.onclick = function(){

modal.style.display = "none";

}

okBtn.onclick = function(){

modal.style.display = "none";

}

window.onclick = function(event){

if(event.target == modal){

modal.style.display = "none";

}

}
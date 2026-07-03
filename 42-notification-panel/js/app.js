const notifications = document.querySelectorAll(".notification");
const badge = document.querySelector(".badge");

let count = notifications.length;

document.querySelectorAll(".close").forEach(button => {

button.addEventListener("click", function(){

this.parentElement.remove();

count--;

badge.textContent = count;

if(count === 0){

badge.textContent = "0";

}

});

});
const refreshBtn = document.getElementById("refreshBtn");
const requests = document.getElementById("requests");

refreshBtn.addEventListener("click", function(){

const value = Math.floor(Math.random()*3000)+1000;

requests.textContent = value.toLocaleString();

alert("Dashboard Updated!");

});
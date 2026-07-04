const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

button.textContent="☀️ Enable Light Mode";

}else{

button.textContent="🌙 Enable Dark Mode";

}

});
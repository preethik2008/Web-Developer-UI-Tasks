const loader = document.querySelector(".loader");
const button = document.getElementById("loadBtn");
const statusText = document.getElementById("status");

button.addEventListener("click", () => {

loader.style.display = "none";

statusText.textContent = "✅ Loading Complete!";

button.disabled = true;
button.textContent = "Completed";

});
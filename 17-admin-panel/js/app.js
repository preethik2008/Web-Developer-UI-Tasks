document.querySelectorAll(".edit").forEach(button=>{
button.addEventListener("click",()=>{
alert("Edit button clicked.");
});
});

document.querySelectorAll(".delete").forEach(button=>{
button.addEventListener("click",()=>{
alert("Delete button clicked.");
});
});

document.querySelector(".top-bar button").addEventListener("click",()=>{
alert("Add User clicked.");
});
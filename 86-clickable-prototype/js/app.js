const home = document.getElementById("home");
const course = document.getElementById("course");
const success = document.getElementById("success");

document.getElementById("startBtn").onclick = function(){

home.classList.remove("active");
course.classList.add("active");

}

document.getElementById("completeBtn").onclick = function(){

course.classList.remove("active");
success.classList.add("active");

}

document.getElementById("restartBtn").onclick = function(){

success.classList.remove("active");
home.classList.add("active");

}
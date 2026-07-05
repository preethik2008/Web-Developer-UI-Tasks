const screens = document.querySelectorAll(".screen");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showScreen(index){

screens.forEach(screen=>screen.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active-dot"));

screens[index].classList.add("active");
dots[index].classList.add("active-dot");

}

document.getElementById("next1").onclick=function(){
current=1;
showScreen(current);
}

document.getElementById("next2").onclick=function(){
current=2;
showScreen(current);
}

document.getElementById("startBtn").onclick=function(){
alert("Welcome to the Learning App!");
}
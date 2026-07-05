function updateTime(){

const now = new Date();

document.getElementById("time").textContent =
now.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

document.getElementById("date").textContent =
now.toLocaleDateString([],{
weekday:"long",
month:"long",
day:"numeric"
});

}

updateTime();

setInterval(updateTime,1000);

document.getElementById("refreshBtn").addEventListener("click",function(){

const heart = 70 + Math.floor(Math.random()*25);
const steps = 7000 + Math.floor(Math.random()*5000);
const calories = 400 + Math.floor(Math.random()*250);

document.getElementById("heartRate").textContent =
heart + " BPM";

document.querySelectorAll(".card p")[0].textContent =
steps.toLocaleString();

document.querySelectorAll(".card p")[1].textContent =
calories;

});
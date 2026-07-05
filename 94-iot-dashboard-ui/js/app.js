const refreshBtn = document.getElementById("refreshBtn");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");

refreshBtn.onclick=function(){

temp.textContent=(22+Math.floor(Math.random()*8))+"°C";
humidity.textContent=(45+Math.floor(Math.random()*25))+"%";

alert("Sensor data refreshed!");

}

const doorBtn=document.getElementById("doorBtn");
const door=document.getElementById("doorStatus");

doorBtn.onclick=function(){

if(door.textContent==="Locked"){
door.textContent="Unlocked";
}else{
door.textContent="Locked";
}

}
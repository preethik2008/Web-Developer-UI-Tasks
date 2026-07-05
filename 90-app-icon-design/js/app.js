document.getElementById("previewBtn").addEventListener("click",function(){

alert("App Icon Collection Ready!");

});

const cards=document.querySelectorAll(".icon-card");

cards.forEach(card=>{

card.addEventListener("click",function(){

this.style.transform="scale(1.05)";

setTimeout(()=>{
this.style.transform="";
},200);

});

});
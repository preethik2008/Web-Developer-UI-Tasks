document.getElementById("portfolioBtn").addEventListener("click",function(){

document.getElementById("projects").scrollIntoView({

behavior:"smooth"

});

});

document.querySelector("form").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent (Demo).");

this.reset();

});
document.getElementById("learnBtn").addEventListener("click",function(){

document.getElementById("services").scrollIntoView({

behavior:"smooth"

});

});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Your industrial project inquiry has been submitted successfully.");

this.reset();

});
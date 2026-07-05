document.getElementById("quoteBtn").addEventListener("click",function(){

document.getElementById("contact").scrollIntoView({

behavior:"smooth"

});

});

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! We'll contact you soon.");

this.reset();

});
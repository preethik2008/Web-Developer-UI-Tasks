const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("click", function(){

alert(this.innerText + " Button Clicked");

});

});
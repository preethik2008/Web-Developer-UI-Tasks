const input = document.getElementById("searchInput");

const button = document.getElementById("searchBtn");

const result = document.getElementById("resultText");

button.addEventListener("click", function(){

let text = input.value.trim();

if(text === ""){

result.innerHTML = "Please enter something to search.";

}

else{

result.innerHTML = "🔍 Searching for <b>" + text + "</b>...";

}

});

input.addEventListener("keypress", function(event){

if(event.key === "Enter"){

button.click();

}

});
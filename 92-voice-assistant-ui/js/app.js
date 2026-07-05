const micBtn = document.getElementById("micBtn");
const statusText = document.getElementById("status");
const reply = document.getElementById("reply");

const responses = [
"Hello! How can I help you today?",
"You can ask me about web development.",
"Let's build something amazing together.",
"Opening your learning dashboard...",
"Searching for the best resources..."
];

micBtn.addEventListener("click", function(){

statusText.textContent = "🎤 Listening...";

micBtn.textContent = "Listening...";

setTimeout(function(){

statusText.textContent = "Voice command received";

reply.textContent =
responses[Math.floor(Math.random()*responses.length)];

micBtn.textContent = "🎤 Start Listening";

},2000);

});
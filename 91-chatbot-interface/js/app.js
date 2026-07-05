const input = document.getElementById("messageInput");
const button = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

button.addEventListener("click", sendMessage);

input.addEventListener("keypress", function(e){

if(e.key==="Enter"){
sendMessage();
}

});

function sendMessage(){

const text = input.value.trim();

if(text==="") return;

const userMessage = document.createElement("div");

userMessage.className="message user";

userMessage.textContent=text;

chatBox.appendChild(userMessage);

input.value="";

setTimeout(()=>{

const botMessage=document.createElement("div");

botMessage.className="message bot";

botMessage.textContent="Thanks! I'm still a demo chatbot, but your message has been received.";

chatBox.appendChild(botMessage);

chatBox.scrollTop=chatBox.scrollHeight;

},700);

chatBox.scrollTop=chatBox.scrollHeight;

}
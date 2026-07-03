const contacts = document.querySelectorAll(".contact");
const chatHeader = document.querySelector(".chat-header h3");
const status = document.querySelector(".chat-header p");
const chatImage = document.querySelector(".chat-header img");
const messages = document.querySelector(".messages");
const input = document.querySelector("input");
const sendBtn = document.getElementById("sendBtn");

const chats = {
    "Emma": {
        status: "Online",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        messages: [
            {type:"received", text:"Hello! 👋"},
            {type:"sent", text:"Hi Emma, how are you?"},
            {type:"received", text:"I'm doing great! Working on my UI project."},
            {type:"sent", text:"Awesome! Good luck 😊"}
        ]
    },
    "David": {
        status: "Online",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        messages: [
            {type:"received", text:"Hey! Are you free today?"},
            {type:"sent", text:"Yes, what's up?"},
            {type:"received", text:"Let's meet after class."}
        ]
    },
    "Sophia": {
        status: "Offline",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        messages: [
            {type:"received", text:"Don't forget tomorrow's meeting."},
            {type:"sent", text:"Sure! I'll be there."}
        ]
    }
};

function loadChat(name){
    chatHeader.textContent = name;
    status.textContent = chats[name].status;
    chatImage.src = chats[name].image;

    messages.innerHTML = "";

    chats[name].messages.forEach(msg=>{
        const div = document.createElement("div");
        div.className = msg.type;
        div.textContent = msg.text;
        messages.appendChild(div);
    });

    contacts.forEach(c=>c.classList.remove("active"));
    [...contacts].find(c=>c.querySelector("h4").textContent===name).classList.add("active");
}

contacts.forEach(contact=>{
    contact.addEventListener("click",()=>{
        const name = contact.querySelector("h4").textContent;
        loadChat(name);
    });
});

sendBtn.addEventListener("click",()=>{
    if(input.value.trim()!==""){
        const div=document.createElement("div");
        div.className="sent";
        div.textContent=input.value;
        messages.appendChild(div);
        input.value="";
        messages.scrollTop=messages.scrollHeight;
    }
});

loadChat("Emma");
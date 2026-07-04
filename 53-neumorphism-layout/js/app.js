const play = document.getElementById("play");

let playing = false;

play.addEventListener("click", () => {

playing = !playing;

play.textContent = playing ? "⏸" : "▶";

});
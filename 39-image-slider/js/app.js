const images = [
"https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop"
];

let current = 0;

const slide = document.getElementById("slide");

function showImage(){
    slide.src = images[current];
}

function next(){
    current = (current + 1) % images.length;
    showImage();
}

function previous(){
    current = (current - 1 + images.length) % images.length;
    showImage();
}

// Auto-slide every 3 seconds
setInterval(next, 3000);
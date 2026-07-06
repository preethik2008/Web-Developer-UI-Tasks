/*==================================
        DRIBBBLE SHOWCASE
==================================*/

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Preethi | Dribbble Showcase`;
}

/*==================================
        FADE-IN ANIMATION
==================================*/

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition=".7s";

    observer.observe(card);

});

/*==================================
        CARD HOVER
==================================*/

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/*==================================
        BUTTON RIPPLE
==================================*/

const btn=document.querySelector(".btn");

if(btn){

btn.addEventListener("click",function(e){

e.preventDefault();

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="scale(1)";

},150);

alert("Thanks for visiting my Dribbble Showcase!");

});

}

/*==================================
        PAGE LOAD
==================================*/

window.addEventListener("load",()=>{

console.log("Dribbble Showcase Loaded Successfully 🚀");

});
/*==================================
        CLIENT PRESENTATION
==================================*/

// Update Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Preethi | Client Presentation`;
}

/*==================================
        SMOOTH SCROLL
==================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================
        SCROLL ANIMATION
==================================*/

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.7s";

    observer.observe(card);

});

/*==================================
        CARD HOVER EFFECT
==================================*/

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/*==================================
        BUTTON EFFECT
==================================*/

const button = document.querySelector(".btn");

if(button){

button.addEventListener("click",()=>{

    button.style.transform="scale(.95)";

    setTimeout(()=>{

        button.style.transform="scale(1)";

    },150);

});

}

/*==================================
        PAGE LOADED
==================================*/

window.addEventListener("load",()=>{

    console.log("✅ Client Presentation Loaded Successfully");

});
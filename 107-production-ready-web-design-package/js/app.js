/*==================================
    PRODUCTION READY WEB DESIGN PACKAGE
==================================*/

/*============ FOOTER YEAR ============*/

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${new Date().getFullYear()} Preethi | Production Ready Web Design Package`;
}

/*============ SMOOTH SCROLL ============*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*============ SCROLL ANIMATION ============*/

const animatedItems = document.querySelectorAll(

".card,.project,.price-card,.feature,.hero-left,.hero-right"

);

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

animatedItems.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="all .7s ease";

    observer.observe(item);

});

/*============ CARD HOVER EFFECT ============*/

document.querySelectorAll(".card,.project,.price-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/*============ CONTACT FORM ============*/

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you! Your message has been submitted successfully.");

form.reset();

});

}

/*============ ACTIVE NAVIGATION ============*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*============ SCROLL TO TOP BUTTON ============*/

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="↑";

scrollBtn.className="scrollTop";

document.body.appendChild(scrollBtn);

scrollBtn.style.position="fixed";
scrollBtn.style.right="25px";
scrollBtn.style.bottom="25px";
scrollBtn.style.width="50px";
scrollBtn.style.height="50px";
scrollBtn.style.border="none";
scrollBtn.style.borderRadius="50%";
scrollBtn.style.background="#4e342e";
scrollBtn.style.color="#fff";
scrollBtn.style.cursor="pointer";
scrollBtn.style.display="none";
scrollBtn.style.fontSize="20px";
scrollBtn.style.boxShadow="0 10px 25px rgba(0,0,0,.25)";
scrollBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="block";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*============ PAGE LOADED ============*/

window.addEventListener("load",()=>{

console.log("🚀 Production Ready Web Design Package Loaded Successfully!");

});
/*==================================
        BEHANCE PORTFOLIO
==================================*/

// Update Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Preethi | Behance Showcase`;
}

// Smooth Fade-in Animation
const cards = document.querySelectorAll(".card, .service-card, .stat");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
});

// Gallery Card Hover Effect
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Behance Portfolio Loaded Successfully!");
});
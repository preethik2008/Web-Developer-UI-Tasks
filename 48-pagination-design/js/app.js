const pages = document.querySelectorAll(".page");
const text = document.getElementById("pageText");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentPage = 1;

function updatePage(page) {
    currentPage = page;

    pages.forEach(btn => btn.classList.remove("active"));
    pages[currentPage - 1].classList.add("active");

    text.textContent = "Current Page : " + currentPage;
}

pages.forEach((button, index) => {
    button.addEventListener("click", () => {
        updatePage(index + 1);
    });
});

prev.addEventListener("click", () => {
    if (currentPage > 1) {
        updatePage(currentPage - 1);
    }
});

next.addEventListener("click", () => {
    if (currentPage < pages.length) {
        updatePage(currentPage + 1);
    }
});
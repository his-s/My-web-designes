const navbarEl = document.querySelector(".navbar");
const bottomContainerEL = document.querySelector(".bottom-container");
console.log(navbarEl);
window.addEventListener("scroll", () => {
    if (window.scrollY > bottomContainerEL.offsetTop - navbarEl.offsetHeight - 20) {
        navbarEl.classList.add("active");
    } else {
        navbarEl.classList.remove("active");
    }
});
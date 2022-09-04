const bgImageEl = document.getElementById("bg-image");
const containerEl = document.querySelector(".container");
window.addEventListener("scroll", () => {

    updateImage();
});
function updateImage() {

    bgImageEl.style.opacity = 1 - window.pageYOffset / 800;
    bgImageEl.style.backgroundSize = 160 + window.pageYOffset / 10 + "%";
}

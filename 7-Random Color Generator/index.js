const containerEL = document.querySelector(".container");

for (let index = 0; index < 300; index++) {

    const colorContainerEL = document.createElement("div");
    colorContainerEL.classList.add("color-container");
    containerEL.appendChild(colorContainerEL);




}
function randomColor() {
    var rColor = Math.floor(Math.random() * 16777215).toString(16);
    if (rColor.length !== 6) {
        return rColor + "1";
    }
    return rColor;
}
const colorContainerEls = document.querySelectorAll(".color-container");
function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const colorCode = "#" + randomColor();
        colorContainerEl.style.backgroundColor = colorCode;
        colorContainerEl.innerText = colorCode;
    });
}
generateColors();
var gg = Math.floor(Math.random() * 16777215);
console.log(gg);
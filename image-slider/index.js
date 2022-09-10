const container = document.querySelector(".container");
const previous = document.getElementById("previous");
const forward = document.getElementById("forward");
const imageSlider = document.querySelector(".image-slider");
let colors = [

];
for (let index = 0; index < 100; index++) {
    colors.push(`https://picsum.photos/id/${index}/500/300?random=3`);

}

let index = 0;
container.style.backgroundImage = `url(${colors[index]})`;
setInterval(() => {
    if (index < colors.length - 1) {
        index += 1;
        updateImage(colors[index]);
    } else {
        index = 0;
        updateImage(colors[index]);
    }
}, 10000);
function updateImage(url) {
    container.style.backgroundImage = `url(${url})`;
}
previous.addEventListener("click", () => {
    index = index > 0 ? index -= 1 : index
    updateImage(colors[index]);

});
forward.addEventListener("click", () => {
    index = index < colors.length - 1 ? index += 1 : index
    updateImage(colors[index]);

});




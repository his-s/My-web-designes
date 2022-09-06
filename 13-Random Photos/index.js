const imgContainerEl = document.querySelector(".img-container");
const loadMoreBtn = document.querySelector(".btn");
let imgsCount = 20;
function createImg(imgsCount) {
    for (let index = 0; index < imgsCount; index++) {
        let img = document.createElement("img");
        img.src = `https://picsum.photos/300?random=${index}`;
        imgContainerEl.appendChild(img);
    }


}
createImg(imgsCount);

loadMoreBtn.addEventListener("click", () => {

    imgsCount += 10;

    createImg(imgsCount);


});

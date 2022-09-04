const btnEl = document.querySelector(".btn");
const closeIconEL = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");
btnEl.addEventListener("click", (event) => {
    trailerContainerEl.classList.remove("active");
});
closeIconEL.addEventListener("click", (event) => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
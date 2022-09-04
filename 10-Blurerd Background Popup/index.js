const containerEl = document.querySelector(".container");
const popContainerEl = document.querySelector(".popup-container");
const buttonEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");

buttonEl.addEventListener("click", (event) => {
    containerEl.classList.add("active");
    popContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", (event) => {
    popContainerEl.classList.add("active");
    containerEl.classList.remove("active");

});
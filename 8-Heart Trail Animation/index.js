const bodyEL = document.querySelector("body");
bodyEL.addEventListener("mousemove", (event) => {
    const yPos = event.offsetY;
    const xPos = event.offsetX;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEL.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 1000);
});
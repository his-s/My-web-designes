const btnEL = document.querySelector(".btn");
btnEL.addEventListener("mouseover", (event) => {
    const posX = event.pageX - btnEL.offsetLeft;
    const posY = event.pageY - btnEL.offsetTop;
    btnEL.style.setProperty("--xPos", posX + "px");
    btnEL.style.setProperty("--yPos", posY + "px");
});
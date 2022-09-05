const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

for (let index = 0; index < 10; index++) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = `key ${index + 1}`;
    container.appendChild(btn);
    const audioEl = document.createElement("audio");
    audioEl.src = `./sounds/key${index < 9 ? "0" : ""}${index + 1}.mp3`
    container.appendChild(audioEl);
    btn.addEventListener("click", () => {
        audioEl.play();
    });
    window.addEventListener("keydown", (event) => {
        if (event.key == index.toString()) {
            audioEl.play();
            btn.style.transform = "scale(.9)";
            setTimeout(() => {
                btn.style.transform = "scale(1)";
            }, 100);
        }
    });
}

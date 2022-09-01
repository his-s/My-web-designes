const textareaEL = document.getElementById("textarea");
const totalEL = document.getElementById("total");
const remainEL = document.getElementById("remain");
function updateCounter() {
    totalEL.innerText = textareaEL.value.length;
    remainEL.innerText = textareaEL.getAttribute("maxLength") - textareaEL.value.length
}
textareaEL.addEventListener(("keyup"), (e) => {
    updateCounter();

});

updateCounter();
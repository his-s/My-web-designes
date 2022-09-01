const inputEL = document.getElementById("input");
const totalEL = document.getElementById("total");
const remainEL = document.getElementById("remain");
let currentValue = 0;
console.log(inputEL.value);
totalEL.innerText = 0;
remainEL.innerText = 50;
inputEL.addEventListener(("change"), (e) => {
    currentValue = e.target.value.length;
    console.log(e.target.value);
    if (currentValue) {
        totalEL.innerText = currentValue;
        remainEL.innerText = 50 - currentValue;

    } else {
        totalEL.innerText = 0;
        remainEL.innerText = 50;
    }
});

const decreaseButton = document.getElementById("btn-decrease");
const resetButton = document.getElementById("btn-reset");
const increaseButton = document.getElementById("btn-increase");

const counterText = document.querySelector(".counter");

let counter = 0;

decreaseButton.addEventListener("click", function() {

    counter--;
    counterText.textContent = counter;
});

resetButton.addEventListener("click", function() {

    counter = 0;
    counterText.textContent = counter;
});

increaseButton.addEventListener("click", function() {

    counter++;
    counterText.textContent = counter;
});


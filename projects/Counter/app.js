/* The way I did it at first sight

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
*/

//After seeing the final code (much better, hehehe)

let counter = 0;

const counterText = document.querySelector(".counter");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const buttonType = e.currentTarget.classList;
        if(buttonType.contains('decrease')){
            counter--;
        }
        else if(buttonType.contains('increase')){
            counter ++;
        }
        else {
            counter = 0;
        }

        if(counter < 0){
            counterText.style.color = "red";
        }
        else if (counter > 0){
            counterText.style.color = "green";
        }
        else if (counter === 0 ){
            counterText.style.color = "black"
        }

        counterText.textContent = counter; 
    })
})





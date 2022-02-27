const colors = ['red', 'green', 'blue', 'grey', 'yellow', 'rgba(123,098,245)', '#f0f5f9', '#6d32a8', 'rgba(50,148,168)'];
const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() *colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
 });
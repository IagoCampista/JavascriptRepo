//click Event

let cont = 1;

const h3 = document.createElement('h3');
h3.textContent = cont;
document.body.appendChild(h3);

const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    cont ++;
    h3.textContent = cont; 
})

function helloWorld() {
    console.log('hello world');
}

const btnHello = document.querySelector('.btnHello');
btnHello.addEventListener('click', helloWorld);
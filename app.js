//submit event listener

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // pra nao dar refresh na pagina e perder os valores digitados
    console.log('form submmited');
    //podemos acessar os valores do form da seguinte maneira usando o .value
    console.log(email.value); 
    console.log(password.value);
});
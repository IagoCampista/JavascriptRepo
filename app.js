const first = document.querySelector('.first');//seleciona o elemento
const idValue = first.getAttribute('id');// com o elemento em "maos", temos acesso aos outro atibutos dele
console.log(idValue);// É printado  - special -


const link = document.getElementById('link');//seleciono o elemento
const showLink = link.getAttribute('href');//seleciona o atributo do elemento
console.log(showLink);//mostra o atributo em questao; é printado "first.html"

const last = link.nextElementSibling; //seleciona o elemento nesse caso o logo apos o link, "o 2 li"
last.setAttribute('class', 'first'); // "seta" uma classe chamada first a este elemento
last.textContent = `i also have a class of first`; //mostrando que tbm é possível mudar o valor do texto do elemento
console.log(last);// é printado um li com a classe first, conforme setadop acima


const links = document.querySelectorAll('.first'); //seleciona todos os elemento com classe "first" nele
console.log(links); // nesse caso mostra 2 li, 1 com id special e o outro nao conforme feita as alteracoes acima
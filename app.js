//clasName
//classList

const first = document.getElementById('first');//seleciona o elemento
const classValue = first.className; //obtem a classe dele
console.log(classValue); //é printado "text"


const second = document.getElementById('second');//seleciona o elemento
second.className = 'colors text'; // é possível adicionar mais de uma classe a um mesmo elemento com o className, mas isso nao é remonedado


const third = document.getElementById('third'); //seleciona o elemento
third.classList.add('text', 'colors'); // melhor solucao para adicionar e modificar classes de um elemento. basta separalos por ","
third.classList.remove('text'); // para remover uma classe, tbm funciona com multiplas, usando as ","
let result = third.classList.contains('colors'); //retorna um boolenao com vdd se o elemento em questao tiver a classe passada como argumento
console.log(result); // printa true
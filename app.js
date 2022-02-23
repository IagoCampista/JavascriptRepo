//innerHTML

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

console.log(list.textContent);

const randomVar = 'random item list';

const ul = document.createElement('ul'); // cria um elemento ul vazio
ul.innerHTML = `<li class="item">${randomVar}
<li>list item 2</li> <li>list item 3</li>`; // edita o html do elemento e usando os backticks podemos ate incluir variaveis
document.body.appendChild(ul); // adiciona o item criado no final do body 
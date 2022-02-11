//createElement ('Element')
//createTextNode('text content')
//element.appendChild(childElement) 

const result = document.querySelector('#result'); //seleciona o elemento com id result - a div

const bodyDiv = document.createElement('div'); //cria um elemento vazio
const text = document.createTextNode('a simple body div'); // cria um textNode
bodyDiv.appendChild(text); // adiciona o textNode ao elemento criado "bodyDiv"
document.body.appendChild(bodyDiv); //o bodyDiv criado "gets appended" - é inserido - ao elemento body

//outro exemplo com appendChild
// const heading = document.createElement('h2'); //cria um elemento vazio
// const headingText = document.createTextNode('subtitulo criado dinamicamente'); // cria um textNode
// heading.appendChild(headingText); // adiciona o textNode ao elemento criado
// heading.classList.add('blue'); //adiciona a classe 'blue' ao elemento criado
// result.appendChild(heading); //insere o elemento criado como filho do elemento result selecionado la em cima


//insertBefore(element, location);
const first = document.querySelector('.red'); // seleciona o ate entao primeiro elemento da div que tem a classe red
const heading = document.createElement('h2'); //cria um elemento vazio
const headingText = document.createTextNode('subtitulo criado dinamicamente'); // cria um textNode
heading.appendChild(headingText); // adiciona o textNode ao elemento criado
heading.classList.add('blue'); //adiciona a classe 'blue' ao elemento criado
result.insertBefore(heading, first); //insere o elemento heading criado antes do elemento assinalado como first "o h1 nesse caso"


//replaceChild (new, old)
const smallHeading = document.createElement('h6'); //cria um h6 vazio
const smallText = document.createTextNode(`i'm a small heading text`); // cria um text node
smallHeading.classList.add('red'); //adiciona a classe 'red' ao element
smallHeading.appendChild(smallText); //adiciona o textNode ao elemento criado
document.body.replaceChild(smallHeading, bodyDiv); //substitui o bodyDiv criado pelo novo elemento criado h6
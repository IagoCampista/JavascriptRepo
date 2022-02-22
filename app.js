//prepend - place the element in the beginning of a referal element
//innerText

const heading = document.createElement('h2'); //cria um elemento h2 vazio
heading.innerText = `i am a dynamic heading`; // seta o texto do elemento criado heading como a string informada
document.body.prepend(heading); //coloca o elemento criado headinf no inicio do body
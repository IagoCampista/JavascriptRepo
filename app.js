//currentTarget
//usado para refernciar o elemento alvo do EventListener

const btn = document.querySelector('.btn'); // seleciona o botao

btn.addEventListener('click', function(event){ //adiciona o evento como parametro da funcao
    event.currentTarget.classList.add('title'); // o event.currentTarget é o elemento ao qual o addEventListener foi chamado
});
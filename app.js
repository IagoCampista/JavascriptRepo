//JSON.stringify() , JSON.parse()
//usamos para salvar dados que nao sao uma string simples, como nesse caso é um array

const friends = ['john', 'arthur', 'thomas'];

localStorage.setItem('friends', JSON.stringify(friends)); //na hora de salvar é preciso uusar o stringfy

const values = JSON.parse(localStorage.getItem('friends')); // na hora de acessar o valor é preciso usar o parse
console.log(values);

//parei em 10:18:11
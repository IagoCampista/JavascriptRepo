const name = 'John';
const age = 25;
const sentence = "Hey it's " + name + ' and he is ' + age + ' years old';
console.log(sentence);
//são equivalentes
const senteceBacktick = `Hey it's ${name} and he is ${age} years old`;
console.log(senteceBacktick);
//Web Storage API - provided by browser
// types : sessionStorage , localStorage
//properties/ methods: setItem, getItem, removeItem, clear


//how to set a new item
localStorage.setItem('friend', 'peter');
localStorage.setItem('job', 'QA');
localStorage.setItem('addres', '23 jump street');
localStorage.setItem('firstName', 'john');

const firstName = localStorage.getItem('firstName'); //get the value from a item
console.log(firstName);
localStorage.removeItem('firstName');//remove a item by its keyword
const anotherName = localStorage.getItem('firstName');
console.log(anotherName);
localStorage.clear(); //clear all data stored in local Storage

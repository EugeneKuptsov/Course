let a = +prompt('Please type first number', '');
let b = +prompt('Please type second number', '');

a = isFinite(a) ? a : 0;
b = isFinite(b) ? b : 0;

alert( a + b );
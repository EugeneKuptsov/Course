let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


function getAverageAge(array) {

    if (array.length == 0) return 0;

    return array.reduce((prev, current) => prev + current.age, 0) / array.length;

}

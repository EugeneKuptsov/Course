let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let usersArr = [ vasya, petya, masha ];

sortByAge(usersArr);

// теперь: [vasya, masha, petya]
console.log(usersArr[0].name); // Вася
console.log(usersArr[1].name); // Маша
console.log(usersArr[2].name); // Петя


function sortByAge (arr) {

    return arr.sort((a, b) => a.age - b.age );

}
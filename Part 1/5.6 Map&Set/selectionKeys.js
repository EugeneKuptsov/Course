let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
let arr = Array.from(keys).slice();
arr.push("more");

console.log(arr);
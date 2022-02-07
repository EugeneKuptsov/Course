let user = {
   name: "Василий Иванович",
   age: 35
};

let json = JSON.stringify(user, null, 4);
console.log(json);

let obj = JSON.parse(json);
console.log(obj);

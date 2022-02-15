let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

// по имени (Ann, John, Pete)
//users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
//users.sort((a, b) => a.age > b.age ? 1 : -1);

console.log( JSON.stringify(users.sort(byField('name'))) );
console.log( JSON.stringify(users.sort(byField('age'))) );


function byField (fieldName) {

    return function (a, b) {
        return (a[fieldName] > b[fieldName] ? 1 : -1);
    };

}

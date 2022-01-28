let user = {};

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';

console.log(user['name']);

delete user.name;

console.log(user['name']);

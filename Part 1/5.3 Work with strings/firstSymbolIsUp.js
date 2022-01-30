let name = 'vasya';

console.log (ucFirst(name));

function ucFirst(str) {

    //return str[0].toUpperCase() + str.slice(1);
    //return str.charAt(0).toUpperCase() + str.slice(1);
    return str.slice(0, 1).toUpperCase() + str.slice(1);

} 
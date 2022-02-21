console.log( sum(1)(2) ); //= 3
console.log( sum(5)(-1) );  // = 4



function sum(a) {
    return function(b) {
        return a + b;
    }
}
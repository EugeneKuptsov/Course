
console.log( randomize (1, 3) );

function randomize(a, b) {
    a -= 0.5;
    b += 0.5; 
    return Math.round( a + Math.random() * (b - a) );
}

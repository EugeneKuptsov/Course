
console.log( randomize (2, 5) );

function randomize(a, b) {
    //min value + random (b - a) 
    return a + Math.random() * (b - a);
}

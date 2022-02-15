let from = 1;
let to = 10; 

printNumbers(from, to);
printNumbersRecurce(from, to);


function printNumbers(a, b) {

    let timerID = setInterval(() => {
        if (b >= a) {
            console.log(a);
            a++;
        } else {
            clearInterval(timerID);
        } ;
    }, 1000);

}

function printNumbersRecurce(a, b) {

    let timerID = setTimeout(function func() {
        if (b >= a) {
            console.log(a);
            a++;
            timerID = setTimeout(func, 1000);
        } else {
            clearTimeout(timerID);
        } ;
    }, 1000);

}
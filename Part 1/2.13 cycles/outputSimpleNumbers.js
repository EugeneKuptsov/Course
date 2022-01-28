
let n = +prompt('Enter number', '');
let simple;
let resultString = '';

for (let i = 2; i <= n; i++) {

    simple = true;

    for (let j = 2; j < i; j++) {

        if (i%j == 0 ) {
            simple = false;
            break;
        }        

    }

    if (simple) {
        resultString += String(i) + ', ';
    }
}

alert(resultString);
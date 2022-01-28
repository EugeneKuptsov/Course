let x = +prompt('Enter number 1', '');
let n = +prompt('Enter number 1', '');


alert(pow(x,n));

function pow (x, n){    
    let result = x;

    for (i = 1; i < n; i++) {
    
        result *= x;
    
    }
    return result;

}

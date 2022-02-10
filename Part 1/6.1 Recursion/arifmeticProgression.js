function sumTo1(n) { 
    
    let sum = 0;
    for (let i = 1; i <= n ; i++) {
        sum += i;
    };
    return sum;
 }
function sumTo2(n) { 
    
    return (1 + n) / 2 * n; 

 }

 function sumTo3(n) { 

    if (n == 0 ) {
        return n;       
    } else {
        return n + sumTo3(n - 1);
    }

  }

console.log( sumTo1(100) ); // 5050
console.log( sumTo2(100) );
console.log( sumTo3(100) );
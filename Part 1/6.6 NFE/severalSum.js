console.log(sum(1)(2).toString()); // 1 + 2
console.log(sum(1)(2)(3).toString()); // 1 + 2 + 3
console.log(sum(5)(-1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());



function sum (num) {

    if (sum.accumulate == undefined) {
        sum.accumulate = 0;    
    }; 
    
    sum.toString = function() {
        let value = sum.accumulate;
        sum.accumulate = 0;
        return value;
    }


    sum.accumulate += num;
    return sum;     

 }
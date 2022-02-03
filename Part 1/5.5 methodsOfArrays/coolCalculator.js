let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3");

console.log( result );

function Calculator() {
    
    this.methods = [{"description": "+", "expression": (a, b) => a + b}];
    this.addMethod = (description, expression) => this.methods.push({"description": description, "expression": expression});    
    this.calculate = function(str) {
        arr = str.split(' ');
        method = this.methods.find(item => item.description === arr[1]);
        
        if (method != undefined) {
            return method.expression(+arr[0], +arr[2]);
        }

        return 0;
    };


}
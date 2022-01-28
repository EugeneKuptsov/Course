function Calculator() {

    this.read = function() {
        //this.x = +prompt('Введите число 1', 0);
        //this.y = +prompt('Введите число 2', 0); 
        this.x = 2;
        this.y = 3;       
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };


}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
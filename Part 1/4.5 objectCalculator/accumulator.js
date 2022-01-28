function Accumulator (startingValue) {

    this.result = startingValue;
    this.read = function() {
        add = +prompt('Enter number for add', 0);
        this.result += add;
        //return this;    
    };

}

let accumulator = new Accumulator(3);

accumulator.read();
accumulator.read();

alert(accumulator.result);
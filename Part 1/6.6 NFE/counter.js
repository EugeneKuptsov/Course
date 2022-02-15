
function Count() {
    
    Count.counter = 0;

    Count.counterFunc = function (){
        return ++Count.counter; 
    };

    Count.counterSet = function(value) {
        return Count.counter = value;
    };

    Count.counterDecrease = function () {
        return --Count.counter;
    };
    
    return Count;
}


makeCount = Count();
console.log( makeCount.counterFunc() );
console.log( makeCount.counterSet(10) );
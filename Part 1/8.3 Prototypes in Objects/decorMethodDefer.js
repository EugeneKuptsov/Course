function f(a, b) {
    console.log(a + b);
  }
 
Function.prototype.defer = function(ms) {
    return function(a,b) { 
        setTimeout(f, ms, a, b);
    }
}
f.defer(1000)(1, 2); 
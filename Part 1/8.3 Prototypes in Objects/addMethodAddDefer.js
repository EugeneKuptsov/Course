function f() {
    console.log("Hello!");
  }
//Function.prototype.defer = 
f.__proto__.defer = function() {
    setTimeout(this, 1000);
}

f.defer(1000); // выведет "Hello!" через 1 секунду
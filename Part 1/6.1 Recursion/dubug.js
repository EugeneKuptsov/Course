function f() {
    let value = Math.random();
  
    function g() {
      debugger; // в консоли: напишите alert(value); Такой переменной нет!
      console.log(value);  
    }
  
    return g;
  }
  
  let g = f();
  g();
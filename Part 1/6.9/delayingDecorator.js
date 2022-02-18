function f(x) {
    console.log(x);
  }
  
  // создаём обёртки
  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);
  
  f1000("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс


  function delay(func, pause) {

    return function() {

        timerID = setTimeout(call, pause, func, arguments);        

    }

  }

  function call(f, args) {
    return f.apply(this, args);
  }
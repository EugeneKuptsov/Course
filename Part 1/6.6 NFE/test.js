function makeCounter() {
    // вместо
    // let count = 0
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
  
    return counter;
  }
  
  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
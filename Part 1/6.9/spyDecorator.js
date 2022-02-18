
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }


  function work(a, b) {
    console.log( a + b ); // произвольная функция или метод
  }

function spy(func) {

    let calls = [];
    return function a() {

        a.calls = calls;
        //calls.push([].join.call(arguments));
        calls.push(Array.from(arguments)); 
        func.apply(this, arguments);
        
    };

}
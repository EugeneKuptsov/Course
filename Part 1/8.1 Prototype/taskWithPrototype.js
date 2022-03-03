let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? (1) //true 
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? (2) //null 
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? (3) //undefined
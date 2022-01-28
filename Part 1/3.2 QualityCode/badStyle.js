let x = prompt("x?",''), 
    n = prompt("n?",'');

if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
  return;
}

alert( pow(x, n) );
return; 


function pow (x, n) {
  
  let result = 1;

  for(let i = 0; i < n; i++) {
      result *= x;
  }
  
  return result;

}


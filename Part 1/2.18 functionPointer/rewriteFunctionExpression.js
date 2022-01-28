var i = 1;
console.log('value', i);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);



//var2
let ask=(question, yes, no) => confirm("Вы согласны?") ?
alert("Вы согласились."):
alert("Вы отменили выполнение.");

ask();
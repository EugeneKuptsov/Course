let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  printList(list);
  printList1(list);


  function printList(list) {

    let arr = [];
    while (list != null) {
        arr.push(list.value);
        list = list.next;
    }; 

    arr.reverse().forEach( (value) => console.log(value) );

  }

  function printList1(list) {

    if (list != null) {
        printList1(list.next);
        console.log(list.value);
    }
 
  }


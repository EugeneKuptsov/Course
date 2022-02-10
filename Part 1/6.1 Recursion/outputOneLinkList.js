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

    while (list != null) {
        console.log(list.value);
        list = list.next;
    }; 

  }

  function printList1(list) {

    if (list != null) {
        console.log(list.value);
        printList1(list.next);
    }
 
  }


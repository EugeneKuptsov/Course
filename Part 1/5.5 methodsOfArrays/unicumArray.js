function unique(arr) {

    for (i = 0; i < arr.length; i++) {
        
        index = arr.indexOf(arr[i], i + 1);
        if ( index >= 0) {
            arr.splice(index, 1);
            i--;
        }        

    }
 
    return arr;
}
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O
console.log( fib(77) );


function fib (n) {

    let list = {
            prev: null, 
            value: 1}
            ;
    list = {
        prev: list, 
        value: 1
        };
                
    for (i = 3; i <= n ; i++) {

        list = {
            prev: list,
            value : list.value + list.prev.value
        };           

    };

    return list.prev.value + list.prev.prev.value;
}
let f = debounce(alert, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)


function debounce(func, ms) {

    function wrapper() {
        //if (wrapper.lastAlert == undefined) {
        //    wrapper.lastAlert = Date.now - ms;    
        //}
        if ((Date.now() - wrapper.lastAlert) > ms) {
            wrapper.lastAlert = Date.now();
            func.apply(this, arguments);        
        }
        
    }
    wrapper.lastAlert = new Date(0);
    return wrapper;
}

function alert(text) {
    console.log(text);
}
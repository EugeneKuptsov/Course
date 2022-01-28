// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

for (let prop in menu) {
    console.log(menu[prop]);
}

function multiplyNumeric(obj) {

    for (let prop in obj) {
   
        if (typeof obj[prop] == 'number') {
            obj[prop] *= 2;   
        }        

    }

}
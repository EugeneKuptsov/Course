
alert(sumInput());

function sumInput() {
    
    let arrNum = [];

    do {
        num = prompt('please, enter number', '');
        if (num == null
            || num == ''
            || isNaN(num)) {
            break;
        };

        arrNum.push(+num);

    } while (true);

    let sum = 0;
    for (let elem of arrNum) {
        sum += elem;
    }

    return sum;
}

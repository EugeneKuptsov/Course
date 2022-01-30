
//let num = readNumber();

alert(`Number: ${readNumber()}`);

function readNumber() {
    
    let userNum;
    
    do {

        userNum = prompt('Please type any number');
       
        if (userNum == '') {
            continue;
        };

        if ( isFinite(userNum) || (userNum === null) ) {
            return +userNum;        
        };

    } while (true);
}
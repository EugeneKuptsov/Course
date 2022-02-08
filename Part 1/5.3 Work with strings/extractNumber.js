console.log( extractCurrencyValue('$120')  ); // true

function extractCurrencyValue(str) {

    let numInStr = '';
    for (let char of str) {
        
        if (char.codePointAt(0) >= 48 && char.codePointAt(0) <= 57) {
            numInStr += char;        
        };

    };

    return numInStr;

} 
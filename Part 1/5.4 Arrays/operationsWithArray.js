let styles = ["Jazz", "Blues"];

styles.push("Rock-n-roll");

centralElem = Math.trunc( (styles.length - 1) / 2 );
styles[centralElem] = "Classic";

console.log( styles.shift() );

styles.unshift("Rap", "Reggae");

console.log(styles);
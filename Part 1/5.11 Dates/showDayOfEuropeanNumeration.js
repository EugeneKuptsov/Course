let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getLocalDay(date) );       // вторник, нужно показать 2


function getLocalDay(userDate) {

    let arrayOfNumbers = [7,1,2,3,4,5,6];

    return arrayOfNumbers[userDate.getDay()];

}
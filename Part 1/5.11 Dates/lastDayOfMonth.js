console.log( getLastDayOfMonth(2012, 1) );

function getLastDayOfMonth(year, month) {

    let date = new Date(year, month, 28);
    do {
        currentDay = date.getDate();
        date.setDate(currentDay + 1);    
        if (month != date.getMonth()) {
            return currentDay;
        }

    } while (true); 
}

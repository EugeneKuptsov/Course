let ourDate = new Date(2022, 1, 6);  // 3 января 2012 года
console.log( getWeekDay(ourDate) ); 

function getWeekDay(date) {

    dayOfWeek = date.getDay();
    switch (dayOfWeek) {
        case 0 : {
            return "SUN";
        }  
        case 1 : {
            return "MON";
        }
        case 2 : {
            return "TUE";
        }
        case 3 : {
            return "WED";
        }
        case 4 : {
            return "THU";
        }
        case 5 : {
            return "FRI";
        }
        case 6 : {
            return "SAT";
        }
 
    }

}


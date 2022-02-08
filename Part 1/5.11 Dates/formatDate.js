console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );



function formatDate(userDate) {

    now = new Date();
    sec = Math.ceil((now - userDate) / 1000);


    if (sec <= 1) { 
        return 'Right now';
    } else if (sec <= 60) {
        return `${sec} seconds have passed`;
    } else if (sec <= 3600) {
        return `${Math.round(sec / 60)} minutes have passed`;     
    } else {
        let day = userDate.getDate().toString().length == 1 ? "0" + userDate.getDate().toString() : userDate.getDate().toString();
        let month = (userDate.getMonth() + 1).toString().length == 1 ? "0" + (userDate.getMonth() + 1).toString() : (userDate.getMonth() + 1).toString();
        let year = userDate.getFullYear().toString().slice(2);        
        let hours = userDate.getHours().toString().length == 1 ? "0" + userDate.getHours().toString() : userDate.getHours().toString();
        let seconds = userDate.getSeconds().toString().length == 1 ? "0" + userDate.getSeconds().toString() : userDate.getSeconds().toString(); 
        return `${day + "." + month + "." + year + " " + hours + ":" + seconds}`;     
    };


}


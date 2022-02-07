console.log( SecondsToTomorrow() );

function SecondsToTomorrow() {

    dateNow = new Date();

    dateTomorrow = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 1);
    
    return Math.floor((dateTomorrow - dateNow) / 1000);


}
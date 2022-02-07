

console.log( getSecondsToday() );


function getSecondsToday() {
  
    let currentDate = new Date();
    let startDate = new Date( currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() );
    
    return Math.floor((currentDate.getTime() - startDate.getTime()) / 1000);

}
let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false


function isEmpty (objForChecking) {

    for (prop in objForChecking) {
        return false;
    }

    return true;

}
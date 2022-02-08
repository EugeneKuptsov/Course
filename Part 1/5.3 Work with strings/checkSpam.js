checkSpam('buy ViAgRA now');
checkSpam('free xxxxx');
checkSpam("innocent rabbit");


function checkSpam(str) {

    lowStr = str.toLowerCase();

    if (lowStr.includes('viagra'.toLowerCase()) || lowStr.includes('XXX'.toLowerCase())) {
        console.log(true);
        return true;
    } 

    console.log(false);
    return false;

}
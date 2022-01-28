let user = prompt('Who there?','');

if (user == null || user == '') {
    
    alert('canselled');

} else if (user == 'Админ') {
    
    let password = prompt("Enter password", "");
    
    if (password == "I'm chief") {
        alert("Hello");
    } else if (password == null || password == '') {
        alert('canselled');   
    } else {
        alert('uncorrect password');    
    }

} else {

    alert("I dont know you");

}
console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); // "Вот, что мне хотело…"

console.log( truncate("Всем привет!", 20) ); // "Всем привет!"


function truncate (str, maxLength) {

    if (str.length < maxLength) {
        return str;
    }

    return str.slice(0, maxLength - 1) + "…";

}
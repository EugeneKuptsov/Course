console.log( camelize("background-color") ); //== 'backgroundColor';
console.log( camelize("list-style-image") ); //== 'listStyleImage';
console.log( camelize("-webkit-transition") ); // 'WebkitTransition';

function camelize(text) {

    let arr = text.split('-');

    let newArr = arr.map((element, index) => {
        return index == 0 ? element : element.slice(0,1).toUpperCase() + element.slice(1);
    });    

    return newArr.join('');

}
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // [3, 1]


function filterRangeInPlace(array, min, max) {

    for (let i = 0; i < array.length; ) {

        if (array[i] >= min && array[i] <= max) {
            i++;    
        } else {
            array.splice(i, 1);
        }       

    }

    return array;
}


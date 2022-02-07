let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( topSalary(salaries) );

function topSalary(salaries) {
    let maxSalary = 0;
    let nameMaxSalary = null;

    for ([key, value] of Object.entries(salaries)) {

        if (value >= maxSalary) {
            maxSalary = value;
            nameMaxSalary = key;
        }

    };

    if (nameMaxSalary == null) {
        return null;
    } else {
        return salaries[nameMaxSalary]
    };

}
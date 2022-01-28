let salary = {

    John: 160,
    Ann:  300,
    Pete: 450, 

}

let salarySum = 0;

for (let prop in salary) {
    salarySum += salary[prop];
}

console.log(salarySum);
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476, countryName: 'Україна' };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921, countryName: 'Латвія' };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114, countryName: 'Литва' };



/* --------------------------------------------#1 FUNCTION-------------------------------------------- */

const anySalary = 11000;

function getMyTaxes(salary) {
    const tax = this.tax * salary;
    return tax;
};

console.log(`При зарплаті ${anySalary} ви заплатите ${getMyTaxes.call(litva, anySalary)} податку у Латвії`);


/* --------------------------------------------#2 FUNCTION-------------------------------------------- */


function getMiddleTaxes(country) {
    const middleTax = (this.tax * this.middleSalary).toFixed(2);
    console.log(`У середньму ${this.countryName} платить ${middleTax} податків`);
};

[ukraine, latvia, litva].forEach((country) => getMiddleTaxes.call(country));



/* --------------------------------------------#3 FUNCTION-------------------------------------------- */


function getTotalTaxes(country) {
    const totalTax = (this.tax * this.middleSalary * this.vacancies).toFixed(2);
    console.log(`Усього ${this.countryName} платить ${totalTax} податків`);
};

[ukraine, latvia, litva].forEach((country) => getTotalTaxes.call(country));



/* --------------------------------------------#4 FUNCTION-------------------------------------------- */


function getMySalary(country) {
     
    setInterval(() => {
        const randomSalary = Math.floor(1500 + Math.random() * (2000 + 1 - 1500));
        const taxes = (this.tax * randomSalary).toFixed(2);
        const profit = (randomSalary - taxes).toFixed(2);
    
        let objectSalary = {
            randomSalary,
            taxes,
            profit
        }

        return console.log(objectSalary);
    }, 10000);
       
    }

getMySalary.call(ukraine);

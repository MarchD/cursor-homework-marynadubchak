const number = [8, 53, 8, 8, 31, 2.9, 4.0, 77, 8, 18, 1.9, 27, 29, 18, 9.11]; //2, 3, 4



/* --------------------------------------------#1 FUNCTION-------------------------------------------- */


let lengthOfArray = 15;
// let lengthOfArray = +prompt('Type a length of array');
let minNumber = 1;
// let minNumber = +prompt('Type your min number');
let maxNumber = 100;
// let maxNumber = +prompt('Type your max number');
let arrRandomNumbers = [];

function getRandomArray(length, min, max) {
    let arrRandomNumbers = new Array(length);
   for (let i = 0; i < arrRandomNumbers.length; i++) {
        arrRandomNumbers[i] = Math.floor(min + Math.random() * (max + 1 - min)); 
   }
   return arrRandomNumbers;
}

console.log('Масив випадкових цілих чисел: ');
console.log(getRandomArray(lengthOfArray, minNumber, maxNumber));



/* --------------------------------------------#2 FUNCTION-------------------------------------------- */


function getModa(numbers) {

    const integerArr = numbers.filter(el => Number.isInteger(el));

    const numberToCountList = [];

    integerArr.forEach(element => {

        let finder = numberToCountList.find(item => item.number == element);
        if (finder) {
            finder.count = finder.count++;
        } else {
            let obj = {
                number: element,
                count: 1
            }
            numberToCountList.push(obj);
        }
    });

    return numberToCountList.sort((a, b) => b.count - a.count)[0].number;
}

console.log('Мода: ');
console.log(getModa(number));



/* --------------------------------------------#3 FUNCTION-------------------------------------------- */


function getAverage(numbers) {
    const integerArr = numbers.filter((el) => Number.isInteger(el));

    const total = integerArr.reduce((total, number) => (total + number), 0);

    return (total / integerArr.length).toFixed(2);
};

console.log('Середнє арифметичне: ');
console.log(getAverage(number));



/* --------------------------------------------#4 FUNCTION-------------------------------------------- */


function getMedian(numbers) {

    let mediana = 0;
    const integerArr = numbers.filter(el => Number.isInteger(el));
    const sortArr = integerArr.sort((a, b) => (a - b)); 
    console.log(sortArr);
    
    if ((integerArr.length % 2) != 0) {
        mediana = integerArr[(integerArr.length - 1) / 2];
    } else {
        let indexFirst = (integerArr.length / 2);
        let indexSecond = indexFirst - 1;

        mediana = (integerArr[indexFirst] + integerArr[indexSecond]) / 2;
    }
    
    return mediana; 

}

console.log('Медіана: ');
console.log(getMedian(number));



/* --------------------------------------------#5 FUNCTION-------------------------------------------- */


function filterEvenNumbers(...numbers) {
    const oddNumbers = numbers.filter(el => (el % 2) != 0);
    return oddNumbers;
}

console.log('Фільтр парних чисел: ');
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 7, 8, 10));



/* --------------------------------------------#6 FUNCTION-------------------------------------------- */


function countPositiveNumbers(...numbers) {
    return (numbers.filter(el => el > 0)).length; 
}

console.log('Кількість чисел більших за 0: ');
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6, -5, -8, 2, 4));



/* --------------------------------------------#7 FUNCTION-------------------------------------------- */


function getDividedByFive(...numbers) {
    return numbers.filter(el => (el % 5) == 0);
}

console.log('Числа кратні 5-ти: ');
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 10, 15));

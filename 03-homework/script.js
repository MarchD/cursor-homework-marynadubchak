/* --------------------------------------------#1 FUNCTION-------------------------------------------- */



let userNumber = 173262859;
// let userNumber1 = prompt('Function #1. Type your number');

function getMaxDigit() {
    let arr = String(userNumber).split('');
    let maxNumber = Math.max(...arr);
    return maxNumber;
}

// alert('The biggest number is ' + getMaxDigit());



/* --------------------------------------------#2 FUNCTION-------------------------------------------- */



let userNumber2 = 5;
// let userNumber2 = +prompt('Type your number');

let powOfNumber = 5;
// let powOfNumber = +prompt('Type a pow of your number');

function getPowNumber(number, pow) {
    let exp = 1;
    for (i = 0; i < pow; i++) {
        exp *= number;
    }
    return exp;
}

// alert(getPowNumber(userNumber2, powOfNumber));



/* --------------------------------------------#3 FUNCTION-------------------------------------------- */



let userName1 = 'ярина';
// let userName = prompt('Type your name');

function changeFirstLetter (name) {
   return name.charAt(0).toUpperCase() + (name.substring(1)).toLowerCase();
}

// alert('The name is written with a capital letter. Correct is "' + changeFirstLetter(userName) + '"');



/* --------------------------------------------#4 FUNCTION-------------------------------------------- */



let grossSalary = 15000;
// let grossSalary = +prompt('Type your nominal salary');

let tax = 18 / 100;
let warTax = 1.5 / 100;
let generalTax = 1 - (tax + warTax);

let calculateNetSalary = (salary) => (salary * generalTax).toFixed(0);

// alert('Your real salary is ' + calculateNetSalary(grossSalary) + ' UAH');



/* --------------------------------------------#5 FUNCTION-------------------------------------------- */


let minNumber = 1; 
// let minNumber = +prompt('Type your number'); 

let maxNumber = 350;
// let maxNumber = +prompt('Type your second number');


let getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// alert(getRandomNumber(minNumber, maxNumber));



/* --------------------------------------------#6 FUNCTION-------------------------------------------- */



let userWord = 'рефрижератор';
// let userWord =  prompt('type your word');

let result = 0;

let userLetter = 'р';
// let userLetter = prompt('type your letter');

function countLetter(letter, word) {
    for (let i = 0; i < word.length; i++)
    {
        if (word[i] == letter) {
            result++;
        }
    }
    return result;
}

// alert('Your word has got ' + countLetter(userLetter, userWord) + ' letter/s');



/* --------------------------------------------#7 FUNCTION-------------------------------------------- */



let userCurrency = '100uah';
// let userCurrency = prompt('Введи денюшку вот такого формата "100$" или "100uah"');

function convertCurrency(currency) {
    let dollars = " $";
    let hryvnya = " uah";
    let rate = 28;
    let a = 0;
    let lowerCaseCurrency = currency.toLowerCase();

    if (lowerCaseCurrency.indexOf('$') != -1) {
        a = (parseInt(lowerCaseCurrency) * rate).toFixed(2) + hryvnya;
    } else if (lowerCaseCurrency.indexOf('uah') != -1 ) {
        a = (parseInt(lowerCaseCurrency) / rate).toFixed(2) + dollars;
    } else {
        a = 'такой валютки нема';
    }

    return a;
}

// alert(convertCurrency(userCurrency));



/* --------------------------------------------#8 FUNCTION-------------------------------------------- */



let userLengthPass = 5;
// const userLengthPass = +prompt('type count symbols in your password');

let randomPassword = '';
let lengthDefault = 8;

function getRandomPassword(lengthPass) {
    let a = 0;
    if (lengthPass == 0) {

        for (let i = 0; i < lengthDefault; i++) {
            a = Math.floor(Math.random() * 10);
            randomPassword = randomPassword + +a;
        }

    } else {

        for (let i = 0; i < lengthPass; i++) {
            a = Math.floor(Math.random() * 10);
            randomPassword = randomPassword + +a;
           }

    }
    return randomPassword;
}

// alert(getRandomPassword(userLengthPass));



/* --------------------------------------------#9 FUNCTION-------------------------------------------- */


let userSentence = 'карамба';
// let userSentence = prompt('Type your sentense');

let userDeleteLetter = 'а'
// let userDeleteLetter = prompt('Type letter which you want to delete');


function deleteLetters(sentence, letter) {
    let userNewSentence = '';
   for (let i = 0; i < sentence.length; i++) {
        if (letter != sentence[i]) {
            userNewSentence = userNewSentence + sentence[i];
        };
    }
   return userNewSentence;
}

// alert(deleteLetters(userSentence, userDeleteLetter));



/* --------------------------------------------#10 FUNCTION-------------------------------------------- */


let userWord2 = 'Я несу гусеня';
let userWord3 = 'Гусеня несе мене';
// let userWord = prompt('type yout text:', 'Я несу гусеня');

let reverse;
    
function isPalyndrom(word) {
    let defaultOrder = (word.replace(/\s+/g, '')).toLowerCase();
    let reverseOrder = defaultOrder.split('').reverse().join('');
    
    let reverse = defaultOrder == reverseOrder ? true : false;
    return reverse;
}

// alert(isPalyndrom(userWord2));






let finish = `<p>Функція 1: Найбільша цифра в числі ${userNumber} це ${getMaxDigit()};</p>
<p>Функція 2: ${userNumber2} в ${powOfNumber} дорівнює ${getPowNumber(userNumber2, powOfNumber)};</p>
<p>Функція 3: Некоректно писати "${userName1}". Імена потрібно писати з великої літери: "${changeFirstLetter(userName1)}";</p>
<p>Функція 4: Якщо твоя запралата дорівнює ${grossSalary}грн, то в неті ти отримуєш ${calculateNetSalary(grossSalary)}грн;</p>
<p>Функція 5: ${getRandomNumber(minNumber, maxNumber)} - випадкове число в діапазоні від ${minNumber} до ${maxNumber};</p>
<p>Функція 6: У слові "${userWord}" буква "{userLetter}" повторюється ${countLetter(userLetter, userWord)} рази;</p>
<p>Функція 7: За ${userCurrency} можна купити ${convertCurrency(userCurrency)};</p>
<p>Функція 8: Твій пароль з ${userLengthPass} символів: ${getRandomPassword(userLengthPass)};</p>
<p>Функція 9: Якщо в "${userSentence}" видалити усі "${userDeleteLetter}", то отримаємо щось таке: "${deleteLetters(userSentence, userDeleteLetter)}";</p>
<p>Функція 10: "${userWord2}" - це паліндром? ${isPalyndrom(userWord2)}. А от "${userWord3}" - це ${isPalyndrom(userWord3)};</p>`

document.writeln(finish);
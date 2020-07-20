let numberN = +prompt('Введи ціле число');

while (Number.isInteger(numberN) == false) {
    alert('Щось пішло не так. Переконайся, що число ціле і є числом:)), та введи ще раз');
    numberN = +prompt('Введи ціле число');
}

let numberM = +prompt('Введи ще одне число, до якого ми будем складати');

while (Number.isInteger(numberM) == false) {
    alert('Щось пішло не так. Переконайся, що число ціле і є числом:)), та введи ще раз');
    numberM = +prompt('Введи ще одне число, до якого ми будем складати');
}

let skipNumber = confirm('При складанні пропускати парні числа, чи ні? Ok - сумуємо без парних; Відмінити - сумуємо усі числа');
if (skipNumber == false) {
    alert(`Зрозуміло, сумуємо всі числа`)
} else {
    alert(`Окей, сумуємо без парних`)
};


let totalSum = 0;
for (numberN; numberN <= numberM; numberN++) {
    if (skipNumber == true) {
        if (numberN % 2 == 0) continue;
        totalSum += numberN;
    } else {
        totalSum += numberN;
    }   
}

alert('Сума чисел: ' + totalSum);




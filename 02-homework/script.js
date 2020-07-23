let numberN = prompt('Введи ціле число');

while (numberN == '') {
    alert('Ти не ввів число, спробуй ще');
    numberN = prompt('Введи ціле число');
};

numberN = +numberN;

while (Number.isInteger(numberN) == false) {
    alert('Щось пішло не так. Переконайся, що число ціле i є числом:)) та введи ще раз');
    numberN = +prompt('Введи ціле число');
}

let numberM = prompt('Введи ще одне число, до якого ми будем складати');

while (numberM == '') {
    alert('Ти не ввів число, спробуй ще');
    numberM = prompt('Введи ціле число');
};

numberM = +numberM

while (Number.isInteger(numberM) == false) {
    alert('Щось пішло не так. Переконайся, що число ціле i є числом:))та введи ще раз');
    numberM = +prompt('Введи ще одне число, до якого ми будем складати');
}

while (numberN > numberM) {
    alert('Стривай, друге число має бути більшим, ніж перше. Спробуй ввести друге число ще раз');
    numberM = +prompt('Введи ще раз число, до якого ми будем складати. Воно має бути більшим за число ' + numberN);
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




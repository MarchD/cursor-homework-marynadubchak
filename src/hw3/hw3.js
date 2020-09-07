let userLengthPass = 5;

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

const container = document.getElementById('homeWork3');

export default container.innerHTML = `<h2>HW#3</h2><p>Функція 8: Твій пароль з ${userLengthPass} символів: ${getRandomPassword(userLengthPass)};</p>`;
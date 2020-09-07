const myWord = 'капібара';

function calculateWordLetters(word) {
    const gotLetters = word.split('');
    const letterToCount = {};

    gotLetters.forEach(letter => {
        if (letter in letterToCount) {
            letterToCount[letter] = letterToCount[letter] + 1;
        } else {
            letterToCount[letter] = 1;
        }
    });

    return JSON.stringify(letterToCount);
}

const container = document.getElementById('homeWork6');

export default container.innerHTML = `<h2>HW#6</h2>Підрахунок літер у слові ${myWord}: ${calculateWordLetters(myWord)}`;
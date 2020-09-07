const stringWithBadWords = 'Are you fucking kidding?'

function replaceBadWords(string) {
    const badWords = ['shit', 'fuck'];

    let replacer = new RegExp(badWords[0] + '|' +  badWords[1], 'gi');
    let separate = string.split(' ');

    let censoredString = separate.map(element => element.replace(replacer, '****'));

    censoredString = censoredString.join(' ');

    return censoredString;
};


const container = document.getElementById('homeWork5');

export default container.innerHTML = `<h2>HW#5</h2> Завдання на цензуру: ${replaceBadWords(stringWithBadWords)}`;

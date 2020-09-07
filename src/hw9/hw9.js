// function createSquere() {
//
// }

function generateColor() {
    let numberContainer = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(0 + Math.random() * (255 + 1 - 0));
        numberContainer.push(randomNumber);
    }
    let color = 'rgb(' + numberContainer.join(', ') + ')';
    return color;
}

export default function () {
    const countSquere = 25;
    for(let i = 0; i < countSquere; i++) {
        let div = document.createElement('div');
        div.className = 'square';
        document.getElementById('homeWork9').append(div);
        setInterval(() => {
            div.style.backgroundColor = generateColor();
        }, 1000)
    }
};

const idGenerator = createIdGenerator();
const container = document.querySelector('.div');

function* createIdGenerator() {
    for (let i = 0; i < Infinity; i++) {
        yield i;
    }
}

function getClick() {
    document.getElementById('button').addEventListener('click', () => {
        container.innerHTML = (idGenerator.next().value).toString();
    });
}


/*---------------------------------------------------------------------------------------------*/


const fontGenerator = newFontGenerator(14);

function fontUp() {
    document.getElementById('up').addEventListener('click', () => {
        container.style.fontSize = (fontGenerator.next('up').value).toString() + 'px';
    });
}

function fontDown() {
    document.getElementById('down').addEventListener('click', () => {
        container.style.fontSize = (fontGenerator.next('down').value).toString() + 'px';
    });

}

function newFontGenerator(size) {
    return {
        next(state) {
            if (size < 5) {
                return {value: size = 5, done: false}
            } else if (size > 100) {
                return {value: size = 99, done: false}
                }

            if (state == 'up') {
                return {
                    value: size = size + 2,
                    done: false
                }}
            return {
                value: size = size - 2,
                done: false
            }
        }
    }
}

getClick()
fontUp();
fontDown();


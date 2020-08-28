const BASE = 'https://swapi.dev/api/';
let currentPage = 1;

function getUrlCharacters(number) {
    const container = document.querySelector('.characters');
    container.innerHTML = '';
    const config = {
        method: 'GET',
        url: `${BASE}films/${number}`
    }
    return axios(config)
        .then((res) => {
            console.log(res.data);
            return res.data.characters;
        })
        .catch(() => {
            container.innerHTML = 'Wow, you can type only numbers from 1 to 6';
            return [];
        })
}

function renderCharacter(char) {
        const container = document.querySelector('.characters');
        const charElement = document.createElement('div');
        const charImg = document.createElement('div');
        charElement.className = 'character';
        charImg.className = 'char-img';
        switch (char.gender) {
            case 'male':
                char.gender = `<img class="svg" src="img/male.svg">`;
                break;
            case 'female':
                char.gender = `<img class="svg" src="img/female.svg">`;
                break;
            default:
                char.gender = `<img class="svg" src="img/unk.svg">`;
        }
        charElement.innerHTML = `
            <h2 class="char-name">${char.name}</h2>
            <div class="char-info">
                <p class="char-year">${char.birth_year}</p>
                <div class="char-gender">${char.gender}</div>
            </div>
        `
        const img = new Image();
        img.className = 'img'
        const id = +char.url.replace(/\D+/g,"");
        img.onerror = function () {
            img.src = ('img/avatar.png');
        }
        img.src = (`img/${id}.png`);
        container.append(charElement);
        charElement.append(charImg);
        charImg.append(img);

}

function getCharactersInfo(url) {

    url.forEach((url) => {
        url = 'https' + url.slice(4);
        const config = {
            method: 'GET',
            url: url,
        }
        return axios(config)
            .then((res) => {
                return res.data;
            }).then(renderCharacter);
    })

}

function getInfo() {
    document.getElementById('infoCharacters').addEventListener('click', () => {
        const numberOfFilm = document.searchFilm.numberOfFilm.value;
        console.log(numberOfFilm);
        if (!numberOfFilm) {
           return (document.querySelector('.characters')).innerHTML = 'Type a number of film';
        }
        return getUrlCharacters(numberOfFilm).then(getCharactersInfo);
    });

    let numOfClickPL = 0;
    document.getElementById('listOfPlanets').addEventListener('click', () => {

        numOfClickPL++;
        if (numOfClickPL % 2 == 0) {
            return removePlanets();
        }
        return getPlanets().then(renderPlanets);
    })
}

function getPlanets(page) {
    const config = {
        method: 'GET',
        url: BASE + 'planets/',
        params: {
            page: page
        },
    }
    return axios(config)
        .then((res) => {
            return res.data.results;
        }).catch(() => {
            if (page <= 0) {
                document.getElementById('prev').style.display = 'none';
                page = 1;
                return res.data.results;
            } else {
                document.getElementById('next').style.display = 'none';
                document.getElementById('next').removeEventListener('click', () => {
                    if (currentPage <= 0) return;
                    getPlanets(--currentPage).then(renderPlanets);
                    console.log(currentPage);
                });
                page = page - 1;
            }
            return res.data.results;
        });
}

function renderPlanets(planets) {

        const container = document.querySelector('.planets');
        container.innerHTML = '';

        planets.forEach(planet => {
            const planetElement = document.createElement('div');
            planetElement.className = 'planet';
            planetElement.innerHTML = `
                <h2>${planet.name}</h2>
            `
            container.append(planetElement);
        })

        document.getElementById('prev').style.display = 'block';;
        document.getElementById('next').style.display = 'block';;
}

function removePlanets() {
    (document.querySelector('.planets')).innerHTML = '';
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'none';
}

function removeCharacters() {
    document.getElementById('hide').addEventListener('click', () => (document.querySelector('.characters').innerHTML = ''));
}

function paginationInit() {
    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage <= 0) return;
        getPlanets(--currentPage).then(renderPlanets);
        console.log(currentPage);
    });
    document.getElementById('next').addEventListener('click', () => {
            getPlanets(++currentPage).then(renderPlanets);
        console.log(currentPage);
    });

}

removeCharacters()
paginationInit();
getInfo();




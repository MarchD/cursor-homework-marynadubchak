const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = ['Диференційне рівняння', 'Теорія автоматів', 'Алгоритми і структури даних'];
const marks = [4, 5, 5, 3, 4, 5];



// Task #1



let arrOfPairs = [];
function getPairs(arr) {
    
    let copyStudents = [...arr];

    arrOfPairs.push([copyStudents[0], copyStudents[2]]);
    arrOfPairs.push([copyStudents[1], copyStudents[3]]);
    arrOfPairs.push([copyStudents[4], copyStudents[5]]);

    return arrOfPairs;
}

const pairs = getPairs(students);
console.log('Студенти розбиті на пари:');
console.log(pairs);




// Task #2



let arrThemesForPair = [];
function getThemesForPairs(arr) {
    
    let copyThemes = [...arr];
    let copyArrOfPairs = [...arrOfPairs]
    for (let i = 0; i < copyThemes.length; i++) {
        copyArrOfPairs[i] = copyArrOfPairs[i].join(' і '); 
        arrThemesForPair.push([copyArrOfPairs[i], copyThemes[i]]);
    }

    return arrThemesForPair;
}

const subject = getThemesForPairs(themes);
console.log('Теми студентів:');
console.log(subject);


//Task #3



let arrMarkOfStudent = [];
function getMarkOfStudent(arr) {

    let copyMarks = [...arr];
    let copyStudents = [...students];
    for (let i = 0; i < arr.length; i++) {
        arrMarkOfStudent.push([copyStudents[i], arr[i]]); 
    }

    return arrMarkOfStudent;
}

const markOfStudent = getMarkOfStudent(marks);
console.log('Оцінки студентів:');
console.log(markOfStudent);


//Task #4



function getRandomMark(arr) {
    let copyThemes = [...arr];

    for (let i = 0; i < copyThemes.length; i++) {
        let randomNumber = Math.floor(1 + Math.random() * (5 + 1 - 1));
        copyThemes[i].push(randomNumber);
    }
    
    return copyThemes;
}

const randomMark = getRandomMark(arrThemesForPair);
console.log('Випадкові оцінки за проєкти:');
console.log(randomMark);